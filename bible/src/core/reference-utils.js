/**
 * 经文出处解析与归一化
 *
 * 精选池是历史数据，个别卷名用了繁体（「啟示录」）；全本与界面统一用
 * 简体（「启示录」）。这里做统一的归一化，供上下文查找、历史记录比对复用。
 */

// 历史数据里的繁简/异写卷名 → 标准名
const BOOK_NAME_ALIASES = {
    啟示录: '启示录'
};

/**
 * 归一化卷名
 * @param {string} book
 * @returns {string}
 */
export function normalizeBookName(book) {
    if (!book) return '';
    const trimmed = String(book).trim();
    return BOOK_NAME_ALIASES[trimmed] || trimmed;
}

/**
 * 解析出处字符串
 * @param {string} reference - 如「诗篇 23:1」「约翰福音 14:1-3」
 * @returns {{book:string, chapter:number, verseStart:number, verseEnd:number}|null}
 */
export function parseReference(reference) {
    if (!reference) return null;

    const match = String(reference)
        .trim()
        .match(/^(.+?)\s*(\d+)\s*:\s*(\d+)(?:\s*-\s*(\d+))?$/);
    if (!match) return null;

    const chapter = Number(match[2]);
    const verseStart = Number(match[3]);
    const verseEnd = match[4] ? Number(match[4]) : verseStart;
    if (!chapter || !verseStart) return null;

    return {
        book: normalizeBookName(match[1]),
        chapter,
        verseStart,
        verseEnd: Math.max(verseStart, verseEnd)
    };
}

/**
 * 把出处统一成「卷 章:节」形式，用于跨新旧数据比对
 * @param {string} reference
 * @returns {string}
 */
export function normalizeReference(reference) {
    const parsed = parseReference(reference);
    if (!parsed) return String(reference || '').trim().replace(/\s+/g, ' ');
    const range = parsed.verseStart === parsed.verseEnd
        ? String(parsed.verseStart)
        : `${parsed.verseStart}-${parsed.verseEnd}`;
    return `${parsed.book} ${parsed.chapter}:${range}`;
}
