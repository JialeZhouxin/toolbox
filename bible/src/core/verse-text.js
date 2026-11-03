/**
 * 经文显示层文本处理
 *
 * CUS 原文里混有编者加的方括号注（诗篇标题、细拉、异文说明等），
 * 如「〔大卫的诗。〕」「〔细拉〕」「〔原文作帮助〕」。它们不是经文正文，
 * 直接显示在卡片正面会让读者困惑。
 *
 * 这里只在**显示层**剥离，数据源（cards.js / verses-categorized.json）
 * 保持原样，因此不算改动经文。
 */

const EDITORIAL_NOTE_PATTERN = /〔[^〕]*〕/g;

/**
 * 去掉编者注方括号及其内容，并清理首尾空白
 * @param {string} text
 * @returns {string}
 */
export function stripEditorialNotes(text) {
    if (text == null) return '';
    return String(text).replace(EDITORIAL_NOTE_PATTERN, '').trim();
}

/**
 * 文本是否含有编者注
 * @param {string} text
 * @returns {boolean}
 */
export function hasEditorialNotes(text) {
    if (text == null) return false;
    EDITORIAL_NOTE_PATTERN.lastIndex = 0;
    return EDITORIAL_NOTE_PATTERN.test(String(text));
}
