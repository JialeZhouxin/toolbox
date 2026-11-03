import { cards, categories } from './data/cards.js';
import { filterCards, drawRandomCard, getCardThemeId } from './core/card-service.js';
import { loadHistory, saveHistory, clearHistoryStore, updateHistoryItem, deleteHistoryItem } from './core/history-store.js';
import { filterHistory, exportToJSON, downloadJSON } from './core/history-filter.js';
import { parseHistoryJSON, mergeHistory } from './core/history-import.js';
import { generateHistoryAlbumImage, downloadAlbumImage } from './core/history-export.js';
import { renderCard, renderHistory, renderHistoryFilters, renderExportControls } from './ui/render.js';
import { renderFullStatsReport } from './ui/stats-render.js';
import { checkInOnSave, getStreakDays } from './core/check-in.js';
import { getTodayVerse, nextTodayVerse } from './core/daily-verse-service.js';
import { getVerseContext } from './core/verse-context-service.js';
import { stripEditorialNotes } from './core/verse-text.js';
import { normalizeReference } from './core/reference-utils.js';
import { renderTodayVerse } from './ui/daily-verse-render.js';
import { renderVerseContext } from './ui/verse-context-render.js';
import { renderVerseNote } from './ui/verse-note-render.js';
import { migrateLegacyStorage, STORAGE_KEYS } from './core/storage-migration.js';
import {
    createSpeechSynthesizer,
    createSpeechRecognizer,
    isSpeechRecognitionSupported,
    requestMicrophonePermission
} from './core/voice-service.js';
import {
    renderCardVoiceControls,
    renderModalVoiceControls
} from './ui/voice-render.js';

const state = {
    currentCard: null,
    currentCategory: 'all',
    // 先在 init() 里跑迁移，再从 localStorage 读记录
    history: [],
    historyFilters: {
        date: 'all',
        category: 'all',
        source: 'all'
    },
    editingItem: null,
    pendingSource: null,
    // 最近一次可撤销操作（删除单条 / 清空），同一时间只保留一个
    pendingUndo: null,
    todayCard: null,
    voice: {
        isReading: false,
        isListening: false,
        synthesizer: null,
        recognizer: null,
        currentUtterance: null
    }
};

const UI_TIMING = {
    toastVisibleMs: 1800,
    toastExitMs: 180,
    undoVisibleMs: 6000,
    clearUndoVisibleMs: 8000
};

const THEME_KEY = STORAGE_KEYS.theme;
const THEME_CHOICES = ['forest', 'warm', 'dark'];
const THEME_LABELS = {
    forest: '\u6d45\u7eff\u68ee\u6797',
    warm: '\u6696\u7eb8\u6cbb\u6108',
    dark: '\u591c\u95f4\u62a4\u773c'
};

const elements = {
    cardContainer: document.getElementById('cardContainer'),
    emptyState: document.getElementById('emptyState'),
    cardContent: document.getElementById('cardContent'),
    cardCategory: document.getElementById('cardCategory'),
    cardLevel: document.getElementById('cardLevel'),
    cardQuestion: document.getElementById('cardQuestion'),
    drawBtn: document.getElementById('drawBtn'),
    saveBtn: document.getElementById('saveBtn'),
    contextBtn: document.getElementById('contextBtn'),
    shareBtn: document.getElementById('shareBtn'),
    historyList: document.getElementById('historyList'),
    historyFiltersContainer: document.getElementById('historyFiltersContainer'),
    historyExportContainer: document.getElementById('historyExportContainer'),
    saveModal: document.getElementById('saveModal'),
    shareModal: document.getElementById('shareModal'),
    contextModal: document.getElementById('contextModal'),
    contextModalTitle: document.getElementById('contextModalTitle'),
    contextBody: document.getElementById('contextBody'),
    closeContextBtn: document.getElementById('closeContextBtn'),
    editModal: document.getElementById('editModal'),
    saveModalQuestion: document.getElementById('saveModalQuestion'),
    answerInput: document.getElementById('answerInput'),
    editModalQuestion: document.getElementById('editModalQuestion'),
    editAnswerInput: document.getElementById('editAnswerInput'),
    confirmSaveBtn: document.getElementById('confirmSaveBtn'),
    cancelSaveBtn: document.getElementById('cancelSaveBtn'),
    confirmEditBtn: document.getElementById('confirmEditBtn'),
    cancelEditBtn: document.getElementById('cancelEditBtn'),
    shareQuestion: document.getElementById('shareQuestion'),
    shareAnswer: document.getElementById('shareAnswer'),
    copyShareBtn: document.getElementById('copyShareBtn'),
    closeShareBtn: document.getElementById('closeShareBtn'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    categoryFilters: document.getElementById('categoryFilters'),
    toastContainer: document.getElementById('toastContainer'),
    importFileInput: document.getElementById('importFileInput'),
    confirmModal: document.getElementById('confirmModal'),
    confirmMessage: document.getElementById('confirmMessage'),
    confirmOkBtn: document.getElementById('confirmOkBtn'),
    confirmCancelBtn: document.getElementById('confirmCancelBtn'),
    themeSelector: document.getElementById('themeSelector'),
    // 分享增强功能元素
    generateImageBtn: document.getElementById('generateImageBtn'),
    copyLinkBtn: document.getElementById('copyLinkBtn'),
    imagePreviewContainer: document.getElementById('imagePreviewContainer'),
    generatedImagePreview: document.getElementById('generatedImagePreview'),
    downloadImageBtn: document.getElementById('downloadImageBtn'),
    shareCardTemplate: document.getElementById('shareCardTemplate'),
    shareCardCategory: document.getElementById('shareCardCategory'),
    shareCardQuestion: document.getElementById('shareCardQuestion'),
    shareCardAnswer: document.getElementById('shareCardAnswer'),
    shareCardAnswerSection: document.getElementById('shareCardAnswerSection'),
    // 统计功能元素
    statsBtn: document.getElementById('statsBtn'),
    statsModal: document.getElementById('statsModal'),
    statsContainer: document.getElementById('statsContainer'),
    closeStatsBtn: document.getElementById('closeStatsBtn'),
    // 今日经文元素
    dailyCardSection: document.getElementById('dailyCardSection'),
    dailyCardContainer: document.getElementById('dailyCardContainer'),
    // 记一节经文元素
    verseNoteBtn: document.getElementById('verseNoteBtn'),
    verseNoteModal: document.getElementById('verseNoteModal'),
    verseNoteContainer: document.getElementById('verseNoteContainer'),
    closeVerseNoteBtn: document.getElementById('closeVerseNoteBtn'),
    // 语音功能元素
    cardVoiceControls: document.getElementById('cardVoiceControls'),
    saveVoiceWrapper: document.getElementById('saveVoiceWrapper'),
    editVoiceWrapper: document.getElementById('editVoiceWrapper')
};

// 当前生成的图片数据
let currentGeneratedImage = null;

// 主题名称以 cards.js 的 categories 为唯一真源（不再从 HTML 按钮文案反推）
const categoryNames = Object.fromEntries(categories.map((c) => [c.id, c.name]));

/**
 * 生成记录 id
 * Date.now() 在同一毫秒内保存两条会撞车，改为 UUID（不支持时退回随机后缀）
 * @returns {string}
 */
function createRecordId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function getSavedAnswerForCurrentCard() {
    if (!state.currentCard) return '';
    const { id, reference } = state.currentCard;
    // 精选池扩充后卡片 id 会重排，优先按经文出处匹配历史记录；
    // 出处用归一化后的形式比对，兼容旧的繁体卷名（啟示录 → 启示录）
    const item = state.history.find((entry) => entry.card
        && (reference
            ? normalizeReference(entry.card.reference) === normalizeReference(reference)
            : entry.card.id === id));
    return item ? item.answer : '';
}

function refreshCardView() {
    renderCard({
        currentCard: state.currentCard,
        categoryNames,
        elements
    });

    // 渲染语音控制按钮
    renderCardVoiceSection();
}

function getFilteredHistory() {
    return filterHistory(state.history, state.historyFilters);
}

function refreshHistoryView() {
    const filteredHistory = getFilteredHistory();
    renderHistory({
        history: filteredHistory,
        categoryNames,
        historyList: elements.historyList,
        onEdit: openEditModal,
        onDelete: handleDeleteHistoryItem
    });
}

function handleHistoryFilterChange(filters) {
    state.historyFilters = { ...state.historyFilters, ...filters };
    refreshHistoryView();
}

function openEditModal(item) {
    state.editingItem = item;
    const card = item.card || {};
    elements.editModalQuestion.textContent = card.reference
        ? `${card.reference}　${stripEditorialNotes(card.text)}`
        : (card.question || '');
    elements.editAnswerInput.value = item.answer;
    elements.editModal.classList.add('active');
    elements.editAnswerInput.focus();

    // 渲染语音输入按钮
    renderEditModalVoiceControls();
}

function closeEditModal() {
    // 停止语音输入
    stopVoiceInput();
    elements.editModal.classList.remove('active');
    state.editingItem = null;
}

function saveEditedAnswer() {
    if (!state.editingItem) return;
    
    const newAnswer = elements.editAnswerInput.value.trim();
    if (!newAnswer) {
        showToast('回答内容不能为空', 'error');
        return;
    }
    
    const newHistory = updateHistoryItem(state.history, state.editingItem.id, newAnswer);
    if (newHistory === null) {
        showToast('保存失败，请重试', 'error');
        return;
    }
    
    state.history = newHistory;
    refreshHistoryView();
    closeEditModal();
    showToast('回答已更新', 'success');
}

async function handleDeleteHistoryItem(item) {
    const confirmed = await showConfirm('确定要删除这条历史记录吗？删除后可在提示条中撤销。');
    if (!confirmed) return;

    const index = state.history.findIndex((entry) => entry.id === item.id);
    if (index === -1) {
        showToast('这条记录已不存在', 'error');
        refreshHistoryView();
        return;
    }

    const newHistory = deleteHistoryItem(state.history, item.id);
    if (newHistory === null) {
        showToast('删除失败，请重试', 'error');
        return;
    }

    state.history = newHistory;
    refreshHistoryView();

    showUndoToast('记录已删除', () => {
        // 撤销期间可能又保存了新记录，按 id 去重后再插回原位置
        if (state.history.some((entry) => entry.id === item.id)) {
            return;
        }
        const restored = [...state.history];
        const insertAt = Math.min(index, restored.length);
        restored.splice(insertAt, 0, item);
        if (!saveHistory(restored)) {
            showToast('撤销失败：浏览器存储空间不足', 'error');
            return;
        }
        state.history = restored;
        refreshHistoryView();
        showToast('已恢复删除的记录', 'success');
    });
}

function handleExportJSON() {
    const filteredHistory = getFilteredHistory();
    if (!filteredHistory.length) {
        showToast('没有可导出的记录', 'error');
        return;
    }

    const jsonString = exportToJSON(filteredHistory);
    downloadJSON(jsonString);
    showToast('JSON文件已下载', 'success');
}

/**
 * 打开文件选择框，选择要导入的 JSON
 */
function handleImportJSON() {
    if (!elements.importFileInput) {
        showToast('当前浏览器不支持文件导入', 'error');
        return;
    }
    // 清空后重新选同一个文件也能触发 change
    elements.importFileInput.value = '';
    elements.importFileInput.click();
}

/**
 * 读取文件文本
 * @param {File} file
 * @returns {Promise<string>}
 */
function readFileAsText(file) {
    if (typeof file.text === 'function') {
        return file.text();
    }
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(reader.error || new Error('读取文件失败'));
        reader.readAsText(file, 'utf-8');
    });
}

/**
 * 导入 JSON：解析 → 与现有记录合并去重 → 保存
 * @param {Event} event
 */
async function handleImportFileChange(event) {
    const file = event.target.files && event.target.files[0];
    event.target.value = '';
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
        showToast('文件过大，请确认是否选错了文件', 'error');
        return;
    }

    let text;
    try {
        text = await readFileAsText(file);
    } catch (error) {
        console.error('读取导入文件失败:', error);
        showToast('读取文件失败，请重试', 'error');
        return;
    }

    // 有些编辑器保存的 JSON 带 BOM，JSON.parse 会直接报错
    text = text.replace(/^\uFEFF/, '');

    let parsed;
    try {
        parsed = parseHistoryJSON(text);
    } catch (error) {
        showToast(error.message || 'JSON 文件解析失败', 'error');
        return;
    }

    const result = mergeHistory(state.history, parsed.records);
    if (!result.added) {
        showToast(`导入完成：${result.skipped} 条记录已存在，没有新增`, 'info', 4000);
        return;
    }

    if (!saveHistory(result.history)) {
        showToast('导入失败：浏览器存储空间不足或权限受限', 'error');
        return;
    }

    state.history = result.history;
    refreshHistoryView();

    const invalidNote = parsed.invalid ? `，忽略 ${parsed.invalid} 条无效记录` : '';
    showToast(
        `导入成功：新增 ${result.added} 条，跳过重复 ${result.skipped} 条${invalidNote}`,
        'success',
        4000
    );
}

async function handleExportImage() {
    const filteredHistory = getFilteredHistory();
    if (!filteredHistory.length) {
        showToast('没有可导出的记录', 'error');
        return;
    }
    
    try {
        showToast('正在生成图片...', 'info');
        const imageData = await generateHistoryAlbumImage(filteredHistory, categoryNames);
        downloadAlbumImage(imageData);
        showToast('图片已下载', 'success');
    } catch (error) {
        console.error('导出图片失败:', error);
        showToast(error.message || '生成图片失败，请重试', 'error');
    }
}

async function handleExportAlbum() {
    const filteredHistory = getFilteredHistory();
    if (!filteredHistory.length) {
        showToast('没有可导出的记录', 'error');
        return;
    }
    
    // 纪念册功能与导出图片相同
    await handleExportImage();
}

function getStoredTheme() {
    const value = localStorage.getItem(THEME_KEY);
    return THEME_CHOICES.includes(value) ? value : 'forest';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (!elements.themeSelector) return;
    elements.themeSelector.querySelectorAll('[data-theme-choice]').forEach((button) => {
        const active = button.dataset.themeChoice === theme;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}

function setTheme(theme) {
    if (!THEME_CHOICES.includes(theme)) return;
    try {
        localStorage.setItem(THEME_KEY, theme);
        // 全工具共用的主题键，供根聚合首页跟随本工具的主题选择
        localStorage.setItem('toolbox-theme', theme);
    } catch {
        /* 隐私模式下存不下，主题本次仍然生效 */
    }
    applyTheme(theme);
    showToast(`\u5df2\u5207\u6362\u5230${THEME_LABELS[theme]}\u98ce\u683c\u3002`, 'success');
}

function showToast(message, type = 'info', duration = UI_TIMING.toastVisibleMs) {
    // 带「撤销」按钮的提示有自己的生命周期，不能被普通 toast 挤掉
    const oldToasts = Array.from(elements.toastContainer.querySelectorAll('.toast'))
        .filter((toast) => !toast.classList.contains('toast-with-action'));
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
    }, duration);
}

/**
 * 关掉当前还没到期的撤销提示——关掉即表示这次操作生效，不再可撤销
 */
function dismissPendingUndo() {
    if (!state.pendingUndo) return;
    state.pendingUndo.dismiss();
    state.pendingUndo = null;
}

/**
 * 显示带「撤销」按钮的提示
 *
 * 同一时间只保留最近一次可撤销操作，之前的操作到此为止；
 * 超时或用户点了别处后提示消失，删除即不可再恢复。
 *
 * @param {string} message
 * @param {Function} onUndo - 点击撤销时执行
 * @param {number} [duration]
 */
function showUndoToast(message, onUndo, duration = UI_TIMING.undoVisibleMs) {
    dismissPendingUndo();

    const toast = document.createElement('div');
    toast.className = 'toast toast-with-action';

    const text = document.createElement('span');
    text.className = 'toast-message';
    text.textContent = message;

    const undoBtn = document.createElement('button');
    undoBtn.type = 'button';
    undoBtn.className = 'toast-undo';
    undoBtn.textContent = '撤销';

    toast.appendChild(text);
    toast.appendChild(undoBtn);
    elements.toastContainer.appendChild(toast);

    let settled = false;
    let timer = null;

    const finish = (shouldUndo) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        if (state.pendingUndo && state.pendingUndo.toast === toast) {
            state.pendingUndo = null;
        }
        if (shouldUndo) {
            toast.remove();
            onUndo();
            return;
        }
        toast.classList.add('toast-hide');
        setTimeout(() => {
            toast.remove();
        }, UI_TIMING.toastExitMs);
    };

    timer = setTimeout(() => finish(false), duration);
    undoBtn.addEventListener('click', () => finish(true));
    state.pendingUndo = { toast, dismiss: () => finish(false) };
}

function showConfirm(message) {
    return new Promise((resolve) => {
        elements.confirmMessage.textContent = message;
        elements.confirmModal.classList.add('active');

        const cleanUp = () => {
            elements.confirmModal.classList.remove('active');
            elements.confirmOkBtn.removeEventListener('click', onConfirm);
            elements.confirmCancelBtn.removeEventListener('click', onCancel);
            elements.confirmModal.removeEventListener('click', onOverlayClick);
            document.removeEventListener('keydown', onKeyDown);
        };

        const onConfirm = () => {
            cleanUp();
            resolve(true);
        };

        const onCancel = () => {
            cleanUp();
            resolve(false);
        };

        const onOverlayClick = (event) => {
            if (event.target === elements.confirmModal) {
                onCancel();
            }
        };

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                onCancel();
            }
        };

        elements.confirmOkBtn.addEventListener('click', onConfirm);
        elements.confirmCancelBtn.addEventListener('click', onCancel);
        elements.confirmModal.addEventListener('click', onOverlayClick);
        document.addEventListener('keydown', onKeyDown);
    });
}

/**
 * 停止正在进行的朗读（换一张卡时不能继续念上一节）
 */
function stopReading() {
    if (!state.voice.isReading) return;
    if (state.voice.synthesizer) state.voice.synthesizer.cancel();
    state.voice.isReading = false;
}

function drawCard() {
    const filtered = filterCards(cards, state.currentCategory);

    if (!filtered.length) {
        showToast('当前筛选条件下没有可用卡牌，请调整筛选后重试。', 'error');
        return;
    }

    stopReading();
    state.currentCard = drawRandomCard(filtered);
    refreshCardView();
    elements.cardContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function openSaveModal(source = 'draw') {
    if (!state.currentCard) return;
    state.pendingSource = source;
    elements.saveModalQuestion.textContent = state.currentCard.reference
        ? `${state.currentCard.reference}　${stripEditorialNotes(state.currentCard.text)}`
        : (state.currentCard.question || '');
    elements.answerInput.value = '';
    elements.saveModal.classList.add('active');
    elements.answerInput.focus();

    // 渲染语音输入按钮
    renderSaveModalVoiceControls();
}

function closeSaveModal() {
    // 停止语音输入
    stopVoiceInput();
    elements.saveModal.classList.remove('active');
}

function saveAnswer() {
    if (!state.currentCard) return;

    const answer = elements.answerInput.value.trim();
    if (!answer) {
        showToast('请先写下你的感受。', 'error');
        return;
    }

    const historyItem = {
        id: createRecordId(),
        timestamp: new Date().toLocaleString('zh-CN'),
        card: state.currentCard,
        answer,
        source: state.pendingSource || 'draw'
    };
    state.pendingSource = null;

    state.history.unshift(historyItem);
    if (!saveHistory(state.history)) {
        showToast('保存失败，请检查浏览器存储权限。', 'error');
        return;
    }

    refreshHistoryView();
    closeSaveModal();

    // 打卡
    const checkInResult = checkInOnSave();
    if (checkInResult.isNewCheckIn) {
        showToast(`打卡成功！已连续打卡 ${checkInResult.data.streak} 天`, 'success');
    } else {
        showToast('回答已保存。', 'success');
    }

    // 刷新每日卡牌显示
    refreshDailyCardView();
}

function openShareModal() {
    if (!state.currentCard) return;

    elements.shareQuestion.textContent = state.currentCard.reference
        ? `${state.currentCard.reference}　${stripEditorialNotes(state.currentCard.text)}`
        : (state.currentCard.question || '');
    const answer = getSavedAnswerForCurrentCard() || '（点击“写下感受”后可展示你的感受）';
    elements.shareAnswer.textContent = answer;
    elements.shareModal.classList.add('active');
}

function closeShareModal() {
    elements.shareModal.classList.remove('active');
}

// ==================== 经文上下文 ====================

// 防止快速切换时旧的异步结果覆盖新内容
let contextRequestId = 0;

/**
 * 打开「查看上下文」弹层，显示该节所在整章
 * @param {Object} [card] - 默认取当前卡牌
 */
async function openContextModal(card) {
    const target = card || state.currentCard;
    if (!target || !target.reference) {
        showToast('这节经文没有可显示的上下文', 'error');
        return;
    }
    if (!elements.contextModal) return;

    const requestId = ++contextRequestId;
    elements.contextModal.classList.add('active');
    renderVerseContext({
        container: elements.contextBody,
        titleEl: elements.contextModalTitle,
        reference: target.reference,
        loading: true
    });

    try {
        const context = await getVerseContext(target.reference);
        if (requestId !== contextRequestId) return;
        renderVerseContext({
            container: elements.contextBody,
            titleEl: elements.contextModalTitle,
            reference: target.reference,
            context
        });
    } catch (error) {
        if (requestId !== contextRequestId) return;
        const message = window.location.protocol === 'file:'
            ? '以文件方式打开时无法加载全本经文，请通过本地服务器访问后再试'
            : '暂时加载不了上下文，请联网后再试';
        renderVerseContext({
            container: elements.contextBody,
            titleEl: elements.contextModalTitle,
            reference: target.reference,
            error: message
        });
    }
}

function closeContextModal() {
    contextRequestId++;
    if (elements.contextModal) {
        elements.contextModal.classList.remove('active');
    }
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

    const verse = state.currentCard.reference
        ? `${stripEditorialNotes(state.currentCard.text)}\n—— ${state.currentCard.reference}`
        : (state.currentCard.question || '');
    const text = `圣经金句\n\n${verse}\n\n来自圣经金句`;

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

// ==================== 分享功能增强 ====================

/**
 * 生成分享图片
 * 使用 html2canvas 将隐藏模板转为图片
 */
async function generateShareImage() {
    if (!state.currentCard) {
        showToast('请先抽取一节经文', 'error');
        return;
    }

    try {
        showToast('正在生成分享图片...', 'info');

        // 更新分享卡片模板内容
        elements.shareCardCategory.textContent = categoryNames[getCardThemeId(state.currentCard)] || state.currentCard.category || '';
        elements.shareCardQuestion.textContent = stripEditorialNotes(state.currentCard.text) || state.currentCard.question || '';
        const shareRefEl = document.getElementById('shareCardRef');
        if (shareRefEl) shareRefEl.textContent = state.currentCard.reference ? `—— ${state.currentCard.reference}` : '';

        // 获取用户回答
        const answer = getSavedAnswerForCurrentCard();
        if (answer) {
            elements.shareCardAnswer.textContent = answer;
            elements.shareCardAnswerSection.style.display = 'block';
        } else {
            elements.shareCardAnswerSection.style.display = 'none';
        }

        // 临时将模板移到可视区域以便 html2canvas 渲染
        const originalPosition = elements.shareCardTemplate.style.position;
        const originalLeft = elements.shareCardTemplate.style.left;
        elements.shareCardTemplate.style.position = 'fixed';
        elements.shareCardTemplate.style.left = '-9999px';
        elements.shareCardTemplate.style.top = '-9999px';

        // 等待字体加载完成
        await document.fonts.ready;

        // 检测是否在 file:// 协议下运行
        const isFileProtocol = window.location.protocol === 'file:';
        if (isFileProtocol) {
            showToast('请使用 HTTP 服务器访问以生成图片（如 python -m http.server 8080）', 'error');
            // 恢复模板位置
            elements.shareCardTemplate.style.position = originalPosition;
            elements.shareCardTemplate.style.left = originalLeft;
            return;
        }

        // 使用 html2canvas 生成图片
        const canvas = await html2canvas(elements.shareCardTemplate.querySelector('.share-card-visual'), {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            logging: false,
            width: 600,
            height: 800
        });

        // 恢复模板位置
        elements.shareCardTemplate.style.position = originalPosition;
        elements.shareCardTemplate.style.left = originalLeft;

        // 转换为图片数据
        currentGeneratedImage = canvas.toDataURL('image/png');

        // 显示预览
        elements.generatedImagePreview.src = currentGeneratedImage;
        elements.imagePreviewContainer.style.display = 'block';

        showToast('分享图片生成成功！', 'success');
    } catch (error) {
        console.error('生成图片失败:', error);
        showToast('生成图片失败，请重试', 'error');
    }
}

/**
 * 下载生成的分享图片
 */
function downloadShareImage() {
    if (!currentGeneratedImage) {
        showToast('请先生成分享图片', 'error');
        return;
    }

    const link = document.createElement('a');
    link.download = `圣经金句_${Date.now()}.png`;
    link.href = currentGeneratedImage;
    link.click();

    showToast('图片下载已开始', 'success');
}

/**
 * 生成分享链接（Base64 编码）
 * 包含卡牌信息和用户回答
 */
function generateShareLink() {
    if (!state.currentCard) {
        showToast('请先抽取一节经文', 'error');
        return;
    }

    try {
        // 获取用户回答
        const answer = getSavedAnswerForCurrentCard();

        // 构建分享数据
        // 分享数据自带经文，不依赖对方本地有没有这条记录
        // （手记不在精选金句池里，靠 cardId 查找会失败）
        const shareData = {
            cardId: state.currentCard.id,
            category: state.currentCard.category,
            level: state.currentCard.level,
            question: state.currentCard.question,
            reference: state.currentCard.reference,
            text: state.currentCard.text,
            source: state.currentCard.isDailyVerse ? 'daily' : (state.currentCard.sourceHint || state.pendingSource || 'draw'),
            answer: answer || '',
            timestamp: Date.now()
        };

        // Base64 编码
        const encoded = btoa(encodeURIComponent(JSON.stringify(shareData)));
        const shareUrl = `${window.location.origin}${window.location.pathname}#share=${encoded}`;

        // 复制到剪贴板
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(shareUrl).then(() => {
                showToast('分享链接已复制到剪贴板', 'success');
            }).catch(() => {
                fallbackCopy(shareUrl);
                showToast('分享链接已复制到剪贴板', 'success');
            });
        } else if (fallbackCopy(shareUrl)) {
            showToast('分享链接已复制到剪贴板', 'success');
        } else {
            showToast('复制失败，请手动复制', 'error');
        }
    } catch (error) {
        console.error('生成分享链接失败:', error);
        showToast('生成分享链接失败', 'error');
    }
}

/**
 * 处理分享链接
 * 解析 URL hash 中的分享数据并加载卡牌
 */
function handleShareLink() {
    const hash = window.location.hash;
    if (!hash.startsWith('#share=')) return;

    try {
        const encoded = hash.slice(7); // 移除 '#share='
        const decoded = decodeURIComponent(atob(encoded));
        const shareData = JSON.parse(decoded);

        // 优先用链接自带的经文（手记不在官方卡池里，按 id 找不到）
        let card = null;
        if (shareData.reference && shareData.text) {
            card = {
                id: shareData.cardId,
                category: shareData.category,
                reference: shareData.reference,
                text: shareData.text,
                question: shareData.question
            };
        } else {
            card = cards.find(c => c.id === shareData.cardId);
        }
        if (!card) {
            showToast('分享的经文不存在或已被删除', 'error');
            return;
        }

        // 设置当前卡牌
        state.currentCard = card;
        refreshCardView();

        // 如果有回答，添加到历史中
        if (shareData.answer) {
            const historyItem = {
                id: createRecordId(),
                timestamp: new Date(shareData.timestamp || Date.now()).toLocaleString('zh-CN'),
                card: card,
                answer: shareData.answer,
                source: shareData.source || 'draw'
            };

            // 检查是否已存在相同经文的感受
            const existingIndex = state.history.findIndex(
                (h) => normalizeReference((h.card || {}).reference) === normalizeReference(card.reference)
            );
            if (existingIndex === -1) {
                state.history.unshift(historyItem);
                saveHistory(state.history);
                refreshHistoryView();
            }
        }

        // 清除 hash
        window.history.replaceState(null, null, window.location.pathname);

        showToast('已加载分享的经文', 'success');
        elements.cardContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
        console.error('解析分享链接失败:', error);
        showToast('分享链接无效或已过期', 'error');
    }
}

async function clearHistory() {
    if (!state.history.length) {
        showToast('没有可清空的记录', 'info');
        return;
    }

    const confirmed = await showConfirm('确定要清空所有历史记录吗？清空后可在提示条中撤销。');
    if (!confirmed) return;

    // 之前那条「删除撤销」到此生效，清空后的撤销以整份快照为准
    dismissPendingUndo();

    const snapshot = state.history;
    state.history = [];
    clearHistoryStore();
    refreshHistoryView();

    showUndoToast(`已清空 ${snapshot.length} 条记录`, () => {
        if (!saveHistory(snapshot)) {
            showToast('撤销失败：浏览器存储空间不足', 'error');
            return;
        }
        state.history = snapshot;
        refreshHistoryView();
        showToast('已恢复全部记录', 'success');
    }, UI_TIMING.clearUndoVisibleMs);
}

// ==================== 统计功能 ====================

function openStatsModal() {
    if (elements.statsModal && elements.statsContainer) {
        elements.statsModal.classList.add('active');
        renderFullStatsReport({
            container: elements.statsContainer,
            history: state.history,
            onExportImage: exportStatsImage
        });
    }
}

function closeStatsModal() {
    if (elements.statsModal) {
        elements.statsModal.classList.remove('active');
    }
}

async function exportStatsImage() {
    const statsContent = document.getElementById('statsReportContent');
    if (!statsContent) {
        showToast('报告内容未加载', 'error');
        return;
    }

    try {
        showToast('正在生成报告图片...', 'info');

        // 检测是否在 file:// 协议下运行
        const isFileProtocol = window.location.protocol === 'file:';
        if (isFileProtocol) {
            showToast('请使用 HTTP 服务器访问以生成图片（如 python -m http.server 8080）', 'error');
            return;
        }

        // 等待字体加载完成
        await document.fonts.ready;

        // 使用 html2canvas 生成图片
        const canvas = await html2canvas(statsContent, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false
        });

        // 转换为图片数据并下载
        const imageData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `圣经金句灵修报告_${Date.now()}.png`;
        link.href = imageData;
        link.click();

        showToast('报告图片已下载', 'success');
    } catch (error) {
        console.error('生成报告图片失败:', error);
        showToast('生成图片失败，请重试', 'error');
    }
}

function setActiveFilterButton(container, target) {
    if (!target.classList.contains('filter-btn')) return;
    container.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
    target.classList.add('active');
}

function setupEventListeners() {
    elements.drawBtn.addEventListener('click', drawCard);
    elements.saveBtn.addEventListener('click', () => openSaveModal('draw'));
    if (elements.contextBtn) {
        elements.contextBtn.addEventListener('click', () => openContextModal());
    }
    elements.shareBtn.addEventListener('click', openShareModal);
    elements.confirmSaveBtn.addEventListener('click', saveAnswer);
    elements.cancelSaveBtn.addEventListener('click', closeSaveModal);
    elements.closeShareBtn.addEventListener('click', closeShareModal);
    elements.copyShareBtn.addEventListener('click', copyShareLink);
    elements.clearHistoryBtn.addEventListener('click', clearHistory);
    if (elements.importFileInput) {
        elements.importFileInput.addEventListener('change', handleImportFileChange);
    }
    
    // 编辑模态框事件
    if (elements.confirmEditBtn) {
        elements.confirmEditBtn.addEventListener('click', saveEditedAnswer);
    }
    if (elements.cancelEditBtn) {
        elements.cancelEditBtn.addEventListener('click', closeEditModal);
    }
    if (elements.editModal) {
        elements.editModal.addEventListener('click', (event) => {
            if (event.target === elements.editModal) closeEditModal();
        });
    }

    // 分享增强功能事件监听
    if (elements.generateImageBtn) {
        elements.generateImageBtn.addEventListener('click', generateShareImage);
    }
    if (elements.copyLinkBtn) {
        elements.copyLinkBtn.addEventListener('click', generateShareLink);
    }
    if (elements.downloadImageBtn) {
        elements.downloadImageBtn.addEventListener('click', downloadShareImage);
    }

    // 记一节经文事件
    if (elements.verseNoteBtn) {
        elements.verseNoteBtn.addEventListener('click', openVerseNoteModal);
    }
    if (elements.closeVerseNoteBtn) {
        elements.closeVerseNoteBtn.addEventListener('click', closeVerseNoteModal);
    }
    if (elements.verseNoteModal) {
        elements.verseNoteModal.addEventListener('click', (event) => {
            if (event.target === elements.verseNoteModal) closeVerseNoteModal();
        });
    }

    elements.themeSelector.addEventListener('click', (event) => {
        const button = event.target.closest('[data-theme-choice]');
        if (!button) return;
        setTheme(button.dataset.themeChoice);
    });

    elements.categoryFilters.addEventListener('click', (event) => {
        setActiveFilterButton(elements.categoryFilters, event.target);
        if (event.target.dataset.category) {
            state.currentCategory = event.target.dataset.category;
        }
    });

    elements.saveModal.addEventListener('click', (event) => {
        if (event.target === elements.saveModal) closeSaveModal();
    });

    elements.shareModal.addEventListener('click', (event) => {
        if (event.target === elements.shareModal) closeShareModal();
    });

    if (elements.closeContextBtn) {
        elements.closeContextBtn.addEventListener('click', closeContextModal);
    }
    if (elements.contextModal) {
        elements.contextModal.addEventListener('click', (event) => {
            if (event.target === elements.contextModal) closeContextModal();
        });
    }

    // 统计功能事件监听
    if (elements.statsBtn) {
        elements.statsBtn.addEventListener('click', openStatsModal);
    }
    if (elements.closeStatsBtn) {
        elements.closeStatsBtn.addEventListener('click', closeStatsModal);
    }
    if (elements.statsModal) {
        elements.statsModal.addEventListener('click', (event) => {
            if (event.target === elements.statsModal) closeStatsModal();
        });
    }

}

// ==================== 今日经文 ====================

// ==================== 记一节经文 ====================

function openVerseNoteModal() {
    if (!elements.verseNoteModal || !elements.verseNoteContainer) return;

    renderVerseNote({
        container: elements.verseNoteContainer,
        onPick: (verse) => {
            closeVerseNoteModal();
            // 把选中的经文当作当前卡牌，打开「写下感受」
            state.currentCard = {
                id: `note-${Date.now()}`,
                category: 'note',
                reference: verse.reference,
                text: verse.text,
                book: verse.book,
                chapter: verse.chapter,
                verse: verse.verse,
                sourceHint: 'note'
            };
            openSaveModal('note');
        }
    });

    elements.verseNoteModal.classList.add('active');
}

function closeVerseNoteModal() {
    if (elements.verseNoteModal) {
        elements.verseNoteModal.classList.remove('active');
    }
}

function initTodayVerse() {
    if (!elements.dailyCardContainer) return;

    const verse = getTodayVerse(cards);
    renderTodayVerse({
        container: elements.dailyCardContainer,
        verse,
        history: state.history,
        streak: getStreakDays(),
        onAnswer: () => openTodayVerseSave(),
        onNext: () => handleNextVerse(),
        onContext: () => openContextModal(verse)
    });
}

/**
 * 打开「写下感受」——把今日经文设为当前卡牌，来源记为 daily
 */
function openTodayVerseSave() {
    const verse = getTodayVerse(cards);
    if (!verse) {
        showToast('暂时取不到今日经文', 'error');
        return;
    }
    state.currentCard = verse;
    openSaveModal('daily');
}

/**
 * 换一句
 */
function handleNextVerse() {
    const verse = nextTodayVerse(cards);
    if (!verse) {
        showToast('暂时取不到今日经文', 'error');
        return;
    }
    stopReading();
    state.currentCard = verse;
    initTodayVerse();
    showToast('已换一句', 'success');
}

function refreshDailyCardView() {
    initTodayVerse();
}

// ==================== 语音功能 ====================

/**
 * 初始化语音服务
 */
function initVoiceService() {
    state.voice.synthesizer = createSpeechSynthesizer();
}

/**
 * 处理朗读按钮点击
 */
function handleReadAloud() {
    if (!state.voice.synthesizer) {
        showToast('您的浏览器不支持语音朗读功能', 'error');
        return;
    }

    if (!state.currentCard) {
        showToast('请先抽取一节经文', 'error');
        return;
    }

    // 读经文原文；手记卡没有 text 时才退回引导语
    const verseText = stripEditorialNotes(state.currentCard.text) || state.currentCard.question || '';
    if (!verseText) {
        showToast('这节经文没有可朗读的内容', 'error');
        return;
    }

    // 如果正在朗读，则停止
    if (state.voice.isReading) {
        state.voice.synthesizer.cancel();
        state.voice.isReading = false;
        renderCardVoiceControls({
            container: elements.cardVoiceControls,
            onReadAloud: handleReadAloud,
            isReading: false,
            disabled: false
        });
        return;
    }

    // 开始朗读
    state.voice.isReading = true;
    renderCardVoiceControls({
        container: elements.cardVoiceControls,
        onReadAloud: handleReadAloud,
        isReading: true,
        disabled: false
    });

    state.voice.synthesizer.speak(verseText, {
        rate: 0.9,
        pitch: 1.0,
        onEnd: () => {
            state.voice.isReading = false;
            renderCardVoiceControls({
                container: elements.cardVoiceControls,
                onReadAloud: handleReadAloud,
                isReading: false,
                disabled: false
            });
        },
        onError: (error) => {
            console.error('语音朗读错误:', error);
            showToast('朗读失败，请重试', 'error');
            state.voice.isReading = false;
            renderCardVoiceControls({
                container: elements.cardVoiceControls,
                onReadAloud: handleReadAloud,
                isReading: false,
                disabled: false
            });
        }
    });
}

/**
 * 渲染卡牌区域的语音控制
 */
function renderCardVoiceSection() {
    if (!elements.cardVoiceControls) return;

    const hasTTS = state.voice.synthesizer !== null;
    renderCardVoiceControls({
        container: elements.cardVoiceControls,
        onReadAloud: hasTTS ? handleReadAloud : null,
        isReading: state.voice.isReading,
        disabled: !hasTTS
    });
}

/**
 * 渲染保存模态框的语音输入控制
 */
function renderSaveModalVoiceControls() {
    if (!elements.saveVoiceWrapper) return;

    const hasASR = isSpeechRecognitionSupported();
    renderModalVoiceControls({
        container: elements.saveVoiceWrapper,
        onVoiceInput: hasASR ? () => handleVoiceInput(elements.answerInput, 'save') : null,
        isListening: state.voice.isListening,
        status: state.voice.isListening ? '正在聆听...' : ''
    });
}

/**
 * 渲染编辑模态框的语音输入控制
 */
function renderEditModalVoiceControls() {
    if (!elements.editVoiceWrapper) return;

    const hasASR = isSpeechRecognitionSupported();
    renderModalVoiceControls({
        container: elements.editVoiceWrapper,
        onVoiceInput: hasASR ? () => handleVoiceInput(elements.editAnswerInput, 'edit') : null,
        isListening: state.voice.isListening,
        status: state.voice.isListening ? '正在聆听...' : ''
    });
}

/**
 * 处理语音输入
 * @param {HTMLTextAreaElement} textarea - 目标文本域
 * @param {string} context - 上下文 ('save' | 'edit')
 */
async function handleVoiceInput(textarea, context) {
    // 检查浏览器支持
    if (!isSpeechRecognitionSupported()) {
        showToast('您的浏览器不支持语音输入功能', 'error');
        return;
    }

    // 如果正在录音，则停止
    if (state.voice.isListening) {
        stopVoiceInput();
        return;
    }

    // 请求麦克风权限
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {
        showToast('需要麦克风权限才能使用语音输入', 'error');
        return;
    }

    // 创建识别器
    const recognizer = createSpeechRecognizer();
    if (!recognizer) {
        showToast('语音识别初始化失败', 'error');
        return;
    }

    state.voice.recognizer = recognizer;
    state.voice.isListening = true;

    // 更新UI
    if (context === 'save') {
        renderSaveModalVoiceControls();
    } else {
        renderEditModalVoiceControls();
    }

    // 保存原始值，用于追加
    let currentValue = textarea.value;
    if (currentValue && !currentValue.endsWith(' ')) {
        currentValue += ' ';
    }

    recognizer.start({
        onResult: (finalTranscript, interimTranscript) => {
            // 更新文本域内容
            const newText = currentValue + finalTranscript + interimTranscript;
            textarea.value = newText;

            // 触发 input 事件以更新任何监听器
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
        },
        onError: (error, message) => {
            console.error('语音识别错误:', error, message);
            showToast(message, 'error');
            stopVoiceInput();
        },
        onEnd: () => {
            // 识别结束（可能是自动停止或用户停止）
            if (state.voice.isListening) {
                // 如果还在监听状态，重新启动以持续识别
                try {
                    recognizer.native.start();
                } catch (e) {
                    // 可能已经达到最大识别时间
                    stopVoiceInput();
                }
            }
        }
    });
}

/**
 * 停止语音输入
 */
function stopVoiceInput() {
    if (state.voice.recognizer) {
        state.voice.recognizer.stop();
        state.voice.recognizer = null;
    }
    state.voice.isListening = false;

    // 刷新UI
    if (elements.saveModal.classList.contains('active')) {
        renderSaveModalVoiceControls();
    }
    if (elements.editModal.classList.contains('active')) {
        renderEditModalVoiceControls();
    }
}

function init() {
    // 迁移旧命名空间（heartTalk* → bible*），解除与心语卡牌的 key 冲突。
    // 必须在读 history 之前跑，否则首次启动会看不到迁移过来的记录。
    migrateLegacyStorage();
    state.history = loadHistory();

    applyTheme(getStoredTheme());
    refreshCardView();
    refreshHistoryView();
    setupEventListeners();

    // 初始化筛选控件
    if (elements.historyFiltersContainer) {
        renderHistoryFilters({
            container: elements.historyFiltersContainer,
            categoryNames,
            onFilterChange: handleHistoryFilterChange
        });
    }

    // 初始化导出控件
    if (elements.historyExportContainer) {
        renderExportControls({
            container: elements.historyExportContainer,
            onExportJSON: handleExportJSON,
            onImportJSON: handleImportJSON,
            onExportImage: handleExportImage,
            onExportAlbum: handleExportAlbum,
            onShowStats: openStatsModal
        });
    }

    // 初始化今日经文
    initTodayVerse();

    // 初始化语音服务
    initVoiceService();

    // 处理分享链接
    handleShareLink();
}

init();



