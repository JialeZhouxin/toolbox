function createElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

export function renderCard({ currentCard, categoryNames, levelNames, progress, elements }) {
    const {
        emptyState,
        cardContent,
        cardCategory,
        cardLevel,
        cardQuestion,
        saveBtn,
        shareBtn
    } = elements;

    if (!currentCard) {
        emptyState.hidden = false;
        cardContent.hidden = true;
        saveBtn.hidden = true;
        shareBtn.hidden = true;
        return;
    }

    emptyState.hidden = true;
    cardContent.hidden = false;
    cardCategory.textContent = categoryNames[currentCard.category] || currentCard.category;
    cardLevel.textContent = levelNames[String(currentCard.level)] || `第${currentCard.level}级`;
    cardLevel.className = `card-level level-${currentCard.level}`;
    cardQuestion.textContent = currentCard.question;
    saveBtn.hidden = false;
    shareBtn.hidden = false;

    renderProgress(progress, elements);
}

export function renderProgress(progress, elements) {
    const node = elements.cardProgress;
    if (!node) return;

    if (!progress) {
        node.textContent = '';
        return;
    }

    node.textContent = `本轮第 ${progress.drawn} / ${progress.total} 张`;
}

export function renderHistory({ history, levelNames, historyList }) {
    historyList.replaceChildren();

    if (!history.length) {
        const empty = createElement('div', 'empty-state');
        empty.appendChild(createElement('p', '', '暂无对话记录'));
        historyList.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    history.forEach((item) => {
        const wrapper = createElement('div', 'history-item');
        wrapper.appendChild(createElement('div', 'timestamp', item.timestamp));

        const badge = createElement('span', `level-badge level-${item.card.level}`);
        badge.textContent = levelNames[String(item.card.level)] || `第${item.card.level}级`;
        wrapper.appendChild(badge);

        wrapper.appendChild(createElement('div', 'question', item.card.question));
        wrapper.appendChild(createElement('div', 'answer', item.answer));
        fragment.appendChild(wrapper);
    });

    historyList.appendChild(fragment);
}
