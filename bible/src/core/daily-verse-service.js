/**
 * 今日经文服务
 *
 * 打开页面时在 200 条精选池里随机选一节，本次会话内保持不变；
 * 刷新页面即重新随机。
 *
 * 「换一句」= 随机换一条，且不与当前这条重复。
 * 同一出处只出现一次（池中有 2 处重复经文，抽前按出处去重）。
 */

let currentVerse = null;

/**
 * 取本地日期字符串 YYYY-MM-DD
 * @param {Date} [date]
 * @returns {string}
 */
export function getTodayString(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/**
 * 按出处去重（池中「以赛亚书 41:10」「以赛亚书 40:31」各收了两次）
 * @param {Array} cards
 * @returns {Array}
 */
export function dedupeByReference(cards) {
    const seen = new Set();
    return cards.filter((card) => {
        const ref = card.reference || `id-${card.id}`;
        if (seen.has(ref)) return false;
        seen.add(ref);
        return true;
    });
}

/**
 * 从池里随机取一条，可排除指定出处
 * @param {Array} pool - 已去重的经文池
 * @param {string|null} [excludeRef] - 不返回这个出处的经文
 * @returns {Object|null}
 */
function pickRandom(pool, excludeRef = null) {
    if (!pool.length) return null;
    const candidates = excludeRef
        ? pool.filter((card) => card.reference !== excludeRef)
        : pool;
    // 池里只有一条且正好是要排除的那条时，退回整池
    const source = candidates.length ? candidates : pool;
    return source[Math.floor(Math.random() * source.length)];
}

/**
 * 取今日经文
 *
 * 首次调用随机抽取并缓存，之后本次会话内重复调用返回同一节；
 * 刷新页面（模块重新加载）后才会重新随机。
 *
 * @param {Array} cards - 精选经文池
 * @returns {Object|null} 经文对象（附带 isDailyVerse 标记）
 */
export function getTodayVerse(cards) {
    if (!cards || !cards.length) return null;
    if (currentVerse) return { ...currentVerse };

    const picked = pickRandom(dedupeByReference(cards));
    currentVerse = {
        ...picked,
        isDailyVerse: true,
        isDailyCard: true
    };
    return { ...currentVerse };
}

/**
 * 换一句：随机换一条不与当前重复的经文
 * @param {Array} cards
 * @returns {Object|null} 换过之后的经文
 */
export function nextTodayVerse(cards) {
    if (!cards || !cards.length) return null;

    const picked = pickRandom(
        dedupeByReference(cards),
        currentVerse ? currentVerse.reference : null
    );
    currentVerse = {
        ...picked,
        isDailyVerse: true,
        isDailyCard: true
    };
    return { ...currentVerse };
}

/**
 * 今天是否已经写过今日经文的感受
 *
 * 经文每次打开都会变，无法再按出处比对，因此按「今天是否有 daily
 * 来源的灵修记录」判断。
 *
 * @param {Array} history
 * @returns {boolean}
 */
export function isTodayVerseAnswered(history) {
    if (!Array.isArray(history) || !history.length) return false;
    const today = getTodayString().replace(/-/g, '/');
    return history.some((item) => {
        if (!item || !item.card) return false;
        if (item.source !== 'daily') return false;
        return String(item.timestamp || '').startsWith(today);
    });
}
