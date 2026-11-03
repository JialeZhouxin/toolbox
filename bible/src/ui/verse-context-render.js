/**
 * 经文上下文弹层渲染
 *
 * 显示某一节的整章经文，并高亮卡片上那一节（跨节则高亮区间）。
 * 这里的经文保留〔…〕编者注——上下文场景下它们是有效信息
 * （诗篇标题、细拉等），与卡片正面的处理刻意不同。
 */

import { isHighlightedVerse } from '../core/verse-context-service.js';

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
 * 渲染上下文弹层内容
 *
 * @param {Object} params
 * @param {HTMLElement} params.container - 弹层正文容器
 * @param {HTMLElement} [params.titleEl] - 弹层标题
 * @param {string} params.reference - 卡片出处，如「诗篇 23:1」
 * @param {Object} [params.context] - getVerseContext 的返回值
 * @param {string} [params.error] - 错误提示
 * @param {boolean} [params.loading] - 是否正在加载
 */
export function renderVerseContext({ container, titleEl, reference, context, error, loading }) {
    if (!container) return;

    if (titleEl) {
        titleEl.textContent = context
            ? `${context.book} 第 ${context.chapter} 章`
            : '经文上下文';
    }

    if (loading) {
        container.innerHTML = '<p class="context-status">正在加载经文…</p>';
        return;
    }

    if (error) {
        container.innerHTML = `<p class="context-status context-status-error">${escapeHtml(error)}</p>`;
        return;
    }

    if (!context || !context.verses.length) {
        container.innerHTML = '<p class="context-status">暂时找不到这章经文</p>';
        return;
    }

    const rangeLabel = context.verseStart === context.verseEnd
        ? `第 ${context.verseStart} 节`
        : `第 ${context.verseStart}-${context.verseEnd} 节`;

    const versesHtml = context.verses.map((item) => {
        const highlighted = isHighlightedVerse(item.verse, context);
        return `
            <p class="context-verse${highlighted ? ' highlighted' : ''}">
                <span class="context-verse-num">${item.verse}</span>
                <span class="context-verse-text">${escapeHtml(item.text)}</span>
            </p>
        `;
    }).join('');

    container.innerHTML = `
        <div class="context-subtitle">${escapeHtml(reference || '')}　·　${rangeLabel}已高亮　·　本章共 ${context.verses.length} 节</div>
        <div class="context-verses">${versesHtml}</div>
    `;

    // 高亮节可能靠后，滚到容器中部（不用 scrollIntoView，避免带动弹层外的页面）
    const highlightedEl = container.querySelector('.context-verse.highlighted');
    if (highlightedEl) {
        const elRect = highlightedEl.getBoundingClientRect();
        const boxRect = container.getBoundingClientRect();
        container.scrollTop += (elRect.top - boxRect.top) - (container.clientHeight / 2);
    }
}
