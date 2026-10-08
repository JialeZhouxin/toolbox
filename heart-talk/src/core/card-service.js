export function filterCards(cards, category, level) {
    return cards.filter((card) => {
        const categoryMatched = category === 'all' || card.category === category;
        const levelMatched = level === 'all' || String(card.level) === String(level);
        return categoryMatched && levelMatched;
    });
}

/** Fisher-Yates。random 可注入，便于自检。 */
export function shuffle(items, random = Math.random) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * 同一轮内不重复出同文本。
 *
 * 卡库里 7 组题干逐字相同（同一句话在情侣/朋友/家庭/自我场景都成立），
 * 抽卡时若不去重，一场对话里可能连抽两条一样的题。先洗牌再去重，
 * 这样每组重复题每轮由哪一张代表是随机的。
 */
export function dedupeByQuestion(cards) {
    const seen = new Set();
    return cards.filter((card) => {
        if (seen.has(card.question)) return false;
        seen.add(card.question);
        return true;
    });
}

/**
 * 抽卡队列：一轮内不出重复题，抽空后自动重洗。
 * 每个筛选组合（category|level）各有一条队列，切筛选不丢进度。
 */
export function createDeck(random = Math.random) {
    const queues = new Map();

    return {
        draw(cards, key) {
            if (!cards.length) return null;

            const prev = queues.get(key);
            // 上一轮存在且已抽空 → 本次是重开一轮
            const restarted = Boolean(prev && !prev.queue.length);
            // 卡池变了（数据改动）就重洗，避免队列与筛选错位
            let entry = prev && prev.poolSize === cards.length ? prev : null;

            if (!entry || !entry.queue.length) {
                const queue = dedupeByQuestion(shuffle(cards, random));
                entry = { queue, poolSize: cards.length, total: queue.length };
            }

            const card = entry.queue.pop();
            queues.set(key, entry);

            return {
                card,
                restarted,
                drawn: entry.total - entry.queue.length,
                total: entry.total
            };
        }
    };
}
