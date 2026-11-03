/**
 * Update cards.js with extracted Bible verses
 * Converts verses-categorized.json to cards.js format
 */

const fs = require('fs');
const path = require('path');

// Category mapping: English -> Chinese
const categoryNames = {
    comfort: '安慰',
    love: '爱心',
    faith: '信心',
    strength: '力量',
    wisdom: '智慧',
    forgiveness: '宽恕',
    hope: '盼望'
};

// Category icons
const categoryIcons = {
    comfort: '🕊️',
    love: '❤️',
    faith: '✝️',
    strength: '💪',
    wisdom: '📖',
    forgiveness: '🤝',
    hope: '🌟'
};

// Category colors
const categoryColors = {
    comfort: '#4A90E2',
    love: '#E74C3C',
    faith: '#9B59B6',
    strength: '#F39C12',
    wisdom: '#1ABC9C',
    forgiveness: '#3498DB',
    hope: '#E67E22'
};

// 历史数据里的繁简/异写卷名 → 标准名（与 src/core/reference-utils.js 保持一致）
const BOOK_NAME_ALIASES = {
    啟示录: '启示录'
};

function normalizeBookName(book) {
    const trimmed = String(book || '').trim();
    return BOOK_NAME_ALIASES[trimmed] || trimmed;
}

/**
 * 解析出处，同时产出结构化字段；解析失败直接抛错，避免脏数据进池
 * @param {string} reference
 * @returns {{book:string, chapter:number, verseStart:number, verseEnd:number}}
 */
function parseReference(reference) {
    const match = String(reference || '').trim()
        .match(/^(.+?)\s*(\d+)\s*:\s*(\d+)(?:\s*-\s*(\d+))?$/);
    if (!match) {
        throw new Error(`无法解析经文出处: ${reference}`);
    }

    const chapter = Number(match[2]);
    const verseStart = Number(match[3]);
    const verseEnd = match[4] ? Number(match[4]) : verseStart;
    if (!chapter || !verseStart) {
        throw new Error(`经文出处缺失章/节: ${reference}`);
    }

    return {
        book: normalizeBookName(match[1]),
        chapter,
        verseStart,
        verseEnd: Math.max(verseStart, verseEnd)
    };
}

/**
 * 归一化出处显示文本：统一卷名、去掉多余空格
 * @param {{book:string, chapter:number, verseStart:number, verseEnd:number}} parsed
 * @returns {string}
 */
function formatReference(parsed) {
    const range = parsed.verseStart === parsed.verseEnd
        ? String(parsed.verseStart)
        : `${parsed.verseStart}-${parsed.verseEnd}`;
    return `${parsed.book} ${parsed.chapter}:${range}`;
}

function generateCards() {
    const versesFile = path.join(__dirname, '..', 'data', 'verses-categorized.json');
    const cardsFile = path.join(__dirname, '..', 'src', 'data', 'cards.js');
    
    // Read verses
    const versesData = JSON.parse(fs.readFileSync(versesFile, 'utf8'));
    
    const cards = [];
    let id = 1;
    
    for (const [category, verses] of Object.entries(versesData)) {
        for (const verse of verses) {
            const parsed = parseReference(verse.reference);
            cards.push({
                id: id++,
                category: categoryNames[category],
                categoryEn: category,
                icon: categoryIcons[category],
                color: categoryColors[category],
                reference: formatReference(parsed),
                text: verse.text,
                book: parsed.book,
                chapter: parsed.chapter,
                verseStart: parsed.verseStart,
                verseEnd: parsed.verseEnd,
                question: `这节关于"${categoryNames[category]}"的经文如何触动你的心？`
            });
        }
    }
    
    // Generate cards.js content
    const cardsContent = `/**
 * Bible Verse Cards Data
 * Auto-generated from CUS (Chinese Union Version Simplified)
 * Total: ${cards.length} verses across 7 categories
 */

export const categories = [
    { id: 'comfort', name: '安慰', icon: '🕊️', color: '#4A90E2', description: '在困难中找到神的安慰' },
    { id: 'love', name: '爱心', icon: '❤️', color: '#E74C3C', description: '体验神无条件的爱' },
    { id: 'faith', name: '信心', icon: '✝️', color: '#9B59B6', description: '建立坚定的信心' },
    { id: 'strength', name: '力量', icon: '💪', color: '#F39C12', description: '从神得着力量' },
    { id: 'wisdom', name: '智慧', icon: '📖', color: '#1ABC9C', description: '寻求从神而来的智慧' },
    { id: 'forgiveness', name: '宽恕', icon: '🤝', color: '#3498DB', description: '学习宽恕与恩典' },
    { id: 'hope', name: '盼望', icon: '🌟', color: '#E67E22', description: '在基督里存着盼望' }
];

export const cards = ${JSON.stringify(cards, null, 4)};

export function getCardsByCategory(categoryId) {
    return cards.filter(card => card.categoryEn === categoryId);
}

export function getRandomCard(categoryId = null) {
    if (categoryId) {
        const categoryCards = getCardsByCategory(categoryId);
        return categoryCards[Math.floor(Math.random() * categoryCards.length)];
    }
    return cards[Math.floor(Math.random() * cards.length)];
}

export function getCardById(id) {
    return cards.find(card => card.id === id);
}
`;
    
    fs.writeFileSync(cardsFile, cardsContent, 'utf8');
    console.log(`Updated ${cardsFile} with ${cards.length} cards`);
    
    // Print summary
    console.log('\n=== Cards Summary ===');
    for (const [category, verses] of Object.entries(versesData)) {
        console.log(`${categoryNames[category]} (${category}): ${verses.length} cards`);
    }
    console.log(`\nTotal: ${cards.length} cards`);
}

generateCards();
