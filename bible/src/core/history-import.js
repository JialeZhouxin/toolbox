/**
 * 灵修记录 JSON 导入
 *
 * 支持的格式：
 * 1. 本工具导出的 { exportDate, totalCount, records: [...] }
 * 2. 直接一份记录数组 [...]
 *
 * 导入是「合并」而不是「覆盖」：同 id，或时间 + 出处 + 感受完全相同，
 * 视为同一条记录并跳过，因此同一文件重复导入是安全的。
 */

import { parseTimestamp } from './date-utils.js';
import { normalizeReference } from './reference-utils.js';

const VALID_SOURCES = new Set(['draw', 'daily', 'note']);

const CARD_FIELDS = [
    'id',
    'category',
    'categoryEn',
    'reference',
    'text',
    'question',
    'level',
    'book',
    'chapter',
    'verse',
    'sourceHint',
    'isDailyVerse',
    'isDailyCard'
];

/**
 * 生成记录 id，供缺少 id 的旧数据使用
 * @returns {string}
 */
function createId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * 只保留已知的经文卡字段，避免把任意 JSON 字段带进存储
 * @param {*} raw
 * @returns {Object}
 */
function normalizeCard(raw) {
    const card = {};
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return card;

    CARD_FIELDS.forEach((key) => {
        const value = raw[key];
        if (value !== undefined && value !== null) {
            card[key] = value;
        }
    });
    return card;
}

/**
 * 把一条原始记录规范成可存储的结构；缺少感受的记录视为无效
 * @param {*} raw
 * @returns {Object|null}
 */
function normalizeRecord(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;

    const answer = typeof raw.answer === 'string' ? raw.answer.trim() : '';
    if (!answer) return null;

    const card = normalizeCard(raw.card);
    // 兼容「经文信息直接写在记录顶层」的手工 JSON
    if (!card.reference && typeof raw.reference === 'string') {
        card.reference = raw.reference;
    }
    if (!card.text && typeof raw.text === 'string') {
        card.text = raw.text;
    }

    let timestamp;
    if (typeof raw.timestamp === 'number' && Number.isFinite(raw.timestamp)) {
        timestamp = new Date(raw.timestamp).toLocaleString('zh-CN');
    } else if (typeof raw.timestamp === 'string' && raw.timestamp.trim()) {
        timestamp = raw.timestamp.trim();
    } else {
        timestamp = new Date().toLocaleString('zh-CN');
    }

    const rawSource = typeof raw.source === 'string' ? raw.source : '';
    const source = VALID_SOURCES.has(rawSource)
        ? rawSource
        : (card.category === 'note' ? 'note' : 'draw');

    const id = (typeof raw.id === 'string' || typeof raw.id === 'number')
        && String(raw.id).trim()
        ? String(raw.id)
        : createId();

    const record = {
        id,
        timestamp,
        card,
        answer,
        source
    };
    if (typeof raw.updatedAt === 'string' && raw.updatedAt.trim()) {
        record.updatedAt = raw.updatedAt.trim();
    }
    return record;
}

/**
 * 解析导入文件
 * @param {string} text - 文件内容
 * @returns {{ records: Array, invalid: number }}
 * @throws {Error} 文件不是 JSON、结构不受支持或没有一条有效记录
 */
export function parseHistoryJSON(text) {
    let data;
    try {
        data = JSON.parse(text);
    } catch {
        throw new Error('文件不是有效的 JSON 格式');
    }

    const list = Array.isArray(data)
        ? data
        : (data && Array.isArray(data.records) ? data.records : null);
    if (!list) {
        throw new Error('JSON 结构不受支持：应为记录数组，或包含 records 数组的导出文件');
    }
    if (!list.length) {
        throw new Error('文件中没有记录');
    }

    const records = [];
    let invalid = 0;
    list.forEach((raw) => {
        const record = normalizeRecord(raw);
        if (record) {
            records.push(record);
        } else {
            invalid++;
        }
    });

    if (!records.length) {
        throw new Error(`文件中的 ${list.length} 条记录都缺少必要字段（至少需要 answer）`);
    }
    return { records, invalid };
}

/**
 * 用于判断「同一条记录」的内容指纹
 * @param {Object} item
 * @returns {string}
 */
function contentKey(item) {
    const card = (item && item.card) || {};
    return [
        String((item && item.timestamp) || ''),
        normalizeReference(card.reference),
        String((item && item.answer) || '')
    ].join('\u0000');
}

/**
 * 合并导入记录，按时间倒序排列
 *
 * @param {Array} existing - 现有记录
 * @param {Array} incoming - 待导入记录
 * @returns {{ history: Array, added: number, skipped: number }}
 */
export function mergeHistory(existing, incoming) {
    const base = Array.isArray(existing) ? existing : [];
    const list = Array.isArray(incoming) ? incoming : [];

    const seenIds = new Set();
    const seenKeys = new Set();
    const remember = (item) => {
        if (!item || typeof item !== 'object') return;
        if (item.id) seenIds.add(String(item.id));
        seenKeys.add(contentKey(item));
    };

    base.forEach(remember);

    const added = [];
    let skipped = 0;

    list.forEach((item) => {
        if (!item) {
            skipped++;
            return;
        }
        const id = item.id ? String(item.id) : '';
        if ((id && seenIds.has(id)) || seenKeys.has(contentKey(item))) {
            skipped++;
            return;
        }
        remember(item);
        added.push(item);
    });

    // 新记录在前；时间戳无法解析的记录排最后，保持原相对顺序
    const entries = [...base, ...added].map((item, index) => {
        const date = parseTimestamp(item.timestamp);
        return {
            item,
            index,
            time: Number.isNaN(date.getTime()) ? -Infinity : date.getTime()
        };
    });
    entries.sort((a, b) => (b.time - a.time) || (a.index - b.index));

    return {
        history: entries.map((entry) => entry.item),
        added: added.length,
        skipped
    };
}
