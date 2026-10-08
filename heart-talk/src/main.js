import { cards } from './data/cards.js';
import { filterCards, createDeck } from './core/card-service.js';
import { loadHistory, saveHistory, clearHistoryStore } from './core/history-store.js';
import { renderCard, renderHistory, renderProgress } from './ui/render.js';

const state = {
    currentCard: null,
    currentCategory: 'all',
    currentLevel: 'all',
    history: loadHistory()
};

const deck = createDeck();

const UI_TIMING = {
    toastVisibleMs: 1800,
    toastExitMs: 180
};

const THEME_KEY = 'heartTalkTheme';
/** 全工具共用的主题键，供根聚合首页跟随本工具的主题选择。 */
const SHARED_THEME_KEY = 'toolbox-theme';

const elements = {
    cardContainer: document.getElementById('cardContainer'),
    emptyState: document.getElementById('emptyState'),
    cardContent: document.getElementById('cardContent'),
    cardCategory: document.getElementById('cardCategory'),
    cardLevel: document.getElementById('cardLevel'),
    cardQuestion: document.getElementById('cardQuestion'),
    cardProgress: document.getElementById('cardProgress'),
    drawBtn: document.getElementById('drawBtn'),
    saveBtn: document.getElementById('saveBtn'),
    shareBtn: document.getElementById('shareBtn'),
    historyList: document.getElementById('historyList'),
    saveModal: document.getElementById('saveModal'),
    shareModal: document.getElementById('shareModal'),
    saveModalQuestion: document.getElementById('saveModalQuestion'),
    answerInput: document.getElementById('answerInput'),
    confirmSaveBtn: document.getElementById('confirmSaveBtn'),
    cancelSaveBtn: document.getElementById('cancelSaveBtn'),
    shareQuestion: document.getElementById('shareQuestion'),
    shareAnswer: document.getElementById('shareAnswer'),
    copyShareBtn: document.getElementById('copyShareBtn'),
    closeShareBtn: document.getElementById('closeShareBtn'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    categoryFilters: document.getElementById('categoryFilters'),
    levelFilters: document.getElementById('levelFilters'),
    toastContainer: document.getElementById('toastContainer'),
    confirmModal: document.getElementById('confirmModal'),
    confirmMessage: document.getElementById('confirmMessage'),
    confirmOkBtn: document.getElementById('confirmOkBtn'),
    confirmCancelBtn: document.getElementById('confirmCancelBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn')
};

function buildNamesMap(selector, dataKey) {
    const map = {};
    document.querySelectorAll(selector).forEach((btn) => {
        const key = btn.dataset[dataKey];
        if (key && key !== 'all') {
            map[key] = btn.textContent.trim();
        }
    });
    return map;
}

const categoryNames = buildNamesMap('#categoryFilters .filter-btn', 'category');
const levelNames = buildNamesMap('#levelFilters .filter-btn', 'level');

function currentCardKey() {
    return `${state.currentCategory}|${state.currentLevel}`;
}

function getSavedItemForCurrentCard() {
    if (!state.currentCard) return null;
    return state.history.find((entry) => entry.card.id === state.currentCard.id) || null;
}

function refreshCardView() {
    renderCard({
        currentCard: state.currentCard,
        categoryNames,
        levelNames,
        progress: state.progress,
        elements
    });
}

function refreshHistoryView() {
    renderHistory({
        history: state.history,
        levelNames,
        historyList: elements.historyList
    });
}

function getStoredTheme() {
    try {
        return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
    } catch {
        return 'light';
    }
}

function persistTheme(theme) {
    // 隐私模式下 setItem 会抛异常；主题本身仍然生效，只是不记住。
    try {
        localStorage.setItem(THEME_KEY, theme);
        localStorage.setItem(SHARED_THEME_KEY, theme);
    } catch {
        /* 存不下就算了，不影响本次切换 */
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    elements.themeToggleBtn.textContent = isDark ? '暖色模式' : '夜间护眼';
    elements.themeToggleBtn.setAttribute('aria-pressed', String(isDark));
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    persistTheme(next);
    applyTheme(next);
    showToast(next === 'dark' ? '已切换到夜间护眼模式。' : '已切换到暖色模式。', 'success');
}

function showToast(message, type = 'info') {
    const oldToasts = elements.toastContainer.querySelectorAll('.toast');
    if (oldToasts.length >= 2) {
        oldToasts[0].remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : type === 'success' ? 'toast-success' : ''}`.trim();
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-hide');
        setTimeout(() => {
            toast.remove();
        }, UI_TIMING.toastExitMs);
    }, UI_TIMING.toastVisibleMs);
}

/* ---- 弹窗：焦点陷阱 + Escape + 滚动锁 ---- */

/** 打开的弹窗栈，栈顶是最后打开的那个。 */
const modalStack = [];
let lastFocused = null;

function focusableIn(modal) {
    return Array.from(
        modal.querySelectorAll('button, a[href], textarea, input, select, [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.disabled && el.offsetParent !== null);
}

function topModal() {
    return modalStack.length ? modalStack[modalStack.length - 1] : null;
}

function onModalKeyDown(event) {
    const top = topModal();
    if (!top) return;

    if (event.key === 'Escape') {
        top.onClose();
        return;
    }
    if (event.key !== 'Tab') return;

    const items = focusableIn(top.modal);
    if (!items.length) return;

    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

/** 打开弹窗；onClose 决定 Escape 与遮罩点击时做什么。 */
function openModal(modal, onClose) {
    if (modalStack.some((entry) => entry.modal === modal)) return;

    if (!modalStack.length) {
        lastFocused = document.activeElement;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onModalKeyDown);
    }
    modalStack.push({ modal, onClose });
    modal.classList.add('active');
}

function closeModal(modal) {
    const index = modalStack.findIndex((entry) => entry.modal === modal);
    if (index === -1) return;

    modalStack.splice(index, 1);
    modal.classList.remove('active');

    if (!modalStack.length) {
        document.removeEventListener('keydown', onModalKeyDown);
        document.body.style.overflow = '';
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
        lastFocused = null;
    }
}

function showConfirm(message) {
    return new Promise((resolve) => {
        elements.confirmMessage.textContent = message;

        const settle = (value) => {
            elements.confirmOkBtn.removeEventListener('click', onConfirm);
            elements.confirmCancelBtn.removeEventListener('click', onCancel);
            elements.confirmModal.removeEventListener('click', onOverlayClick);
            closeModal(elements.confirmModal);
            resolve(value);
        };

        const onConfirm = () => settle(true);
        const onCancel = () => settle(false);
        const onOverlayClick = (event) => {
            if (event.target === elements.confirmModal) settle(false);
        };

        elements.confirmOkBtn.addEventListener('click', onConfirm);
        elements.confirmCancelBtn.addEventListener('click', onCancel);
        elements.confirmModal.addEventListener('click', onOverlayClick);
        openModal(elements.confirmModal, onCancel);
        elements.confirmOkBtn.focus();
    });
}

/* ---- 抽卡 ---- */

function drawCard() {
    const filtered = filterCards(cards, state.currentCategory, state.currentLevel);
    if (!filtered.length) {
        showToast('当前筛选条件下没有可用卡牌，请调整筛选后重试。', 'error');
        return;
    }

    const result = deck.draw(filtered, currentCardKey());
    state.currentCard = result.card;
    state.progress = { drawn: result.drawn, total: result.total };

    refreshCardView();
    if (result.restarted) {
        showToast('本轮已抽完，重新开始一轮。', 'info');
    }
    // CSS 的 prefers-reduced-motion 管不到 JS 指定的 behavior，这里自己判断
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    elements.cardContainer.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'center'
    });
}

/* ---- 保存 ---- */

function openSaveModal() {
    if (!state.currentCard) return;
    elements.saveModalQuestion.textContent = state.currentCard.question;

    const saved = getSavedItemForCurrentCard();
    elements.answerInput.value = saved ? saved.answer : '';

    openModal(elements.saveModal, closeSaveModal);
    elements.answerInput.focus();
}

function closeSaveModal() {
    closeModal(elements.saveModal);
}

function saveAnswer() {
    if (!state.currentCard) return;

    const answer = elements.answerInput.value.trim();
    if (!answer) {
        showToast('请先输入你的回答。', 'error');
        return;
    }

    const existing = getSavedItemForCurrentCard();
    const nextHistory = existing
        ? state.history.map((entry) =>
              entry === existing ? { ...entry, answer, timestamp: new Date().toLocaleString('zh-CN') } : entry
          )
        : [
              {
                  id: Date.now(),
                  timestamp: new Date().toLocaleString('zh-CN'),
                  card: state.currentCard,
                  answer
              },
              ...state.history
          ];

    // 先落盘再改内存：写失败时 state 不被污染，
    // 否则 UI 会假装没保存，下次渲染又冒出来、刷新后又消失。
    if (!saveHistory(nextHistory)) {
        showToast('保存失败，请检查浏览器存储权限。', 'error');
        return;
    }

    state.history = nextHistory;
    refreshHistoryView();
    closeSaveModal();
    showToast(existing ? '回答已更新。' : '回答已保存。', 'success');
}

/* ---- 分享 ---- */

function openShareModal() {
    if (!state.currentCard) return;

    elements.shareQuestion.textContent = state.currentCard.question;
    const saved = getSavedItemForCurrentCard();
    elements.shareAnswer.textContent = saved ? saved.answer : '（点击“保存回答”后可展示你的回答）';

    openModal(elements.shareModal, closeShareModal);
    elements.copyShareBtn.focus();
}

function closeShareModal() {
    closeModal(elements.shareModal);
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    let ok = false;
    try {
        ok = document.execCommand('copy');
    } catch {
        ok = false;
    }

    document.body.removeChild(textarea);
    return ok;
}

async function copyShareLink() {
    if (!state.currentCard) return;

    const saved = getSavedItemForCurrentCard();
    const text = [
        '心语卡牌',
        '',
        state.currentCard.question,
        saved ? `\n${saved.answer}` : '',
        '',
        '来自心语卡牌'
    ].join('\n');

    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            showToast('已复制到剪贴板。', 'success');
            return;
        }

        if (fallbackCopy(text)) {
            showToast('已复制到剪贴板。', 'success');
            return;
        }

        showToast('复制失败，请手动复制。', 'error');
    } catch {
        if (fallbackCopy(text)) {
            showToast('已复制到剪贴板。', 'success');
            return;
        }
        showToast('复制失败，请手动复制。', 'error');
    }
}

/* ---- 历史 ---- */

async function clearHistory() {
    const confirmed = await showConfirm('确定要清空所有历史记录吗？此操作不可恢复。');
    if (!confirmed) return;

    if (!clearHistoryStore()) {
        showToast('清空失败，请检查浏览器存储权限。', 'error');
        return;
    }

    state.history = [];
    refreshHistoryView();
    showToast('历史记录已清空。', 'success');
}

/* ---- 筛选 ---- */

function setActiveFilterButton(container, target) {
    if (!target.classList.contains('filter-btn')) return;
    container.querySelectorAll('.filter-btn').forEach((btn) => {
        const active = btn === target;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
}

/** 某个筛选组合下有没有卡。没有就隐藏对应按钮，并在选中项被藏起来时退回「全部难度」。 */
function pruneLevelFilters() {
    elements.levelFilters.querySelectorAll('.filter-btn').forEach((btn) => {
        const level = btn.dataset.level;
        if (!level) return;
        btn.hidden = filterCards(cards, state.currentCategory, level).length === 0;
    });

    // 原来选中的难度在新类别下没有卡 → 退回全部，否则一点就撞「没有可用卡牌」
    const active = elements.levelFilters.querySelector('.filter-btn.active');
    if (active && active.hidden) {
        state.currentLevel = 'all';
        setActiveFilterButton(elements.levelFilters, elements.levelFilters.querySelector('[data-level="all"]'));
    }
}

function setupEventListeners() {
    elements.drawBtn.addEventListener('click', drawCard);
    elements.saveBtn.addEventListener('click', openSaveModal);
    elements.shareBtn.addEventListener('click', openShareModal);
    elements.confirmSaveBtn.addEventListener('click', saveAnswer);
    elements.cancelSaveBtn.addEventListener('click', closeSaveModal);
    elements.closeShareBtn.addEventListener('click', closeShareModal);
    elements.copyShareBtn.addEventListener('click', copyShareLink);
    elements.clearHistoryBtn.addEventListener('click', clearHistory);
    elements.themeToggleBtn.addEventListener('click', toggleTheme);

    elements.categoryFilters.addEventListener('click', (event) => {
        setActiveFilterButton(elements.categoryFilters, event.target);
        if (event.target.dataset.category) {
            state.currentCategory = event.target.dataset.category;
            pruneLevelFilters();
        }
    });

    elements.levelFilters.addEventListener('click', (event) => {
        setActiveFilterButton(elements.levelFilters, event.target);
        if (event.target.dataset.level) {
            state.currentLevel = event.target.dataset.level;
        }
    });

    elements.saveModal.addEventListener('click', (event) => {
        if (event.target === elements.saveModal) closeSaveModal();
    });

    elements.shareModal.addEventListener('click', (event) => {
        if (event.target === elements.shareModal) closeShareModal();
    });

    elements.answerInput.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') saveAnswer();
    });
}

function init() {
    applyTheme(getStoredTheme());
    pruneLevelFilters();
    refreshCardView();
    refreshHistoryView();
    setupEventListeners();
}

init();
