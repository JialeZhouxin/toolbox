/**
 * 经文上下文服务
 *
 * 把卡片上的出处字符串（如「诗篇 23:1」「约翰福音 14:1-3」）解析成
 * 书卷 / 章 / 节范围，再从全本经文里取出整章，供弹层显示。
 *
 * 全本 3.3MB 复用检索页的按需加载，不新增数据文件。
 */

import { parseReference } from './reference-utils.js';
import { loadFullBible } from './verse-search-service.js';

/**
 * 取某节经文所在章的完整上下文
 *
 * @param {string} reference - 经文出处
 * @returns {Promise<{
 *   book:string, chapter:number, verseStart:number, verseEnd:number,
 *   verses:Array<{verse:number, text:string}>
 * }>}
 */
export async function getVerseContext(reference) {
    const parsed = parseReference(reference);
    if (!parsed) {
        throw new Error('无法识别的经文出处');
    }

    const mod = await loadFullBible();
    const chapterVerses = mod.verses?.[parsed.book]?.[parsed.chapter];
    if (!chapterVerses) {
        throw new Error('暂时找不到这章经文');
    }

    const verses = Object.keys(chapterVerses)
        .map(Number)
        .sort((a, b) => a - b)
        .map((verse) => ({ verse, text: chapterVerses[String(verse)] }));

    return { ...parsed, verses };
}

/**
 * 判断某节是否落在高亮范围内
 * @param {number} verse
 * @param {{verseStart:number, verseEnd:number}} range
 * @returns {boolean}
 */
export function isHighlightedVerse(verse, range) {
    return verse >= range.verseStart && verse <= range.verseEnd;
}
