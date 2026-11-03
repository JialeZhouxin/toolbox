/**
 * 今日经文 UI 渲染
 *
 * 卡片显示经文原文 + 出处，并提供「写下感受」「换一句」。
 * 同时显示连续打卡天数与最近 7 天日历（沿用打卡数据）。
 *
 * 「今天已写感受」按当天是否有 daily 来源记录判断，不再比对具体出处
 * （今日经文每次打开都会重新随机，出处不固定）。
 */

import { isTodayVerseAnswered } from '../core/daily-verse-service.js';
import { getLocalDateString, parseTimestamp } from '../core/date-utils.js';
import { stripEditorialNotes } from '../core/verse-text.js';

const WEEKDAY_NAMES = ['日', '一', '二', '三', '四', '五', '六'];

/**
 * 渲染迷你日历（最近 N 天，标记已记录的日子）
 * @param {Array} history
 * @param {number} days
 * @returns {string}
 */
function renderMiniCalendar(history, days = 7) {
    const stamps = new Set(
        history.map((item) => {
            const d = parseTimestamp(item.timestamp);
            if (Number.isNaN(d.getTime())) return null;
            return getLocalDateString(d);
        }).filter(Boolean)
    );

    let html = '';
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = getLocalDateString(d);
        const done = stamps.has(key);
        const isToday = i === 0;
        const cls = ['calendar-day', done ? 'completed' : '', isToday ? 'today' : ''].filter(Boolean).join(' ');
        html += `
            <div class="${cls}" title="${key}">
                <span class="day-label">${WEEKDAY_NAMES[d.getDay()]}</span>
                <span class="day-dot"></span>
            </div>
        `;
    }
    return html;
}

/**
 * 转义 HTML
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
    return String(text == null ? '' : text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/**
 * 渲染今日经文区域
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器
 * @param {Object} params.verse - 今日经文
 * @param {Array} params.history - 灵修记录
 * @param {number} params.streak - 连续打卡天数
 * @param {Function} params.onAnswer - 点「写下感受」
 * @param {Function} params.onNext - 点「换一句」
 * @param {Function} params.onContext - 点「查看上下文」
 */
export function renderTodayVerse({ container, verse, history = [], streak = 0, onAnswer, onNext, onContext }) {
    if (!container) return;

    if (!verse) {
        container.innerHTML = `
            <div class="daily-card-section">
                <div class="daily-card-empty"><p>暂时取不到今日经文</p></div>
            </div>
        `;
        return;
    }

    const answered = isTodayVerseAnswered(history);

    container.innerHTML = `
        <div class="daily-card-section">
            <div class="daily-card-header">
                <div class="daily-card-title">
                    <span class="daily-icon">📖</span>
                    <span>今日经文</span>
                    ${streak > 0 ? `<span class="daily-streak">🔥 ${streak} 天</span>` : ''}
                </div>
                <div class="daily-calendar-mini">
                    ${renderMiniCalendar(history)}
                </div>
            </div>
            <div class="daily-card-content">
                <div class="daily-card-display ${answered ? 'answered' : ''}">
                    <div class="daily-card-badge">今日经文</div>
                    <div class="daily-verse-body">${escapeHtml(stripEditorialNotes(verse.text))}</div>
                    <div class="daily-verse-ref">—— ${escapeHtml(verse.reference)}</div>
                    ${answered ? `
                        <div class="daily-card-status answered">
                            <span>✓ 今天已写下感受</span>
                        </div>
                    ` : `
                        <div class="daily-card-actions">
                            <button class="btn" data-action="answer">✍️ 写下感受</button>
                            <button class="btn btn-secondary" data-action="next">🔄 换一句</button>
                        </div>
                    `}
                    <div class="daily-card-actions">
                        <button class="btn btn-secondary" data-action="context">📖 查看上下文</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.querySelectorAll('[data-action]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.dataset.action === 'answer' && onAnswer) onAnswer();
            if (btn.dataset.action === 'next' && onNext) onNext();
            if (btn.dataset.action === 'context' && onContext) onContext();
        });
    });
}
