/*
 * app.bundle.js —— 自动生成，请勿手改
 *
 * 用途：file:// 直接打开 index.html 时加载（此协议下不能用 ES modules）。
 * 生成：node scripts/build-bundle.js
 * 模块顺序（19 个）： src/data/cards.js, src/core/card-service.js, src/core/storage-migration.js, src/core/history-store.js, src/core/date-utils.js, src/core/history-filter.js, src/core/history-export.js, src/ui/render.js, src/core/stats.js, src/core/check-in.js, src/ui/stats-render.js, src/core/daily-verse-service.js, src/ui/daily-verse-render.js, src/core/verse-search-service.js, src/data/book-names.js, src/ui/verse-note-render.js, src/core/voice-service.js, src/ui/voice-render.js, src/main.js
 * 未打包（体积大 / 动态 import）： src/data/bible-full.js
 */

(function () {
'use strict';

// ==================== src/data/cards.js ====================
/**
 * Bible Verse Cards Data
 * Auto-generated from CUS (Chinese Union Version Simplified)
 * Total: 1000 verses across 7 categories
 */

const categories = [
    { id: 'comfort', name: '安慰', icon: '🕊️', color: '#4A90E2', description: '在困难中找到神的安慰' },
    { id: 'love', name: '爱心', icon: '❤️', color: '#E74C3C', description: '体验神无条件的爱' },
    { id: 'faith', name: '信心', icon: '✝️', color: '#9B59B6', description: '建立坚定的信心' },
    { id: 'strength', name: '力量', icon: '💪', color: '#F39C12', description: '从神得着力量' },
    { id: 'wisdom', name: '智慧', icon: '📖', color: '#1ABC9C', description: '寻求从神而来的智慧' },
    { id: 'forgiveness', name: '宽恕', icon: '🤝', color: '#3498DB', description: '学习宽恕与恩典' },
    { id: 'hope', name: '盼望', icon: '🌟', color: '#E67E22', description: '在基督里存着盼望' }
];

const cards = [
    {
        "id": 1,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 23:1",
        "text": "〔大卫的诗。〕耶和华是我的牧者．我必不至缺乏。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 2,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 23:4",
        "text": "我虽然行过死荫的幽谷、也不怕遭害．因为你与我同在．你的杖、你的竿、都安慰我。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 3,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 46:1",
        "text": "〔可拉后裔的诗歌、交与伶长、调用女音。〕　神是我们的避难所、是我们的力量、是我们在患难中随时的帮助。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 4,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 46:10",
        "text": "你们要休息、要知道我是　神．我必在外邦中被尊崇、在遍地上也被尊崇。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 5,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 121:1-2",
        "text": "〔上行之诗。〕我要向山举目。我的帮助从何而来。 我的帮助从造天地的耶和华而来。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 6,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 41:10",
        "text": "你不要害怕、因为我与你同在．不要惊惶、因为我是你的　神．我必坚固你、我必帮助你、我必用我公义的右手扶持你。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 7,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 43:2",
        "text": "你从水中经过、我必与你同在．你趟过江河、水必不漫过你．你从火中行过、必不被烧、火焰也不着在你身上。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 8,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 11:28",
        "text": "凡劳苦担重担的人、可以到我这里来、我就使你们得安息。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 9,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 5:4",
        "text": "哀恸的人有福了．因为他们必得安慰。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 10,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 14:27",
        "text": "我留下平安给你们、我将我的平安赐给你们．我所赐的、不像世人所赐的．你们心里不要忧愁、也不要胆怯。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 11,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多后书 1:3-4",
        "text": "愿颂赞归与我们的主耶稣基督的父　神、就是发慈悲的父、赐各样安慰的　神． 我们在一切患难中、他就安慰我们、叫我们能用　神所赐的安慰、去安慰那遭各样患难的人。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 12,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 34:18",
        "text": "耶和华靠近伤心的人、拯救灵性痛悔的人。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 13,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 42:11",
        "text": "我的心哪、你为何忧闷、为何在我里面烦躁．应当仰望　神．因我还要称赞他．他是我脸上的光荣、〔原文作帮助〕是我的　神。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 14,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 55:22",
        "text": "你要把你的重担卸给耶和华、他必抚养你．他永不叫义人动摇。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 15,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 62:8",
        "text": "你们众民当时时倚靠他、在他面前倾心吐意．　神是我们的避难所。〔细拉〕",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 16,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 73:26",
        "text": "我的肉体、和我的心肠衰残．但　神是我心里的力量、又是我的福分、直到永远。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 17,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 91:1-2",
        "text": "住在至高者隐密处的、必住在全能者的荫下。 我要论到耶和华说、他是我的避难所、是我的山寨、是我的　神、是我所倚靠的。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 18,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 119:50",
        "text": "这话将我救活了．我在患难中、因此得安慰。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 19,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 147:3",
        "text": "他医好伤心的人、裹好他们的伤处。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 20,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 26:3",
        "text": "坚心倚赖你的、你必保守他十分平安、因为他倚靠你。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 21,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 49:13",
        "text": "诸天哪、应当欢呼．大地阿、应当快乐．众山哪、应当发声歌唱．因为耶和华已经安慰他的百姓、也要怜恤他困苦之民。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 22,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 51:12",
        "text": "惟有我、是安慰你们的．你是谁、竟怕那必死的人、怕那要变如草的世人．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 23,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 66:13",
        "text": "母亲怎样安慰儿子、我就照样安慰你们．你们也必因〔或作在〕耶路撒冷得安慰。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 24,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "耶利米书 31:13",
        "text": "那时处女必欢乐跳舞、年少的年老的、也必一同欢乐、因为我要使他们的悲哀变为欢喜、并要安慰他们、使他们的愁烦转为快乐。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 25,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 10:29-31",
        "text": "两个麻雀、不是卖一分银子么．若是你们的父不许、一个也不能掉在地上。 就是你们的头发、也都被数过了。 所以不要惧怕．你们比许多麻雀还贵重。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 26,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 14:1-3",
        "text": "你们心里不要忧愁．你们信　神、也当信我。 在我父的家里、有许多住处．若是没有、我就早已告诉你们了．我去原是为你们预备地方去。 我若去为你们预备了地方、就必再来接你们到我那里去．我在那里、叫你们也在那里。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 27,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 16:33",
        "text": "我将这些事告诉你们、是要叫你们在我里面有平安。在世上你们有苦难．但你们可以放心、我已经胜了世界。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 28,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 8:26-28",
        "text": "况且我们的软弱有圣灵帮助、我们本不晓得当怎样祷告、只是圣灵亲自用说不出来的叹息、替我们祷告。 鉴察人心的、晓得圣灵的意思．因为圣灵照着　神的旨意替圣徒祈求。 我们晓得万事都互相效力、叫爱　神的人得益处、就是按他旨意被召的人。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 29,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 94:19",
        "text": "我心里多忧多疑、你安慰我、就使我欢乐。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 30,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 5:7",
        "text": "你们要将一切的忧虑卸给　神、因为他顾念你们。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 31,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "箴言 12:25",
        "text": "人心忧虑、屈而不伸．一句良言、使心欢乐。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 32,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "箴言 29:25",
        "text": "惧怕人的、陷入网罗．惟有倚靠耶和华的、必得安稳。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 33,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 34:4",
        "text": "我曾寻求耶和华、他就应允我、救我脱离了一切的恐惧。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 34,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 5:10",
        "text": "那赐诸般恩典的　神、曾在基督里召你们、得享他永远的荣耀、等你们暂受苦难之后、必要亲自成全你们、坚固你们、赐力量给你们。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 35,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 3:14",
        "text": "你们就是为义受苦、也是有福的．不要怕人的威吓、也不要惊慌．〔的威吓或作所怕的〕",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 36,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "希伯来书 13:5",
        "text": "你们存心不可贪爱钱财．要以自己所有的为足．因为主曾说、『我总不撇下你、也不丢弃你。』",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 37,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 138:8",
        "text": "耶和华必成全关乎我的事．耶和华阿、你的慈爱永远长存．求你不要离弃你手所造的。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 38,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "腓立比书 4:19",
        "text": "我的　神必照他荣耀的丰富、在基督耶稣里、使你们一切所需用的都充足。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 39,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "出埃及记 14:14",
        "text": "耶和华必为你们争战、你们只管静默、不要作声。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 40,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "腓立比书 4:7",
        "text": "神所赐出人意外的平安、必在基督耶稣里、保守你们的心怀意念。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 41,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "申命记 3:22",
        "text": "你不要怕他们、因那为你争战的、是耶和华你的　神。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 42,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 118:6",
        "text": "有耶和华帮助我．我必不惧怕．人能把我怎么样呢。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 43,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "啟示录 21:4",
        "text": "神要擦去他们一切的眼泪．不再有死亡、也不再有悲哀、哭号、疼痛、因为以前的事都过去了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 44,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多前书 7:32",
        "text": "我愿你们无所挂虑。没有娶妻的、是为主的事挂虑、想怎样叫主喜悦。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 45,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "耶利米书 17:7",
        "text": "倚靠耶和华、以耶和华为可靠的、那人有福了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 46,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 8:31",
        "text": "既是这样、还有甚么说的呢．　神若帮助我们、谁能敌挡我们呢。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 47,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "箴言 17:22",
        "text": "喜乐的心、乃是良药．忧伤的灵、使骨枯干。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 48,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 8:15",
        "text": "你们所受的不是奴仆的心、仍旧害怕．所受的乃是儿子的心、因此我们呼叫阿爸、父。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 49,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "啟示录 1:1",
        "text": "耶稣基督的启示、就是　神赐给他、叫他将必要快成的事指示他的众仆人．他就差遣使者、晓谕他的仆人约翰．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 50,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马可福音 4:39-40",
        "text": "耶稣醒了．斥责风、向海说、住了吧、静了吧．风就止住、大大的平静了。 耶稣对他们说、为甚么胆怯．你们还没有信心么。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 51,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 19:26",
        "text": "耶稣看着他们说、在人这是不能的．在　神凡事都能。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 52,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 16:8",
        "text": "我将耶和华常摆在我面前．因他在我右边、我便不至摇动。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 53,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "腓立比书 4:1",
        "text": "我所亲爱所想念的弟兄们、你们就是我的喜乐、我的冠冕．我亲爱的弟兄、你们应当靠主站立得稳。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 54,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多前书 16:13",
        "text": "你们务要儆醒、在真道上站立得稳、要作大丈夫、要刚强。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 55,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 41:1",
        "text": "众海岛阿、当在我面前静默．众民当从新得力、都要近前来才可以说话．我们可以彼此辩论。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 56,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 31:9",
        "text": "耶和华阿、求你怜恤我、因为我在急难之中．我的眼睛因忧愁而干瘪、连我的身心、也不安舒。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 57,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "希伯来书 13:5-6",
        "text": "你们存心不可贪爱钱财．要以自己所有的为足．因为主曾说、『我总不撇下你、也不丢弃你。』 所以我们可以放胆说、『主是帮助我的、我必不惧怕．人能把我怎么样呢。』",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 58,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 8:18",
        "text": "我想现在的苦楚、若比起将来要显于我们的荣耀、就不足介意了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 59,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 9:9",
        "text": "耶和华又要给受欺压的人作高台、在患难的时候作高台。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 60,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "帖撒罗尼迦前书 4:13",
        "text": "论到睡了的人、我们不愿意弟兄们不知道、恐怕你们忧伤、像那些没有指望的人一样。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 61,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 56:8",
        "text": "我几次流离、你都记数．求你把我眼泪装在你的皮袋里．这不都记在你册子上么。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 62,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 12:2",
        "text": "不要效法这个世界．只要心意更新而变化、叫你们察验何为　神的善良、纯全可喜悦的旨意。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 63,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "路加福音 6:21",
        "text": "你们饥饿的人有福了．因为你们将要饱足。你们哀哭的人有福了．因为你们将要喜笑。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 64,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 11:25-26",
        "text": "耶稣对他说、复活在我、生命也在我．信我的人、虽然死了、也必复活． 凡活着信我的人、必永远不死。你信这话么。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 65,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 53:4",
        "text": "他诚然担当我们的忧患、背负我们的痛苦．我们却以为他受责罚、被　神击打苦待了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 66,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多前书 10:13",
        "text": "你们所遇见的试探、无非是人所能受的、　神是信实的、必不叫你们受试探过于所能受的．在受试探的时候、总要给你们开一条出路、叫你们能忍受得住。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 67,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 18:2",
        "text": "耶和华是我的岩石、我的山寨、我的救主、我的　神、我的磐石、我所投靠的．他是我的盾牌、是拯救我的角、是我的高台。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 68,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多后书 5:8",
        "text": "我们坦然无惧、是更愿意离开身体与主同住。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 69,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 16:16",
        "text": "等不多时、你们就不得见我．再等不多时、你们还要见我。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 70,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "希伯来书 3:19",
        "text": "这样看来、他们不能进入安息、是因为不信的缘故了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 71,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 19:14",
        "text": "耶稣说、让小孩子到我这里来、不要禁止他们．因为在天国的、正是这样的人。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 72,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "箴言 15:3",
        "text": "耶和华的眼目、无处不在．恶人善人、他都鉴察。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 73,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 11:25",
        "text": "耶稣对他说、复活在我、生命也在我．信我的人、虽然死了、也必复活．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 74,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "创世纪 6:5-6",
        "text": "耶和华见人在地上罪恶很大、终日所思想的尽都是恶． 耶和华就后悔造人在地上、心中忧伤。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 75,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "雅各书 2:23-24",
        "text": "这就应验经上所说、『亚伯拉罕信　神、这就算为他的义。』他又得称为　神的朋友。 这样看来、人称义是因着行为、不是单因着信。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 76,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "箴言 29:25-26",
        "text": "惧怕人的、陷入网罗．惟有倚靠耶和华的、必得安稳。 求王恩的人多．定人事乃在耶和华。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 77,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "腓立比书 4:8",
        "text": "弟兄们、我还有未尽的话．凡是真实的、可敬的、公义的、清洁的、可爱的、有美名的．若有甚么德行、若有甚么称赞、这些事你们都要思念。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 78,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多后书 1:5",
        "text": "我们既多受基督的苦楚、就靠基督多得安慰。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 79,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "加拉太书 6:2",
        "text": "你们各人的重担要互相担当、如此、就完全了基督的律法。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 80,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 34:19",
        "text": "义人多有苦难．但耶和华救他脱离这一切．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 81,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "帖撒罗尼迦前书 4:13-14",
        "text": "论到睡了的人、我们不愿意弟兄们不知道、恐怕你们忧伤、像那些没有指望的人一样。 我们若信耶稣死而复活了、那已经在耶稣里睡了的人、　神也必将他与耶稣一同带来。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 82,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "提摩太后书 3:12",
        "text": "不但如此、凡立志在基督耶稣里敬虔度日的、也都要受逼迫。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 83,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多后书 4:17",
        "text": "我们这至暂至轻的苦楚、要为我们成就极重无比永远的荣耀。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 84,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "腓立比书 3:10",
        "text": "使我认识基督、晓得他复活的大能、并且晓得和他一同受苦、效法他的死．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 85,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 53:3",
        "text": "他被藐视、被人厌弃、多受痛苦、常经忧患。他被藐视、好像被人掩面不看的一样．我们也不尊重他。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 86,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 4:1",
        "text": "基督既在肉身受苦、你们也当将这样的心志作为兵器．因为在肉身受过苦的、就已经与罪断绝了．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 87,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 2:21",
        "text": "你们蒙召原是为此．因基督也为你们受过苦、给你们留下榜样、叫你们跟随他的脚踪行．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 88,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "希伯来书 2:10",
        "text": "原来那为万物所属、为万物所本的、要领许多的儿子进荣耀里去、使救他们的元帅、因受苦难得以完全、本是合宜的。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 89,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "歌罗西书 1:24",
        "text": "现在我为你们受苦、倒觉欢乐、并且为基督的身体、就是为教会、要在我肉身上补满基督患难的缺欠。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 90,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 119:71",
        "text": "我受苦是与我有益、为要使我学习你的律例。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 91,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 16:20",
        "text": "赐平安的　神、快要将撒但践踏在你们脚下。愿我主耶稣基督的恩、常和你们同在。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 92,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多前书 13:3",
        "text": "我若将所有的赒济穷人、又舍己身叫人焚烧、却没有爱、仍然与我无益。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 93,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马可福音 15:33-34",
        "text": "从午正到申初遍地都黑暗了。 申初的时候、耶稣大声喊着说、以罗伊、以罗伊、拉马撒巴各大尼．翻出来、就是我的　神、我的　神、为甚么离弃我。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 94,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 10:39",
        "text": "得着生命的、将要失丧生命．为我失丧生命的、将要得着生命。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 95,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "申命记 8:3",
        "text": "他苦炼你、任你饥饿、将你和你列祖所不认识的吗哪赐给你吃、使你知道人活着、不是单靠食物、乃是靠耶和华口里所出的一切话。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 96,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "雅各书 1:12",
        "text": "忍受试探的人是有福的．因为他经过试验以后、必得生命的冠冕、这是主应许给那些爱他之人的。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 97,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "希伯来书 10:38-39",
        "text": "只是义人必因信得生、〔义人有古卷作我的义人〕他若退后、我心里就不喜欢他。』 我们却不是退后入沉沦的那等人、乃是有信心以致灵魂得救的人。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 98,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 4:13",
        "text": "倒要欢喜．因为你们是与基督一同受苦、使你们在他荣耀显现的时候、也可以欢喜快乐。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 99,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约伯记 5:17",
        "text": "神所惩治的人是有福的．所以你不可轻看全能者的管教。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 100,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 2:19",
        "text": "倘若人为叫良心对得住　神、就忍受冤屈的苦楚、这是可喜爱的。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 101,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "以赛亚书 5:20-22",
        "text": "祸哉、那些称恶为善、称善为恶、以暗为光、以光为暗、以苦为甜、以甜为苦的人。 祸哉、那些自以为有智慧、自看为通达的人。 祸哉、那些勇于饮酒、以能力调浓酒的人。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 102,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 119:67",
        "text": "我未受苦以先、走迷了路．现在却遵守你的话。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 103,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 4:12",
        "text": "亲爱的弟兄阿、有火炼的试验临到你们、不要以为奇怪、（似乎是遭遇非常的事)",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 104,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 8:17",
        "text": "既是儿女、便是后嗣、就是　神的后嗣、和基督同作后嗣．如果我们和他一同受苦、也必和他一同得荣耀。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 105,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "希伯来书 12:11",
        "text": "凡管教的事、当时不觉得快乐、反觉得愁苦．后来却为那经练过的人、结出平安的果子、就是义．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 106,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "使徒行传 5:41",
        "text": "他们离开公会、心里欢喜．因被算是配为这名受辱。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 107,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "雅各书 1:2",
        "text": "我的弟兄们、你们落在百般试炼中、都要以为大喜乐．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 108,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得后书 3:9",
        "text": "主所应许的尚未成就、有人以为他是耽延．其实不是耽延、乃是宽容你们、不愿有一人沉沦、乃愿人人都悔改。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 109,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 3:17",
        "text": "神的旨意若是叫你们因行善受苦、总强如因行恶受苦。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 110,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 32:8-10",
        "text": "我要教导你、指示你当行的路．我要定睛在你身上劝戒你。 你不可像那无知的骡马、必用嚼环辔头勒住他．不然、就不能驯服。 恶人必多受苦楚．惟独倚靠耶和华的、必有慈爱四面环绕他。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 111,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "帖撒罗尼迦后书 3:16",
        "text": "愿赐平安的主、随时随事亲自给你们平安．愿主常与你们众人同在。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 112,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "提摩太后书 1:8",
        "text": "你不要以给我们的主作见证为耻、也不要以我这为主被囚的为耻．总要按　神的能力、与我为福音同受苦难．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 113,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "申命记 31:8",
        "text": "耶和华必在你前面行、他必与你同在、必不撇下你、也不丢弃你、不要惧怕、也不要惊惶。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 114,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "创世纪 3:15",
        "text": "我又要叫你和女人彼此为仇、你的后裔和女人的后裔、也彼此为仇．女人的后裔要伤你的头、你要伤他的脚跟。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 115,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "提摩太后书 2:3",
        "text": "你要和我同受苦难、好像基督耶稣的精兵。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 116,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 5:12",
        "text": "应当欢喜快乐．因为你们在天上的赏赐是大的．在你们以前的先知、人也是这样逼迫他们。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 117,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 66:10",
        "text": "神阿、你曾试验我们、熬炼我们、如熬炼银子一样。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 118,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 34:3",
        "text": "你们和我当称耶和华为大、一同高举他的名。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 119,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 15:19",
        "text": "你们若属世界、世界必爱属自己的．只因你们不属世界．乃是我从世界中拣选了你们、所以世界就恨你们。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 120,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 37:7-9",
        "text": "你当默然倚靠耶和华、耐性等候他．不要因那道路通达的、和那恶谋成就的、心怀不平。 当止住怒气、离弃忿怒．不要心怀不平、以致作恶。 因为作恶的、必被剪除．惟有等候耶和华的、必承受地土。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 121,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "啟示录 1:17",
        "text": "我一看见、就仆倒在他脚前、像死了一样。他用右手按着我说、不要惧怕．我是首先的、我是末后的、",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 122,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "雅各书 1:2-4",
        "text": "我的弟兄们、你们落在百般试炼中、都要以为大喜乐． 因为知道你们的信心经过试验、就生忍耐。 但忍耐也当成功、使你们成全完备、毫无缺欠。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 123,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "腓立比书 4:6",
        "text": "应当一无挂虑、只要凡事借着祷告、祈求、和感谢、将你们所要的告诉　神。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 124,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 34:17",
        "text": "义人呼求、耶和华听见了、便救他们脱离一切患难。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 125,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "哥林多后书 4:8-10",
        "text": "我们四面受敌、却不被困住．心里作难、却不至失望． 遭逼迫、却不被丢弃．打倒了、却不至死亡． 身上常带着耶稣的死、使耶稣的生、也显明在我们身上。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 126,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约伯记 1:20-21",
        "text": "约伯便起来、撕裂外袍、剃了头、伏在地上下拜、 说、我赤身出于母胎、也必赤身归回．赏赐的是耶和华．收取的也是耶和华。耶和华的名是应当称颂的。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 127,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "耶利米书 1:19",
        "text": "他们要攻击你、却不能胜你．因为我与你同在、要拯救你．这是耶和华说的。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 128,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 34:14",
        "text": "要离恶行善、寻求和睦、一心追赶。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 129,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 28:20",
        "text": "凡我所吩咐你们的、都教训他们遵守我就常与你们同在、直到世界的末了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 130,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马可福音 5:36",
        "text": "耶稣听见所说的话、就对管会堂的说、不要怕．只要信。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 131,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 4:12-13",
        "text": "亲爱的弟兄阿、有火炼的试验临到你们、不要以为奇怪、（似乎是遭遇非常的事) 倒要欢喜．因为你们是与基督一同受苦、使你们在他荣耀显现的时候、也可以欢喜快乐。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 132,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 30:11",
        "text": "你已将我的哀哭变为跳舞、将我的麻衣脱去、给我披上喜乐．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 133,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "彼得前书 3:18",
        "text": "因基督也曾一次为罪受苦、〔受苦有古卷作受死〕就是义的代替不义的、为要引我们到　神面前．按着肉体说他被治死．按着灵性说他复活了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 134,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "马太福音 6:33",
        "text": "你们要先求他的国、和他的义这些东西都要加给你们了。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 135,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "腓立比书 4:4",
        "text": "你们要靠主常常喜乐．我再说、你们要喜乐。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 136,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 40:2",
        "text": "他从祸坑里、从淤泥中、把我拉上来、使我的脚立在磐石上、使我脚步稳当。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 137,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "箴言 15:13",
        "text": "心中喜乐、面带笑容．心里忧愁、灵被损伤。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 138,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "约翰福音 14:18",
        "text": "我不撇下你们为孤儿、我必到你们这里来。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 139,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "撒母耳记下 22:29",
        "text": "耶和华阿、你是我的灯．耶和华必照明我的黑暗。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 140,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 32:10",
        "text": "恶人必多受苦楚．惟独倚靠耶和华的、必有慈爱四面环绕他。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 141,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 13:1-3",
        "text": "〔大卫的诗、交与伶长。〕耶和华阿、你忘记我要到几时呢．要到永远么．你掩面不顾我要到几时呢． 我心里筹算、终日愁苦、要到几时呢．我的仇敌升高压制我、要到几时呢。 耶和华我的　神阿、求你看顾我、应允我、使我眼目光明、免得我沉睡至死．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 142,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "罗马书 12:12",
        "text": "在指望中要喜乐．在患难中要忍耐。祷告要恒切．",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 143,
        "category": "安慰",
        "categoryEn": "comfort",
        "icon": "🕊️",
        "color": "#4A90E2",
        "reference": "诗篇 42:5",
        "text": "我的心哪、你为何忧闷、为何在我里面烦躁．应当仰望　神．因他笑脸帮助我、我还要称赞他。",
        "question": "这节关于\"安慰\"的经文如何触动你的心？"
    },
    {
        "id": 144,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰福音 3:16",
        "text": "神爱世人、甚至将他的独生子赐给他们、叫一切信他的、不至灭亡、反得永生。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 145,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰福音 15:12-13",
        "text": "你们要彼此相爱、像我爱你们一样、这就是我的命令。 人为朋友舍命、人的爱心没有比这个大的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 146,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰福音 13:34-35",
        "text": "我赐给你们一条新命令、乃是叫你们彼此相爱．我怎样爱你们、你们也要怎样相爱。 你们若有彼此相爱的心、众人因此就认出你们是我的门徒了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 147,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 8:38-39",
        "text": "因为我深信无论是死、是生、是天使、是掌权的、是有能的、是现在的事、是将来的事、 是高处的、是低处的、是别的受造之物、都不能叫我们与　神的爱隔绝．这爱是在我们的主基督耶稣里的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 148,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 5:8",
        "text": "惟有基督在我们还作罪人的时候为我们死、　神的爱就在此向我们显明了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 149,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多前书 13:4-8",
        "text": "爱是恒久忍耐、又有恩慈．爱是不嫉妒．爱是不自夸．不张狂． 不作害羞的事．不求自己的益处．不轻易发怒．不计算人的恶． 不喜欢不义．只喜欢真理． 凡事包容．凡事相信．凡事盼望．凡事忍耐。 爱是永不止息．先知讲道之能、终必归于无有．说方言之能、终必停止、知识也终必归于无有。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 150,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多前书 16:14",
        "text": "凡你们所作的、都要凭爱心而作。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 151,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "加拉太书 5:22-23",
        "text": "圣灵所结的果子、就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、 温柔、节制．这样的事、没有律法禁止。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 152,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以弗所书 5:2",
        "text": "也要凭爱心行事、正如基督爱我们、为我们舍了自己、当作馨香的供物、和祭物、献与　神。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 153,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 4:7-8",
        "text": "亲爱的弟兄阿、我们应当彼此相爱．因为爱是从　神来的．凡有爱心的、都是由　神而生、并且认识　神。 没有爱心的、就不认识　神．因为　神就是爱。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 154,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 3:18",
        "text": "小子们哪、我们相爱、不要只在言语和舌头上．总要在行为和诚实上。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 155,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "创世纪 1:27-28",
        "text": "神就照着自己的形像造人、乃是照着他的形像造男造女。 神就赐福给他们、又对他们说、要生养众多、遍满地面、治理这地．也要管理海里的鱼、空中的鸟．和地上各样行动的活物。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 156,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "申命记 7:9",
        "text": "所以你要知道耶和华你的　神、他是　神、是信实的　神、向爱他守他诫命的人、守约施慈爱、直到千代．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 157,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 36:7-8",
        "text": "神阿、你的慈爱、何其宝贵．世人投靠在你翅膀的荫下。 他们必因你殿里的肥甘、得以饱足．你也必叫他们喝你乐河的水。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 158,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 86:15",
        "text": "主阿、你是有怜悯有恩典的　神、不轻易发怒、并有丰盛的慈爱和诚实。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 159,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 103:8-13",
        "text": "耶和华有怜悯、有恩典、不轻易发怒、且有丰盛的慈爱。 他不长久责备、也不永远怀怒。 他没有按我们的罪过待我们、也没有照我们的罪孽报应我们。 天离地何等的高、他的慈爱向敬畏他的人、也是何等的大。 东离西有多远、他叫我们的过犯、离我们也有多远。 父亲怎样怜恤他的儿女、耶和华也怎样怜恤敬畏他的人。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 160,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 136:1-3",
        "text": "你们要称谢耶和华、因他本为善．他的慈爱永远长存。 你们要称谢万神之神、因他的慈爱永远长存． 你们要称谢万主之主、因他的慈爱永远长存．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 161,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以赛亚书 54:10",
        "text": "大山可以挪开、小山可以迁移．但我的慈爱必不离开你、我平安的约也不迁移．这是怜恤你的耶和华说的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 162,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "耶利米书 31:3",
        "text": "古时〔或作从远方〕耶和华向以色列〔原文作我〕显现、说、我以永远的爱、爱你、因此我以慈爱、吸引你。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 163,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "西番雅书 3:17",
        "text": "耶和华你的　神、是施行拯救、大有能力的主、他在你中间必因你欢欣喜乐、默然爱你、且因你喜乐而欢呼。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 164,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰福音 14:21",
        "text": "有了我的命令又遵守的、这人就是爱我的．爱我的必蒙我父爱他、我也要爱他、并且要向他显现。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 165,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰福音 15:9",
        "text": "我爱你们、正如父爱我一样．你们要常在我的爱里。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 166,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 8:35-37",
        "text": "谁能使我们与基督的爱隔绝呢．难道是患难么、是困苦么、是逼迫么、是饥饿么、是赤身露体么、是危险么、是刀剑么。 如经上所记、『我们为你的缘故、终日被杀．人看我们如将宰的羊。』 然而靠着爱我们的主、在这一切的事上、已经得胜有余了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 167,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以弗所书 3:17-19",
        "text": "使基督因你们的信、住在你们心里、叫你们的爱心、有根有基、 能以和众圣徒一同明白基督的爱、是何等长阔高深、 并知道这爱是过于人所能测度的、便叫　神一切所充满的、充满了你们。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 168,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 4:9-10",
        "text": "神差他独生子到世间来、使我们借着他得生、　神爱我们的心、在此就显明了。 不是我们爱　神、乃是　神爱我们、差他的儿子、为我们的罪作了挽回祭、这就是爱了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 169,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 4:16",
        "text": "神爱我们的心、我们也知道也信。　神就是爱．住在爱里面的、就是住在　神里面、　神也住在他里面。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 170,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 4:18-19",
        "text": "爱里没有惧怕．爱既完全、就把惧怕除去．因为惧怕里含着刑罚．惧怕的人在爱里未得完全。 我们爱、因为　神先爱我们。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 171,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "犹大书 1:21",
        "text": "保守自己常在　神的爱中、仰望我们主耶稣基督的怜悯、直到永生。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 172,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "彼得前书 4:8",
        "text": "最要紧的是彼此切实相爱．因为爱能遮掩许多的罪。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 173,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "希伯来书 13:1",
        "text": "你们务要常存弟兄相爱的心。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 174,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 4:11",
        "text": "亲爱的弟兄阿、　神既是这样爱我们、我们也当彼此相爱。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 175,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 3:1",
        "text": "你看父赐给我们是何等的慈爱、使我们得称为　神的儿女．我们也真是他的儿女．世人所以不认识我们、是因未曾认识他。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 176,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马太福音 22:37-39",
        "text": "耶稣对他说、你要尽心、尽性、尽意、爱主你的　神。 这是诫命中的第一、且是最大的。 其次也相仿、就是要爱人如己。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 177,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "彼得前书 3:8",
        "text": "总而言之、你们都要同心、彼此体恤、相爱如弟兄、存慈怜谦卑的心．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 178,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马可福音 12:31",
        "text": "其次、就是说、要爱人如己。再没有比这两条诫命更大的了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 179,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 3:3-4",
        "text": "不可使慈爱诚实离开你．要系在你颈项上、刻在你心版上． 这样、你必在　神和世人眼前蒙恩宠、有聪明。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 180,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "彼得前书 1:22",
        "text": "你们既因顺从真理、洁净了自己的心、以致爱弟兄没有虚假、就当从心里彼此切实相爱．〔从心里有古卷作从清洁的心〕",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 181,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "提摩太后书 2:22",
        "text": "你要逃避少年的私欲、同那清心祷告主的人追求公义、信德、仁爱、和平。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 182,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 12:10",
        "text": "爱弟兄、要彼此亲热．恭敬人、要彼此推让。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 183,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "帖撒罗尼迦前书 4:9",
        "text": "论到弟兄们相爱、不用人写信给你们．因为你们自己蒙了　神的教训、叫你们彼此相爱。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 184,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 17:17",
        "text": "朋友乃时常亲爱．弟兄为患难而生。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 185,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 10:12",
        "text": "恨、能挑启争端．爱、能遮掩一切过错。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 186,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "雅各书 1:19-20",
        "text": "我亲爱的弟兄们、这是你们所知道的．但你们各人要快快的听、慢慢的说、慢慢的动怒． 因为人的怒气、并不成就　神的义。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 187,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约翰一书 3:16",
        "text": "主为我们舍命、我们从此就知道何为爱．我们也当为弟兄舍命。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 188,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路加福音 6:31",
        "text": "你们愿意人怎样待你们、你们也要怎样待人。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 189,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以弗所书 4:2",
        "text": "凡事谦虚、温柔、忍耐、用爱心互相宽容、",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 190,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多前书 13:1",
        "text": "我若能说万人的方言、并天使的话语、却没有爱、我就成了鸣的锣、响的钹一般。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 191,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 12:9",
        "text": "爱人不可虚假、恶要厌恶、善要亲近。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 192,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 13:8",
        "text": "凡事都不可亏欠人、惟有彼此相爱、要常以为亏欠．因为爱人的就完全了律法。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 193,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "申命记 6:5",
        "text": "你要尽心、尽性、尽力、爱耶和华你的　神。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 194,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 11:22",
        "text": "可见　神的恩慈、和严厉．向那跌倒的人、是严厉的．向你是有恩慈的．只要你长久在他的恩慈里．不然、你也要被砍下来。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 195,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "歌罗西书 3:14",
        "text": "在这一切之外、要存着爱心．爱心就是联络全德的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 196,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "雅各书 1:27",
        "text": "在　神我们的父面前、那清洁没有玷污的虔诚、就是看顾在患难中的孤儿寡妇、并且保守自己不沾染世俗。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 197,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以弗所书 4:15",
        "text": "惟用爱心说诚实话、凡事长进、连于元首基督．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 198,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "腓立比书 2:3-4",
        "text": "凡事不可结党、不可贪图虚浮的荣耀．只要存心谦卑、各人看别人比自己强。 各人不要单顾自己的事、也要顾别人的事。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 199,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多后书 4:4",
        "text": "此等不信之人、被这世界的　神弄瞎了心眼、不叫基督荣耀福音的光照着他们．基督本是　神的像。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 200,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 12:9-10",
        "text": "爱人不可虚假、恶要厌恶、善要亲近。 爱弟兄、要彼此亲热．恭敬人、要彼此推让。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 201,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多前书 7:9",
        "text": "倘若自己禁止不住、就可以嫁娶。与其欲火攻心、倒不如嫁娶为妙。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 202,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 15:1",
        "text": "我们坚固的人、应该担代不坚固人的软弱、不求自己的喜悦。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 203,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约珥书 2:13",
        "text": "你们要撕裂心肠、不撕裂衣服．归向耶和华你们的　神．因为他有恩典、有怜悯、不轻易发怒、有丰盛的慈爱、并且后悔不降所说的灾。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 204,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路加福音 6:35",
        "text": "你们倒要爱仇敌、也要善待他们、并要借给人不指望偿还．你们的赏赐就必大了、你们也必作至高者的儿子．因为他恩待那忘恩的和作恶的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 205,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 2:4",
        "text": "还是你藐视他丰富的恩慈、宽容、忍耐、不晓得他的恩慈是领你悔改呢．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 206,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 19:17",
        "text": "怜悯贫穷的、就是借给耶和华．他的善行、耶和华必偿还。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 207,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以弗所书 2:7",
        "text": "要将他极丰富的恩典、就是他在基督耶稣里向我们所施的恩慈、显明给后来的世代看．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 208,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒迦利亚书 7:9",
        "text": "万军之耶和华曾对你们的列祖如此说、要按至理判断、各人以慈爱怜悯弟兄。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 209,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "帖撒罗尼迦前书 4:9-10",
        "text": "论到弟兄们相爱、不用人写信给你们．因为你们自己蒙了　神的教训、叫你们彼此相爱。 你们向马其顿全地的众弟兄、固然是这样行、但我劝弟兄们要更加勉励．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 210,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "弥迦书 6:8",
        "text": "世人哪、耶和华已指示你何为善。他向你所要的是甚么呢。只要你行公义、好怜悯、存谦卑的心、与你的　神同行。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 211,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多后书 6:6",
        "text": "廉洁、知识、恒忍、恩慈、圣灵的感化、无伪的爱心、",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 212,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "提摩太前书 1:13-14",
        "text": "我从前是亵渎　神的、逼迫人的、侮慢人的．然而我还蒙了怜悯、因我是不信不明白的时候而作的。 并且我主的恩是格外丰盛、使我在基督耶稣里有信心和爱心。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 213,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 14:21",
        "text": "藐视邻舍的、这人有罪．怜悯贫穷的、这人有福。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 214,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 11:17",
        "text": "仁慈的人、善待自己．残忍的人、扰害己身。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 215,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 31:26",
        "text": "他开口就发智慧．他舌上有仁慈的法则．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 216,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 19:22",
        "text": "施行仁慈的、令人爱慕．穷人强如说谎言的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 217,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 31:21",
        "text": "耶和华是应当称颂的．因为他在坚固城里、向我施展奇妙的慈爱。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 218,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "彼得前书 3:9",
        "text": "不以恶报恶、以辱骂还辱骂、倒要祝福．因你们是为此蒙召、好叫你们承受福气。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 219,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以赛亚书 54:8",
        "text": "我的怒气涨溢、顷刻之间向你掩面、却要以永远的慈爱怜恤你．这是耶和华你的救赎主说的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 220,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 21:21",
        "text": "追求公义仁慈的、就寻得生命、公义、和尊荣。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 221,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "使徒行传 20:35",
        "text": "我凡事给你们作榜样、叫你们知道、应当这样劳苦、扶助软弱的人、又当记念主耶稣的话、说、施比受更为有福。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 222,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒母耳记下 2:6",
        "text": "你们既行了这事、愿耶和华以慈爱诚实待你们．我也要为此厚待你们。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 223,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 15:2",
        "text": "我们各人务要叫邻舍喜悦、使他得益处、建立德行。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 224,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒母耳记下 9:7",
        "text": "大卫说、你不要惧怕、我必因你父亲约拿单的缘故施恩与你、将你祖父扫罗的一切田地都归还你、你也可以常与我同席吃饭。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 225,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "约伯记 6:14",
        "text": "那将要灰心、离弃全能者、不敬畏　神的人、他的朋友、当以慈爱待他。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 226,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马太福音 5:42",
        "text": "有求你的、就给他．有向你借贷的、不可推辞。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 227,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路得记 3:10",
        "text": "波阿斯说、女儿阿、愿你蒙耶和华赐福、你末后的恩比先前更大、因为少年人无论贫富、你都没有跟从．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 228,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马太福音 5:7",
        "text": "怜恤人的人有福了．因为他们必蒙怜恤。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 229,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 12:15",
        "text": "与喜乐的人要同乐．与哀哭的人要同哭。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 230,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒母耳记下 9:3",
        "text": "王说、扫罗家还有人没有、我要照　神的慈爱恩待他．洗巴对王说、还有约拿单的一个儿子、是瘸腿的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 231,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "加拉太书 6:9",
        "text": "我们行善、不可丧志．若不灰心、到了时候、就要收成。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 232,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "帖撒罗尼迦后书 3:13",
        "text": "弟兄们、你们行善不可丧志。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 233,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "箴言 3:3",
        "text": "不可使慈爱诚实离开你．要系在你颈项上、刻在你心版上．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 234,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "创世纪 24:12",
        "text": "他说、耶和华我主人亚伯拉罕的　神阿、求你施恩给我主人亚伯拉罕、使我今日遇见好机会。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 235,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 141:5",
        "text": "任凭义人击打我、这算为仁慈．任凭他责备我、这算为头上的膏油．我的头不要躲闪。正在他们行恶的时候、我仍要祈祷。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 236,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "利未记 19:34",
        "text": "和你们同居的外人、你们要看他如本地人一样、并要爱他如己、因为你们在埃及地也作过寄居的．我是耶和华你们的　神。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 237,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒迦利亚书 7:10",
        "text": "不可欺压寡妇、孤儿、寄居的、和贫穷人．谁都不可心里谋害弟兄。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 238,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒母耳记下 9:1",
        "text": "大卫问说、扫罗家还有剩下的人没有、我要因约拿单的缘故向他施恩。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 239,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路加福音 6:30",
        "text": "凡求你的、就给他．有人夺你的东西去、不用再要回来。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 240,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "创世纪 20:13",
        "text": "当　神叫我离开父家飘流在外的时候、我对他说、我们无论走到甚么地方、你可以对人说、他是我的哥哥．这就是你待我的恩典了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 241,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 13:10",
        "text": "爱是不加害与人的、所以爱就完全了律法。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 242,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒母耳记下 2:5",
        "text": "大卫就差人去见基列雅比人、对他们说、你们厚待你们的主扫罗、将他葬埋．愿耶和华赐福与你们。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 243,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "加拉太书 6:1",
        "text": "弟兄们、若有人偶然被过犯所胜、你们属灵的人、就当用温柔的心、把他挽回过来．又当自己小心、恐怕也被引诱。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 244,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "使徒行传 27:3",
        "text": "第二天、到了西顿．犹流宽待保罗、准他往朋友那里去、受他们的照应。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 245,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路加福音 6:34",
        "text": "你们若借给人、指望从他收回、有甚么可酬谢的呢．就是罪人也借给罪人、要如数收回。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 246,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "彼得前书 3:8-9",
        "text": "总而言之、你们都要同心、彼此体恤、相爱如弟兄、存慈怜谦卑的心． 不以恶报恶、以辱骂还辱骂、倒要祝福．因你们是为此蒙召、好叫你们承受福气。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 247,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "出埃及记 33:19",
        "text": "耶和华说、我要显我一切的恩慈、在你面前经过、宣告我的名．我要恩待谁、就恩待谁．要怜悯谁、就怜悯谁。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 248,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 116:5",
        "text": "耶和华有恩惠、有公义．我们的　神以怜悯为怀。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 249,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "耶利米哀歌 3:32",
        "text": "主虽使人忧愁、还要照他诸般的慈爱发怜悯。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 250,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 145:8",
        "text": "耶和华有恩惠、有怜悯、不轻易发怒、大有慈爱。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 251,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "撒迦利亚书 7:9-10",
        "text": "万军之耶和华曾对你们的列祖如此说、要按至理判断、各人以慈爱怜悯弟兄。 不可欺压寡妇、孤儿、寄居的、和贫穷人．谁都不可心里谋害弟兄。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 252,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马太福音 14:14",
        "text": "耶稣出来、见有许多的人、就怜悯他们、治好了他们的病人。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 253,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 111:4",
        "text": "他行了奇事、使人记念．耶和华有恩惠、有怜悯。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 254,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 112:4",
        "text": "正直人在黑暗中、有光向他发现．他有恩惠、有怜悯、有公义。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 255,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多后书 6:3-6",
        "text": "我们凡事都不叫人有妨碍、免得这职分被人毁谤． 反倒在各样的事上、表明自己是　神的用人、就如在许多的忍耐、患难、穷乏、困苦、 鞭打、监禁、扰乱、勤劳、儆醒、不食、 廉洁、知识、恒忍、恩慈、圣灵的感化、无伪的爱心、",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 256,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "创世纪 24:14",
        "text": "我向那一个女子说、请你拿下水瓶来、给我水喝。他若说、请喝、我也给你的骆驼喝、愿那女子就作你所预定给你仆人以撒的妻、这样、我便知道你施恩给我主人了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 257,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 119:77",
        "text": "愿你的慈悲临到我、使我存活．因你的律法是我所喜爱的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 258,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以赛亚书 49:15",
        "text": "妇人焉能忘记他吃奶的婴孩、不怜恤他所生的儿子．即或有忘记的、我却不忘记你。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 259,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马太福音 7:1-2",
        "text": "你们不要论断人、免得你们被论断。 因为你们怎样论断人、也必怎样被论断。你们用甚么量器量给人、也必用甚么量器量给你们。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 260,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "彼得前书 4:10",
        "text": "各人要照所得的恩赐彼此服事、作　神百般恩赐的好管家．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 261,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "出埃及记 22:27",
        "text": "因他只有这一件当盖头、是他盖身的衣服、若是没有、他拿甚么睡觉呢．他哀求我、我就应允、因为我是有恩惠的。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 262,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 8:1",
        "text": "如今那些在基督耶稣里的、就不定罪了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 263,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路加福音 6:36",
        "text": "你们要慈悲、像你们的父慈悲一样。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 264,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "犹大书 1:22",
        "text": "有些人存疑心、你们要怜悯他们．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 265,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马可福音 1:41",
        "text": "耶稣动了慈心、就伸手摸他、说、我肯、你洁净了吧。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 266,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 9:15",
        "text": "因他对摩西说、『我要怜悯谁、就怜悯谁、要恩待谁、就恩待谁。』",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 267,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路加福音 6:38",
        "text": "你们要给人、就必有给你们的．并且用十足的升斗、连摇带按、上尖下流的、倒在你们怀里．因为你们用甚么量器量给人、也必用甚么量器量给你们。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 268,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "马太福音 5:9",
        "text": "使人和睦的人有福了．因为他们必称为　神的儿子。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 269,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "路加福音 12:33-34",
        "text": "你们要变卖所有的、赒济人．为自己预备永不坏的钱囊、用不尽的财宝在天上、就是贼不能近、虫不能蛀的地方。 因为你们的财宝在那里、你们的心也在那里．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 270,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 119:156",
        "text": "耶和华阿、你的慈悲本为大．求你照你的典章将我救活。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 271,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 103:2",
        "text": "我的心哪、你要称颂耶和华、不可忘记他的一切恩惠。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 272,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "雅各书 2:5",
        "text": "我亲爱的弟兄们请听、　神岂不是拣选了世上的贫穷人、叫他们在信上富足、并承受他所应许给那些爱他之人的国么。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 273,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以赛亚书 49:10",
        "text": "不饥不渴、炎热和烈日必不伤害他们、因为怜恤他们的、必引导他们、领他们到水泉旁边。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 274,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "诗篇 103:2-4",
        "text": "我的心哪、你要称颂耶和华、不可忘记他的一切恩惠。 他赦免你的一切罪孽、医治你的一切疾病。 他救赎你的命脱离死亡、以仁爱和慈悲为你的冠冕。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 275,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以弗所书 4:3",
        "text": "用和平彼此联络、竭力保守圣灵所赐合而为一的心。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 276,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多前书 12:25-26",
        "text": "免得身上分门别类．总要肢体彼此相顾。 若一个肢体受苦、所有的肢体就一同受苦．若一个肢体得荣耀、所有的肢体就一同快乐。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 277,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "耶利米书 1:5",
        "text": "我未将你造在腹中、我已晓得你、你未出母胎、我已分别你为圣．我已派你作列国的先知。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 278,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "申命记 16:17",
        "text": "各人要按自己的力量、照耶和华你　神所赐的福分、奉献礼物。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 279,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 13:9",
        "text": "像那不可奸淫、不可杀人、不可偷盗、不可贪婪、或有别的诫命、都包在爱人如己这一句话之内了。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 280,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多前书 10:24",
        "text": "无论何人、不要求自己的益处、乃要求别人的益处。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 281,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "帖撒罗尼迦前书 5:14",
        "text": "我们又劝弟兄们、要警戒不守规矩的人．勉励灰心的人．扶助软弱的人．也要向众人忍耐。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 282,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "哥林多前书 2:9",
        "text": "如经上所记、『　神为爱他的人所预备的、是眼睛未曾看见、耳朵未曾听见、人心也未曾想到的。』",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 283,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以赛亚书 49:15-16",
        "text": "妇人焉能忘记他吃奶的婴孩、不怜恤他所生的儿子．即或有忘记的、我却不忘记你。 看哪、我将你铭刻在我掌上、你的墙垣常在我眼前。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 284,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 3:1",
        "text": "这样说来、犹太人有甚么长处、割礼有甚么益处呢．",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 285,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "罗马书 15:4",
        "text": "从前所写的圣经、都是为教训我们写的、叫我们因圣经所生的忍耐和安慰、可以得着盼望。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 286,
        "category": "爱心",
        "categoryEn": "love",
        "icon": "❤️",
        "color": "#E74C3C",
        "reference": "以赛亚书 43:4",
        "text": "因我看你为宝为尊、又因我爱你、所以我使人代替你、使列邦人替换你的生命。",
        "question": "这节关于\"爱心\"的经文如何触动你的心？"
    },
    {
        "id": 287,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "希伯来书 11:1",
        "text": "信就是所望之事的实底、是未见之事的确据。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 288,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "希伯来书 11:6",
        "text": "人非有信、就不能得　神的喜悦．因为到　神面前来的人、必须信有神，且信他赏赐那寻求他的人。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 289,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马可福音 9:23",
        "text": "耶稣对他说、你若能信、在信的人、凡事都能。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 290,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马可福音 11:22-24",
        "text": "耶稣回答说、你们当信服　神。 我实在告诉你们、无论何人对这座山说、你挪开此地投在海里．他若心里不疑惑、只信他所说的必成、就必给他成了。 所以我告诉你们、凡你们祷告祈求的、无论是甚么、只要信是得着的、就必得着。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 291,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "罗马书 10:17",
        "text": "可见信道是从听道来的、听道是从基督的话来的。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 292,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "哥林多后书 5:7",
        "text": "因我们行事为人、是凭着信心、不是凭着眼见。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 293,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "以弗所书 2:8",
        "text": "你们得救是本乎恩、也因着信、这并不是出于自己、乃是　神所赐的．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 294,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 2:17",
        "text": "这样、信心若没有行为就是死的。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 295,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰一书 5:4",
        "text": "因为凡从　神生的、就胜过世界．使我们胜了世界的、就是我们的信心。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 296,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "创世纪 15:6",
        "text": "亚伯兰信耶和华、耶和华就以此为他的义。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 297,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "民数记 23:19",
        "text": "神非人、必不致说谎、也非人子、必不致后悔．他说话岂不照着行呢、他发言岂不要成就呢。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 298,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "申命记 31:6",
        "text": "你们当刚强壮胆、不要害怕、也不要畏惧他们、因为耶和华你的　神和你同去、他必不撇下你、也不丢弃你。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 299,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 37:3-5",
        "text": "你当倚靠耶和华而行善．住在地上、以他的信实为粮． 又要以耶和华为乐．他就将你心里所求的赐给你。 当将你的事交托耶和华、并倚靠他、他就必成全。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 300,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 56:3-4",
        "text": "我惧怕的时候要倚靠你。 我倚靠　神、我要赞美他的话．我倚靠　神、必不惧怕．血气之辈能把我怎么样呢。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 301,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 119:90",
        "text": "你的诚实存到万代。你坚定了地、地就长存。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 302,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "箴言 3:5",
        "text": "你要专心仰赖耶和华、不可倚靠自己的聪明．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 303,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "以赛亚书 7:9",
        "text": "以法莲的首城是撒玛利亚、撒玛利亚的首领是利玛利的儿子。你们若是不信、定然不得立稳。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 304,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "以赛亚书 26:4",
        "text": "你们当倚靠耶和华直到永远．因为耶和华是永久的磐石。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 305,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "哈巴谷书 2:4",
        "text": "迦勒底人自高自大、心不正直．惟义人因信得生。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 306,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 6:30",
        "text": "你们这小信的人哪、野地里的草、今天还在、明天就丢在炉里、　神还给他这样的妆饰、何况你们呢。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 307,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 17:20",
        "text": "耶稣说、是因你们的信心小．我实在告诉你们、你们若有信心像一粒芥菜种、就是对这座山说、你从这边挪到那边、他也必挪去．并且你们没有一件不能作的事了。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 308,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 21:21",
        "text": "耶稣回答说、我实在告诉你们、你们若有信心、不疑惑、不但能行无花果树上所行的事、就是对这座山说、你挪开此地、投在海里、也必成就。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 309,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "路加福音 17:6",
        "text": "主说、你们若有信心像一粒芥菜种、就是对这棵桑树说、你要拔起根来、栽在海里、他也必听从你们。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 310,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "罗马书 1:17",
        "text": "因为　神的义、正在这福音上显明出来．这义是本于信、以致于信．如经上所记、『义人必因信得生。』",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 311,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "罗马书 4:20-21",
        "text": "并且仰望　神的应许、总没有因不信、心里起疑惑．反倒因信、心里得坚固、将荣耀归给　神。 且满心相信、　神所应许的必能作成．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 312,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "罗马书 14:23",
        "text": "若有疑心而吃的、就必有罪．因为他吃、不是出于信心．凡不出于信心的都是罪。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 313,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "加拉太书 2:20",
        "text": "我已经与基督同钉十字架．现在活着的、不再是我、乃是基督在我里面活着．并且我如今在肉身活着、是因信　神的儿子而活、他是爱我、为我舍己。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 314,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "加拉太书 3:11",
        "text": "没有一个人靠着律法在　神面前称义、这是明显的．因为经上说、『义人必因信得生。』",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 315,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "腓立比书 1:6",
        "text": "我深信那在你们心里动了善工的、必成全这工、直到耶稣基督的日子．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 316,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 1:6",
        "text": "只要凭着信心求、一点不疑惑．因为那疑惑的人、就像海中的波浪、被风吹动翻腾。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 317,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 143:8",
        "text": "求你使我清晨得听你慈爱之言、因我倚靠你．求你使我知道当行的路、因我的心仰望你。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 318,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 112:7",
        "text": "他必不怕凶恶的信息．他心坚定、倚靠耶和华。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 319,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 9:10",
        "text": "耶和华阿、认识你名的人要倚靠你．因你没有离弃寻求你的人。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 320,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 40:4",
        "text": "那倚靠耶和华、不理会狂傲和偏向虚假之辈的、这人便为有福。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 321,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 118:8",
        "text": "投靠耶和华、强似倚赖人。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 322,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 31:14-15",
        "text": "耶和华阿、我仍旧倚靠你．我说、你是我的　神。 我终身的事在你手中．求你救我脱离仇敌的手、和那些逼迫我的人。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 323,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "箴言 16:20",
        "text": "谨守训言的、必得好处．倚靠耶和华的、便为有福。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 324,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "箴言 16:3",
        "text": "你所作的、要交托耶和华、你所谋的、就必成立。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 325,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "那鸿书 1:7",
        "text": "耶和华本为善、在患难的日子为人的保障．并且认得那些投靠他的人。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 326,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "罗马书 10:9",
        "text": "你若口里认耶稣为主、心里信　神叫他从死里复活、就必得救．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 327,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 31:14",
        "text": "耶和华阿、我仍旧倚靠你．我说、你是我的　神。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 328,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 20:7",
        "text": "有人靠车、有人靠马、但我们要提到耶和华我们　神的名。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 329,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "箴言 28:25",
        "text": "心中贪婪的、挑起争端．倚靠耶和华的、必得丰裕。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 330,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 27:13",
        "text": "我若不信在活人之地得见耶和华的恩惠、就早已丧胆了。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 331,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "箴言 30:5",
        "text": "神的言语、句句都是炼净的、投靠他的、他便作他们的盾牌。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 332,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰一书 5:14",
        "text": "我们若照他的旨意求甚么、他就听我们．这是我们向他所存坦然无惧的心。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 333,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "耶利米书 17:5",
        "text": "耶和华如此说、倚靠人血肉的膀臂、心中离弃耶和华的、那人有祸了．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 334,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "路加福音 16:10",
        "text": "人在最小的事上忠心、在大事上也忠心．在最小的事上不义、在大事上也不义。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 335,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 145:18",
        "text": "凡求告耶和华的、就是诚心求告他的、耶和华便与他们相近。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 336,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 27:14",
        "text": "要等候耶和华．当壮胆、坚固你的心．我再说、要等候耶和华。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 337,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 60:12",
        "text": "我们倚靠　神、才得施展大能、因为践踏我们敌人的就是他。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 338,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 6:26",
        "text": "你们看那天上的飞鸟、也不种、也不收、也不积蓄在仓里、你们的天父尚且养活他．你们不比飞鸟贵重得多么。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 339,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "希伯来书 13:8",
        "text": "耶稣基督、昨日今日一直到永远是一样的。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 340,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 146:3",
        "text": "你们不要倚靠君王、不要倚靠世人、他一点不能帮助。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 341,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 121:3",
        "text": "他必不叫你的脚摇动．保护你的必不打盹。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 342,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马可福音 9:24",
        "text": "孩子的父亲立时喊着说、我信．但我信不足、求主帮助。〔有古卷作立时流泪的喊着说〕",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 343,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 4:5",
        "text": "当献上公义的祭、又当倚靠耶和华。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 344,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 31:19",
        "text": "敬畏你投靠你的人、你为他们所积存的、在世人面前所施行的恩惠、是何等大呢。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 345,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 22:4",
        "text": "我们的祖宗倚靠你．他们倚靠你、你便解救他们。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 346,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 62:7",
        "text": "我的拯救、我的荣耀、都在乎　神．我力量的磐石、我的避难所、都在乎　神．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 347,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "提多书 3:5",
        "text": "他便救了我们、并不是因我们自己所行的义、乃是照他的怜悯、借着重生的洗、和圣灵的更新。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 348,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "箴言 11:28",
        "text": "倚仗自己财物的、必跌倒．义人必发旺如青叶。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 349,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "撒母耳记下 7:28",
        "text": "主耶和华阿、惟有你是　神．你的话是真实的、你也应许将这福气赐给仆人。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 350,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "腓立比书 4:11",
        "text": "我并不是因缺乏说这话、我无论在甚么景况、都可以知足、这是我已经学会了．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 351,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 73:25",
        "text": "除你以外、在天上我有谁呢．除你以外、在地上我也没有所爱慕的。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 352,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 14:31",
        "text": "耶稣赶紧伸手拉住他、说、你这小信的人哪、为甚么疑惑呢。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 353,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 28:17",
        "text": "他们见了耶稣就拜他．然而还有人疑惑。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 354,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "提摩太前书 2:8",
        "text": "我愿男人无忿怒、无争论、〔争论或作疑惑〕举起圣洁的手、随处祷告。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 355,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 2:26",
        "text": "身体没有灵魂是死的、信心没有行为也是死的。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 356,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马可福音 6:6",
        "text": "他也诧异他们不信、就往周围乡村教训人去了。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 357,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "路加福音 24:38",
        "text": "耶稣说、你们为甚么愁烦．为甚么心里起疑念呢。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 358,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马可福音 16:16",
        "text": "信而受洗的必然得救．不信的必被定罪。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 359,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "彼得后书 1:19",
        "text": "我们并有先知更确的预言、如同灯照在暗处．你们在这预言上留意、直等到天发亮晨星在你们心里出现的时候、才是好的。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 360,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 50:15",
        "text": "并要在患难之日求告我、我必搭救你．你也要荣耀我。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 361,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 27:13-14",
        "text": "我若不信在活人之地得见耶和华的恩惠、就早已丧胆了。 要等候耶和华．当壮胆、坚固你的心．我再说、要等候耶和华。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 362,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "罗马书 1:16",
        "text": "我不以福音为耻．这福音本是　神的大能、要救一切相信的、先是犹太人、后是希利尼人。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 363,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "申命记 28:66",
        "text": "你的性命必悬悬无定、你昼夜恐惧、自料性命难保。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 364,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 1:8",
        "text": "心怀二意的人、在他一切所行的路上、都没有定见。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 365,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "哥林多后书 5:21",
        "text": "神使那无罪的、〔无罪原文作不知罪〕替我们成为罪．好叫我们在他里面成为　神的义。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 366,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "罗马书 8:7",
        "text": "原来体贴肉体的、就是与　神为仇．因为不服　神的律法、也是不能服。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 367,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰福音 1:12",
        "text": "凡接待他的、就是信他名的人、他就赐他们权柄、作　神的儿女。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 368,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰一书 5:13",
        "text": "我将这些话写给你们信奉　神儿子之名的人、要叫你们知道自己有永生。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 369,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "彼得前书 5:8",
        "text": "务要谨守、儆醒．因为你们的仇敌魔鬼、如同吼叫的狮子、遍地游行、寻找可吞吃的人．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 370,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 21:22",
        "text": "你们祷告、无论求甚么、只要信、就必得着。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 371,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "路加福音 24:25",
        "text": "耶稣对他们说、无知的人哪．先知所说的一切话、你们的心、信得太迟钝了。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 372,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 17:17",
        "text": "耶稣说、嗳、这又不信又悖谬的世代阿、我在你们这里要到几时呢．我忍耐你们要到几时呢．把他带到我这里来吧。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 373,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "加拉太书 4:20",
        "text": "我巴不得现今在你们那里、改换口气、因我为你们心里作难。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 374,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "以弗所书 4:14",
        "text": "使我们不再作小孩子、中了人的诡计、和欺骗的法术、被一切异教之风摇动、飘来飘去、就随从各样的异端．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 375,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 1:6-8",
        "text": "只要凭着信心求、一点不疑惑．因为那疑惑的人、就像海中的波浪、被风吹动翻腾。 这样的人、不要想从主那里得甚么． 心怀二意的人、在他一切所行的路上、都没有定见。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 376,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "路加福音 11:20",
        "text": "我若靠着　神的能力赶鬼、这就是　神的国临到你们了。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 377,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "使徒行传 17:11",
        "text": "这地方的人、贤于帖撒罗尼迦的人、甘心领受这道、天天考查圣经、要晓得这道是与不是。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 378,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 6:6",
        "text": "你祷告的时候、要进你的内屋、关上门、祷告你在暗中的父、你父在暗中察看、必然报答你。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 379,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 6:7",
        "text": "你们祷告、不可像外邦人、用许多重复话．他们以为话多了必蒙垂听。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 380,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "歌罗西书 4:2",
        "text": "你们要恒切祷告、在此儆醒感恩．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 381,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "耶利米书 33:3",
        "text": "你求告我、我就应允你、并将你所不知道、又大又难的事、指示你。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 382,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰福音 15:7",
        "text": "你们若常在我里面、我的话也常在你们里面、凡你们所愿意的、祈求就给你们成就。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 383,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "耶利米书 29:12",
        "text": "你们要呼求我、祷告我、我就应允你们。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 384,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 26:41",
        "text": "总要儆醒祷告、免得入了迷惑．你们心灵固然愿意、肉体却软弱了。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 385,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "以弗所书 6:18",
        "text": "靠着圣灵、随时多方祷告祈求、并要在此儆醒不倦、为众圣徒祈求、",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 386,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "路加福音 18:1",
        "text": "耶稣设一个比喻、是要人常常祷告、不可灰心．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 387,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "帖撒罗尼迦前书 5:16-18",
        "text": "要常常喜乐． 不住的祷告． 凡事谢恩．因为这是　神在基督耶稣里向你们所定的旨意。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 388,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰一书 5:15",
        "text": "既然知道他听我们一切所求的、就知道我们所求于他的无不得着。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 389,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰福音 10:28-29",
        "text": "我又赐给他们永生．他们永不灭亡、谁也不能从我手里把他们夺去。 我父把羊赐给我、他比万有都大．谁也不能从我父手里把他们夺去。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 390,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 5:3",
        "text": "耶和华阿、早晨你必听我的声音．早晨我必向你陈明我的心意、并要儆醒。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 391,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "使徒行传 1:14",
        "text": "这些人、同着几个妇人、和耶稣的母亲马利亚、并耶稣的弟兄、都同心合意的恒切祷告。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 392,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 18:6",
        "text": "我在急难中求告耶和华、向我的　神呼求．他从殿中听了我的声音、我在他面前的呼求入了他的耳中。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 393,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 4:3",
        "text": "你们求也得不着、是因为你们妄求、要浪费在你们的宴乐中。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 394,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰福音 14:13",
        "text": "你们奉我的名、无论求甚么、我必成就、叫父因儿子得荣耀。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 395,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰福音 15:16",
        "text": "不是你们拣选了我、是我拣选了你们、并且分派你们去结果子、叫你们的果子常存．使你们奉我的名、无论向父求甚么、他就赐给你们。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 396,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 39:12",
        "text": "耶和华阿．求你听我的祷告、留心听我的呼求．我流泪、求你不要静默无声．因为我在你面前是客旅、是寄居的、像我列祖一般。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 397,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 141:2",
        "text": "愿我的祷告、如香陈列在你面前．愿我举手祈求、如献晚祭。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 398,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 66:17",
        "text": "我曾用口求告他、我的舌头、也称他为高。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 399,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 5:13",
        "text": "你们中间有受苦的呢、他就该祷告。有喜乐的呢、他就该歌颂。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 400,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "箴言 15:29",
        "text": "耶和华远离恶人．却听义人的祷告。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 401,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "彼得前书 4:7",
        "text": "万物的结局近了．所以你们要谨慎自守、儆醒祷告。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 402,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "使徒行传 4:31",
        "text": "祷告完了、聚会的地方震动．他们就都被圣灵充满、放胆讲论　神的道。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 403,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "使徒行传 16:25",
        "text": "约在半夜、保罗和西拉、祷告唱诗赞美　神．众囚犯也侧耳而听。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 404,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 118:5",
        "text": "我在急难中求告耶和华、他就应允我、把我安置在宽阔之地。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 405,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 17:6",
        "text": "神阿、我曾求告你、因为你必应允我．求你向我侧耳、听我的言语。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 406,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 19:14",
        "text": "耶和华我的磐石、我的救赎主阿、愿我口中的言语、心里的意念、在你面前蒙悦纳。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 407,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 7:7",
        "text": "你们祈求、就给你们．寻找、就寻见．叩门、就给你们开门。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 408,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "提摩太前书 2:1-2",
        "text": "我劝你第一要为万人恳求、祷告、代求、祝谢． 为君王和一切在位的也该如此．使我们可以敬虔端正、平安无事的度日。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 409,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 102:17",
        "text": "他垂听穷人的祷告、并不藐视他们的祈求。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 410,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约伯记 22:27",
        "text": "你要祷告他、他就听你．你也要还你的愿。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 411,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马太福音 7:11",
        "text": "你们虽然不好、尚且知道拿好东西给儿女、何况你们在天上的父、岂不更把好东西给求他的人么。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 412,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰福音 9:31",
        "text": "我们知道　神不听罪人．惟有敬奉神遵行他旨意的、　神才听他。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 413,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "马可福音 1:35",
        "text": "次日早晨、天未亮的时候、耶稣起来、到旷野地方去、在那里祷告。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 414,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 66:18",
        "text": "我若心里注重罪孽、主必不听。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 415,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "希伯来书 5:7",
        "text": "基督在肉体的时候、既大声哀哭、流泪祷告恳求那能救他免死的主、就因他的虔诚、蒙了应允。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 416,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰福音 14:15",
        "text": "你们若爱我、就必遵守我的命令。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 417,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 119:30",
        "text": "我拣选了忠信的道、将你的典章摆在我面前。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 418,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "彼得前书 1:14",
        "text": "你们既作顺命的儿女、就不要效法从前蒙昧无知的时候、那放纵私欲的样子。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 419,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰一书 5:3",
        "text": "我们遵守　神的诫命、这就是爱他了．并且他的诫命不是难守的。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 420,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "路加福音 11:28",
        "text": "耶稣说、是、却还不如听　神之道而遵守的人有福。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 421,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "腓立比书 2:8",
        "text": "既有人的样子、就自己卑微、存心顺服、以至于死、且死在十字架上。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 422,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰一书 5:14-15",
        "text": "我们若照他的旨意求甚么、他就听我们．这是我们向他所存坦然无惧的心。 既然知道他听我们一切所求的、就知道我们所求于他的无不得着。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 423,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "出埃及记 19:5",
        "text": "如今你们若实在听从我的话、遵守我的约、就要在万民中作属我的子民、因为全地都是我的．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 424,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "约翰一书 3:24",
        "text": "遵守　神命令的、就住在　神里面．　神也住在他里面。我们所以知道　神住在我们里面、是因他所赐给我们的圣灵。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 425,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "雅各书 1:22",
        "text": "只是你们要行道、不要单单听道、自己欺哄自己．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 426,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 119:60",
        "text": "我急忙遵守你的命令、并不迟延。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 427,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 143:10",
        "text": "求你指教我遵行你的旨意、因你是我的　神．你的灵本为善．求你引我到平坦之地。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 428,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "诗篇 112:1",
        "text": "你们要赞美耶和华。敬畏耶和华、甚喜爱他命令的、这人便为有福。",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 429,
        "category": "信心",
        "categoryEn": "faith",
        "icon": "✝️",
        "color": "#9B59B6",
        "reference": "哥林多后书 10:5",
        "text": "将各样的计谋、各样拦阻人认识　神的那些自高之事、一概攻破了、又将人所有的心意夺回、使他都顺服基督．",
        "question": "这节关于\"信心\"的经文如何触动你的心？"
    },
    {
        "id": 430,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "腓立比书 4:13",
        "text": "我靠着那加给我力量的、凡事都能作。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 431,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 40:31",
        "text": "但那等候耶和华的、必从新得力、他们必如鹰展翅上腾、他们奔跑却不困倦、行走却不疲乏。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 432,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 41:10",
        "text": "你不要害怕、因为我与你同在．不要惊惶、因为我是你的　神．我必坚固你、我必帮助你、我必用我公义的右手扶持你。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 433,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 27:1",
        "text": "〔大卫的诗。〕耶和华是我的亮光、是我的拯救．我还怕谁呢．耶和华是我性命的保障．〔保障或作力量〕我还惧谁呢。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 434,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 28:7",
        "text": "耶和华是我的力量、是我的盾牌．我心里倚靠他、就得帮助．所以我心中欢乐．我必用诗歌颂赞他。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 435,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 31:24",
        "text": "凡仰望耶和华的人、你们都要壮胆、坚固你们的心。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 436,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "尼希米记 8:10",
        "text": "又对他们说、你们去吃肥美的、喝甘甜的、有不能预备的、就分给他．因为今日是我们主的圣日．你们不要忧愁、因靠耶和华而得的喜乐是你们的力量。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 437,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "撒迦利亚书 4:6",
        "text": "他对我说、这是耶和华指示所罗巴伯的．万军之耶和华说、不是倚靠势力、不是倚靠才能、乃是倚靠我的灵、方能成事。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 438,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "提摩太后书 1:7",
        "text": "因为　神赐给我们、不是胆怯的心、乃是刚强、仁爱、谨守的心。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 439,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以弗所书 6:10",
        "text": "我还有末了的话、你们要靠着主、倚赖他的大能大力、作刚强的人。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 440,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "出埃及记 15:2",
        "text": "耶和华是我的力量、我的诗歌、也成了我的拯救．这是我的　神、我要赞美他、是我父亲的　神、我要尊崇他。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 441,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "申命记 20:4",
        "text": "因为耶和华你们的　神与你们同去、要为你们与仇敌争战、拯救你们。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 442,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约书亚记 1:9",
        "text": "我岂没有吩咐你么．你当刚强壮胆．不要惧怕、也不要惊惶、因为你无论往那里去、耶和华你的　神必与你同在。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 443,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "历代志上 16:11",
        "text": "要寻求耶和华与他的能力．时常寻求他的面。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 444,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 18:32-34",
        "text": "惟有那以力量束我的腰、使我行为完全的、他是　神。 他使我的脚快如母鹿的蹄、又使我在高处安稳。 他教导我的手能以争战、甚至我的膀臂能开铜弓。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 445,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 29:11",
        "text": "耶和华必赐力量给他的百姓．耶和华必赐平安的福给他的百姓。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 446,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 46:1-3",
        "text": "〔可拉后裔的诗歌、交与伶长、调用女音。〕　神是我们的避难所、是我们的力量、是我们在患难中随时的帮助。 所以地虽改变、山虽摇动到海心、 其中的水虽匉訇翻腾、山虽因海涨而战抖、我们也不害怕。〔细拉〕",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 447,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 68:35",
        "text": "神阿、你从圣所显为可畏．以色列的　神、是那将力量权能赐给他百姓的。　神是应当称颂的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 448,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 105:4",
        "text": "要寻求耶和华与他的能力、时常寻求他的面。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 449,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 118:14",
        "text": "耶和华是我的力量、是我的诗歌．他也成了我的拯救。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 450,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 12:2",
        "text": "看哪、　神是我的拯救．我要倚靠他、并不惧怕．因为主耶和华是我的力、量、是我的诗歌．他也成了我的拯救。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 451,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 25:4",
        "text": "因为当强暴人催逼人的时候、如同暴风直吹墙壁、你就作贫穷人的保障、作困乏人急难中的保障、作躲暴风之处、作避炎热的阴凉。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 452,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 33:2",
        "text": "耶和华阿、求你施恩于我们．我们等候你．求你每早晨作我们的膀臂、遭难的时候、为我们的拯救。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 453,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 35:3-4",
        "text": "你们要使软弱的手坚壮、无力的膝稳固。 对胆怯的人说、你们要刚强、不要惧怕．看哪、你们的　神必来报仇、必来施行极大的报应、他必来拯救你们。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 454,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 40:28-29",
        "text": "你岂不曾知道么、你岂不曾听见么、永在的　神耶和华、创造地极的主、并不疲乏、也不困倦．他的智慧无法测度。 疲乏的、他赐能力．软弱的、他加力量．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 455,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 43:1-2",
        "text": "雅各阿、创造你的耶和华、以色列阿、造成你的那位、现在如此说、你不要害怕、因为我救赎了你．我曾提你的名召你、你是属我的。 你从水中经过、我必与你同在．你趟过江河、水必不漫过你．你从火中行过、必不被烧、火焰也不着在你身上。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 456,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哈巴谷书 3:19",
        "text": "主耶和华是我的力量．他使我的脚快如母鹿的蹄、又使我稳行在高处。这歌交与伶长、用丝弦的乐器。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 457,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "歌罗西书 1:11",
        "text": "照他荣耀的权能、得以在各样的力上加力、好叫你们凡事欢欢喜喜的忍耐宽容．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 458,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "彼得前书 4:11",
        "text": "若有讲道的、要按着　神的圣言讲．若有服事人的、要按着　神所赐的力量服事．叫　神在凡事上因耶稣基督得荣耀．原来荣耀权能都是他的、直到永永远远。阿们。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 459,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "申命记 31:23",
        "text": "耶和华嘱咐嫩的儿子约书亚说、你当刚强壮胆、因为你必领以色列人进我所起誓应许他们的地、我必与你同在。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 460,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "撒母耳记下 10:12",
        "text": "我们都当刚强、为本国的民和　神的城邑作大丈夫．愿耶和华凭他的意旨而行。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 461,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 24:10",
        "text": "你在患难之日若胆怯、你的力量就微小。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 462,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "腓立比书 1:28",
        "text": "凡事不怕敌人的惊吓．这是证明他们沉沦、你们得救、都是出于　神。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 463,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "提摩太前书 1:7",
        "text": "想要作教法师、却不明白自己所讲说的、所论定的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 464,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "但以理书 10:19",
        "text": "他说、大蒙眷爱的人哪、不要惧怕、愿你平安、你总要坚强．他一向我说话、我便觉得有力量、说、我主请说、因你使我有力量。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 465,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 23:2",
        "text": "他使我躺卧在青草地上、领我在可安歇的水边。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 466,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以斯拉记 10:4",
        "text": "你起来、这是你当办的事、我们必帮助你、你当奋勉而行。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 467,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 31:2",
        "text": "求你侧耳而听、快快救我、作我坚固的磐石、拯救我的保障。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 468,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 138:3",
        "text": "我呼求的日子、你就应允我、鼓励我、使我心里有能力。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 469,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "申命记 31:3",
        "text": "耶和华你们的　神必引导你们过去、将这些国民在你们面前灭绝、你们就得他们的地．约书亚必引导你们过去、正如耶和华所说的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 470,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "申命记 31:2",
        "text": "说、我现在一百二十岁了、不能照常出入、耶和华也曾对我说、你必不得过这约但河。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 471,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "历代志上 19:13",
        "text": "我们都当刚强、为本国的民、和　神的城邑、作大丈夫．愿耶和华凭他的意旨而行。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 472,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "列王记上 2:2",
        "text": "我现在要走世人必走的路、所以你当刚强作大丈夫、",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 473,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "撒母耳记下 7:27",
        "text": "万军之耶和华以色列的　神阿、因你启示你的仆人、说、我必为你建立家室、所以仆人大胆向你如此祈祷。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 474,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "腓立比书 1:20",
        "text": "照着我所切慕所盼望的、没有一事叫我羞愧、只要凡事放胆．无论是生、是死、总叫基督在我身上照常显大。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 475,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "历代志上 28:20",
        "text": "大卫又对他儿子所罗门说、你当刚强壮胆去行．不要惧怕、也不要惊惶．因为耶和华　神就是我的　神、与你同在、他必不撇下你、也不丢弃你、直到耶和华殿的工作都完毕了。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 476,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "但以理书 11:25",
        "text": "他必奋勇向前、率领大军攻击南方王、南方王也必以极大极强的军兵与他争战、却站立不住、因为有人设计谋害南方王。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 477,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 54:4",
        "text": "不要惧怕、因你必不致蒙羞．也不要抱愧、因你必不至受辱．你必忘记幼年的羞愧、不再记念你寡居的羞辱。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 478,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "使徒行传 4:13",
        "text": "他们见彼得约翰的胆量、又看出他们原是没有学问的小民、就希奇、认明他们是跟过耶稣的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 479,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "马太福音 14:29",
        "text": "耶稣说、你来吧。彼得就从船上下去、在水面上走、要到耶稣那里去．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 480,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "加拉太书 3:27",
        "text": "你们受洗归入基督的、都是披戴基督了。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 481,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多前书 1:2",
        "text": "写信给在哥林多　神的教会、就是在基督耶稣里成圣、蒙召作圣徒的、以及所有在各处求告我主耶稣基督之名的人．基督是他们的主、也是我们的主．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 482,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 32:7",
        "text": "你是我藏身之处．你必保佑我脱离苦难、以得救的乐歌、四面环绕我。〔细拉〕",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 483,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "历代志上 22:13",
        "text": "我在困难之中为耶和华的殿预备了金子十万他连得、银子一百万他连得、铜和铁、多得无法可称．我也预备了木头、石头、你还可以增添。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 484,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 34:7",
        "text": "耶和华的使者、在敬畏他的人四围安营、搭救他们。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 485,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 18:10",
        "text": "耶和华的名、是坚固台．义人奔入、便得安稳。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 486,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 138:7",
        "text": "我虽行在患难中、你必将我救活．我的仇敌发怒、你必伸手抵挡他们、你的右手也必救我。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 487,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "提摩太后书 4:18",
        "text": "主必救我脱离诸般的凶恶、也必救我进他的天国。愿荣耀归给他、直到永永远远。阿们。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 488,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 17:8",
        "text": "求你保护我、如同保护眼中的瞳人．将我隐藏在你翅膀的荫下、",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 489,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "路加福音 10:19",
        "text": "我已经给你们权柄、可以践踏蛇和蝎子、又胜过仇敌一切的能力、断没有甚么能害你们。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 490,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 16:1",
        "text": "〔大卫的金诗。〕　神阿、求你保佑我、因为我投靠你。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 491,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以弗所书 6:11",
        "text": "要穿戴　神所赐的全副军装、就能抵挡魔鬼的诡计。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 492,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 46:4",
        "text": "直到你们年老、我仍这样、直到你们发白、我仍怀搋。我已造作、也必保抱、我必怀抱、也必拯救。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 493,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 34:22",
        "text": "耶和华救赎他仆人的灵魂．凡投靠他的、必不至定罪。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 494,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 119:114",
        "text": "你是我藏身之处、又是我的盾牌．我甚仰望你的话语。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 495,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 91:10",
        "text": "祸患必不临到你、灾害也不挨近你的帐棚。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 496,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 18:35-36",
        "text": "你把你的救恩给我作盾牌．你的右手扶持我．你的温和使我为大。 你使我脚下的地步宽阔．我的脚未曾滑跌。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 497,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 91:4",
        "text": "他必用自己的翎毛遮蔽你．你要投靠在他的翅膀底下．他的诚实、是大小的盾牌。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 498,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "撒母耳记下 22:32",
        "text": "除了耶和华、谁是　神呢．除了我们的　神、谁是磐石呢。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 499,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约翰一书 5:18",
        "text": "我们知道凡从　神生的必不犯罪．从　神生的必保守自己、〔有古卷作那从　神生的必保护他〕那恶者也就无法害他。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 500,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 1:17",
        "text": "学习行善．寻求公平、解救受欺压的、给孤儿伸冤、为寡妇辨屈。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 501,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 5:11",
        "text": "凡投靠你的、愿他们喜乐、时常欢呼、因为你护庇他们．又愿那爱你名的人、都靠你欢欣。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 502,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "创世纪 28:15",
        "text": "我也与你同在、你无论往那里去、我必保佑你、领你归回这地、总不离弃你、直到我成全了向你所应许的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 503,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以西结书 2:6",
        "text": "人子阿、虽有荆棘和蒺藜在你那里、你又住在蝎子中间、总不要怕他们、也不要怕他们的话、他们虽是悖逆之家、还不要怕他们的话、也不要因他们的脸色惊惶。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 504,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约翰一书 4:4",
        "text": "小子们哪、你们是属　神的、并且胜了他们．因为那在你们里面的、比那在世界上的更大。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 505,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约翰一书 5:19",
        "text": "我们知道我们是属　神的、全世界都卧在那恶者手下。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 506,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "雅各书 4:7",
        "text": "故此你们要顺服　神．务要抵挡魔鬼、魔鬼就必离开你们逃跑了。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 507,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 12:21",
        "text": "义人不遭灾害．恶人满受祸患。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 508,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "提摩太前书 5:8",
        "text": "人若不看顾亲属、就是背了真道、比不信的人还不好．不看顾自己家里的人、更是如此。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 509,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 14:26",
        "text": "敬畏耶和华的、大有倚靠．他的儿女、也有避难所。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 510,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 140:4",
        "text": "耶和华阿、求你拯救我、脱离恶人的手、保护我、脱离强暴的人．他们图谋推我跌倒。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 511,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 19:23",
        "text": "敬畏耶和华的、得着生命．他必恒久知足、不遭祸患。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 512,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 91:9-10",
        "text": "耶和华是我的避难所．你已将至高者当你的居所． 祸患必不临到你、灾害也不挨近你的帐棚。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 513,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 12:5",
        "text": "耶和华说、因为困苦人的冤屈、和贫穷人的叹息、我现在要起来、把他安置在他所切慕的稳妥之地。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 514,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "玛拉基书 3:6",
        "text": "因我耶和华是不改变的、所以你们雅各之子没有灭亡。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 515,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 4:8",
        "text": "我必安然躺下睡觉、因为独有你耶和华使我安然居住。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 516,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "啟示录 3:10",
        "text": "你既遵守我忍耐的道、我必在普天下人受试炼的时候、保守你免去你的试炼。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 517,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 4:6",
        "text": "不可离弃智慧、智慧就护卫你．要爱他、他就保守你。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 518,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "马太福音 4:7",
        "text": "耶稣对他说、经上又记着说、『不可试探主你的　神。』",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 519,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多前书 15:57",
        "text": "感谢　神、使我们借着我们的主耶稣基督得胜。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 520,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 54:17",
        "text": "凡为攻击你造成的器械、必不利用．凡在审判时兴起用舌攻击你的、你必定他为有罪．这是耶和华仆人的产业、是他们从我所得的义．这是耶和华说的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 521,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 21:31",
        "text": "马是为打仗之日预备的．得胜乃在乎耶和华。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 522,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多前书 15:55",
        "text": "死阿、你得胜的权势在那里．死阿、你的毒钩在那里．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 523,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多后书 10:4",
        "text": "我们争战的兵器、本不是属血气的、乃是在　神面前有能力、可以攻破坚固的营垒、",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 524,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "诗篇 108:13",
        "text": "我们倚靠　神、才得施展大能、因为践踏我们敌人的就是他。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 525,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多后书 2:14",
        "text": "感谢　神、常帅领我们在基督里夸胜、并借着我们在各处显扬那因认识基督而有的香气。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 526,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "帖撒罗尼迦前书 5:23-24",
        "text": "愿赐平安的　神、亲自使你们全然成圣．又愿你们的灵、与魂、与身子、得蒙保守、在我主耶稣基督降临的时候、完全无可指摘。 那召你们的本是信实的、他必成就这事。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 527,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "啟示录 12:11",
        "text": "弟兄胜过他、是因羔羊的血、和自己所见证的道．他们虽至于死、也不爱惜性命。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 528,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "列王记下 5:1",
        "text": "亚兰王的元帅乃缦、在他主人面前为尊为大、因耶和华曾借他使亚兰人得胜．他又是大能的勇士、只是长了大痲疯。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 529,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "罗马书 6:14",
        "text": "罪必不能作你们的主．因你们不在律法之下、乃在恩典之下。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 530,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约书亚记 10:8",
        "text": "耶和华对约书亚说、不要怕他们、因为我已将他们交在你手里、他们无一人能在你面前站立得住。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 531,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "提摩太后书 2:15",
        "text": "你当竭力、在　神面前得蒙喜悦、作无愧的工人、按着正意分解真理的道。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 532,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "创世纪 18:14",
        "text": "耶和华岂有难成的事么．到了日期、明年这时候、我必回到你这里、撒拉必生一个儿子。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 533,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "希伯来书 4:12",
        "text": "神的道是活泼的、是有功效的、比一切两刃的剑更快、甚至魂与灵、骨节与骨髓、都能刺入剖开、连心中的思念和主意、都能辨明。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 534,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约翰福音 14:6",
        "text": "耶稣说、我就是道路、真理、生命．若不借着我、没有人能到父那里去。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 535,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约翰一书 3:8",
        "text": "犯罪的是属魔鬼、因为魔鬼从起初就犯罪。　神的儿子显现出来、为要除灭魔鬼的作为。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 536,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以弗所书 2:10",
        "text": "我们原是他的工作、在基督耶稣里造成的、为要叫我们行善、就是　神所预备叫我们行的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 537,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约书亚记 1:7",
        "text": "只要刚强、大大壮胆、谨守遵行我仆人摩西所吩咐你的一切律法．不可偏离左右、使你无论往那里去、都可以顺利。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 538,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "使徒行传 2:27",
        "text": "因你必不将我的灵魂撇在阴间、也不叫你的圣者见朽坏。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 539,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "历代志下 32:7",
        "text": "你们当刚强壮胆、不要因亚述王和跟随他的大军恐惧、惊慌、因为与我们同在的、比与他们同在的更大．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 540,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "提摩太后书 4:7",
        "text": "那美好的仗我已经打过了．当跑的路我已经跑尽了．所信的道我已经守住了．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 541,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以赛亚书 55:9",
        "text": "天怎样高过地、照样我的道路、高过你们的道路、我的意念、高过你们的意念。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 542,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "啟示录 11:15",
        "text": "第七位天使吹号、天上就有大声音说、世上的国、成了我主和主基督的国．他要作王、直到永永远远。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 543,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "历代志下 32:8",
        "text": "与他们同在的是肉臂、与我们同在的是耶和华我们的　神、他必帮助我们、为我们争战．百姓就靠犹大王希西家的话、安然无惧了。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 544,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "腓立比书 1:12-14",
        "text": "弟兄们、我愿意你们知道、我所遭遇的事、更是叫福音兴旺． 以致我受的捆锁、在御营全军、和其余的人中、已经显明是为基督的缘故。 并且那在主里的弟兄、多半因我受的捆锁、就笃信不疑、越发放胆传　神的道、无所惧怕。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 545,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "箴言 28:1",
        "text": "恶人虽无人追赶也逃跑、义人却胆壮像狮子。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 546,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "啟示录 21:6-7",
        "text": "他又对我说、都成了。我是阿拉法、我是俄梅戛、我是初、我是终。我要将生命泉的水白白赐给那口渴的人喝。 得胜的、必承受这些为业．我要作他的　神、他要作我的儿子。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 547,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "使徒行传 28:15",
        "text": "那里的弟兄们、一听见我们的信息、就出来到亚比乌市、和三馆地方迎接我们．保罗见了他们、就感谢　神、放心壮胆。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 548,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "民数记 13:30",
        "text": "迦勒在摩西面前安抚百姓、说、我们立刻上去得那地吧、我们足能得胜。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 549,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多前书 15:57-58",
        "text": "感谢　神、使我们借着我们的主耶稣基督得胜。 所以我亲爱的弟兄们、你们务要坚固不可摇动、常常竭力多作主工、因为知道你们的劳苦、在主里面不是徒然的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 550,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约书亚记 2:11",
        "text": "我们一听见这些事、心就消化了。因你们的缘故、并无一人有胆气．耶和华你们的　神、本是上天下地的　神。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 551,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多前书 15:55-57",
        "text": "死阿、你得胜的权势在那里．死阿、你的毒钩在那里． 死的毒钩就是罪．罪的权势就是律法。 感谢　神、使我们借着我们的主耶稣基督得胜。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 552,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "希伯来书 10:36",
        "text": "你们必须忍耐、使你们行完了　神的旨意、就可以得着所应许的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 553,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "希伯来书 12:7",
        "text": "你们所忍受的、是　神管教你们、待你们如同待儿子．焉有儿子不被父亲管教的呢。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 554,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "希伯来书 12:1",
        "text": "我们既有这许多的见证人、如同云彩围着我们、就当放下各样的重担、脱去容易缠累我们的罪、存心忍耐、奔那摆在我们前头的路程、",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 555,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "路加福音 12:4",
        "text": "我的朋友、我对你们说、那杀身体以后、不能再作甚么的、不要怕他们。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 556,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "撒母耳记下 22:3-4",
        "text": "我的　神、我的磐石、我所投靠的．他是我的盾牌、是拯救我的角、是我的高台、是我的避难所．我的救主阿、你是救我脱离强暴的。 我要求告当赞美的耶和华、这样、我必从仇敌手中被救出来。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 557,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多前书 9:24",
        "text": "岂不知在场上赛跑的都跑、但得奖赏的只有一人．你们也当这样跑、好叫你们得着奖赏。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 558,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "雅各书 1:25",
        "text": "惟有详细察看那全备使人自由之律法的、并且时常如此、这人既不是听了就忘、乃是实在行出来、就在他所行的事上必然得福。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 559,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "罗马书 2:7",
        "text": "凡恒心行善、寻求荣耀尊贵、和不能朽坏之福的、就以永生报应他们．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 560,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "帖撒罗尼迦后书 3:5",
        "text": "愿主引导你们的心、叫你们爱　神并学基督的忍耐。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 561,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "马太福音 24:13",
        "text": "惟有忍耐到底的、必然得救。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 562,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "彼得前书 2:20",
        "text": "你们若因犯罪受责打、能忍耐、有甚么可夸的呢．但你们若因行善受苦、能忍耐、这在　神看是可喜爱的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 563,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约翰福音 8:32",
        "text": "你们必晓得真理、真理必叫你们得以自由。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 564,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "啟示录 1:9",
        "text": "我约翰就是你们的弟兄、和你们在耶稣的患难、国度、忍耐里一同有分．为　神的道、并为给耶稣作的见证、曾在那名叫拔摩的海岛上。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 565,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "希伯来书 6:15",
        "text": "这样、亚伯拉罕既恒久忍耐、就得了所应许的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 566,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "啟示录 14:12",
        "text": "圣徒的忍耐就在此．他们是守　神诫命、和耶稣真道的。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 567,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "帖撒罗尼迦后书 1:4",
        "text": "甚至我们在　神的各教会里为你们夸口、都因你们在所受的一切逼迫患难中、仍旧存忍耐和信心．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 568,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "以弗所书 6:17",
        "text": "并戴上救恩的头盔、拿着圣灵的宝剑、就是　神的道．",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 569,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "哥林多后书 1:6",
        "text": "我们受患难呢、是为叫你们得安慰得拯救．我们得安慰呢、也是为叫你们得安慰．这安慰能叫你们忍受我们所受的那样苦楚。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 570,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "帖撒罗尼迦前书 1:3",
        "text": "在　神我们的父面前、不住的记念你们因信心所作的工夫、因爱心所受的劳苦、因盼望我们主耶稣基督所存的忍耐。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 571,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "约翰福音 8:47",
        "text": "出于　神的、必听　神的话．你们不听、因为你们不是出于　神。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 572,
        "category": "力量",
        "categoryEn": "strength",
        "icon": "💪",
        "color": "#F39C12",
        "reference": "啟示录 2:19",
        "text": "我知道你的行为、爱心、信心、勤劳、忍耐．又知道你末后所行的善事、比起初所行的更多。",
        "question": "这节关于\"力量\"的经文如何触动你的心？"
    },
    {
        "id": 573,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 3:5-6",
        "text": "你要专心仰赖耶和华、不可倚靠自己的聪明． 在你一切所行的事上、都要认定他、他必指引你的路。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 574,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 9:10",
        "text": "敬畏耶和华、是智慧的开端．认识至圣者、便是聪明。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 575,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 4:7",
        "text": "智慧为首．所以要得智慧．在你一切所得之内、必得聪明。〔或作用你一切所得的去换聪明〕。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 576,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 2:6",
        "text": "因为、耶和华赐人智慧．知识和聪明都由他口而出．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 577,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 19:20",
        "text": "你要听劝教、受训诲、使你终久有智慧。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 578,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "雅各书 1:5",
        "text": "你们中间若有缺少智慧的、应当求那厚赐与众人、也不斥责人的　神、主就必赐给他。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 579,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "雅各书 3:17",
        "text": "惟独从上头来的智慧、先是清洁、后是和平、温良柔顺、满有怜悯、多结善果、没有偏见、没有假冒。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 580,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "传道书 7:12",
        "text": "因为智慧护庇人、好像银钱护庇人一样．惟独智慧能保全智慧人的生命、这就是知识的益处。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 581,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "但以理书 2:20-21",
        "text": "但以理说、　神的名是应当称颂的、从亘古直到永远、因为智慧能力都属乎他． 他改变时候、日期、废王、立王、将智慧赐与智慧人、将知识赐与聪明人．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 582,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "歌罗西书 2:2-3",
        "text": "要叫他们的心得安慰、因爱心互相联络、以致丰丰足足在悟性中有充足的信心、使他们真知　神的奥秘、就是基督． 所积蓄的一切智慧知识、都在他里面藏着。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 583,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约伯记 12:12-13",
        "text": "年老的有智慧、寿高的有知识。 在　神有智慧和能力．他有谋略和知识。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 584,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 19:7-8",
        "text": "耶和华的律法全备、能苏醒人心．耶和华的法度确定、能使愚人有智慧。 耶和华的训词正直、能快活人的心．耶和华的命令清洁、能明亮人的眼目。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 585,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 111:10",
        "text": "敬畏耶和华是智慧的开端．凡遵行他命令的、是聪明人．耶和华是永远当赞美的。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 586,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 1:7",
        "text": "敬畏耶和华是知识的开端．愚妄人藐视智慧和训诲。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 587,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 3:13-14",
        "text": "得智慧、得聪明的、这人便为有福。 因为得智慧胜过得银子、其利益强如精金．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 588,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 8:10-11",
        "text": "你们当受我的教训、不受白银．宁得知识、胜过黄金。 因为智慧比珍珠〔或作红宝石〕更美．一切可喜爱的、都不足与比较。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 589,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 11:2",
        "text": "骄傲来、羞耻也来．谦逊人却有智慧。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 590,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 13:10",
        "text": "骄傲只启争竞．听劝言的、却有智慧。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 591,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 15:33",
        "text": "敬畏耶和华、是智慧的训诲．尊荣以前、必有谦卑。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 592,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 16:16",
        "text": "得智慧胜似得金子．选聪明强如选银子。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 593,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 18:15",
        "text": "聪明人的心得知识．智慧人的耳求知识。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 594,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 23:23",
        "text": "你当买真理．就是智慧、训诲、和聪明、也都不可卖。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 595,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 28:26",
        "text": "心中自是的、便是愚昧人．凭智慧行事的、必蒙拯救。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 596,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "传道书 2:26",
        "text": "神喜悦谁、就给谁智慧、知识、和喜乐．惟有罪人、　神使他劳苦、叫他将所收聚的、所堆积的、归给　神所喜悦的人．这也是虚空、也是捕风。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 597,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 28:29",
        "text": "这也是出于万军之耶和华．他的谋略奇妙、他的智慧广大。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 598,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 33:6",
        "text": "你一生一世必得安稳、有丰盛的救恩、并智慧、和知识．你以敬畏耶和华为至宝。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 599,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "耶利米书 9:23-24",
        "text": "耶和华如此说、智慧人不要因他的智慧夸口、勇士不要因他的勇力夸口、财主不要因他的财物夸口． 夸口的却因他有聪明、认识我是耶和华、又知道我喜悦在世上施行慈爱公平和公义、以此夸口．这是耶和华说的。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 600,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 1:25",
        "text": "因　神的愚拙总比人智慧．　神的软弱总比人强壮。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 601,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 3:18-19",
        "text": "人不可自欺．你们中间若有人、在这世界自以为有智慧、倒不如变作愚拙、好成为有智慧的。 因这世界的智慧、在　神看是愚拙．如经上记着说、『主叫有智慧的中了自己的诡计。』",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 602,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "何西阿书 14:9",
        "text": "谁是智慧人、可以明白这些事、谁是通达人、可以知道这一切．因为耶和华的道是正直的、义人必在其中行走、罪人却在其上跌倒。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 603,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 15:14",
        "text": "聪明人心求知识．愚昧人口吃愚昧。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 604,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "希伯来书 5:14",
        "text": "惟独长大成人的、才能吃干粮、他们的心窍、习练得通达、就能分辨好歹了。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 605,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 19:25",
        "text": "鞭打亵慢人、愚蒙人必长见识．责备明哲人、他就明白知识。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 606,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 14:6",
        "text": "亵慢人寻智慧、却寻不着．聪明人易得知识。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 607,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 28:11",
        "text": "富足人自以为有智慧．但聪明的贫穷人、能将他查透。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 608,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 3:21",
        "text": "我儿、要谨守真智慧和谋略．不可使他离开你的眼目．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 609,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 15:21",
        "text": "无知的人、以愚妄为乐．聪明的人、按正直而行。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 610,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 17:24",
        "text": "明哲人眼前有智慧．愚昧人眼望地极。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 611,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "腓立比书 1:9",
        "text": "我所祷告的、就是要你们的爱心、在知识和各样见识上、多而又多．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 612,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 2:3-5",
        "text": "呼求明哲、扬声求聪明、 寻找他如寻找银子、搜求他如搜求隐藏的珍宝、 你就明白敬畏耶和华、得以认识　神。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 613,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "列王记上 3:11",
        "text": "神对他说、你既然求这事、不为自己求寿、求富、也不求灭绝你仇敌的性命、单求智慧可以听讼、",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 614,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 28:7",
        "text": "谨守律法的是智慧之子．与贪食人作伴的、却羞辱其父。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 615,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 119:66",
        "text": "求你将精明和知识赐给我．因我信了你的命令。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 616,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约翰福音 7:24",
        "text": "不可按外貌断定是非、总要按公平断定是非。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 617,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 17:10",
        "text": "一句责备话、深入聪明人的心、强如责打愚昧人一百下。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 618,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "马太福音 10:16",
        "text": "我差你们去、如同羊进入狼群、所以你们要灵巧像蛇、驯良像鸽子。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 619,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 119:125",
        "text": "我是你的仆人．求你赐我悟性、使我得知你的法度。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 620,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "提摩太前书 4:1",
        "text": "圣灵明说、在后来的时候、必有人离弃真道、听从那引诱人的邪灵、和鬼魔的道理。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 621,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "撒母耳记上 16:7",
        "text": "耶和华却对撒母耳说、不要看他的外貌和他身材高大、我不拣选他、因为耶和华不像人看人、人是看外貌、耶和华是看内心。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 622,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "雅各书 4:8",
        "text": "你们亲近　神、　神就必亲近你们。有罪的人哪、要洁净你们的手。心怀二意的人哪、要清洁你们的心。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 623,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "撒母耳记下 14:17",
        "text": "婢女又想我主我王的话必安慰我．因为我主我王能辨别是非、如同　神的使者一样．惟愿耶和华你的　神与你同在。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 624,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以西结书 44:23",
        "text": "他们要使我的民知道圣俗的分别、又使他们分辨洁净的和不洁净的。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 625,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约翰一书 3:2",
        "text": "亲爱的弟兄阿、我们现在是　神的儿女、将来如何、还未显明．但我们知道主若显现、我们必要像他．因为必得见他的真体。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 626,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 2:11",
        "text": "除了在人里头的灵、谁知道人的事．像这样、除了　神的灵、也没有人知道　神的事。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 627,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约伯记 6:30",
        "text": "我的舌上、岂有不义么．我的口里、岂不辨奸恶么。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 628,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以弗所书 4:11-12",
        "text": "他所赐的有使徒、有先知．有传福音的．有牧师和教师． 为要成全圣徒、各尽其职、建立基督的身体．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 629,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "提摩太后书 4:2",
        "text": "务要传道．无论得时不得时、总要专心、并用百般的忍耐、各样的教训、责备人、警戒人、劝勉人。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 630,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "马太福音 16:3",
        "text": "早晨天发红、又发黑、你们就说、今日必有风雨。你们知道分辨天上的气色、倒不能分辨这时候的神迹。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 631,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "提摩太前书 3:2",
        "text": "作监督的、必须无可指责、只作一个妇人的丈夫、有节制、自守、端正、乐意接待远人、善于教导．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 632,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "耶利米书 23:5",
        "text": "耶和华说、日子将到、我要给大卫兴起一个公义的苗裔、他必掌王权、行事有智慧、在地上施行公平、和公义。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 633,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "提摩太前书 6:2",
        "text": "仆人有信道的主人、不可因为与他是弟兄就轻看他．更要加意服事他．因为得服事之益处的、是信道蒙爱的。你要以此教训人、劝勉人。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 634,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 2:16",
        "text": "谁曾知道主的心去教导他呢．但我们是有基督的心了。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 635,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "马太福音 24:45",
        "text": "谁是忠心有见识的仆人、为主人所派、管理家里的人、按时分粮给他们呢。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 636,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约翰福音 17:17",
        "text": "求你用真理使他们成圣．你的道就是真理。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 637,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多后书 7:1",
        "text": "亲爱的弟兄阿、我们既有这等应许、就当洁净自己、除去身体灵魂一切的污秽、敬畏　神、得以成圣。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 638,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 12:11",
        "text": "这一切都是这位圣灵所运行、随己意分给各人的。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 639,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 11:1",
        "text": "你们该效法我、像我效法基督一样。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 640,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "马太福音 6:22",
        "text": "眼睛就是身上的灯．你的眼睛若瞭亮、全身就光明。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 641,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "马太福音 5:8",
        "text": "清心的人有福了．因为他们必得见　神。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 642,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 11:3",
        "text": "他必以敬畏耶和华为乐．行审判不凭眼见、断是非也不凭耳闻．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 643,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 7:15",
        "text": "到他晓得弃恶择善的时候、他必吃奶油与蜂蜜。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 644,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约伯记 28:28",
        "text": "他对人说、敬畏主就是智慧、远离恶便是聪明。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 645,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 18:2",
        "text": "愚昧人不喜爱明哲、只喜爱显露心意。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 646,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 20:5",
        "text": "人心怀藏谋略、好像深水．惟明哲人、才能汲引出来。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 647,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 14:29",
        "text": "不轻易发怒的、大有聪明．性情暴躁的、大显愚妄。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 648,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 17:27",
        "text": "寡少言语的有知识．性情温良的有聪明。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 649,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "罗马书 11:33",
        "text": "深哉、　神丰富的智慧和知识。他的判断、何其难测、他的踪迹何其难寻、",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 650,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 119:130",
        "text": "你的言语一解开、就发出亮光、使愚人通达。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 651,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 4:5",
        "text": "要得智慧、要得聪明、不可忘记、也不可偏离我口中的言语．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 652,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "提摩太后书 2:7",
        "text": "我所说的话你要思想．因为凡事主必给你聪明。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 653,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约翰一书 2:27",
        "text": "你们从主所受的恩膏、常存在你们心里、并不用人教训你们．自有主的恩膏在凡事上教训你们．这恩膏是真的、不是假的．你们要按这恩膏的教训、住在主里面。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 654,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 16:22",
        "text": "人有智慧就有生命的泉源．愚昧人必被愚昧惩治。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 655,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 8:1",
        "text": "智慧岂不呼叫、聪明岂不发声。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 656,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以弗所书 1:17",
        "text": "求我们主耶稣基督的　神、荣耀的父、将那赐人智慧和启示的灵、赏给你们、使你们真知道他．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 657,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 119:34",
        "text": "求你赐我悟性、我便遵守你的律法．且要一心遵守。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 658,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "彼得后书 3:18",
        "text": "你们却要在我们主救主耶稣基督的恩典和知识上有长进。愿荣耀归给他、从今直到永远。阿们。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 659,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以弗所书 4:18",
        "text": "他们心地昏昧、与　神所赐的生命隔绝了、都因自己无知、心里刚硬．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 660,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 2:12",
        "text": "我们所领受的、并不是世上的灵、乃是从　神来的灵、叫我们能知道　神开恩赐给我们的事。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 661,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "希伯来书 13:17",
        "text": "你们要依从那些引导你们的、且要顺服．因他们为你们的灵魂时刻儆醒、好像那将来交帐的人．你们要使他们交的时候有快乐、不至忧愁．若忧愁就与你们无益了。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 662,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 119:104",
        "text": "我借着你的训词、得以明白．所以我恨一切的假道。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 663,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 12:1",
        "text": "喜爱管教的、就是喜爱知识．恨恶责备的、却是畜类。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 664,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 147:5",
        "text": "我们的主为大、最有能力．他的智慧、无法测度。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 665,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 2:2-5",
        "text": "侧耳听智慧、专心求聪明． 呼求明哲、扬声求聪明、 寻找他如寻找银子、搜求他如搜求隐藏的珍宝、 你就明白敬畏耶和华、得以认识　神。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 666,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "雅各书 1:13",
        "text": "人被试探、不可说、我是被　神试探．因为　神不能被恶试探、他也不试探人．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 667,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多后书 11:4",
        "text": "假如有人来、另传一个耶稣、不是我们所传过的．或者你们另受一个灵、不是你们所受过的．或者另得一个福音、不是你们所得过的．你们容让他也就罢了．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 668,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "约翰福音 21:17",
        "text": "第三次对他说、约翰的儿子西门、你爱我么。彼得因为耶稣第三次对他说、你爱我么、就忧愁、对耶稣说、主阿、你是无所不知的、你知道我爱你。耶稣说、你喂养我的羊。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 669,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多后书 4:18",
        "text": "原来我们不是顾念所见的、乃是顾念所不见的．因为所见的是暂时的、所不见的是永远的。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 670,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 2:9",
        "text": "你也必明白仁义、公平、正直、一切的善道。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 671,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 21:2",
        "text": "人所行的、在自己眼中都看为正．惟有耶和华衡量人心。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 672,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 45:9",
        "text": "祸哉、那与造他的主争论的、他不过是地上瓦片中的一块瓦片．泥土岂可对抟弄他的说、你作甚么呢．所作的物岂可说、你没有手呢。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 673,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 90:2",
        "text": "诸山未曾生出、地与世界你未曾造成、从亘古到永远、你是　神。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 674,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 19:21",
        "text": "人心多有计谋．惟有耶和华的筹算、才能立定。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 675,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 90:4",
        "text": "在你看来、千年如已过的昨日、又如夜间的一更。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 676,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 40:2",
        "text": "要对耶路撒冷说安慰的话、又向他宣告说、他争战的日子已满了、他的罪孽赦免了、他为自己的一切罪、从耶和华手中加倍受罚。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 677,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 11:2",
        "text": "耶和华的灵必住在他身上、就是使他有智慧和聪明的灵、谋略和能力的灵、知识和敬畏耶和华的灵。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 678,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 139:4",
        "text": "耶和华阿、我舌头上的话、你没有一句不知道的．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 679,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 15:34",
        "text": "你们要醒悟为善、不要犯罪．因为有人不认识　神．我说这话、是要叫你们羞愧。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 680,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 2:10",
        "text": "智慧必入你心．你的灵要以知识为美．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 681,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 24:5",
        "text": "智慧人大有能力．有知识的人、力上加力。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 682,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "雅各书 3:13",
        "text": "你们中间谁是有智慧有见识的呢．他就当在智慧的温柔上、显出他的善行来。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 683,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 12:8",
        "text": "这人蒙圣灵赐他智慧的言语．那人也蒙这位圣灵赐他知识的言语．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 684,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 24:14",
        "text": "你心得了智慧、也必觉得如此．你若找着、至终必有善报．你的指望、也不至断绝。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 685,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多前书 13:2",
        "text": "我若有先知讲道之能、也明白各样的奥秘、各样的知识．而且有全备的信、叫我能够移山、却没有爱、我就算不得甚么。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 686,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 19:2",
        "text": "这日到那日发出言语．这夜到那夜传出知识。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 687,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 2:10-11",
        "text": "智慧必入你心．你的灵要以知识为美． 谋略必护卫你．聪明必保守你．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 688,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 11:9",
        "text": "不虔敬的人用口败坏邻舍．义人却因知识得救。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 689,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 19:8",
        "text": "得着智慧的、爱惜生命、保守聪明的、必得好处。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 690,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "哥林多后书 11:13-15",
        "text": "那等人是假使徒、行事诡诈、装作基督使徒的模样。 这也不足为怪．因为连撒但也装作光明的天使。 所以他的差役、若装作仁义的差役、也不算希奇．他们的结局、必然照着他们的行为。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 691,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 3:7",
        "text": "不要自以为有智慧．要敬畏耶和华、远离恶事．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 692,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 19:1-2",
        "text": "〔大卫的诗、交与伶长。〕诸天述说　神的荣耀．穹苍传扬他的手段。 这日到那日发出言语．这夜到那夜传出知识。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 693,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "歌罗西书 3:9-10",
        "text": "不要彼此说谎．因你们已经脱去旧人、和旧人的行为、 穿上了新人．这新人在知识上渐渐更新、正如造他主的形像．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 694,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 90:12",
        "text": "求你指教我们怎样数算自己的日子、好叫我们得着智慧的心。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 695,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "彼得后书 1:3",
        "text": "神的神能已将一切关乎生命和虔敬的事赐给我们、皆因我们认识那用自己荣耀和美德召我们的主．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 696,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "提摩太前书 2:4",
        "text": "他愿意万人得救、明白真道．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 697,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 19:2",
        "text": "心无知识的、乃为不善．脚步急快的、难免犯罪。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 698,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "彼得后书 1:5",
        "text": "正因这缘故、你们要分外的殷勤．有了信心、又要加上德行．有了德行、又要加上知识．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 699,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以赛亚书 11:9",
        "text": "在我圣山的遍处、这一切都不伤人、不害物．因为认识耶和华的知识要充满遍地、好像水充满洋海一般。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 700,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "歌罗西书 3:2",
        "text": "你们要思念上面的事、不要思念地上的事。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 701,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "腓立比书 3:8",
        "text": "不但如此、我也将万事当作有损的、因我以认识我主基督耶稣为至宝。我为他已经丢弃万事、看作粪土、为要得着基督．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 702,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "提摩太后书 2:2",
        "text": "你在许多见证人面前听见我所教训的、也要交托那忠心能教导别人的人。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 703,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "啟示录 1:7",
        "text": "看哪、他驾云降临．众目要看见他、连刺他的人也要看见他．地上的万族都要因他哀哭。这话是真实的。阿们。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 704,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "以弗所书 1:17-18",
        "text": "求我们主耶稣基督的　神、荣耀的父、将那赐人智慧和启示的灵、赏给你们、使你们真知道他． 并且照明你们心中的眼睛、使你们知道他的恩召有何等指望．他在圣徒中得的基业、有何等丰盛的荣耀．",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 705,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 19:9",
        "text": "耶和华的道理洁净、存到永远．耶和华的典章真实、全然公义。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 706,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 8:13",
        "text": "敬畏耶和华、在乎恨恶邪恶．那骄傲、狂妄、并恶道、以及乖谬的口、都为我所恨恶。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 707,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 16:6",
        "text": "因怜悯诚实、罪孽得赎．敬畏耶和华的、远离恶事。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 708,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 34:11",
        "text": "众弟子阿、你们当来听我的话．我要将敬畏耶和华的道、教训你们。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 709,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 22:4",
        "text": "敬畏耶和华心存谦卑、就得富有、尊荣、生命为赏赐。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 710,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 14:27",
        "text": "敬畏耶和华、就是生命的泉源、可以使人离开死亡的网罗。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 711,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 23:17",
        "text": "你心中不要嫉妒罪人．只要终日敬畏耶和华。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 712,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 10:27",
        "text": "敬畏耶和华、使人日子加多．但恶人的年岁必被减少。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 713,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "箴言 2:5",
        "text": "你就明白敬畏耶和华、得以认识　神。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 714,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 86:11",
        "text": "耶和华阿、求你将你的道指教我．我要照你的真理行．求你使我专心敬畏你的名。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 715,
        "category": "智慧",
        "categoryEn": "wisdom",
        "icon": "📖",
        "color": "#1ABC9C",
        "reference": "诗篇 34:9",
        "text": "耶和华的圣民哪、你们当敬畏他、因敬畏他的一无所缺。",
        "question": "这节关于\"智慧\"的经文如何触动你的心？"
    },
    {
        "id": 716,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以弗所书 4:32",
        "text": "并要以恩慈相待、存怜悯的心、彼此饶恕、正如　神在基督里饶恕了你们一样。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 717,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 103:12",
        "text": "东离西有多远、他叫我们的过犯、离我们也有多远。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 718,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 32:1-2",
        "text": "〔大卫的训诲诗。〕得赦免其过、遮盖其罪的、这人是有福的。 凡心里没有诡诈、耶和华不算为有罪的、这人是有福的。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 719,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 6:14-15",
        "text": "你们饶恕人的过犯、你们的天父也必饶恕你们的过犯。 你们不饶恕人的过犯、你们的天父也必不饶恕你们的过犯。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 720,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马可福音 11:25",
        "text": "你们站着祷告的时候、若想起有人得罪你们、就当饶恕他、好叫你们在天上的父、也饶恕你们的过犯。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 721,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 6:37",
        "text": "你们不要论断人、就不被论断．你们不要定人的罪、就不被定罪．你们要饶恕人、就必蒙饶恕．〔饶恕原文作释放〕",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 722,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "歌罗西书 3:13",
        "text": "倘若这人与那人有嫌隙、总要彼此包容、彼此饶恕．主怎样饶恕了你们、你们也要怎样饶恕人。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 723,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰一书 1:9",
        "text": "我们若认自己的罪、　神是信实的、是公义的、必要赦免我们的罪、洗净我们一切的不义。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 724,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以赛亚书 1:18",
        "text": "耶和华说、你们来、我们彼此辩论．你们的罪虽像朱红、必变成雪白．虽红如丹颜、必白如羊毛。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 725,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "弥迦书 7:18-19",
        "text": "神阿、有何神像你、赦免罪孽、饶恕你产业之余民的罪过．不永远怀怒、喜爱施恩。 必再怜悯我们、将我们的罪孽踏在脚下、又将我们的一切罪投于深海。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 726,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "出埃及记 34:6-7",
        "text": "耶和华在他面前宣告说、耶和华、耶和华、是有怜悯、有恩典的　神、不轻易发怒、并有丰盛的慈爱和诚实。 为千万人存留慈爱、赦免罪孽、过犯、和罪恶．万不以有罪的为无罪、必追讨他的罪、自父及子、直到三四代。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 727,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "民数记 14:18",
        "text": "耶和华不轻易发怒、并有丰盛的慈爱、赦免罪孽和过犯、万不以有罪的为无罪、必追讨他的罪、自父及子、直到三、四代。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 728,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "历代志下 7:14",
        "text": "这称为我名下的子民、若是自卑、祷告、寻求我的面、转离他们的恶行．我必从天上垂听、赦免他们的罪医治他们的地。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 729,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 25:7-11",
        "text": "求你不要记念我幼年的罪愆、和我的过犯。耶和华阿、求你因你的恩惠、按你的慈爱记念我。 耶和华是良善正直的．所以他必指示罪人走正路。 他必按公平引领谦卑人、将他的道教训他们。 凡遵守他的约和他法度的人、耶和华都以慈爱诚实待他。 耶和华阿、求你因你的名赦免我的罪、因为我的罪重大。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 730,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 51:1-3",
        "text": "〔大卫与拔示巴同室以后、先知拿单来见他．他作这诗、交与伶长。〕　神阿、求你按你的慈爱怜恤我、按你丰盛的慈悲涂抹我的过犯。 求你将我的罪孽洗除净尽、并洁除我的罪。 因为我知道我的过犯．我的罪常在我面前。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 731,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 65:3",
        "text": "罪孽胜了我．至于我们的过犯、你都要赦免。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 732,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 86:5",
        "text": "主阿、你本为良善、乐意饶恕人、有丰盛的慈爱、赐给凡求告你的人。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 733,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 130:3-4",
        "text": "主耶和华阿、你若究察罪孽、谁能站得住呢． 但在你有赦免之恩、要叫人敬畏你。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 734,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以赛亚书 43:25",
        "text": "惟有我为自己的缘故涂抹你的过犯、我也不记念你的罪恶。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 735,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以赛亚书 44:22",
        "text": "我涂抹了你的过犯、像厚云消散．我涂抹了你的罪恶、如薄云灭没．你当归向我、因我救赎了你。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 736,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以赛亚书 55:7",
        "text": "恶人当离弃自己的道路．不义的人当除掉自己的意念、归向耶和华、耶和华就必怜恤他．当归向我们的　神、因为　神必广行赦免。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 737,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "耶利米书 3:12",
        "text": "你去向北方宣告说、耶和华说、背道的以色列阿、回来吧．我必不怒目看你们．因为我是慈爱的、我必不永远存怒．这是耶和华说的。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 738,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "耶利米书 31:34",
        "text": "他们各人不再教导自己的邻舍、和自己的弟兄、说、你该认识耶和华．因为他们从最小的、到至大的、都必认识我．我要赦免他们的罪孽、不再记念他们的罪恶．这是耶和华说的。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 739,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "但以理书 9:9",
        "text": "主、我们的　神、是怜悯饶恕人的、我们却违背了他、",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 740,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 18:21-22",
        "text": "那时彼得进前来、对耶稣说、主阿、我弟兄得罪我、我当饶恕他几次呢。到七次可以么。 耶稣说、我对你说、不是到七次、乃是到七十个七次。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 741,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 7:47-48",
        "text": "所以我告诉你、他许多的罪都赦免了．因为他的爱多．但那赦免少的、他的爱就少。 于是对那女人说、你的罪赦免了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 742,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 3:19",
        "text": "所以你们当悔改归正、使你们的罪得以涂抹、这样、那安舒的日子、就必从主面前来到．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 743,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 10:43",
        "text": "众先知也为他作见证、说、凡信他的人、必因他的名、得蒙赦罪。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 744,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "罗马书 3:23-24",
        "text": "因为世人都犯了罪、亏缺了　神的荣耀。 如今却蒙　神的恩典、因基督耶稣的救赎、就白白的称义。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 745,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 2:38",
        "text": "彼得说、你们各人要悔改、奉耶稣基督的名受洗、叫你们的罪得赦、就必领受所赐的圣灵．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 746,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 5:32",
        "text": "我来本不是召义人悔改．乃是召罪人悔改。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 747,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马可福音 1:4",
        "text": "照这话、约翰来了、在旷野施洗、传悔改的洗礼、使罪得赦。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 748,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 3:8",
        "text": "你们要结出果子来、与悔改的心相称．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 749,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 3:2",
        "text": "天国近了、你们应当悔改。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 750,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马可福音 1:15",
        "text": "说、日期满了、　神的国近了．你们当悔改、信福音。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 751,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "啟示录 3:19",
        "text": "凡我所疼爱的、我就责备管教他．所以你要发热心、也要悔改。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 752,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "提摩太后书 2:25",
        "text": "用温柔劝戒那抵挡的人．或者　神给他们悔改的心、可以明白真道．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 753,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 17:3",
        "text": "你们要谨慎．若是你的弟兄得罪你、就劝戒他．他若懊悔、就饶恕他。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 754,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 5:31-32",
        "text": "耶稣对他们说、无病的人用不着医生．有病的人才用得着。 我来本不是召义人悔改．乃是召罪人悔改。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 755,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 26:20",
        "text": "先在大马色、后在耶路撒冷、和犹太全地、以及外邦、劝勉他们应当悔改归向　神、行事与悔改的心相称。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 756,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 8:22",
        "text": "你当懊悔你这罪恶、祈求主．或者你心里的意念可得赦免。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 757,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "箴言 28:13",
        "text": "遮掩自己罪过的、必不亨通．承认离弃罪过的、必蒙怜恤。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 758,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 9:13",
        "text": "经上说、『我喜爱怜恤、不喜爱祭祀。』这句话的意思、你们且去揣摩．我来、本不是召义人、乃是召罪人。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 759,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 3:11",
        "text": "我是用水给你们施洗、叫你们悔改．但那在我以后来的、能力比我更大、我就是给他提鞋、也不配．他要用圣灵与火给你们施洗。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 760,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "哥林多后书 7:9",
        "text": "如今我欢喜、不是因你们忧愁、是因你们从忧愁中生出懊悔来．你们依着　神的意思忧愁、凡事就不至于因我们受亏损了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 761,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以赛亚书 30:15",
        "text": "主耶和华以色列的圣者曾如此说、你们得救在乎归回安息．你们得力在乎平静安稳．你们竟自不肯．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 762,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以西结书 18:32",
        "text": "主耶和华说、我不喜悦那死人之死、所以你们当回头而存活。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 763,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 51:17",
        "text": "神所要的祭、就是忧伤的灵．　神阿、忧伤痛悔的心、你必不轻看。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 764,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 51:4",
        "text": "我向你犯罪、惟独得罪了你、在你眼前行了这恶、以致你责备我的时候、显为公义．判断我的时候、显为清正。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 765,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 13:24",
        "text": "在他没有出来以先、约翰向以色列众民宣讲悔改的洗礼。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 766,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "耶利米书 31:19",
        "text": "我回转以后、就真正懊悔、受教以后、就拍腿叹息、我因担当幼年的凌辱、就抱愧蒙羞。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 767,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "箴言 1:23",
        "text": "你们当因我的责备回转．我要将我的灵浇灌你们、将我的话指示你们。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 768,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 38:18",
        "text": "我要承认我的罪孽．我要因我的罪忧愁。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 769,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 9:2",
        "text": "有人用褥子抬着一个瘫子、到耶稣跟前来．耶稣见他们的信心、就对瘫子说、小子、放心吧．你的罪赦了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 770,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 5:2",
        "text": "他见有两只船湾在湖边．打鱼的人却离开船、洗网去了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 771,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰福音 1:3",
        "text": "万物是借着他造的．凡被造的、没有一样不是借着他造的。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 772,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "耶利米书 26:3",
        "text": "或者他们肯听从、各人回头离开恶道、使我后悔不将我因他们所行的恶、想要施行的灾祸、降与他们。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 773,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "历代志上 7:14",
        "text": "玛拿西的儿子亚斯列、是他妾亚兰人所生的、又生了基列之父玛吉。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 774,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "何西阿书 14:1",
        "text": "以色列阿、你要归向耶和华你的　神．你是因自己的罪孽跌倒了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 775,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "彼得前书 3:3",
        "text": "你们不要以外面的辫头发、戴金饰、穿美衣、为妆饰、",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 776,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 17:3-4",
        "text": "你们要谨慎．若是你的弟兄得罪你、就劝戒他．他若懊悔、就饶恕他。 倘若他一天七次得罪你、又七次回转说、我懊悔了、你总要饶恕他。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 777,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马可福音 1:2",
        "text": "正如先知以赛亚书上记着说、〔有古卷无以赛亚三字〕『看哪、我要差遣我的使者在你前面、预备道路．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 778,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "希伯来书 12:17",
        "text": "后来想要承受父所祝的福、竟被弃绝、虽然号哭切求、却得不着门路、使他父亲的心意回转、这是你们知道的。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 779,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 2:2",
        "text": "忽然从天上有响声下来、好像一阵大风吹过、充满了他们所坐的屋子。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 780,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "耶利米哀歌 3:40",
        "text": "我们当深深考察自己的行为、再归向耶和华。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 781,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 32:5",
        "text": "我向你陈明我的罪、不隐瞒我的恶．我说、我要向耶和华承认我的过犯、你就赦免我的罪恶。〔细拉〕",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 782,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰福音 20:23",
        "text": "你们赦免谁的罪、谁的罪就赦免了．你们留下谁的罪、谁的罪就留下了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 783,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰一书 4:2",
        "text": "凡灵认耶稣基督是成了肉身来的、就是出于　神的．从此你们可以认出　神的灵来。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 784,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 10:33",
        "text": "凡在人面前不认我的、我在我天上的父面前、也必不认他。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 785,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰一书 4:15",
        "text": "凡认耶稣为　神儿子的、　神就住在他里面、他也住在　神里面。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 786,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "但以理书 9:5",
        "text": "我们犯罪作孽、行恶叛逆、偏离你的诫命典章．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 787,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 32:3",
        "text": "我闭口不认罪的时候、因终日唉哼、而骨头枯干。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 788,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "提摩太前书 6:12",
        "text": "你要为真道打那美好的仗、持定永生．你为此被召．也在许多见证人面前、已经作了那美好的见证。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 789,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 10:32",
        "text": "凡在人面前认我的、我在我天上的父面前、也必认他。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 790,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "历代志上 7:2",
        "text": "陀拉的儿子是乌西、利法雅、耶勒、雅买、易伯散、示母利、都是陀拉的族长、是大能的勇士．到大卫年间、他们的人数共有二万二千六百名。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 791,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 51:10",
        "text": "神阿、求你为我造清洁的心、使我里面重新有正直的灵。〔正直或作坚定〕",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 792,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "箴言 18:21",
        "text": "生死在舌头的权下、喜爱他的、必吃他所结的果子。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 793,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "希伯来书 10:23",
        "text": "也要坚守我们所承认的指望、不至摇动．因为那应许我们的是信实的．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 794,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 44:21",
        "text": "神岂不鉴察这事么．因为他晓得人心里的隐秘。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 795,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰一书 1:6",
        "text": "我们若说是与　神相交、却仍在黑暗里行、就是说谎话、不行真理了．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 796,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰一书 2:4",
        "text": "人若说我认识他、却不遵守他的诫命、便是说谎话的、真理也不在他心里了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 797,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "罗马书 10:2",
        "text": "我可以证明他们向　神有热心、但不是按着真知识．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 798,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "罗马书 3:3",
        "text": "即便有不信的、这有何妨呢．难道他们的不信、就废掉　神的信么。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 799,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 18:5",
        "text": "西拉和提摩太从马其顿来的时候、保罗为道迫切、向犹太人证明耶稣是基督。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 800,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰福音 12:43",
        "text": "这是因他们爱人的荣耀、过于爱　神的荣耀。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 801,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以赛亚书 6:7",
        "text": "将炭沾我的口、说、看哪、这炭沾了你的嘴．你的罪孽便除掉、你的罪恶就赦免了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 802,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "罗马书 5:1",
        "text": "我们既因信称义、就借着我们的主耶稣基督、得与　神相和。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 803,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以弗所书 1:7",
        "text": "我们借这爱子的血、得蒙救赎、过犯得以赦免、乃是照他丰富的恩典．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 804,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰一书 2:1",
        "text": "我小子们哪、我将这些话写给你们、是要叫你们不犯罪。若有人犯罪、在父那里我们有一位中保、就是那义者耶稣基督．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 805,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以西结书 18:20",
        "text": "惟有犯罪的、他必死亡。儿子必不担当父亲的罪孽、父亲也不担当儿子的罪孽、义人的善果必归自己、恶人的恶报也必归自己。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 806,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约翰一书 2:2",
        "text": "他为我们的罪作了挽回祭．不是单为我们的罪、也是为普天下人的罪。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 807,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "希伯来书 8:12",
        "text": "我要宽恕他们的不义、不再记念他们的罪愆。』",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 808,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 38:4",
        "text": "我的罪孽高过我的头、如同重担叫我担当不起。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 809,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 22:16",
        "text": "现在你为甚么耽延呢、起来、求告他的名受洗、洗去你的罪。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 810,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "罗马书 4:5",
        "text": "惟有不作工的、只信称罪人为义的　神、他的信就算为义。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 811,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "以西结书 18:21-23",
        "text": "恶人若回头离开所作的一切罪恶、谨守我一切的律例、行正直与合理的事、他必定存活、不至死亡． 他所犯的一切罪过都不被记念、因所行的义、他必存活。 主耶和华说、恶人死亡、岂是我喜悦的么．不是喜悦他回头离开所行的道存活么。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 812,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约拿书 2:2",
        "text": "说、我遭遇患难求告耶和华、你就应允我．从阴间的深处呼求、你就俯听我的声音。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 813,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 4:17",
        "text": "从那时候耶稣就传起道来、说、天国近了、你们应当悔改。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 814,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "约伯记 11:6",
        "text": "并将智慧的奥秘指示你．他有诸般的智识。所以当知道　神追讨你、比你罪孽该得的还少。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 815,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 17:30",
        "text": "世人蒙昧无知的时候、　神并不监察、如今却吩咐各处的人都要悔改。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 816,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 13:3",
        "text": "我告诉你们、不是的．你们若不悔改、都要如此灭亡。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 817,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 15:7",
        "text": "我告诉你们、一个罪人悔改、在天上也要这样为他欢喜、较比为九十九个不用悔改的义人、欢喜更大。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 818,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "提摩太前书 4:2",
        "text": "这是因为说谎之人的假冒．这等人的良心、如同被热铁烙惯了一般。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 819,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 15:10",
        "text": "我告诉你们、一个罪人悔改、在　神的使者面前、也是这样为他欢喜。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 820,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "民数记 5:6-7",
        "text": "你晓谕以色列人说、无论男女、若犯了人所常犯的罪、以至干犯耶和华、那人就有了罪。 他要承认所犯的罪、将所亏负人的、如数赔还．另外加上五分之一、也归与所亏负的人。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 821,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "提摩太前书 3:9",
        "text": "要存清洁的良心、固守真道的奥秘。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 822,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "提多书 2:14",
        "text": "他为我们舍了自己、要赎我们脱离一切罪恶、又洁净我们、特作自己的子民、热心为善。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 823,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "哥林多后书 7:9-10",
        "text": "如今我欢喜、不是因你们忧愁、是因你们从忧愁中生出懊悔来．你们依着　神的意思忧愁、凡事就不至于因我们受亏损了。 因为依着　神的意思忧愁、就生出没有后悔的懊悔来、以致得救．但世俗的忧愁、是叫人死。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 824,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "提摩太前书 1:15",
        "text": "基督耶稣降世、为要拯救罪人．这话是可信的、是十分可佩服的．在罪人中我是个罪魁。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 825,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "腓立比书 3:13",
        "text": "弟兄们、我不是以为自己已经得着了．我只有一件事、就是忘记背后努力面前的、",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 826,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "使徒行传 11:18",
        "text": "众人听见这话、就不言语了．只归荣耀与　神、说、这样看来、　神也赐恩给外邦人、叫他们悔改得生命了。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 827,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "罗马书 3:26",
        "text": "好在今时显明他的义、使人知道他自己为义、也称信耶稣的人为义。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 828,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "哥林多前书 3:15",
        "text": "人的工程若被烧了、他就要受亏损．自己却要得救．虽然得救乃像从火里经过的一样。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 829,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "传道书 5:20",
        "text": "他不多思念自己一生的年日．因为　神应他的心使他喜乐。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 830,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 3:3",
        "text": "他就来到约但河一带地方、宣讲悔改的洗礼、使罪得赦．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 831,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 49:15",
        "text": "只是　神必救赎我的灵魂、脱离阴间的权柄、因他必收纳我。〔细拉〕",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 832,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "哥林多后书 3:17",
        "text": "主就是那灵、主的灵在那里、那里就得以自由。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 833,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 32:5-6",
        "text": "我向你陈明我的罪、不隐瞒我的恶．我说、我要向耶和华承认我的过犯、你就赦免我的罪恶。〔细拉〕 为此、凡虔诚人、都当趁你可寻找的时候祷告你．大水泛溢的时候、必不能到他那里。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 834,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马可福音 1:14-15",
        "text": "约翰下监以后、耶稣来到加利利、宣传　神的福音、 说、日期满了、　神的国近了．你们当悔改、信福音。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 835,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 13:5",
        "text": "我告诉你们、不是的．你们若不悔改、都要如此灭亡。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 836,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 23:6",
        "text": "我一生一世必有恩惠慈爱随着我．我且要住在耶和华的殿中、直到永远。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 837,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 32:3-5",
        "text": "我闭口不认罪的时候、因终日唉哼、而骨头枯干。 黑夜白日、你的手在我身上沉重．我的精液耗尽、如同夏天的干旱。〔细拉〕 我向你陈明我的罪、不隐瞒我的恶．我说、我要向耶和华承认我的过犯、你就赦免我的罪恶。〔细拉〕",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 838,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "雅各书 2:12-13",
        "text": "你们既然要按使人自由的律法受审判、就该照这律法说话行事。 因为那不怜悯人的、也要受无怜悯的审判．怜悯原是向审判夸胜。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 839,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 25:6",
        "text": "耶和华阿、求你记念你的怜悯和慈爱．因为这是亘古以来所常有的。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 840,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "撒母耳记下 22:26",
        "text": "慈爱的人、你以慈爱待他．完全的人、你以完全待他．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 841,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "马太福音 4:3",
        "text": "那试探人的进前来、对他说、你若是　神的儿子、可以吩咐这些石头变成食物。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 842,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 145:9",
        "text": "耶和华善待万民、他的慈悲、覆庇他一切所造的。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 843,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 40:11",
        "text": "耶和华阿、求你不要向我止住你的慈悲．愿你的慈爱和诚实、常常保佑我。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 844,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 85:10",
        "text": "慈爱和诚实、彼此相遇．公义和平安、彼此相亲．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 845,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "撒母耳记下 24:14",
        "text": "大卫对迦得说、我甚为难．我愿落在耶和华的手里、因为他有丰盛的怜悯．我不愿落在人的手里。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 846,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "彼得前书 2:10",
        "text": "你们从前算不得子民、现在却作了　神的子民．从前未曾蒙怜恤、现在却蒙了怜恤。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 847,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 18:25",
        "text": "慈爱的人、你以慈爱待他．完全的人、你以完全待他。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 848,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "罗马书 12:8",
        "text": "或作劝化的、就当专一劝化．施舍的、就当诚实．治理的、就当殷勤．怜悯人的、就当甘心。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 849,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 1:50",
        "text": "他怜悯敬畏他的人、直到世世代代。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 850,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "申命记 4:31",
        "text": "耶和华你　神原是有怜悯的　神、他总不撇下你、不灭绝你、也不忘记他起誓与你列祖所立的约。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 851,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 115:1",
        "text": "耶和华阿、荣耀不要归与我们、不要归与我们．要因你的慈爱和诚实归在你的名下。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 852,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "箴言 14:31",
        "text": "欺压贫寒的、是辱没造他的主．怜悯穷乏的、乃是尊敬主。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 853,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "哥林多后书 4:1",
        "text": "我们既然蒙怜悯、受了这职分、就不丧胆．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 854,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "路加福音 1:78",
        "text": "因我们　神怜悯的心肠、叫清晨的日光从高天临到我们、",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 855,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 130:1-2",
        "text": "〔上行之诗。〕耶和华阿、我从深处向你求告。 主阿、求你听我的声音．愿你侧耳听我恳求的声音。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 856,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "出埃及记 20:6",
        "text": "爱我守我诫命的、我必向他们发慈爱、直到千代。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 857,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "哥林多后书 12:9",
        "text": "他对我说、我的恩典够你用的．因为我的能力、是在人的软弱上显得完全．所以我更喜欢夸自己的软弱、好叫基督的能力覆庇我．",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 858,
        "category": "宽恕",
        "categoryEn": "forgiveness",
        "icon": "🤝",
        "color": "#3498DB",
        "reference": "诗篇 107:1",
        "text": "你们要称谢耶和华、因他本为善．他的慈爱、永远长存。",
        "question": "这节关于\"宽恕\"的经文如何触动你的心？"
    },
    {
        "id": 859,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "耶利米书 29:11",
        "text": "耶和华说、我知道我向你们所怀的意念、是赐平安的意念、不是降灾祸的意念、要叫你们末后有指望。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 860,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 15:13",
        "text": "但愿使人有盼望的　神、因信、将诸般的喜乐平安、充满你们的心、使你们借着圣灵的能力、大有盼望。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 861,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 8:24-25",
        "text": "我们得救是在乎盼望．只是所见的盼望不是盼望．谁还盼望他所见的呢。〔有古卷作人所看见的何必再盼望呢〕 但我们若盼望那所不见的、就必忍耐等候。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 862,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 5:2-5",
        "text": "我们又借着他、因信得进入现在所站的这恩典中、并且欢欢喜喜盼望　神的荣耀。 不但如此、就是在患难中、也是欢欢喜喜的．因为知道患难生忍耐． 忍耐生老练．老练生盼望． 盼望不至于羞耻．因为所赐给我们的圣灵、将　神的爱浇灌在我们心里。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 863,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 39:7",
        "text": "主阿、如今我等甚么呢．我的指望在乎你。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 864,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 71:5",
        "text": "主耶和华阿、你是我所盼望的．从我年幼你是我所倚靠的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 865,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 130:5",
        "text": "我等候耶和华、我的心等候．我也仰望他的话。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 866,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 40:31",
        "text": "但那等候耶和华的、必从新得力、他们必如鹰展翅上腾、他们奔跑却不困倦、行走却不疲乏。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 867,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "哥林多前书 13:13",
        "text": "如今常存的有信、有望、有爱、这三样、其中最大的是爱。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 868,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 6:19",
        "text": "我们有这指望如同灵魂的锚、又坚固又牢靠、且通入幔内。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 869,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "彼得前书 1:3-4",
        "text": "愿颂赞归与我们主耶稣基督的父　神、他曾照自己的大怜悯、借耶稣基督从死里复活、重生了我们、叫我们有活泼的盼望、 可以得着不能朽坏、不能玷污、不能衰残、为你们存留在天上的基业。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 870,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 25:3",
        "text": "凡等候你的必不羞愧．惟有那无故行奸诈的、必要羞愧。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 871,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 33:18-22",
        "text": "耶和华的眼目、看顾敬畏他的人、和仰望他慈爱的人、 要救他们的命脱离死亡、并使他们在饥荒中存活。 我们的心向来等候耶和华．他是我们的帮助、我们的盾牌。 我们的心必靠他欢喜、因为我们向来倚靠他的圣名。 耶和华阿、求你照着我们所仰望你的、向我们施行慈爱。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 872,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 43:5",
        "text": "我的心哪、你为何忧闷、为何在我里面烦躁．应当仰望　神．因我还要称赞他．他是我脸上的光荣、〔原文作帮助〕是我的　神。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 873,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 62:5",
        "text": "我的心哪、你当默默无声、专等候　神．因为我的盼望是从他而来。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 874,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 121:7-8",
        "text": "耶和华要保护你、免受一切的灾害．他要保护你的性命。 你出你入、耶和华要保护你、从今时直到永远。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 875,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 146:5",
        "text": "以雅各的　神为帮助、仰望耶和华他　神的、这人便为有福。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 876,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 9:2",
        "text": "在黑暗中行走的百姓、看见了大光．住在死荫之地的人、有光照耀他们。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 877,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 25:8-9",
        "text": "他已经吞灭死亡直到永远．主耶和华必擦去各人脸上的眼泪、又除掉普天下他百姓的羞辱．因为这是耶和华说的。 到那日人必说、看哪、这是我们的　神．我们素来等候他、他必拯救我们、这是耶和华、我们素来等候他、我们必因他的救恩．欢喜快乐。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 878,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 30:18",
        "text": "耶和华必然等候、要施恩给你们．必然兴起、好怜悯你们．因为耶和华是公平的　神．凡等候他的都是有福的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 879,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 35:10",
        "text": "并且耶和华救赎的民必归回、歌唱来到锡安．永乐必归到他们的头上、他们必得着欢喜快乐、忧愁叹息尽都逃避。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 880,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "耶利米哀歌 3:21-24",
        "text": "我想起这事、心里就有指望。 我们不至消灭、是出于耶和华诸般的慈爱、是因他的怜悯、不至断绝。 每早晨这都是新的．你的诚实、极其广大。 我心里说、耶和华是我的分．因此、我要仰望他。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 881,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约珥书 3:16",
        "text": "耶和华必从锡安吼叫、从耶路撒冷发声．天地就震动．耶和华却要作他百姓的避难所、作以色列人的保障。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 882,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "弥迦书 7:7",
        "text": "至于我、我要仰望耶和华、要等候那救我的　神．我的　神必应允我。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 883,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 12:21",
        "text": "外邦人都要仰望他的名。』",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 884,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 16:20-22",
        "text": "我实实在在的告诉你们、你们将要痛哭、哀号、世人倒要喜乐．你们将要忧愁、然而你们的忧愁、要变为喜乐。 妇人生产的时候、就忧愁、因为他的时候到了．既生了孩子、就不再记念那苦楚、因为欢喜世上生了一个人。 你们现在也是忧愁．但我要再见你们、你们的心就喜乐了．这喜乐、也没有人能夺去。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 885,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "提多书 2:13",
        "text": "等候所盼望的福、并等候至大的　神、和〔或作无和字〕我们救主耶稣基督的荣耀显现。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 886,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 11:39-40",
        "text": "这些人都是因信得了美好的证据、却仍未得着所应许的． 因为　神给我们预备了更美的事、叫他们若不与我们同得、就不能完全。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 887,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "腓立比书 3:20",
        "text": "我们却是天上的国民．并且等候救主、就是主耶稣基督、从天上降临。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 888,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "哥林多后书 5:1",
        "text": "我们原知道、我们这地上的帐棚若拆毁了、必得　神所造、不是人手所造、在天上永存的房屋。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 889,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 11:16",
        "text": "他们却羡慕一个更美的家乡、就是在天上的．所以　神被称为他们的　神、并不以为耻．因为他已经给他们预备了一座城。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 890,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以弗所书 6:12",
        "text": "因我们并不是与属血气的争战、乃是与那些执政的、掌权的、管辖这幽暗世界的、以及天空属灵气的恶魔争战。〔两争战原文都作摔跤〕",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 891,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "使徒行传 4:12",
        "text": "除他以外、别无拯救．因为在天下人间、没有赐下别的名、我们可以靠着得救。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 892,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 6:51",
        "text": "我是从天上降下来生命的粮．人若吃这粮、就必永远活着．我所要赐的粮、就是我的肉、为世人之生命所赐的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 893,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 24:35",
        "text": "天地要废去、我的话却不能废去。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 894,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 13:14",
        "text": "我们在这里本没有常存的城、乃是寻求那将来的城。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 895,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "耶利米书 23:24",
        "text": "耶和华说、人岂能在隐密处藏身、使我看不见他呢．耶和华说、我岂不充满天地么。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 896,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "耶利米书 32:17",
        "text": "主耶和华阿、你曾用大能和伸出来的膀臂创造天地、在你没有难成的事．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 897,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 124:8",
        "text": "我们得帮助、是在乎倚靠造天地之耶和华的名。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 898,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "路加福音 24:50-51",
        "text": "耶稣领他们到伯大尼的对面、就举手给他们祝福。 正祝福的时候、他就离开他们、被带到天上去了。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 899,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "传道书 3:1",
        "text": "凡事都有定期、天下万务都有定时．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 900,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 25:46",
        "text": "这些人要往永刑里去．那些义人要往永生里去。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 901,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "创世纪 1:1-2",
        "text": "起初　神创造天地。 地是空虚混沌．渊面黑暗．　神的灵运行在水面上。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 902,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "阿摩司书 9:6",
        "text": "那在天上建造楼阁、在地上安定穹苍、命海水浇在地上的、耶和华是他的名。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 903,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马可福音 16:19",
        "text": "主耶稣和他们说完了话、后来被接到天上、坐在　神的右边。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 904,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 65:17",
        "text": "看哪、我造新天新地、从前的事不再被记念、也不再追想。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 905,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 139:7-8",
        "text": "我往那里去躲避你的灵．我往那里逃躲避你的面。 我若升到天上、你在那里．我若在阴间下榻、你也在那里。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 906,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 3:13",
        "text": "除了从天降下仍旧在天的人子、没有人升过天。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 907,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 108:5",
        "text": "神阿、愿你崇高、过于诸天．愿你的荣耀、高过全地。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 908,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 57:5",
        "text": "神阿、愿你崇高、过于诸天．愿你的荣耀、高过全地。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 909,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "使徒行传 1:9",
        "text": "说了这话、他们正看的时候、他就被取上升、有一朵云彩把他接去、便看不见他了。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 910,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "传道书 5:15",
        "text": "他怎样从母胎赤身而来、也必照样赤身而去．他所劳碌得来的、手中分毫不能带去。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 911,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 16:11",
        "text": "你必将生命的道路指示我．在你面前有满足的喜乐．在你右手中有永远的福乐。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 912,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 22:5",
        "text": "不再有黑夜．他们也不用灯光日光．因为主　神要光照他们．他们要作王、直到永永远远。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 913,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 2:7",
        "text": "圣灵向众教会所说的话、凡有耳的、就应当听。得胜的、我必将　神乐园中生命树的果子赐给他吃。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 914,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "耶利米书 10:12",
        "text": "耶和华用能力创造大地、用智慧建立世界、用聪明铺张穹苍。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 915,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰一书 2:25",
        "text": "主所应许我们的就是永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 916,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "提多书 1:2",
        "text": "盼望那无谎言的　神、在万古之先所应许的永生、",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 917,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "但以理书 12:2",
        "text": "睡在尘埃中的、必有多人复醒．其中有得永生的、有受羞辱永远被憎恶的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 918,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "加拉太书 6:8",
        "text": "顺着情欲撒种的、必从情欲收败坏．顺着圣灵撒种的、必从圣灵收永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 919,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 6:19-20",
        "text": "不要为自己积攒财宝在地上、地上有虫子咬、能锈坏、也有贼挖窟窿来偷． 只要积攒财宝在天上、天上没有虫子咬、不能锈坏、也没有贼挖窟窿来偷．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 920,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 19:29",
        "text": "凡为我的名撇下房屋、或是弟兄、姐妹、父亲、母亲、〔有古卷添妻子〕儿女、田地的、必要得着百倍、并且承受永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 921,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "腓立比书 3:20-21",
        "text": "我们却是天上的国民．并且等候救主、就是主耶稣基督、从天上降临。 他要按着那能叫万有归服自己的大能、将我们这卑贱的身体改变形状、和他自己荣耀的身体相似。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 922,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 17:3",
        "text": "认识你独一的真　神、并且认识你所差来的耶稣基督、这就是永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 923,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 6:27",
        "text": "不要为那必坏的食物劳力、要为那存到永生的食物劳力、就是人子要赐给你们的．因为人子是父　神所印证的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 924,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 5:29",
        "text": "行善的复活得生、作恶的复活定罪。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 925,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 4:14",
        "text": "人若喝我所赐的水就永远不渴．我所赐的水、要在他里头成为泉源、直涌到永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 926,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰一书 5:11-12",
        "text": "这见证、就是　神赐给我们永生、这永生也是在他儿子里面。 人有了　神的儿子就有生命．没有　神的儿子就没有生命。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 927,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "提摩太前书 6:19",
        "text": "为自己积成美好的根基、预备将来、叫他们持定那真正的生命。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 928,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰一书 5:11",
        "text": "这见证、就是　神赐给我们永生、这永生也是在他儿子里面。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 929,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "提摩太前书 4:8",
        "text": "操练身体、益处还少．惟独敬虔、凡事都有益处．因有今生和来生的应许．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 930,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "使徒行传 13:46",
        "text": "保罗和巴拿巴放胆说、　神的道先讲给你们、原是应当的、只因你们弃绝这道、断定自己不配得永生、我们就转向外邦人去。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 931,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 17:2",
        "text": "正如你曾赐给他权柄、管理凡有血气的、叫他将永生赐给你所赐给他的人。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 932,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 12:25",
        "text": "爱惜自己生命的、就失丧生命．在这世上恨恶自己生命的、就要保守生命到永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 933,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "创世纪 3:19",
        "text": "你必汗流满面才得糊口、直到你归了土、因为你是从土而出的．你本是尘土、仍要归于尘土。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 934,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "腓立比书 3:21",
        "text": "他要按着那能叫万有归服自己的大能、将我们这卑贱的身体改变形状、和他自己荣耀的身体相似。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 935,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "路加福音 18:30",
        "text": "没有在今世不得百倍、在来世不得永生的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 936,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 9:27",
        "text": "按着定命、人人都有一死、死后且有审判．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 937,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "路加福音 18:18",
        "text": "有一个官问耶稣说、良善的夫子、我该作甚么事、才可以承受永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 938,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 5:9",
        "text": "他既得以完全、就为凡顺从他的人、成了永远得救的根源．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 939,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "路加福音 10:25",
        "text": "有一个律法师、起来试探耶稣说、夫子、我该作甚么才可以承受永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 940,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 19:16",
        "text": "有一个人来见耶稣说、夫子、〔有古卷作良善的夫子〕我该作甚么善事、才能得永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 941,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 18:8",
        "text": "倘若你一只手、或是一只脚、叫你跌倒、就砍下来丢掉．你缺一只手、或是一只脚、进入永生、强如有两手两脚、被丢在永火里。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 942,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "尼希米记 9:6",
        "text": "你、惟独你、是耶和华．你造了天、和天上的天、并天上的万象、地和地上的万物、海和海中所有的、这一切都是你所保存的．天军也都敬拜你。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 943,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 6:8",
        "text": "我们若是与基督同死、就信必与他同活．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 944,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "使徒行传 16:31",
        "text": "他们说、当信主耶稣、你和你一家都必得救。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 945,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 10:27",
        "text": "我的羊听我的声音、我也认识他们、他们也跟着我。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 946,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 10:9",
        "text": "我就是门．凡从我进来的、必然得救、并且出入得草吃。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 947,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 6:35",
        "text": "耶稣说、我就是生命的粮．到我这里来的、必定不饿．信我的、永远不渴。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 948,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 64:6",
        "text": "我们都像不洁净的人、所有的义都像污秽的衣服．我们都像叶子渐渐枯干．我们的罪孽好像风把我们吹去．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 949,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "诗篇 21:4",
        "text": "他向你求寿、你便赐给他、就是日子长久、直到永远。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 950,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "创世纪 3:22",
        "text": "耶和华　神说、那人已经与我们相似、能知道善恶．现在恐怕他伸手又摘生命树的果子吃、就永远活着．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 951,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "创世纪 2:9",
        "text": "耶和华　神使各样的树从地里长出来、可以悦人的眼目、其上的果子好作食物．园子当中又有生命树、和分别善恶的树。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 952,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "创世纪 2:7",
        "text": "耶和华　神用地上的尘土造人、将生气吹在他鼻孔里、他就成了有灵的活人、名叫亚当。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 953,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 6:54",
        "text": "吃我肉喝我血的人就有永生．在末日我要叫他复活。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 954,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "哥林多前书 15:3-4",
        "text": "我当日所领受又传给你们的、第一、就是基督照圣经所说、为我们的罪死了． 而且埋葬了．又照圣经所说、第三天复活了．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 955,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马可福音 16:6",
        "text": "那少年人对他们说、不要惊恐．你们寻找那钉十字架的拿撒勒人耶稣．他已经复活了、不在这里．请看安放他的地方。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 956,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 28:5-6",
        "text": "天使对妇女说、不要害怕、我知道你们是寻找那钉十字架的耶稣。 他不在这里、照他所说的、已经复活了．你们来看安放主的地方。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 957,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "彼得前书 3:21",
        "text": "这水所表明的洗礼、现在借着耶稣基督复活．也拯救你们．这洗礼本不在乎除掉肉体的污秽、只求在　神面前有无亏的良心。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 958,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "哥林多前书 15:21",
        "text": "死既是因一人而来、死人复活也是因一人而来。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 959,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "彼得前书 1:21",
        "text": "你们也因着他、信那叫他从死里复活、又给他荣耀的　神、叫你们的信心、和盼望、都在于　神。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 960,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 6:5",
        "text": "我们若在他死的形状上与他联合、也要在他复活的形状上与他联合．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 961,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 1:4",
        "text": "按圣善的灵说、因从死里复活、以大能显明是　神的儿子。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 962,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 6:19-21",
        "text": "不要为自己积攒财宝在地上、地上有虫子咬、能锈坏、也有贼挖窟窿来偷． 只要积攒财宝在天上、天上没有虫子咬、不能锈坏、也没有贼挖窟窿来偷． 因为你的财宝在那里、你的心也在那里。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 963,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 11:35",
        "text": "有妇人得自己的死人复活、又有人忍受严刑、不肯苟且得释放、〔释放原文作赎〕为要得着更美的复活．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 964,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "使徒行传 1:10-11",
        "text": "当他往上去、他们定睛望天的时候、忽然有两个人、身穿白衣、站在旁边、说、 加利利人哪、你们为甚么站着望天呢．这离开你们被接升天的耶稣、你们见他怎样往天上去、他还要怎样来。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 965,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约伯记 19:25-26",
        "text": "我知道我的救赎主活着、末了必站立在地上． 我这皮肉灭绝之后、我必在肉体之外得见　神。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 966,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 11:19",
        "text": "他以为　神还能叫人从死里复活．他也彷彿从死中得回他的儿子来。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 967,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "哥林多前书 15:17",
        "text": "基督若没有复活、你们的信便是徒然．你们仍在罪里。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 968,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 1:4-5",
        "text": "按圣善的灵说、因从死里复活、以大能显明是　神的儿子。 我们从他受了恩惠、并使徒的职分、在万国之中叫人为他的名信服真道．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 969,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 28:6",
        "text": "他不在这里、照他所说的、已经复活了．你们来看安放主的地方。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 970,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "提摩太前书 6:17-19",
        "text": "你要嘱咐那些今世富足的人、不要自高、也不要倚靠无定的钱财．只要倚靠那厚赐百物给我们享受的　神。 又要嘱咐他们行善、在好事上富足、甘心施舍、乐意供给人、〔供给或作体贴〕 为自己积成美好的根基、预备将来、叫他们持定那真正的生命。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 971,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以弗所书 1:1-3",
        "text": "奉　神旨意、作基督耶稣使徒的保罗、写信给在以弗所的圣徒、就是在基督耶稣里有忠心的人． 愿恩惠平安、从　神我们的父、和主耶稣基督、归与你们。 愿颂赞归与我们主耶稣基督的父　神、他在基督里、曾赐给我们天上各样属灵的福气．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 972,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "路加福音 23:43",
        "text": "耶稣对他说、我实在告诉你、今日你要同我在乐园里了。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 973,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "哥林多前书 15:6",
        "text": "后来一时显给五百多弟兄看、其中一大半到如今还在、却也有已经睡了的．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 974,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "以赛亚书 53:5",
        "text": "那知他为我们的过犯受害、为我们的罪孽压伤．因他受的刑罚我们得平安．因他受的鞭伤我们得医治。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 975,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 28:2",
        "text": "忽然地大震动．因为有主的使者、从天上下来、把石头滚开、坐在上面。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 976,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "使徒行传 1:3",
        "text": "他受害之后、用许多的凭据、将自己活活的显给使徒看、四十天之久向他们显现、讲说　神国的事。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 977,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 21:1",
        "text": "我又看见一个新天新地．因为先前的天地已经过去了．海也不再有了。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 978,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "罗马书 6:5-6",
        "text": "我们若在他死的形状上与他联合、也要在他复活的形状上与他联合． 因为知道我们的旧人、和他同钉十字架、使罪身灭绝、叫我们不再作罪的奴仆．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 979,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 13:43",
        "text": "那时义人在他们父的国里、要发出光来、像太阳一样。有耳可听的、就应当听。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 980,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "希伯来书 9:28",
        "text": "像这样、基督既然一次被献、担当了多人的罪、将来要向那等候他的人第二次显现、并与罪无关、乃是为拯救他们。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 981,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 18:10",
        "text": "你们要小心、不可轻看这小子里的一个．我告诉你们、他们的使者在天上、常见我天父的面。〔有古卷在此有〕",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 982,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 25:31",
        "text": "当人子在他荣耀里、同着众天使降临的时候、要坐在他荣耀的宝座上．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 983,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 24:27",
        "text": "闪电从东边发出、直照到西边．人子降临、也要这样。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 984,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "使徒行传 1:11",
        "text": "加利利人哪、你们为甚么站着望天呢．这离开你们被接升天的耶稣、你们见他怎样往天上去、他还要怎样来。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 985,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 22:12",
        "text": "看哪、我必快来．赏罚在我、要照各人所行的报应他。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 986,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "歌罗西书 3:4",
        "text": "基督是我们的生命、他显现的时候、你们也要与他一同显现在荣耀里。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 987,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "帖撒罗尼迦前书 3:13",
        "text": "好使你们、当我们主耶稣同他众圣徒来的时候、在我们父　神面前、心里坚固、成为圣洁、无可责备。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 988,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 22:20",
        "text": "证明这事的说、是了．我必快来。阿们。主耶稣阿、我愿你来。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 989,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 3:11",
        "text": "我必快来、你要持守你所有的、免得人夺去你的冠冕。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 990,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马可福音 8:38",
        "text": "凡在这淫乱罪恶的世代、把我和我的道当作可耻的、人子在他父的荣耀里、同圣天使降临的时候、也要把那人当作可耻的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 991,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "哥林多前书 15:3-6",
        "text": "我当日所领受又传给你们的、第一、就是基督照圣经所说、为我们的罪死了． 而且埋葬了．又照圣经所说、第三天复活了． 并且显给矶法看．然后显给十二使徒看． 后来一时显给五百多弟兄看、其中一大半到如今还在、却也有已经睡了的．",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 992,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "帖撒罗尼迦前书 4:17",
        "text": "以后我们这活着还存留的人、必和他们一同被提到云里、在空中与主相遇．这样、我们就要和主永远同在。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 993,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 5:24",
        "text": "我实实在在的告诉你们、那听我话、又信差我来者的、就有永生、不至于定罪、是已经出死入生了。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 994,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 7:14",
        "text": "我对他说、我主、你知道．他向我说、这些人是从大患难中出来的、曾用羔羊的血、把衣裳洗白净了。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 995,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "提摩太后书 4:8",
        "text": "从此以后、有公义的冠冕为我存留、就是按着公义审判的主到了那日要赐给我的．不但赐给我、也赐给凡爱慕他显现的人。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 996,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 6:47",
        "text": "我实实在在的告诉你们、信的人有永生。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 997,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "约翰福音 5:28-29",
        "text": "你们不要把这事看作希奇．时候要到、凡在坟墓里的、都要听见他的声音、就出来． 行善的复活得生、作恶的复活定罪。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 998,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "路加福音 9:26",
        "text": "凡把我和我的道当作可耻的、人子在自己的荣耀里、并天父与圣天使的荣耀里、降临的时候、也要把那人当作可耻的。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 999,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "马太福音 24:31",
        "text": "他要差遣使者、用号筒的大声、将他的选民、从四方、从天这边、到天那边、都招聚了来。〔方原文作风〕",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    },
    {
        "id": 1000,
        "category": "盼望",
        "categoryEn": "hope",
        "icon": "🌟",
        "color": "#E67E22",
        "reference": "啟示录 22:11",
        "text": "不义的、叫他仍旧不义．污秽的、叫他仍旧污秽．为义的、叫他仍旧为义．圣洁的、叫他仍旧圣洁。",
        "question": "这节关于\"盼望\"的经文如何触动你的心？"
    }
];

function getCardsByCategory(categoryId) {
    return cards.filter(card => card.categoryEn === categoryId);
}

function getRandomCard(categoryId = null) {
    if (categoryId) {
        const categoryCards = getCardsByCategory(categoryId);
        return categoryCards[Math.floor(Math.random() * categoryCards.length)];
    }
    return cards[Math.floor(Math.random() * cards.length)];
}

function getCardById(id) {
    return cards.find(card => card.id === id);
}

// ==================== src/core/card-service.js ====================
/**
 * 经文主题服务
 * 提供主题 id 解析、按主题筛选、随机抽取
 */
/**
 * 取一张卡的主题 id（英文，如 'comfort'）
 *
 * 卡的 `category` 字段是中文名（如「安慰」），仅供显示；而所有查找表
 * ——categories[].id、CSS 类名、data-category、筛选下拉、统计配色——
 * 用的都是英文 id。这两套命名混用是本项目出错最多的地方，统一从这里取值。
 *
 * @param {Object} card
 * @returns {string} 主题 id；取不到时返回 ''
 */
function getCardThemeId(card) {
    if (!card) return '';
    if (card.categoryEn) return card.categoryEn;
    // 手记不属于 7 个主题，用单独的 id，供筛选/统计识别
    if (card.category === 'note') return 'note';
    // 回退：老数据可能只存了中文名，反查 categories 得到 id
    const match = categories.find((c) => c.name === card.category);
    return match ? match.id : '';
}

/**
 * 按主题筛选经文
 * @param {Array} cards - 经文数组
 * @param {string} category - 主题 id（'comfort'），'all' 或空表示全部
 * @returns {Array} 筛选后的经文数组
 */
function filterCards(cards, category) {
    if (category === 'all' || !category) return cards;
    return cards.filter((card) => getCardThemeId(card) === category);
}

/**
 * 随机抽取一节经文
 * @param {Array} cards - 经文数组
 * @returns {Object|null} 随机选中的经文
 */
function drawRandomCard(cards) {
    if (!cards.length) return null;
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
}

// ==================== src/core/storage-migration.js ====================
/**
 * 存储命名空间与历史数据迁移
 *
 * 背景：本应用早期是从「心语卡牌」项目复制而来，localStorage key 沿用了
 * heartTalk* 前缀。两个应用部署在同一域名（jialezhouxin.github.io）下，
 * localStorage 按源共享 → 两边的记录写进同一个数组，互相覆盖。
 *
 * 本模块：
 * 1. 提供 bible* 命名空间的新 key（STORAGE_KEYS）
 * 2. 首次启动时把 heartTalk* 里的圣经记录迁移到 bible*，并把旧 key 里
 *    属于心语卡牌的记录留下（不删），解除串台
 *
 * 原则：**凡心语卡牌还在用的 key，一律只复制、不删除。**
 * 已确认心语卡牌仍在读 heartTalkHistory 与 heartTalkTheme，故这两个 key
 * 无论内容如何都保留；heartTalkCheckIn / heartTalkDailyCard 心语卡牌不用，
 * 搬完即删。
 */

const STORAGE_KEYS = {
    history: 'bibleHistory',
    theme: 'bibleTheme',
    checkIn: 'bibleCheckIn',
    dailyCard: 'bibleDailyCard',
    migrationFlag: 'bibleStorageMigrated'
};

/** 旧 key（来自心语卡牌项目） */
const LEGACY_KEYS = {
    history: 'heartTalkHistory',
    theme: 'heartTalkTheme',
    checkIn: 'heartTalkCheckIn',
    dailyCard: 'heartTalkDailyCard'
};

/** 7 个经文主题 id，用于判定某条记录是否属于圣经应用 */
const VERSE_CATEGORIES = new Set([
    'comfort', 'love', 'faith', 'strength', 'wisdom', 'forgiveness', 'hope'
]);

/** 对应的中文名（老数据可能只存了中文） */
const VERSE_CATEGORY_NAMES = new Set([
    '安慰', '爱心', '信心', '力量', '智慧', '宽恕', '盼望'
]);

/**
 * 判断一条历史记录是否属于圣经应用。
 * 保守策略：只有在能明确确认是经文记录时才返回 true，
 * 拿不准的一律留在旧 key（宁可少迁，也不误删心语卡牌的数据）。
 * @param {Object} item - 历史记录
 * @returns {boolean}
 */
function isVerseRecord(item) {
    if (!item || typeof item !== 'object') return false;
    const card = item.card;
    if (!card || typeof card !== 'object') return false;
    // 明确的经文特征：有出处且有原文
    const hasVerseFields = typeof card.reference === 'string' && card.reference
        && typeof card.text === 'string' && card.text;
    if (hasVerseFields) return true;
    // 主题属于 7 个经文主题（或其中文名），且不是心语卡牌的关系类类别
    if (typeof card.category !== 'string') return false;
    if (card.categoryEn && VERSE_CATEGORIES.has(card.categoryEn)) return true;
    return VERSE_CATEGORY_NAMES.has(card.category);
}

/**
 * 从 localStorage 安全读取并解析 JSON
 * @param {string} key
 * @returns {*} 解析结果，失败返回 null
 */
function readJSON(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

/**
 * 执行一次性迁移。幂等：迁移过就跳过。
 * @returns {{migrated:boolean, movedHistory:number, keptLegacyHistory:number}}
 */
function migrateLegacyStorage() {
    const result = { migrated: false, movedHistory: 0, keptLegacyHistory: 0 };

    try {
        if (localStorage.getItem(STORAGE_KEYS.migrationFlag) === '1') {
            return result;
        }

        // ---- 历史记录：按记录特征分流 ----
        const legacyHistory = readJSON(LEGACY_KEYS.history);
        if (Array.isArray(legacyHistory) && legacyHistory.length) {
            const verseRecords = legacyHistory.filter(isVerseRecord);
            const otherRecords = legacyHistory.filter((item) => !isVerseRecord(item));

            if (verseRecords.length) {
                // 合并进新 key（若已有新数据则并集，按 id 去重）
                const existing = readJSON(STORAGE_KEYS.history);
                const merged = Array.isArray(existing) ? existing.slice() : [];
                const seen = new Set(merged.map((it) => it && it.id));
                verseRecords.forEach((it) => {
                    if (it && !seen.has(it.id)) {
                        // 旧数据没有来源字段，按「抽取金句」处理
                        merged.push(it.source ? it : { ...it, source: 'draw' });
                        seen.add(it.id);
                    }
                });
                merged.sort((a, b) => (b.id || 0) - (a.id || 0));
                localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(merged));
                result.movedHistory = verseRecords.length;
            }

            // 旧 key 只保留不属于圣经的记录；空了就删掉，还给心语卡牌
            if (otherRecords.length) {
                localStorage.setItem(LEGACY_KEYS.history, JSON.stringify(otherRecords));
                result.keptLegacyHistory = otherRecords.length;
            } else {
                localStorage.removeItem(LEGACY_KEYS.history);
            }
        }

        // ---- 主题：继承旧值，但**不删旧 key** ----
        // 背景：heartTalkTheme 这个 key 心语卡牌自己还在用（heart-talk/src/main.js）。
        // 两个应用同源，删了它会把心语卡牌的主题设置一并抹掉。
        // 所以这里只「复制一份」过来，旧 key 留给心语卡牌。
        if (!localStorage.getItem(STORAGE_KEYS.theme)) {
            const legacyTheme = localStorage.getItem(LEGACY_KEYS.theme);
            if (legacyTheme) {
                localStorage.setItem(STORAGE_KEYS.theme, legacyTheme);
            }
        }

        // ---- 打卡 / 每日卡牌：整体搬运，然后删旧 key ----
        // 这两个 key 心语卡牌完全不用，可以安全清掉。
        [
            [LEGACY_KEYS.checkIn, STORAGE_KEYS.checkIn],
            [LEGACY_KEYS.dailyCard, STORAGE_KEYS.dailyCard]
        ].forEach(([oldKey, newKey]) => {
            const value = localStorage.getItem(oldKey);
            if (value !== null) {
                if (!localStorage.getItem(newKey)) {
                    localStorage.setItem(newKey, value);
                }
                localStorage.removeItem(oldKey);
            }
        });

        localStorage.setItem(STORAGE_KEYS.migrationFlag, '1');
        result.migrated = true;
    } catch (error) {
        // 迁移失败不能阻塞应用启动；下次启动会再试
        console.warn('存储迁移未完成:', error);
    }

    return result;
}

// ==================== src/core/history-store.js ====================
const HISTORY_KEY = STORAGE_KEYS.history;

function loadHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveHistory(history) {
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
        return true;
    } catch {
        return false;
    }
}

function clearHistoryStore() {
    try {
        localStorage.removeItem(HISTORY_KEY);
        return true;
    } catch {
        return false;
    }
}

function updateHistoryItem(history, id, newAnswer) {
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

function deleteHistoryItem(history, id) {
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

// ==================== src/core/date-utils.js ====================
/**
 * 日期工具
 *
 * 本应用里有两类日期字符串：
 * - 历史记录时间戳：zh-CN 本地格式（如 2026/9/17 16:01:32，月/日不补零）
 * - 打卡日期：YYYY-MM-DD
 *
 * 这两类都不能直接交给 new Date()：
 * - '2026-10-30 14:00:00' 在 Safari 里会被解析成 Invalid Date；
 * - toISOString() 取的是 UTC 日期，东八区早上 8 点前会算成前一天。
 *
 * 所以统一在这里按本地时区格式化与解析。
 */

/**
 * 取本地日期字符串 YYYY-MM-DD
 * @param {Date} [date]
 * @returns {string}
 */
function getLocalDateString(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/**
 * 把 YYYY-MM-DD 解析成当天零点的本地 Date
 * @param {string} dateStr
 * @returns {Date}
 */
function parseLocalDateString(dateStr) {
    const match = String(dateStr || '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (!match) return new Date(NaN);
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

/**
 * 解析历史记录时间戳，兼容 zh-CN 本地格式与 ISO 字符串
 * @param {string} timestamp
 * @returns {Date}
 */
function parseTimestamp(timestamp) {
    const text = String(timestamp || '');
    // zh-CN 本地格式：斜杠分隔，月/日可能不补零
    if (/^\d{4}\/\d{1,2}\/\d{1,2}/.test(text)) {
        const [datePart, timePart = ''] = text.split(' ');
        const [y, m, d] = datePart.split('/').map(Number);
        const [hh = 0, mm = 0, ss = 0] = timePart ? timePart.split(':').map(Number) : [];
        return new Date(y, m - 1, d, hh, mm, ss);
    }
    // ISO 字符串（如导出文件里的时间）
    return new Date(text);
}

// ==================== src/core/history-filter.js ====================
/**
 * 灵修记录的筛选与导出
 */
const SOURCE_LABELS = {
    draw: '抽取金句',
    daily: '今日经文',
    note: '手记'
};

/**
 * 取当天零点
 * @returns {Date}
 */
function startOfToday() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/**
 * 按日期范围筛选
 * @param {Array} history
 * @param {string} dateFilter - 'all' | 'today' | 'week' | 'month' | 'year'
 * @returns {Array}
 */
function filterByDate(history, dateFilter) {
    if (dateFilter === 'all' || !dateFilter) {
        return history;
    }

    const today = startOfToday();

    return history.filter(item => {
        const itemDate = parseTimestamp(item.timestamp);
        if (Number.isNaN(itemDate.getTime())) return true;

        switch (dateFilter) {
            case 'today':
                return itemDate >= today;
            case 'week': {
                const weekAgo = new Date(today);
                weekAgo.setDate(weekAgo.getDate() - 7);
                return itemDate >= weekAgo;
            }
            case 'month': {
                const monthAgo = new Date(today);
                monthAgo.setMonth(monthAgo.getMonth() - 1);
                return itemDate >= monthAgo;
            }
            case 'year': {
                const yearAgo = new Date(today);
                yearAgo.setFullYear(yearAgo.getFullYear() - 1);
                return itemDate >= yearAgo;
            }
            default:
                return true;
        }
    });
}

/**
 * 按主题筛选
 * @param {Array} history
 * @param {string} categoryFilter - 'all' | 主题 id | 'note'
 * @returns {Array}
 */
function filterByCategory(history, categoryFilter) {
    if (categoryFilter === 'all' || !categoryFilter) {
        return history;
    }
    return history.filter(item => getCardThemeId(item.card) === categoryFilter);
}

/**
 * 按来源筛选
 * @param {Array} history
 * @param {string} sourceFilter - 'all' | 'draw' | 'daily' | 'note'
 * @returns {Array}
 */
function filterBySource(history, sourceFilter) {
    if (sourceFilter === 'all' || !sourceFilter) {
        return history;
    }
    // 旧数据没有 source 字段，视为抽卡
    return history.filter(item => (item.source || 'draw') === sourceFilter);
}

/**
 * 组合筛选（日期 + 主题 + 来源）
 * @param {Array} history
 * @param {Object} filters - { date, category, source }
 * @returns {Array}
 */
function filterHistory(history, filters = {}) {
    let result = [...history];

    if (filters.date && filters.date !== 'all') {
        result = filterByDate(result, filters.date);
    }

    if (filters.category && filters.category !== 'all') {
        result = filterByCategory(result, filters.category);
    }

    if (filters.source && filters.source !== 'all') {
        result = filterBySource(result, filters.source);
    }

    return result;
}

/**
 * 将灵修记录导出为 JSON
 * @param {Array} history
 * @returns {string}
 */
function exportToJSON(history) {
    const exportData = {
        exportDate: new Date().toISOString(),
        totalCount: history.length,
        records: history.map((item) => ({
            ...item,
            sourceLabel: SOURCE_LABELS[item.source || 'draw'] || item.source
        }))
    };
    return JSON.stringify(exportData, null, 2);
}

/**
 * 下载 JSON 文件
 * @param {string} jsonString
 * @param {string} filename
 */
function downloadJSON(jsonString, filename = '圣经金句灵修记录.json') {
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * 生成统计信息
 * @param {Array} history
 * @returns {Object}
 */
function generateHistoryStats(history) {
    const stats = {
        totalCount: history.length,
        byCategory: {},
        bySource: {},
        byDate: {}
    };

    history.forEach(item => {
        const card = item.card || {};

        const category = getCardThemeId(card) || 'unknown';
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

        const source = item.source || 'draw';
        stats.bySource[source] = (stats.bySource[source] || 0) + 1;

        const date = parseTimestamp(item.timestamp);
        if (!Number.isNaN(date.getTime())) {
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            stats.byDate[monthKey] = (stats.byDate[monthKey] || 0) + 1;
        }
    });

    return stats;
}

// ==================== src/core/history-export.js ====================
/**
 * 历史记录导出功能 - 图片和PDF纪念册
 */
/**
 * 生成历史记录纪念册图片
 * @param {Array} history - 历史记录数组
 * @param {Object} categoryNames - 主题名称映射
 * @returns {Promise<string>} 图片DataURL
 */
async function generateHistoryAlbumImage(history, categoryNames) {
    if (!history.length) {
        throw new Error('没有历史记录可导出');
    }

    // 创建临时容器
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: 800px;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        padding: 40px;
        font-family: 'Noto Serif SC', serif;
    `;

    // 生成统计信息
    const stats = generateHistoryStats(history);

    // 构建纪念册HTML
    let albumHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 50px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            min-height: 1000px;
        ">
            <!-- 封面 -->
            <div style="text-align: center; margin-bottom: 50px; padding-bottom: 40px; border-bottom: 3px solid #e8f5e9;">
                <div style="font-size: 60px; margin-bottom: 20px;">📖</div>
                <h1 style="
                    font-size: 42px;
                    color: #2e7d32;
                    margin: 0 0 15px 0;
                    font-weight: 700;
                ">圣经金句 · 灵修纪念册</h1>
                <p style="
                    font-size: 18px;
                    color: #666;
                    margin: 0;
                ">记录每一次与神的相遇</p>
                <p style="
                    font-size: 14px;
                    color: #999;
                    margin-top: 15px;
                ">生成时间：${new Date().toLocaleString('zh-CN')}</p>
            </div>

            <!-- 统计概览 -->
            <div style="margin-bottom: 40px; padding: 25px; background: #f8f9fa; border-radius: 15px;">
                <h2 style="font-size: 24px; color: #333; margin: 0 0 20px 0;">📊 灵修统计</h2>
                <div style="display: flex; gap: 30px; flex-wrap: wrap;">
                    <div style="text-align: center;">
                        <div style="font-size: 36px; font-weight: bold; color: #2e7d32;">${stats.totalCount}</div>
                        <div style="font-size: 14px; color: #666;">总记录数</div>
                    </div>
                    ${Object.entries(stats.byCategory).map(([cat, count]) => `
                        <div style="text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: #4caf50;">${count}</div>
                            <div style="font-size: 14px; color: #666;">${cat === 'note' ? '手记' : (categoryNames[cat] || cat)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 历史记录列表 -->
            <div>
                <h2 style="font-size: 24px; color: #333; margin: 0 0 25px 0;">💭 灵修记录</h2>
    `;

    // 添加每条记录
    history.slice(0, 20).forEach((item, index) => {
        const card = item.card || {};
        // 主题名与配色都按英文 id 取（card.category 是中文，只作显示回退）
        const themeId = getCardThemeId(card);
        const categoryName = themeId === 'note'
            ? '手记'
            : (categoryNames[themeId] || card.category || '');
        
        albumHTML += `
            <div style="
                margin-bottom: 25px;
                padding: 20px;
                background: #fafafa;
                border-radius: 12px;
                border-left: 4px solid #4caf50;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <span style="
                        font-size: 12px;
                        color: #fff;
                        background: ${getCategoryColor(themeId)};
                        padding: 4px 12px;
                        border-radius: 20px;
                    ">${categoryName}</span>
                    <span style="font-size: 12px; color: #999;">${item.timestamp}</span>
                </div>
                <div style="
                    font-size: 16px;
                    color: #333;
                    font-weight: 600;
                    margin-bottom: 10px;
                    line-height: 1.5;
                ">${escapeHtml(card.text || '')}</div>
                <div style="
                    font-size: 13px;
                    color: #8a7561;
                    margin-bottom: 10px;
                ">—— ${escapeHtml(card.reference || '')}</div>
                <div style="
                    font-size: 14px;
                    color: #555;
                    line-height: 1.6;
                    padding: 12px;
                    background: white;
                    border-radius: 8px;
                ">${escapeHtml(item.answer)}</div>
            </div>
        `;
    });

    if (history.length > 20) {
        albumHTML += `
            <div style="text-align: center; padding: 30px; color: #999; font-size: 14px;">
                ... 还有 ${history.length - 20} 条记录 ...
            </div>
        `;
    }

    albumHTML += `
            </div>
            
            <!-- 页脚 -->
            <div style="
                text-align: center;
                margin-top: 50px;
                padding-top: 30px;
                border-top: 2px solid #e8f5e9;
                color: #999;
                font-size: 14px;
            ">
                <p>记录神的话语，数算他的恩典</p>
                <p style="margin-top: 10px;">📖 圣经金句</p>
            </div>
        </div>
    `;

    container.innerHTML = albumHTML;
    document.body.appendChild(container);

    try {
        // 等待字体加载
        await document.fonts.ready;
        
        // 检测是否在 file:// 协议下运行
        const isFileProtocol = window.location.protocol === 'file:';
        if (isFileProtocol) {
            throw new Error('请使用 HTTP 服务器访问以生成图片');
        }

        // 使用 html2canvas 生成图片
        const canvas = await html2canvas(container.firstElementChild, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            logging: false,
            width: 800,
            height: container.firstElementChild.scrollHeight
        });

        return canvas.toDataURL('image/png');
    } finally {
        document.body.removeChild(container);
    }
}

/**
 * 下载纪念册图片
 * @param {string} dataUrl - 图片DataURL
 */
function downloadAlbumImage(dataUrl) {
    const link = document.createElement('a');
    link.download = `圣经金句灵修记录_${getLocalDateString()}.png`;
    link.href = dataUrl;
    link.click();
}

/**
 * 生成并下载PDF纪念册
 * @param {Array} history - 历史记录数组
 * @param {Object} categoryNames - 主题名称映射
 */
async function generatePDFAlbum(history, categoryNames) {
    // 由于PDF生成需要额外库，这里先提供图片导出
    // PDF功能可以通过引入 jspdf 或 html2pdf.js 实现
    const imageData = await generateHistoryAlbumImage(history, categoryNames);
    downloadAlbumImage(imageData);
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
 * 获取主题对应的颜色
 * @param {string} category - 主题代码
 * @returns {string} 颜色代码
 */
function getCategoryColor(category) {
    const colors = {
        comfort: '#4A90E2',
        love: '#E74C3C',
        faith: '#9B59B6',
        strength: '#F39C12',
        wisdom: '#1ABC9C',
        forgiveness: '#3498DB',
        hope: '#E67E22',
        note: '#1ABC9C'
    };
    return colors[category] || '#4caf50';
}

/**
 * 批量导出多条记录为图片（分页）
 * @param {Array} history - 历史记录数组
 * @param {Object} categoryNames - 类别名称映射
 * @param {Object} categoryNames - 主题名称映射
 * @param {number} itemsPerPage - 每页记录数
 * @returns {Promise<string[]>} 图片DataURL数组
 */
async function generatePagedAlbumImages(history, categoryNames, itemsPerPage = 10) {
    const images = [];
    const totalPages = Math.ceil(history.length / itemsPerPage);
    
    for (let i = 0; i < totalPages; i++) {
        const pageHistory = history.slice(i * itemsPerPage, (i + 1) * itemsPerPage);
        const imageData = await generateHistoryAlbumImage(pageHistory, categoryNames);
        images.push(imageData);
    }
    
    return images;
}

// ==================== src/ui/render.js ====================
function createElement(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function renderCard({ currentCard, categoryNames, elements }) {
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
        emptyState.style.display = 'block';
        cardContent.style.display = 'none';
        saveBtn.style.display = 'none';
        shareBtn.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    cardContent.style.display = 'block';
    const themeId = getCardThemeId(currentCard);
    cardCategory.textContent = categoryNames[themeId] || currentCard.category || '';

    // 副标题显示经文出处
    cardLevel.textContent = currentCard.reference || '';
    cardLevel.className = 'card-level verse-reference-label';

    // 正文显示经文原文
    cardQuestion.innerHTML = `
        <div class="verse-text">${escapeHtml(currentCard.text)}</div>
        <div class="verse-reference">${escapeHtml(currentCard.reference)}</div>
    `;

    saveBtn.style.display = 'inline-block';
    shareBtn.style.display = 'inline-block';
}

/**
 * 转义 HTML，防止经文文本破坏标签结构
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text == null ? '' : String(text);
    return div.innerHTML;
}

function renderHistory({ history, categoryNames, historyList, onEdit, onDelete }) {
    historyList.replaceChildren();

    if (!history.length) {
        const empty = createElement('div', 'empty-state');
        empty.appendChild(createElement('p', '', '暂无灵修记录'));
        historyList.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    history.forEach((item) => {
        const wrapper = createElement('div', 'history-item');
        wrapper.dataset.id = item.id;

        // 头部信息：时间戳 + 操作按钮
        const header = createElement('div', 'history-item-header');
        header.appendChild(createElement('span', 'timestamp', item.timestamp));
        
        // 操作按钮组
        const actions = createElement('div', 'history-item-actions');
        
        const editBtn = createElement('button', 'history-action-btn edit-btn', '✏️');
        editBtn.title = '编辑';
        editBtn.dataset.action = 'edit';
        editBtn.dataset.id = item.id;
        
        const deleteBtn = createElement('button', 'history-action-btn delete-btn', '🗑️');
        deleteBtn.title = '删除';
        deleteBtn.dataset.action = 'delete';
        deleteBtn.dataset.id = item.id;
        
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        header.appendChild(actions);
        wrapper.appendChild(header);

        // 主题标签 + 来源 + 经文出处（容忍旧数据里缺失 card 的记录）
        const card = item.card || {};
        const SOURCE_LABELS = { draw: '抽卡', daily: '每日', note: '手记' };
        const source = item.source || 'draw';
        const tagsRow = createElement('div', 'history-item-tags');
        const sourceTag = createElement('span', `source-tag source-${source}`, SOURCE_LABELS[source] || source);
        tagsRow.appendChild(sourceTag);
        if (card.category && card.category !== 'note') {
            // CSS 类名与显示名都按主题 id 取，不能拿中文 category 拼类名
            const themeId = getCardThemeId(card);
            const categoryName = categoryNames[themeId] || card.category;
            const categoryTag = createElement('span', `category-tag category-${themeId || 'unknown'}`, categoryName);
            tagsRow.appendChild(categoryTag);
        }

        if (tagsRow.childNodes.length) {
            wrapper.appendChild(tagsRow);
        }

        // 经文原文 + 我的感受
        if (card.text) {
            wrapper.appendChild(createElement('div', 'question verse-text', card.text));
            wrapper.appendChild(createElement('div', 'verse-reference', card.reference ? `—— ${card.reference}` : ''));
        } else if (card.reference) {
            wrapper.appendChild(createElement('div', 'verse-reference', `—— ${card.reference}`));
        }
        wrapper.appendChild(createElement('div', 'answer', item.answer));
        
        // 如果有更新时间，显示
        if (item.updatedAt) {
            wrapper.appendChild(createElement('div', 'updated-at', `编辑于 ${item.updatedAt}`));
        }

        // 绑定事件
        if (onEdit) {
            editBtn.addEventListener('click', () => onEdit(item));
        }
        if (onDelete) {
            deleteBtn.addEventListener('click', () => onDelete(item));
        }

        fragment.appendChild(wrapper);
    });

    historyList.appendChild(fragment);
}

/**
 * 渲染筛选控件
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.container - 容器元素
 * @param {Object} params.categoryNames - 主题名称映射
 * @param {Function} params.onFilterChange - 筛选变化回调
 */
function renderHistoryFilters({ container, categoryNames, onFilterChange }) {
    container.replaceChildren();
    
    const wrapper = createElement('div', 'history-filters');
    
    // 日期筛选
    const dateFilterGroup = createElement('div', 'filter-group');
    dateFilterGroup.appendChild(createElement('label', '', '时间：'));
    
    const dateSelect = createElement('select', 'filter-select');
    dateSelect.dataset.filterType = 'date';
    const dateOptions = [
        { value: 'all', label: '全部时间' },
        { value: 'today', label: '今天' },
        { value: 'week', label: '最近7天' },
        { value: 'month', label: '最近30天' },
        { value: 'year', label: '最近一年' }
    ];
    dateOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        dateSelect.appendChild(option);
    });
    dateFilterGroup.appendChild(dateSelect);
    wrapper.appendChild(dateFilterGroup);
    
    // 主题筛选
    const categoryFilterGroup = createElement('div', 'filter-group');
    categoryFilterGroup.appendChild(createElement('label', '', '主题：'));
    
    const categorySelect = createElement('select', 'filter-select');
    categorySelect.dataset.filterType = 'category';
    const categoryOptions = [
        { value: 'all', label: '全部主题' },
        ...Object.entries(categoryNames).map(([key, name]) => ({ value: key, label: name })),
        { value: 'note', label: '手记' }
    ];
    categoryOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        categorySelect.appendChild(option);
    });
    categoryFilterGroup.appendChild(categorySelect);
    wrapper.appendChild(categoryFilterGroup);

    // 来源筛选
    const sourceFilterGroup = createElement('div', 'filter-group');
    sourceFilterGroup.appendChild(createElement('label', '', '来源：'));

    const sourceSelect = createElement('select', 'filter-select');
    sourceSelect.dataset.filterType = 'source';
    [
        { value: 'all', label: '全部来源' },
        { value: 'draw', label: '抽取金句' },
        { value: 'daily', label: '今日经文' },
        { value: 'note', label: '手记' }
    ].forEach((opt) => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        sourceSelect.appendChild(option);
    });
    sourceFilterGroup.appendChild(sourceSelect);
    wrapper.appendChild(sourceFilterGroup);
    
    // 绑定事件
    if (onFilterChange) {
        const emit = () => onFilterChange({
            date: dateSelect.value,
            category: categorySelect.value,
            source: sourceSelect.value
        });
        dateSelect.addEventListener('change', emit);
        categorySelect.addEventListener('change', emit);
        sourceSelect.addEventListener('change', emit);
    }
    
    container.appendChild(wrapper);
}

/**
 * 渲染导出控件
 * @param {Object} params - 参数对象
 * @param {HTMLElement} params.container - 容器元素
 * @param {Function} params.onExportJSON - 导出JSON回调
 * @param {Function} params.onExportImage - 导出图片回调
 * @param {Function} params.onExportAlbum - 导出纪念册回调
 * @param {Function} params.onShowStats - 显示统计回调
 * @param {Function} params.onShowReport - 显示报告回调
 */
function renderExportControls({ container, onExportJSON, onExportImage, onExportAlbum, onShowStats, onShowReport }) {
    container.replaceChildren();
    
    const wrapper = createElement('div', 'export-controls');
    
    const exportBtn = createElement('button', 'btn btn-secondary export-btn', '📤 导出');
    exportBtn.title = '导出历史记录';
    
    const dropdown = createElement('div', 'export-dropdown');
    dropdown.style.display = 'none';
    
    const jsonOption = createElement('div', 'export-option', '📄 导出为 JSON');
    jsonOption.dataset.exportType = 'json';
    
    const imageOption = createElement('div', 'export-option', '🖼️ 导出为图片');
    imageOption.dataset.exportType = 'image';
    
    const albumOption = createElement('div', 'export-option', '📖 生成纪念册');
    albumOption.dataset.exportType = 'album';
    
    const statsOption = createElement('div', 'export-option', '📊 数据统计');
    statsOption.dataset.exportType = 'stats';
    
    const reportOption = createElement('div', 'export-option', '📋 我的报告');
    reportOption.dataset.exportType = 'report';
    
    dropdown.appendChild(jsonOption);
    dropdown.appendChild(imageOption);
    dropdown.appendChild(albumOption);
    dropdown.appendChild(statsOption);
    dropdown.appendChild(reportOption);
    
    wrapper.appendChild(exportBtn);
    wrapper.appendChild(dropdown);
    
    // 切换下拉菜单显示
    exportBtn.addEventListener('click', () => {
        const isVisible = dropdown.style.display !== 'none';
        dropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
    
    // 绑定导出事件
    if (onExportJSON) {
        jsonOption.addEventListener('click', () => {
            onExportJSON();
            dropdown.style.display = 'none';
        });
    }
    if (onExportImage) {
        imageOption.addEventListener('click', () => {
            onExportImage();
            dropdown.style.display = 'none';
        });
    }
    if (onExportAlbum) {
        albumOption.addEventListener('click', () => {
            onExportAlbum();
            dropdown.style.display = 'none';
        });
    }
    if (onShowStats) {
        statsOption.addEventListener('click', () => {
            onShowStats();
            dropdown.style.display = 'none';
        });
    }
    if (onShowReport) {
        reportOption.addEventListener('click', () => {
            onShowReport();
            dropdown.style.display = 'none';
        });
    }
    
    container.appendChild(wrapper);
}

// ==================== src/core/stats.js ====================
/**
 * 统计计算模块
 * 提供灵修记录的数据分析和报告生成功能
 */
// 主题名称/配色（以 cards.js 的 categories 为唯一真源）
const CATEGORY_NAMES = {};
const CATEGORY_COLORS = {};
categories.forEach((c) => {
    CATEGORY_NAMES[c.id] = c.name;
    CATEGORY_COLORS[c.id] = c.color;
});
// 手记不属于 7 个主题，但也会进统计，单独给个名字和颜色
CATEGORY_NAMES.note = '手记';
CATEGORY_COLORS.note = '#1ABC9C';

/**
 * 计算基础统计数据
 * @param {Array} history - 历史记录数组
 * @returns {Object}
 */
function calculateBasicStats(history) {
    if (!history || history.length === 0) {
        return {
            totalCount: 0,
            todayCount: 0,
            weekCount: 0,
            monthCount: 0
        };
    }

    const now = new Date();
    const today = getLocalDateString(now);
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

    let todayCount = 0;
    let weekCount = 0;
    let monthCount = 0;

    history.forEach(item => {
        const itemDate = parseTimestamp(item.timestamp);
        const itemDateStr = getLocalDateString(itemDate);

        if (itemDateStr === today) {
            todayCount++;
        }
        if (itemDate >= weekAgo) {
            weekCount++;
        }
        if (itemDate >= monthAgo) {
            monthCount++;
        }
    });

    return {
        totalCount: history.length,
        todayCount,
        weekCount,
        monthCount
    };
}

/**
 * 计算主题分布
 * @param {Array} history - 历史记录数组
 * @returns {Array} - 饼图数据格式 [{name, value, color}]
 */
function calculateCategoryDistribution(history) {
    if (!history || history.length === 0) {
        return [];
    }

    const counts = {};
    history.forEach(item => {
        const cat = getCardThemeId(item.card) || 'unknown';
        counts[cat] = (counts[cat] || 0) + 1;
    });

    return Object.entries(counts).map(([category, count]) => ({
        name: CATEGORY_NAMES[category] || category,
        value: count,
        color: CATEGORY_COLORS[category] || '#999',
        category
    })).sort((a, b) => b.value - a.value);
}

/**
 * 计算来源分布（抽卡 / 每日 / 手记）
 * @param {Array} history - 历史记录数组
 * @returns {Array} - 饼图数据格式 [{name, value, color}]
 */
function calculateSourceDistribution(history) {
    if (!history || history.length === 0) {
        return [];
    }

    const SOURCE_NAMES = { draw: '抽取金句', daily: '今日经文', note: '手记' };
    const SOURCE_COLORS = { draw: '#4A90E2', daily: '#E67E22', note: '#1ABC9C' };

    const counts = {};
    history.forEach(item => {
        const src = item.source || 'draw';
        counts[src] = (counts[src] || 0) + 1;
    });

    return Object.entries(counts).map(([source, count]) => ({
        name: SOURCE_NAMES[source] || source,
        value: count,
        color: SOURCE_COLORS[source] || '#999',
        source
    })).sort((a, b) => b.value - a.value);
}

/**
 * 计算每日活跃度（最近 N 天）
 * @param {Array} history - 历史记录数组
 * @param {number} days - 天数
 * @returns {Array}
 */
function calculateDailyActivity(history, days = 7) {
    if (!history || history.length === 0) {
        return [];
    }

    const result = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dateStr = getLocalDateString(date);
        const dayName = i === 0 ? '今天' : i === 1 ? '昨天' : `${date.getMonth() + 1}/${date.getDate()}`;

        const count = history.filter(item => {
            const itemDate = getLocalDateString(parseTimestamp(item.timestamp));
            return itemDate === dateStr;
        }).length;

        result.push({
            date: dateStr,
            dayName,
            count,
            isToday: i === 0
        });
    }

    return result;
}

/**
 * 生成报告洞察文字
 * @param {Array} history - 历史记录数组
 * @param {Object} stats - 统计数据
 * @returns {Array<string>}
 */
function generateInsights(history, stats) {
    if (!history || history.length === 0) {
        return ['开始记录经文，生成你的专属灵修报告吧！'];
    }

    const insights = [];
    const catDist = calculateCategoryDistribution(history);

    // 基础统计洞察
    if (stats.totalCount < 10) {
        insights.push(`你已记录 ${stats.totalCount} 条灵修笔记，继续加油！`);
    } else if (stats.totalCount < 50) {
        insights.push(`很棒！你已积累 ${stats.totalCount} 条灵修笔记，渐入佳境。`);
    } else {
        insights.push(`你已记录 ${stats.totalCount} 条灵修笔记，这是很可贵的坚持。`);
    }

    // 主题洞察
    if (catDist.length > 0) {
        const topCat = catDist[0];
        const percentage = Math.round((topCat.value / stats.totalCount) * 100);
        insights.push(`你在「${topCat.name}」主题的经文上最常受触动，占比 ${percentage}%。`);
    }

    // 活跃度洞察
    if (stats.weekCount >= 5) {
        insights.push('近7天灵修很稳定，愿神的话继续滋养你。');
    } else if (stats.todayCount > 0) {
        insights.push('今天也有新的领受，感谢神的恩典。');
    }

    return insights;
}

/**
 * 生成完整报告数据
 * @param {Array} history - 历史记录数组
 * @param {number} streakDays - 连续打卡天数
 * @returns {Object}
 */
function generateFullReport(history, streakDays = 0) {
    const basicStats = calculateBasicStats(history);
    const categoryDist = calculateCategoryDistribution(history);
    const sourceDist = calculateSourceDistribution(history);
    const dailyActivity = calculateDailyActivity(history, 7);
    const insights = generateInsights(history, basicStats);

    return {
        stats: {
            ...basicStats,
            streakDays
        },
        categoryDistribution: categoryDist,
        sourceDistribution: sourceDist,
        dailyActivity,
        insights,
        generatedAt: new Date().toLocaleString('zh-CN')
    };
}

// ==================== src/core/check-in.js ====================
/**
 * 打卡记录模块
 * 管理用户连续打卡天数和打卡历史
 */
const CHECKIN_KEY = STORAGE_KEYS.checkIn;

/**
 * 加载打卡数据
 * @returns {Object} - { dates: string[], streak: number, lastDate: string|null }
 */
function loadCheckInData() {
    try {
        const raw = localStorage.getItem(CHECKIN_KEY);
        if (!raw) {
            return { dates: [], streak: 0, lastDate: null };
        }
        const parsed = JSON.parse(raw);
        return {
            dates: Array.isArray(parsed.dates) ? parsed.dates : [],
            streak: typeof parsed.streak === 'number' ? parsed.streak : 0,
            lastDate: parsed.lastDate || null
        };
    } catch {
        return { dates: [], streak: 0, lastDate: null };
    }
}

/**
 * 保存打卡数据
 * @param {Object} data
 * @returns {boolean}
 */
function saveCheckInData(data) {
    try {
        localStorage.setItem(CHECKIN_KEY, JSON.stringify(data));
        return true;
    } catch {
        return false;
    }
}

/**
 * 检查今天是否已打卡
 * @param {Object} checkInData
 * @returns {boolean}
 */
function isTodayCheckedIn(checkInData) {
    if (!checkInData || !checkInData.lastDate) {
        return false;
    }
    const today = getLocalDateString();
    return checkInData.lastDate === today;
}

/**
 * 计算两个日期之间的天数差
 * 两个日期都按本地零点解析，避免时区/夏令时导致的 23/25 小时问题
 * @param {string} dateStr1 - YYYY-MM-DD
 * @param {string} dateStr2 - YYYY-MM-DD
 * @returns {number}
 */
function daysBetween(dateStr1, dateStr2) {
    const d1 = parseLocalDateString(dateStr1);
    const d2 = parseLocalDateString(dateStr2);
    return Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
}

/**
 * 执行打卡
 * 如果今天已打卡则返回当前数据，否则更新打卡记录
 * @returns {Object} - 更新后的打卡数据
 */
function doCheckIn() {
    const data = loadCheckInData();
    const today = getLocalDateString();

    // 今天已打卡，直接返回
    if (data.lastDate === today) {
        return data;
    }

    // 更新打卡日期列表
    if (!data.dates.includes(today)) {
        data.dates.push(today);
    }

    // 计算连续打卡天数
    if (!data.lastDate) {
        // 首次打卡
        data.streak = 1;
    } else {
        const daysDiff = daysBetween(data.lastDate, today);
        if (daysDiff === 1) {
            // 连续打卡
            data.streak += 1;
        } else if (daysDiff === 0) {
            // 同一天，不做任何操作
        } else {
            // 断签，重新计算
            data.streak = 1;
        }
    }

    data.lastDate = today;
    saveCheckInData(data);
    return data;
}

/**
 * 在保存回答时自动打卡
 * 这是主要的打卡入口，每次用户保存回答时调用
 * @returns {Object} - { isNewCheckIn: boolean, data: Object }
 */
function checkInOnSave() {
    const data = loadCheckInData();
    const wasCheckedIn = isTodayCheckedIn(data);

    const newData = doCheckIn();

    return {
        isNewCheckIn: !wasCheckedIn,
        data: newData
    };
}

/**
 * 获取连续打卡天数
 * @returns {number}
 */
function getStreakDays() {
    const data = loadCheckInData();
    return data.streak;
}

/**
 * 获取本月打卡天数
 * @returns {number}
 */
function getMonthlyCheckInCount() {
    const data = loadCheckInData();
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return data.dates.filter(dateStr => {
        const date = parseLocalDateString(dateStr);
        if (Number.isNaN(date.getTime())) return false;
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    }).length;
}

/**
 * 获取最近 N 天的打卡状态
 * @param {number} days
 * @returns {Array<{date: string, checked: boolean}>}
 */
function getRecentCheckInStatus(days = 7) {
    const data = loadCheckInData();
    const result = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dateStr = getLocalDateString(date);

        result.push({
            date: dateStr,
            dayName: i === 0 ? '今天' : i === 1 ? '昨天' : `${date.getMonth() + 1}/${date.getDate()}`,
            checked: data.dates.includes(dateStr),
            isToday: i === 0
        });
    }

    return result;
}

/**
 * 清除所有打卡数据
 * @returns {boolean}
 */
function clearCheckInData() {
    try {
        localStorage.removeItem(CHECKIN_KEY);
        return true;
    } catch {
        return false;
    }
}

// ==================== src/ui/stats-render.js ====================
/**
 * 统计渲染模块
 * 负责渲染统计图表和报告界面
 */
/**
 * 渲染统计概览卡片
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器元素
 * @param {Array} params.history - 历史记录
 */
function renderStatsOverview({ container, history }) {
    const stats = calculateBasicStats(history);
    const streakDays = getStreakDays();
    const catDist = calculateCategoryDistribution(history);
    const topCategory = catDist.length > 0 ? catDist[0].name : '-';

    container.innerHTML = `
        <div class="stats-overview">
            <div class="stat-card stat-card-primary">
                <div class="stat-value">${stats.totalCount}</div>
                <div class="stat-label">总回答数</div>
            </div>
            <div class="stat-card stat-card-streak">
                <div class="stat-value">${streakDays}</div>
                <div class="stat-label">连续打卡</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.weekCount}</div>
                <div class="stat-label">近7天回答</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${stats.todayCount}</div>
                <div class="stat-label">今日回答</div>
            </div>
        </div>
        <div class="stats-top-category">
            <span class="stats-top-label">最活跃类别：</span>
            <span class="stats-top-value">${topCategory}</span>
        </div>
    `;
}

/**
 * 渲染 SVG 饼图
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器元素
 * @param {Array} params.data - 饼图数据 [{name, value, color}]
 */
function renderPieChart({ container, data, title = '分布' }) {
    if (!data || data.length === 0) {
        container.innerHTML = '<div class="chart-empty">暂无数据</div>';
        return;
    }

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const size = 200;
    const center = size / 2;
    const radius = 80;
    let currentAngle = -Math.PI / 2; // 从顶部开始

    let svgPaths = '';
    let legendItems = '';

    data.forEach(item => {
        const percentage = item.value / total;
        const angle = percentage * 2 * Math.PI;
        const endAngle = currentAngle + angle;

        // 计算路径
        const x1 = center + radius * Math.cos(currentAngle);
        const y1 = center + radius * Math.sin(currentAngle);
        const x2 = center + radius * Math.cos(endAngle);
        const y2 = center + radius * Math.sin(endAngle);
        const largeArcFlag = angle > Math.PI ? 1 : 0;

        const pathData = [
            `M ${center} ${center}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
        ].join(' ');

        svgPaths += `<path d="${pathData}" fill="${item.color}" stroke="#fff" stroke-width="2" />`;

        // 图例
        const percentText = Math.round(percentage * 100);
        legendItems += `
            <div class="chart-legend-item">
                <span class="chart-legend-color" style="background-color: ${item.color}"></span>
                <span class="chart-legend-name">${item.name}</span>
                <span class="chart-legend-value">${item.value} (${percentText}%)</span>
            </div>
        `;

        currentAngle = endAngle;
    });

    // 中心文字显示总数
    const centerText = `
        <text x="${center}" y="${center - 5}" text-anchor="middle" class="chart-center-label">总计</text>
        <text x="${center}" y="${center + 20}" text-anchor="middle" class="chart-center-value">${total}</text>
    `;

    container.innerHTML = `
        <div class="chart-container">
            <div class="chart-title">${title}</div>
            <div class="chart-content">
                <svg viewBox="0 0 ${size} ${size}" class="pie-chart">
                    ${svgPaths}
                    ${centerText}
                </svg>
                <div class="chart-legend">
                    ${legendItems}
                </div>
            </div>
        </div>
    `;
}

/**
 * 渲染 SVG 柱状图
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器元素
 * @param {Array} params.data - 柱状图数据 [{name, value}]
 * @param {string} params.title - 图表标题
 */
function renderBarChart({ container, data, title }) {
    if (!data || data.length === 0) {
        container.innerHTML = '<div class="chart-empty">暂无数据</div>';
        return;
    }

    const maxValue = Math.max(...data.map(d => d.value), 1);
    const chartHeight = 150;
    const barWidth = 40;
    const gap = 30;
    const totalWidth = data.length * (barWidth + gap) + gap;

    let bars = '';
    let labels = '';

    data.forEach((item, index) => {
        const x = gap + index * (barWidth + gap);
        const barHeight = (item.value / maxValue) * chartHeight;
        const y = chartHeight - barHeight;

        bars += `
            <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" 
                  class="bar-chart-rect" rx="4" />
            <text x="${x + barWidth / 2}" y="${y - 8}" text-anchor="middle" class="bar-chart-value">${item.value}</text>
        `;

        labels += `
            <text x="${x + barWidth / 2}" y="${chartHeight + 20}" text-anchor="middle" class="bar-chart-label">${item.name}</text>
        `;
    });

    container.innerHTML = `
        <div class="chart-container">
            <div class="chart-title">${title}</div>
            <svg viewBox="0 0 ${totalWidth} ${chartHeight + 40}" class="bar-chart">
                ${bars}
                ${labels}
            </svg>
        </div>
    `;
}

/**
 * 渲染活跃度热力图（最近7天）
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器元素
 * @param {Array} params.history - 历史记录
 */
async function renderActivityHeatmap({ container, history }) {
    const activity = calculateDailyActivity(history, 7);

    const maxCount = Math.max(...activity.map(d => d.count), 1);

    let daysHtml = '';
    activity.forEach(day => {
        const intensity = day.count === 0 ? 0 : Math.ceil((day.count / maxCount) * 4);
        const intensityClass = `heatmap-day-intensity-${intensity}`;
        daysHtml += `
            <div class="heatmap-day ${intensityClass} ${day.isToday ? 'heatmap-day-today' : ''}">
                <div class="heatmap-day-count">${day.count > 0 ? day.count : ''}</div>
                <div class="heatmap-day-name">${day.dayName}</div>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="heatmap-container">
            <div class="chart-title">最近7天活跃度</div>
            <div class="heatmap-days">
                ${daysHtml}
            </div>
            <div class="heatmap-legend">
                <span>少</span>
                <div class="heatmap-legend-box intensity-1"></div>
                <div class="heatmap-legend-box intensity-2"></div>
                <div class="heatmap-legend-box intensity-3"></div>
                <div class="heatmap-legend-box intensity-4"></div>
                <span>多</span>
            </div>
        </div>
    `;
}

/**
 * 渲染打卡日历
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器元素
 */
function renderCheckInCalendar({ container }) {
    const checkInStatus = getRecentCheckInStatus(7);

    let daysHtml = '';
    checkInStatus.forEach(day => {
        daysHtml += `
            <div class="calendar-day ${day.checked ? 'calendar-day-checked' : ''} ${day.isToday ? 'calendar-day-today' : ''}">
                <div class="calendar-day-dot"></div>
                <div class="calendar-day-name">${day.dayName}</div>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="calendar-container">
            <div class="chart-title">打卡记录</div>
            <div class="calendar-days">
                ${daysHtml}
            </div>
        </div>
    `;
}

/**
 * 渲染洞察列表
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器元素
 * @param {Array} params.insights - 洞察文字数组
 */
function renderInsights({ container, insights }) {
    if (!insights || insights.length === 0) {
        container.innerHTML = '';
        return;
    }

    const itemsHtml = insights.map(insight => `
        <li class="insight-item">
            <span class="insight-bullet">💡</span>
            <span class="insight-text">${insight}</span>
        </li>
    `).join('');

    container.innerHTML = `
        <div class="insights-container">
            <div class="chart-title">智能洞察</div>
            <ul class="insights-list">
                ${itemsHtml}
            </ul>
        </div>
    `;
}

/**
 * 渲染完整统计报告
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器元素
 * @param {Array} params.history - 历史记录
 * @param {Function} params.onExportImage - 导出图片回调
 */
async function renderFullStatsReport({ container, history, onExportImage }) {
    const report = generateFullReport(history, getStreakDays());

    container.innerHTML = `
        <div class="stats-report" id="statsReportContent">
            <div class="stats-report-header">
                <div class="stats-report-title">灵修报告</div>
                <div class="stats-report-date">生成于 ${report.generatedAt}</div>
            </div>
            <div class="stats-report-body">
                <div class="stats-overview-section" id="statsOverviewSection"></div>
                <div class="stats-charts-section">
                    <div class="stats-chart-container" id="categoryChartContainer"></div>
                    <div class="stats-chart-container" id="sourceChartContainer"></div>
                </div>
                <div class="stats-activity-section" id="activitySection"></div>
                <div class="stats-calendar-section" id="calendarSection"></div>
                <div class="stats-insights-section" id="insightsSection"></div>
            </div>
        </div>
        <div class="stats-actions">
            <button class="btn" id="exportStatsImageBtn">导出报告图片</button>
        </div>
    `;

    // 渲染各个部分
    const overviewSection = container.querySelector('#statsOverviewSection');
    const categoryChartContainer = container.querySelector('#categoryChartContainer');
    const sourceChartContainer = container.querySelector('#sourceChartContainer');
    const activitySection = container.querySelector('#activitySection');
    const calendarSection = container.querySelector('#calendarSection');
    const insightsSection = container.querySelector('#insightsSection');

    renderStatsOverview({ container: overviewSection, history });
    renderPieChart({ container: categoryChartContainer, data: report.categoryDistribution, title: '主题分布' });
    renderPieChart({ container: sourceChartContainer, data: report.sourceDistribution, title: '记录来源' });

    renderActivityHeatmap({ container: activitySection, history });
    renderCheckInCalendar({ container: calendarSection });
    renderInsights({ container: insightsSection, insights: report.insights });

    // 绑定导出按钮
    const exportBtn = container.querySelector('#exportStatsImageBtn');
    if (exportBtn && onExportImage) {
        exportBtn.addEventListener('click', onExportImage);
    }
}

// ==================== src/core/daily-verse-service.js ====================
/**
 * 今日经文服务
 *
 * 打开页面时在 1000 条精选池里随机选一节，本次会话内保持不变；
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
function getTodayString(date = new Date()) {
    return getLocalDateString(date);
}

/**
 * 按出处去重（池中「以赛亚书 41:10」「以赛亚书 40:31」各收了两次）
 * @param {Array} cards
 * @returns {Array}
 */
function dedupeByReference(cards) {
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
function getTodayVerse(cards) {
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
function nextTodayVerse(cards) {
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
 * 来源的灵修记录」判断。时间戳是 zh-CN 格式且月/日不补零
 * （如 2026/9/5 08:01:00），不能直接做字符串前缀比较，需先解析。
 *
 * @param {Array} history
 * @returns {boolean}
 */
function isTodayVerseAnswered(history) {
    if (!Array.isArray(history) || !history.length) return false;
    const today = getTodayString();
    return history.some((item) => {
        if (!item || !item.card) return false;
        if (item.source !== 'daily') return false;
        const date = parseTimestamp(item.timestamp);
        if (Number.isNaN(date.getTime())) return false;
        return getLocalDateString(date) === today;
    });
}

// ==================== src/ui/daily-verse-render.js ====================
/**
 * 今日经文 UI 渲染
 *
 * 卡片显示经文原文 + 出处，并提供「写下感受」「换一句」。
 * 同时显示连续打卡天数与最近 7 天日历（沿用打卡数据）。
 *
 * 「今天已写感受」按当天是否有 daily 来源记录判断，不再比对具体出处
 * （今日经文每次打开都会重新随机，出处不固定）。
 */
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
 */
function renderTodayVerse({ container, verse, history = [], streak = 0, onAnswer, onNext }) {
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
                    <div class="daily-verse-body">${escapeHtml(verse.text)}</div>
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
                </div>
            </div>
        </div>
    `;

    container.querySelectorAll('[data-action]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.dataset.action === 'answer' && onAnswer) onAnswer();
            if (btn.dataset.action === 'next' && onNext) onNext();
        });
    });
}

// ==================== src/core/verse-search-service.js ====================
/**
 * 经文检索服务
 *
 * 两种找法：
 * 1. 三级选择（卷 → 章 → 节）—— 知道出处时用，快且准
 * 2. 关键词搜索 —— 记得某句话但忘了在哪卷时用
 *
 * 全书全文（3.3MB）按需 import()，只在用户真正打开检索时才加载。
 */

let fullBibleModule = null;
let loadingPromise = null;

/**
 * 按需加载全本经文模块
 * @returns {Promise<Object>}
 */
async function loadFullBible() {
    if (fullBibleModule) return fullBibleModule;
    if (loadingPromise) return loadingPromise;

    loadingPromise = Promise.reject(new Error("未打包模块: ../data/bible-full.js（离线不可用）"))
        .then((mod) => {
            fullBibleModule = mod;
            return mod;
        })
        .catch((error) => {
            loadingPromise = null;
            throw error;
        });

    return loadingPromise;
}

/**
 * 全本是否已经加载过
 * @returns {boolean}
 */
function isFullBibleLoaded() {
    return fullBibleModule !== null;
}

/**
 * 取书卷列表
 * @returns {Promise<string[]>}
 */
async function getBooks() {
    const mod = await loadFullBible();
    return mod.books;
}

/**
 * 取某卷的章数
 * @param {string} book
 * @returns {Promise<number>}
 */
async function getChapters(book) {
    const mod = await loadFullBible();
    return mod.getChapterCount(book);
}

/**
 * 取某章有多少节
 * @param {string} book
 * @param {number} chapter
 * @returns {Promise<number>}
 */
async function getVersesInChapter(book, chapter) {
    const mod = await loadFullBible();
    return mod.getVerseCount(book, chapter);
}

/**
 * 取指定经文
 * @param {string} book
 * @param {number} chapter
 * @param {number} verse
 * @returns {Promise<string|null>}
 */
async function getVerse(book, chapter, verse) {
    const mod = await loadFullBible();
    return mod.getVerse(book, chapter, verse);
}

/**
 * 关键词搜索
 * @param {string} keyword
 * @param {Object} [options]
 * @param {string|null} [options.book] - 限定卷名
 * @param {number} [options.limit] - 最多返回条数（默认 200）
 * @returns {Promise<{items:Array, truncated:boolean}>}
 */
async function searchVerses(keyword, options = {}) {
    const limit = options.limit || 200;
    const mod = await loadFullBible();
    // 多取一条用于判断是否被截断
    const items = mod.searchVerses(keyword, { book: options.book || null, limit: limit + 1 });
    const truncated = items.length > limit;
    return {
        items: truncated ? items.slice(0, limit) : items,
        truncated
    };
}

/**
 * 把搜索结果按书卷分组
 * @param {Array} items
 * @returns {Array<{book:string, count:number, verses:Array}>}
 */
function groupByBook(items) {
    const groups = new Map();
    items.forEach((item) => {
        if (!groups.has(item.book)) {
            groups.set(item.book, { book: item.book, count: 0, verses: [] });
        }
        const group = groups.get(item.book);
        group.count++;
        group.verses.push(item);
    });
    return [...groups.values()];
}

// ==================== src/data/book-names.js ====================
/**
 * 书卷索引（轻量，约 0.5KB）
 *
 * 全本经文 3.3MB，gzip 后仍 1.2MB，弱网下要十几秒。但「按卷查找」的
 * 卷名下拉没必要等全本 —— 先把这个 66 个卷名的列表同步渲染出来，
 * 用户看到界面立刻可用，再去后台加载经文正文。
 *
 * 本文件由 scripts/build-bible-full.js 生成，勿手改。
 */

const BOOK_NAMES = [
    "创世纪",
    "出埃及记",
    "利未记",
    "民数记",
    "申命记",
    "约书亚记",
    "士师记",
    "路得记",
    "撒母耳记上",
    "撒母耳记下",
    "列王记上",
    "列王记下",
    "历代志上",
    "历代志下",
    "以斯拉记",
    "尼希米记",
    "以斯帖记",
    "约伯记",
    "诗篇",
    "箴言",
    "传道书",
    "雅歌",
    "以赛亚书",
    "耶利米书",
    "耶利米哀歌",
    "以西结书",
    "但以理书",
    "何西阿书",
    "约珥书",
    "阿摩司书",
    "俄巴底亚书",
    "约拿书",
    "弥迦书",
    "那鸿书",
    "哈巴谷书",
    "西番雅书",
    "哈该书",
    "撒迦利亚书",
    "玛拉基书",
    "马太福音",
    "马可福音",
    "路加福音",
    "约翰福音",
    "使徒行传",
    "罗马书",
    "哥林多前书",
    "哥林多后书",
    "加拉太书",
    "以弗所书",
    "腓立比书",
    "歌罗西书",
    "帖撒罗尼迦前书",
    "帖撒罗尼迦后书",
    "提摩太前书",
    "提摩太后书",
    "提多书",
    "腓利门书",
    "希伯来书",
    "雅各书",
    "彼得前书",
    "彼得后书",
    "约翰一书",
    "约翰二书",
    "约翰三书",
    "犹大书",
    "启示录"
];

// ==================== src/ui/verse-note-render.js ====================
/**
 * 「记一节经文」界面
 *
 * 两条找经文的路径：
 * - 按卷 / 章 / 节三级选择
 * - 关键词搜索（可限定书卷范围）
 *
 * 选中后回填经文原文，交给上层打开「写下感受」。
 */
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
 * 填充下拉选项
 * @param {HTMLSelectElement} select
 * @param {Array<string|number>} values
 * @param {string} placeholder
 */
function fillOptions(select, values, placeholder) {
    select.replaceChildren();
    const first = document.createElement('option');
    first.value = '';
    first.textContent = placeholder;
    select.appendChild(first);

    values.forEach((value) => {
        const opt = document.createElement('option');
        opt.value = String(value);
        opt.textContent = String(value);
        select.appendChild(opt);
    });
}

/**
 * 渲染「记一节经文」界面
 * @param {Object} params
 * @param {HTMLElement} params.container - 容器
 * @param {Function} params.onPick - 选中经文回调，收到 {book, chapter, verse, text}
 */
function renderVerseNote({ container, onPick }) {
    if (!container) return;

    container.innerHTML = `
        <div class="verse-note-modal-content">
            <div class="verse-note-status" id="verseNoteStatus"></div>

            <div class="verse-note-tabs" role="tablist">
                <button class="verse-note-tab active" data-tab="browse" role="tab">按卷查找</button>
                <button class="verse-note-tab" data-tab="search" role="tab">关键词搜索</button>
            </div>

            <div class="verse-note-pane" data-pane="browse">
                <div class="verse-note-fields">
                    <label>卷
                        <select id="vnBook"></select>
                    </label>
                    <label>章
                        <select id="vnChapter"></select>
                    </label>
                    <label>节
                        <select id="vnVerse"></select>
                    </label>
                </div>
                <div class="verse-note-preview" id="vnPreview"></div>
            </div>

            <div class="verse-note-pane" data-pane="search" style="display: none;">
                <div class="verse-note-search-row">
                    <input type="search" id="vnKeyword" placeholder="输入经文中的词句，如「凡事都可行」" autocomplete="off">
                    <select id="vnScope" title="限定书卷范围"></select>
                    <button class="btn" id="vnSearchBtn">搜索</button>
                </div>
                <div class="verse-note-results" id="vnResults"></div>
            </div>
        </div>
    `;

    const statusEl = container.querySelector('#verseNoteStatus');
    const bookSel = container.querySelector('#vnBook');
    const chapterSel = container.querySelector('#vnChapter');
    const verseSel = container.querySelector('#vnVerse');
    const previewEl = container.querySelector('#vnPreview');
    const keywordEl = container.querySelector('#vnKeyword');
    const scopeSel = container.querySelector('#vnScope');
    const resultsEl = container.querySelector('#vnResults');

    /**
     * 确保全本已加载（失败则给出降级提示）
     * @returns {Promise<boolean>}
     */
    async function ensureLoaded() {
        if (isFullBibleLoaded()) {
            statusEl.style.display = 'none';
            return true;
        }
        statusEl.textContent = '正在加载经文库…';
        statusEl.style.display = 'block';
        try {
            await loadFullBible();
            statusEl.style.display = 'none';
            return true;
        } catch (error) {
            console.error('经文库加载失败:', error);
            statusEl.textContent = '经文库加载失败，请检查网络后重试。';
            statusEl.style.display = 'block';
            return false;
        }
    }

    // ---- 按卷查找的联动 ----
    bookSel.addEventListener('change', async () => {
        const book = bookSel.value;
        if (!book) {
            fillOptions(chapterSel, [], '章');
            fillOptions(verseSel, [], '节');
            previewEl.textContent = '';
            return;
        }
        const chapters = await getChapters(book);
        fillOptions(chapterSel, Array.from({ length: chapters }, (_, i) => i + 1), '章');
        fillOptions(verseSel, [], '节');
        previewEl.textContent = '';
    });

    chapterSel.addEventListener('change', async () => {
        const book = bookSel.value;
        const chapter = Number(chapterSel.value);
        if (!book || !chapter) {
            fillOptions(verseSel, [], '节');
            previewEl.textContent = '';
            return;
        }
        const count = await getVersesInChapter(book, chapter);
        fillOptions(verseSel, Array.from({ length: count }, (_, i) => i + 1), '节');
        previewEl.textContent = '';
    });

    verseSel.addEventListener('change', async () => {
        const book = bookSel.value;
        const chapter = Number(chapterSel.value);
        const verse = Number(verseSel.value);
        if (!book || !chapter || !verse) {
            previewEl.textContent = '';
            return;
        }
        const text = await getVerse(book, chapter, verse);
        if (!text) {
            previewEl.textContent = '找不到这一节';
            return;
        }
        const ref = `${book} ${chapter}:${verse}`;
        previewEl.innerHTML = `
            <div class="vn-text">${escapeHtml(text)}</div>
            <div class="vn-ref">—— ${escapeHtml(ref)}</div>
            <button class="btn" id="vnPickBrowse">✍️ 记下这节，写下感受</button>
        `;
        previewEl.querySelector('#vnPickBrowse').addEventListener('click', () => {
            onPick({ book, chapter, verse, text, reference: ref });
        });
    });

    // ---- 关键词搜索 ----
    function renderResults(items, truncated) {
        if (!items.length) {
            resultsEl.innerHTML = '<div class="verse-note-empty">没有找到匹配的经文，换个词试试</div>';
            return;
        }

        const groups = groupByBook(items);
        let html = truncated
            ? `<div class="verse-note-hint">结果较多，只显示前 ${items.length} 条。可用书卷范围收窄，或换更具体的词。</div>`
            : `<div class="verse-note-hint">共 ${items.length} 条</div>`;

        groups.forEach((group) => {
            html += `<div class="vn-group"><div class="vn-group-title">${escapeHtml(group.book)} (${group.count})</div>`;
            group.verses.forEach((v) => {
                const ref = `${v.book} ${v.chapter}:${v.verse}`;
                html += `
                    <button class="vn-result" data-book="${escapeHtml(v.book)}" data-chapter="${v.chapter}" data-verse="${v.verse}">
                        <span class="vn-result-ref">${escapeHtml(ref)}</span>
                        <span class="vn-result-text">${escapeHtml(v.text)}</span>
                    </button>
                `;
            });
            html += '</div>';
        });

        resultsEl.innerHTML = html;
        resultsEl.querySelectorAll('.vn-result').forEach((btn) => {
            btn.addEventListener('click', async () => {
                const book = btn.dataset.book;
                const chapter = Number(btn.dataset.chapter);
                const verse = Number(btn.dataset.verse);
                const text = await getVerse(book, chapter, verse);
                if (!text) return;
                onPick({ book, chapter, verse, text, reference: `${book} ${chapter}:${verse}` });
            });
        });
    }

    async function doSearch() {
        const keyword = keywordEl.value.trim();
        if (!keyword) {
            resultsEl.innerHTML = '<div class="verse-note-empty">请输入要搜索的词句</div>';
            return;
        }
        const ok = await ensureLoaded();
        if (!ok) {
            resultsEl.innerHTML = '<div class="verse-note-empty">经文库不可用</div>';
            return;
        }
        resultsEl.innerHTML = '<div class="verse-note-empty">搜索中…</div>';
        try {
            const { items, truncated } = await searchVerses(keyword, { book: scopeSel.value || null });
            renderResults(items, truncated);
        } catch (error) {
            console.error('搜索失败:', error);
            resultsEl.innerHTML = '<div class="verse-note-empty">搜索失败，请重试</div>';
        }
    }

    container.querySelector('#vnSearchBtn').addEventListener('click', doSearch);
    keywordEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            doSearch();
        }
    });

    /**
     * 先同步填上静态卷名（0.5KB，不用等全本），再在后台加载经文正文。
     * 否则弱网下卷名下拉会空十几秒。
     */
    function populateBookSelects(books) {
        if (!bookSel.options.length) {
            fillOptions(bookSel, books, '选择卷');
        }
        if (!scopeSel.options.length) {
            const all = document.createElement('option');
            all.value = '';
            all.textContent = '全部书卷';
            scopeSel.appendChild(all);
            books.forEach((b) => {
                const opt = document.createElement('option');
                opt.value = b;
                opt.textContent = b;
                scopeSel.appendChild(opt);
            });
        }
    }

    // ---- 标签切换 ----
    container.querySelectorAll('.verse-note-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            container.querySelectorAll('.verse-note-tab').forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            container.querySelectorAll('.verse-note-pane').forEach((pane) => {
                pane.style.display = pane.dataset.pane === tab.dataset.tab ? '' : 'none';
            });
            ensureLoaded();
        });
    });

    // 打开即可用：卷名静态渲染（不用等全本），经文正文在后台加载
    populateBookSelects(BOOK_NAMES);
    ensureLoaded();
}

// ==================== src/core/voice-service.js ====================
/**
 * 语音服务 - 提供语音合成(TTS)和语音识别(ASR)功能
 * 使用 Web Speech API
 */

/**
 * 检查浏览器是否支持语音识别
 * @returns {boolean} 是否支持
 */
function isSpeechRecognitionSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

/**
 * 检查浏览器是否支持语音合成
 * @returns {boolean} 是否支持
 */
function isSpeechSynthesisSupported() {
    return 'speechSynthesis' in window;
}

/**
 * 创建语音合成器
 * @returns {Object|null} 语音合成器对象，不支持时返回 null
 */
function createSpeechSynthesizer() {
    if (!isSpeechSynthesisSupported()) {
        return null;
    }

    let voices = [];
    let isVoicesLoaded = false;

    const loadVoices = () => {
        voices = speechSynthesis.getVoices();
        isVoicesLoaded = true;
    };

    // Chrome 需要通过 voiceschanged 事件加载语音
    if ('onvoiceschanged' in speechSynthesis) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();

    return {
        /**
         * 朗读文本
         * @param {string} text - 要朗读的文本
         * @param {Object} options - 配置选项
         * @param {Function} options.onStart - 开始朗读回调
         * @param {Function} options.onEnd - 朗读结束回调
         * @param {Function} options.onError - 错误回调
         * @param {number} options.rate - 语速 (0.1 - 2.0)
         * @param {number} options.pitch - 音调 (0 - 2)
         * @returns {SpeechSynthesisUtterance|null} 朗读实例
         */
        speak(text, options = {}) {
            const {
                onStart,
                onEnd,
                onError,
                rate = 0.9,
                pitch = 1.0
            } = options;

            // 每次重新创建 utterance（解决 Chrome 中文朗读 bug）
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            utterance.rate = rate;
            utterance.pitch = pitch;

            // 查找中文语音
            if (isVoicesLoaded && voices.length > 0) {
                const chineseVoice = voices.find(v =>
                    v.lang === 'zh-CN' || v.lang.startsWith('zh-')
                );
                if (chineseVoice) {
                    utterance.voice = chineseVoice;
                }
            }

            // 事件处理
            if (onStart) {
                utterance.onstart = onStart;
            }
            if (onEnd) {
                utterance.onend = onEnd;
            }
            if (onError) {
                utterance.onerror = (event) => {
                    onError(event.error, event);
                };
            }

            speechSynthesis.speak(utterance);
            return utterance;
        },

        /**
         * 停止朗读
         */
        cancel() {
            speechSynthesis.cancel();
        },

        /**
         * 暂停朗读
         */
        pause() {
            speechSynthesis.pause();
        },

        /**
         * 恢复朗读
         */
        resume() {
            speechSynthesis.resume();
        },

        /**
         * 是否正在朗读
         * @returns {boolean}
         */
        isSpeaking() {
            return speechSynthesis.speaking;
        },

        /**
         * 是否已暂停
         * @returns {boolean}
         */
        isPaused() {
            return speechSynthesis.paused;
        }
    };
}

/**
 * 创建语音识别器
 * @returns {Object|null} 语音识别器对象，不支持时返回 null
 */
function createSpeechRecognizer() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        return null;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    let isActive = false;

    return {
        /**
         * 获取底层 Recognition 对象（用于直接事件绑定）
         * @returns {SpeechRecognition}
         */
        get native() {
            return recognition;
        },

        /**
         * 是否正在识别
         * @returns {boolean}
         */
        get isActive() {
            return isActive;
        },

        /**
         * 开始识别
         * @param {Object} options - 配置选项
         * @param {Function} options.onResult - 识别结果回调 (transcript, isFinal)
         * @param {Function} options.onError - 错误回调 (error, message)
         * @param {Function} options.onStart - 开始识别回调
         * @param {Function} options.onEnd - 识别结束回调
         */
        start(options = {}) {
            const {
                onResult,
                onError,
                onStart,
                onEnd
            } = options;

            // 重置事件处理器
            recognition.onresult = (event) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }

                if (onResult) {
                    onResult(finalTranscript, interimTranscript, event.results);
                }
            };

            recognition.onerror = (event) => {
                let message = '语音识别出错';
                switch (event.error) {
                    case 'not-allowed':
                        message = '请允许麦克风权限';
                        break;
                    case 'audio-capture':
                        message = '无法访问麦克风';
                        break;
                    case 'no-speech':
                        message = '未检测到语音，请重试';
                        break;
                    case 'network':
                        message = '网络连接问题，请检查网络';
                        break;
                    case 'aborted':
                        message = '识别已取消';
                        break;
                    case 'language-not-supported':
                        message = '不支持该语言';
                        break;
                    default:
                        message = `识别错误: ${event.error}`;
                }

                if (onError) {
                    onError(event.error, message, event);
                }
            };

            recognition.onstart = () => {
                isActive = true;
                if (onStart) {
                    onStart();
                }
            };

            recognition.onend = () => {
                isActive = false;
                if (onEnd) {
                    onEnd();
                }
            };

            try {
                recognition.start();
            } catch (error) {
                if (onError) {
                    onError('start-failed', '启动识别失败，请重试');
                }
            }
        },

        /**
         * 停止识别
         */
        stop() {
            isActive = false;
            try {
                recognition.stop();
            } catch (error) {
                // 忽略停止时的错误
            }
        },

        /**
         * 中止识别
         */
        abort() {
            isActive = false;
            try {
                recognition.abort();
            } catch (error) {
                // 忽略中止时的错误
            }
        }
    };
}

/**
 * 请求麦克风权限
 * @returns {Promise<boolean>} 是否获得权限
 */
async function requestMicrophonePermission() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // 立即停止所有轨道，我们只是检查权限
        stream.getTracks().forEach(track => track.stop());
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * 获取语音功能支持状态
 * @returns {Object} 支持状态对象
 */
function getVoiceSupportStatus() {
    return {
        tts: isSpeechSynthesisSupported(),
        asr: isSpeechRecognitionSupported(),
        ttsChinese: isSpeechSynthesisSupported(), // TTS 中文支持通常可用
        asrChinese: isSpeechRecognitionSupported() // ASR 中文支持取决于浏览器
    };
}

// ==================== src/ui/voice-render.js ====================
/**
 * 语音功能 UI 渲染模块
 * 提供朗读按钮和语音输入按钮的渲染
 */

/**
 * 创建朗读按钮
 * @param {Object} options - 配置选项
 * @param {Function} options.onClick - 点击回调
 * @param {boolean} options.isActive - 是否正在朗读
 * @param {boolean} options.disabled - 是否禁用
 * @returns {HTMLElement} 按钮元素
 */
function createReadAloudButton(options = {}) {
    const { onClick, isActive = false, disabled = false } = options;

    const button = document.createElement('button');
    button.className = `voice-btn voice-read-btn ${isActive ? 'active' : ''}`;
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', isActive ? '停止朗读' : '朗读经文');
    button.setAttribute('aria-pressed', String(isActive));
    button.setAttribute('title', isActive ? '点击停止朗读' : '点击朗读经文');
    button.disabled = disabled;

    // 图标
    const iconSpan = document.createElement('span');
    iconSpan.setAttribute('aria-hidden', 'true');
    iconSpan.textContent = isActive ? '⏹️' : '🔊';
    button.appendChild(iconSpan);

    // 文本标签
    const labelSpan = document.createElement('span');
    labelSpan.className = 'voice-btn-label';
    labelSpan.textContent = isActive ? '停止' : '朗读';
    button.appendChild(labelSpan);

    // 原生 button 已处理 Enter / 空格，不要再自己监听 keydown，否则会触发两次

    // 点击事件
    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}

/**
 * 创建语音输入按钮
 * @param {Object} options - 配置选项
 * @param {Function} options.onClick - 点击回调
 * @param {boolean} options.isActive - 是否正在录音
 * @param {boolean} options.disabled - 是否禁用
 * @param {string} options.size - 按钮大小 ('small' | 'normal')
 * @returns {HTMLElement} 按钮元素
 */
function createVoiceInputButton(options = {}) {
    const { onClick, isActive = false, disabled = false, size = 'normal' } = options;

    const button = document.createElement('button');
    button.className = `voice-btn voice-input-btn ${isActive ? 'active' : ''} voice-btn-${size}`;
    button.setAttribute('type', 'button');
    button.setAttribute('aria-label', isActive ? '停止语音输入' : '开始语音输入');
    button.setAttribute('aria-pressed', String(isActive));
    button.setAttribute('title', isActive ? '点击停止录音' : '点击开始语音输入');
    button.disabled = disabled;

    // 图标
    const iconSpan = document.createElement('span');
    iconSpan.setAttribute('aria-hidden', 'true');
    iconSpan.textContent = isActive ? '⏹️' : '🎤';
    button.appendChild(iconSpan);

    // 只有 normal 大小显示文本标签
    if (size === 'normal') {
        const labelSpan = document.createElement('span');
        labelSpan.className = 'voice-btn-label';
        labelSpan.textContent = isActive ? '停止' : '语音输入';
        button.appendChild(labelSpan);
    }

    // 原生 button 已处理 Enter / 空格，不要再自己监听 keydown，否则会触发两次

    // 点击事件
    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}

/**
 * 创建语音状态指示器
 * @param {Object} options - 配置选项
 * @param {string} options.status - 状态类型 ('idle' | 'listening' | 'processing' | 'error')
 * @param {string} options.message - 状态消息
 * @returns {HTMLElement} 状态指示器元素
 */
function createVoiceStatusIndicator(options = {}) {
    const { status = 'idle', message = '' } = options;

    const indicator = document.createElement('div');
    indicator.className = `voice-status voice-status-${status}`;
    indicator.setAttribute('role', 'status');
    indicator.setAttribute('aria-live', 'polite');
    indicator.setAttribute('aria-atomic', 'true');

    // 图标
    const iconSpan = document.createElement('span');
    iconSpan.className = 'voice-status-icon';
    iconSpan.setAttribute('aria-hidden', 'true');

    switch (status) {
        case 'listening':
            iconSpan.textContent = '🎙️';
            break;
        case 'processing':
            iconSpan.textContent = '⏳';
            break;
        case 'error':
            iconSpan.textContent = '⚠️';
            break;
        default:
            iconSpan.textContent = '';
    }

    if (iconSpan.textContent) {
        indicator.appendChild(iconSpan);
    }

    // 消息文本
    if (message) {
        const textSpan = document.createElement('span');
        textSpan.className = 'voice-status-text';
        textSpan.textContent = message;
        indicator.appendChild(textSpan);
    }

    return indicator;
}

/**
 * 更新语音按钮状态
 * @param {HTMLElement} button - 按钮元素
 * @param {Object} options - 配置选项
 * @param {boolean} options.isActive - 是否激活
 * @param {string} options.type - 按钮类型 ('read' | 'input')
 */
function updateVoiceButtonState(button, options = {}) {
    const { isActive = false, type = 'read' } = options;

    if (!button) return;

    // 更新类名
    button.classList.toggle('active', isActive);

    // 更新 ARIA 属性
    button.setAttribute('aria-pressed', String(isActive));

    // 更新图标和标签
    const iconSpan = button.querySelector('span[aria-hidden="true"]');
    const labelSpan = button.querySelector('.voice-btn-label');

    if (iconSpan) {
        iconSpan.textContent = isActive ? '⏹️' : (type === 'read' ? '🔊' : '🎤');
    }

    if (labelSpan) {
        labelSpan.textContent = isActive ? '停止' : (type === 'read' ? '朗读' : '语音输入');
    }

    // 更新标题
    button.setAttribute('title', isActive
        ? (type === 'read' ? '点击停止朗读' : '点击停止录音')
        : (type === 'read' ? '点击朗读经文' : '点击开始语音输入')
    );

    button.setAttribute('aria-label', isActive
        ? (type === 'read' ? '停止朗读' : '停止语音输入')
        : (type === 'read' ? '朗读经文' : '开始语音输入')
    );
}

/**
 * 更新语音状态指示器
 * @param {HTMLElement} indicator - 指示器元素
 * @param {Object} options - 配置选项
 * @param {string} options.status - 状态类型
 * @param {string} options.message - 状态消息
 */
function updateVoiceStatusIndicator(indicator, options = {}) {
    const { status = 'idle', message = '' } = options;

    if (!indicator) return;

    // 更新类名
    indicator.className = `voice-status voice-status-${status}`;

    // 清空内容
    indicator.replaceChildren();

    // 图标
    const iconSpan = document.createElement('span');
    iconSpan.className = 'voice-status-icon';
    iconSpan.setAttribute('aria-hidden', 'true');

    switch (status) {
        case 'listening':
            iconSpan.textContent = '🎙️';
            break;
        case 'processing':
            iconSpan.textContent = '⏳';
            break;
        case 'error':
            iconSpan.textContent = '⚠️';
            break;
        default:
            iconSpan.textContent = '';
    }

    if (iconSpan.textContent) {
        indicator.appendChild(iconSpan);
    }

    // 消息文本
    if (message) {
        const textSpan = document.createElement('span');
        textSpan.className = 'voice-status-text';
        textSpan.textContent = message;
        indicator.appendChild(textSpan);
    }
}

/**
 * 创建带语音输入的文本域包装器
 * @param {Object} options - 配置选项
 * @param {HTMLElement} options.textarea - 文本域元素
 * @param {Function} options.onVoiceInput - 语音输入回调
 * @param {boolean} options.isListening - 是否正在录音
 * @returns {HTMLElement} 包装器元素
 */
function createTextareaWithVoiceInput(options = {}) {
    const { textarea, onVoiceInput, isListening = false } = options;

    const wrapper = document.createElement('div');
    wrapper.className = 'textarea-with-voice';

    // 将文本域移入包装器
    if (textarea && textarea.parentNode) {
        textarea.parentNode.insertBefore(wrapper, textarea);
        wrapper.appendChild(textarea);
    }

    // 创建语音输入容器
    const voiceContainer = document.createElement('div');
    voiceContainer.className = 'voice-input-container';

    // 状态指示器
    const statusIndicator = createVoiceStatusIndicator({
        status: isListening ? 'listening' : 'idle',
        message: isListening ? '正在聆听...' : ''
    });
    statusIndicator.id = `${textarea?.id || 'textarea'}-voice-status`;
    voiceContainer.appendChild(statusIndicator);

    // 语音输入按钮
    const voiceButton = createVoiceInputButton({
        onClick: onVoiceInput,
        isActive: isListening,
        size: 'small'
    });
    voiceButton.id = `${textarea?.id || 'textarea'}-voice-btn`;
    voiceContainer.appendChild(voiceButton);

    wrapper.appendChild(voiceContainer);

    return wrapper;
}

/**
 * 渲染卡牌区域的语音控制按钮
 * @param {Object} options - 配置选项
 * @param {HTMLElement} options.container - 容器元素
 * @param {Function} options.onReadAloud - 朗读回调
 * @param {boolean} options.isReading - 是否正在朗读
 * @param {boolean} options.disabled - 是否禁用
 */
function renderCardVoiceControls(options = {}) {
    const { container, onReadAloud, isReading = false, disabled = false } = options;

    if (!container) return;

    container.replaceChildren();

    const button = createReadAloudButton({
        onClick: onReadAloud,
        isActive: isReading,
        disabled
    });
    button.id = 'cardReadAloudBtn';

    container.appendChild(button);
}

/**
 * 渲染模态框的语音输入控制
 * @param {Object} options - 配置选项
 * @param {HTMLElement} options.container - 容器元素
 * @param {Function} options.onVoiceInput - 语音输入回调
 * @param {boolean} options.isListening - 是否正在录音
 * @param {string} options.status - 状态消息
 */
function renderModalVoiceControls(options = {}) {
    const { container, onVoiceInput, isListening = false, status = '' } = options;

    if (!container) return;

    container.replaceChildren();

    // 状态指示器
    const statusIndicator = createVoiceStatusIndicator({
        status: isListening ? 'listening' : (status ? 'processing' : 'idle'),
        message: status
    });

    // 语音输入按钮
    const voiceButton = createVoiceInputButton({
        onClick: onVoiceInput,
        isActive: isListening,
        size: 'small'
    });

    container.appendChild(statusIndicator);
    container.appendChild(voiceButton);
}

// ==================== src/main.js ====================
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
    toastExitMs: 180
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
    shareBtn: document.getElementById('shareBtn'),
    historyList: document.getElementById('historyList'),
    historyFiltersContainer: document.getElementById('historyFiltersContainer'),
    historyExportContainer: document.getElementById('historyExportContainer'),
    saveModal: document.getElementById('saveModal'),
    shareModal: document.getElementById('shareModal'),
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
    // 精选池扩充后卡片 id 会重排，优先按经文出处匹配历史记录
    const item = state.history.find((entry) => entry.card
        && (reference ? entry.card.reference === reference : entry.card.id === id));
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
        ? `${card.reference}　${card.text || ''}`
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
    const confirmed = await showConfirm('确定要删除这条历史记录吗？此操作不可恢复。');
    if (!confirmed) return;
    
    const newHistory = deleteHistoryItem(state.history, item.id);
    if (newHistory === null) {
        showToast('删除失败，请重试', 'error');
        return;
    }
    
    state.history = newHistory;
    refreshHistoryView();
    showToast('记录已删除', 'success');
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
        ? `${state.currentCard.reference}　${state.currentCard.text || ''}`
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
        ? `${state.currentCard.reference}　${state.currentCard.text || ''}`
        : (state.currentCard.question || '');
    const answer = getSavedAnswerForCurrentCard() || '（点击“写下感受”后可展示你的感受）';
    elements.shareAnswer.textContent = answer;
    elements.shareModal.classList.add('active');
}

function closeShareModal() {
    elements.shareModal.classList.remove('active');
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
        ? `${state.currentCard.text}\n—— ${state.currentCard.reference}`
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
        elements.shareCardQuestion.textContent = state.currentCard.text || state.currentCard.question || '';
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
            const existingIndex = state.history.findIndex(h => (h.card || {}).reference === card.reference);
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
    const confirmed = await showConfirm('确定要清空所有历史记录吗？此操作不可恢复。');
    if (!confirmed) return;

    state.history = [];
    clearHistoryStore();
    refreshHistoryView();
    showToast('历史记录已清空。', 'success');
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
    elements.shareBtn.addEventListener('click', openShareModal);
    elements.confirmSaveBtn.addEventListener('click', saveAnswer);
    elements.cancelSaveBtn.addEventListener('click', closeSaveModal);
    elements.closeShareBtn.addEventListener('click', closeShareModal);
    elements.copyShareBtn.addEventListener('click', copyShareLink);
    elements.clearHistoryBtn.addEventListener('click', clearHistory);
    
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

    renderTodayVerse({
        container: elements.dailyCardContainer,
        verse: getTodayVerse(cards),
        history: state.history,
        streak: getStreakDays(),
        onAnswer: () => openTodayVerseSave(),
        onNext: () => handleNextVerse()
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
    const verseText = state.currentCard.text || state.currentCard.question || '';
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

})();
