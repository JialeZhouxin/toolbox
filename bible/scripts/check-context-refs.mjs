/**
 * 校验 1000 条精选经文能否定位到全本的章/节
 *
 * 检查项：
 * 1. reference 能被解析成 卷/章/节/节范围
 * 2. cards.js 里的结构化字段（book/chapter/verseStart/verseEnd）与解析结果一致
 * 3. 全本里确实存在对应的章与节
 * 4. 显示层剥离编者注后没有残留
 *
 * 用法：node scripts/check-context-refs.mjs
 */

import { cards } from '../src/data/cards.js';
import { parseReference } from '../src/core/reference-utils.js';
import { hasEditorialNotes, stripEditorialNotes } from '../src/core/verse-text.js';
import { loadFullBible } from '../src/core/verse-search-service.js';

const failures = [];

const mod = await loadFullBible();

for (const card of cards) {
    const parsed = parseReference(card.reference);
    if (!parsed) {
        failures.push(`#${card.id} ${card.reference}：无法解析出处`);
        continue;
    }

    const mismatched = ['book', 'chapter', 'verseStart', 'verseEnd']
        .filter((key) => card[key] !== parsed[key]);
    if (mismatched.length) {
        failures.push(`#${card.id} ${card.reference}：结构化字段不一致（${mismatched.join('、')}）`);
    }

    const chapter = mod.verses?.[parsed.book]?.[parsed.chapter];
    if (!chapter) {
        failures.push(`#${card.id} ${card.reference}：全本里没有 ${parsed.book} 第 ${parsed.chapter} 章`);
        continue;
    }
    for (const verse of [parsed.verseStart, parsed.verseEnd]) {
        if (!chapter[String(verse)]) {
            failures.push(`#${card.id} ${card.reference}：全本里没有第 ${verse} 节`);
        }
    }
}

const withNotes = cards.filter((card) => hasEditorialNotes(card.text));
const residual = cards.filter((card) => hasEditorialNotes(stripEditorialNotes(card.text)));

console.log(`经文总数：${cards.length}`);
console.log(`含编者注：${withNotes.length} 条（显示层已剥离）`);
console.log(`剥离后残留：${residual.length} 条`);
console.log(`上下文定位失败：${failures.length} 条`);

if (failures.length) {
    failures.slice(0, 30).forEach((line) => console.log(`  ${line}`));
    if (failures.length > 30) {
        console.log(`  ……其余 ${failures.length - 30} 条略`);
    }
    process.exit(1);
}

console.log(`通过：${cards.length}/${cards.length} 可定位到全本`);
