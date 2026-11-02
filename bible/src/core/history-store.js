import { STORAGE_KEYS } from './storage-migration.js';

const HISTORY_KEY = STORAGE_KEYS.history;

/**
 * 生成记录 id，供早期没有 id 的数据补全
 * @returns {string}
 */
function createRecordId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function loadHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];

        // 旧数据可能缺 id：没有 id 时删除会按 undefined 匹配，误删所有无 id
        // 记录；这里补全并过滤掉非对象条目，变化后立刻写回。
        let changed = false;
        const history = [];
        parsed.forEach((item) => {
            if (!item || typeof item !== 'object' || Array.isArray(item)) {
                changed = true;
                return;
            }
            if (item.id === undefined || item.id === null || String(item.id) === '') {
                changed = true;
                history.push({ ...item, id: createRecordId() });
                return;
            }
            history.push(item);
        });

        if (changed) {
            saveHistory(history);
        }
        return history;
    } catch {
        return [];
    }
}

export function saveHistory(history) {
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
        return true;
    } catch {
        return false;
    }
}

export function clearHistoryStore() {
    try {
        localStorage.removeItem(HISTORY_KEY);
        return true;
    } catch {
        return false;
    }
}

export function updateHistoryItem(history, id, newAnswer) {
    try {
        const index = history.findIndex(item => item.id === id);
        if (index === -1) return null;
        
        const updatedItem = {
            ...history[index],
            answer: newAnswer,
            updatedAt: new Date().toLocaleString('zh-CN')
        };
        
        const newHistory = [...history];
        newHistory[index] = updatedItem;
        
        if (!saveHistory(newHistory)) {
            return null;
        }
        
        return newHistory;
    } catch {
        return null;
    }
}

export function deleteHistoryItem(history, id) {
    try {
        const newHistory = history.filter(item => item.id !== id);
        
        if (!saveHistory(newHistory)) {
            return null;
        }
        
        return newHistory;
    } catch {
        return null;
    }
}
