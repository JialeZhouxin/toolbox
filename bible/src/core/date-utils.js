/**
 * 日期工具
 *
 * 本应用里有两类日期字符串：
 * - 历史记录时间戳：zh-CN 本地格式（如 2026/9/17 16:01:32，月/日不补零）
 * - 打卡日期：YYYY-MM-DD
 *
 * 这两类都不能直接交给 new Date()：
 * - '2026-10-30 14:00:00' 在 Safari 里会被解析成 Invalid Date；
 * - toISOString() 取的是 UTC 日期，东八区早上 8 点前会算成前一天。
 *
 * 所以统一在这里按本地时区格式化与解析。
 */

/**
 * 取本地日期字符串 YYYY-MM-DD
 * @param {Date} [date]
 * @returns {string}
 */
export function getLocalDateString(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/**
 * 把 YYYY-MM-DD 解析成当天零点的本地 Date
 * @param {string} dateStr
 * @returns {Date}
 */
export function parseLocalDateString(dateStr) {
    const match = String(dateStr || '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (!match) return new Date(NaN);
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

/**
 * 解析历史记录时间戳，兼容 zh-CN 本地格式与 ISO 字符串
 * @param {string} timestamp
 * @returns {Date}
 */
export function parseTimestamp(timestamp) {
    const text = String(timestamp || '');
    // zh-CN 本地格式：斜杠分隔，月/日可能不补零
    if (/^\d{4}\/\d{1,2}\/\d{1,2}/.test(text)) {
        const [datePart, timePart = ''] = text.split(' ');
        const [y, m, d] = datePart.split('/').map(Number);
        const [hh = 0, mm = 0, ss = 0] = timePart ? timePart.split(':').map(Number) : [];
        return new Date(y, m - 1, d, hh, mm, ss);
    }
    // ISO 字符串（如导出文件里的时间）
    return new Date(text);
}
