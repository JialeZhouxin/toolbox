// heart-talk 纯模块自检 —— 运行：node scripts/selfcheck-heart-talk.mjs
//
// 覆盖三处最容易改错的地方：
//   1. filterCards 的筛选语义
//   2. createDeck 的洗牌队列（一轮内不重复、抽空重洗、切筛选互不干扰）
//   3. 保存历史的「先落盘再改内存」回滚语义（用桩 localStorage 复现写失败）
import assert from "node:assert/strict";
import { filterCards, shuffle, dedupeByQuestion, createDeck } from "../heart-talk/src/core/card-service.js";
import { loadHistory, saveHistory, clearHistoryStore } from "../heart-talk/src/core/history-store.js";

const CARDS = [
  { id: 1, level: 1, category: "couple", question: "a" },
  { id: 2, level: 2, category: "couple", question: "b" },
  { id: 3, level: 2, category: "friend", question: "c" },
  { id: 4, level: 3, category: "couple", question: "d" },
  { id: 5, level: 2, category: "self", question: "e" },
];

// ---- filterCards ----
assert.equal(filterCards(CARDS, "all", "all").length, 5);
assert.equal(filterCards(CARDS, "couple", "all").length, 3);
assert.equal(filterCards(CARDS, "friend", "2").length, 1);
// 「朋友 + 三级」在本仓库里确实是空集，UI 必须据此隐藏按钮
assert.deepEqual(filterCards(CARDS, "friend", "3"), []);
// 数字型 level 与字符串型筛选值要能对上
assert.equal(filterCards(CARDS, "all", 2).length, 3);

// ---- shuffle：不丢牌、不改原数组 ----
const before = CARDS.map((c) => c.id).sort().join();
for (let i = 0; i < 50; i++) {
  const out = shuffle(CARDS);
  assert.equal(out.length, CARDS.length);
  assert.equal(out.map((c) => c.id).sort().join(), before);
}
assert.equal(CARDS.map((c) => c.id).sort().join(), before, "shuffle 不得改动入参");

// ---- dedupeByQuestion ----
const withDupes = [
  { id: 1, question: "同一句" },
  { id: 2, question: "另一句" },
  { id: 3, question: "同一句" },
  { id: 4, question: "同一句" },
];
assert.deepEqual(
  dedupeByQuestion(withDupes).map((c) => c.id),
  [1, 2],
  "同文本只留第一张"
);

// 真实卡库：130 张里有 7 组共 9 张重复文本 → 一轮应只有 121 个不同题面
{
  const { cards } = await import("../heart-talk/src/data/cards.js");
  assert.equal(cards.length, 130);
  const uniq = dedupeByQuestion(shuffle(cards));
  assert.equal(uniq.length, 121, `去重后应有 121 题，实际 ${uniq.length}`);
  assert.equal(new Set(uniq.map((c) => c.question)).size, uniq.length, "去重后不得再有重复文本");

  // 抽满一轮：题面不得重复，且数量等于去重后的题数
  const deck = createDeck();
  const seen = new Set();
  for (let i = 0; i < 121; i++) seen.add(deck.draw(cards, "all|all").card.question);
  assert.equal(seen.size, 121, "一轮内不得出现重复题面");

  // 第 122 次触发重洗
  assert.equal(deck.draw(cards, "all|all").restarted, true);
}

// ---- createDeck：一轮内不重复 ----
{
  const deck = createDeck();
  const seen = [];
  for (let i = 0; i < CARDS.length; i++) {
    seen.push(deck.draw(CARDS, "all|all").card.id);
  }
  assert.equal(new Set(seen).size, CARDS.length, "一轮内不得重复出牌");

  // 第 N+1 次触发重洗，且报告 restarted
  const again = deck.draw(CARDS, "all|all");
  assert.equal(again.restarted, true, "抽空后应自动重洗并标记 restarted");
  assert.equal(again.drawn, 1);
  assert.equal(again.total, CARDS.length);
}

// ---- createDeck：切筛选各自计数，互不干扰 ----
{
  const deck = createDeck();
  const couple = filterCards(CARDS, "couple", "all");
  const friend = filterCards(CARDS, "friend", "all");

  const a = deck.draw(couple, "couple|all");
  const b = deck.draw(friend, "friend|all");
  assert.equal(a.drawn, 1);
  assert.equal(a.total, 3);
  assert.equal(b.drawn, 1);
  assert.equal(b.total, 1, "换筛选后应开新队列，而不是续用上一条");

  const a2 = deck.draw(couple, "couple|all");
  assert.equal(a2.drawn, 2);
  assert.equal(a2.restarted, false);
  assert.notEqual(a2.card.id, a.card.id);
}

// ---- createDeck：卡池变短（数据改动）不得错位 ----
{
  const deck = createDeck();
  deck.draw(CARDS, "k");
  const smaller = CARDS.slice(0, 2);
  const r = deck.draw(smaller, "k");
  assert.equal(r.total, 2);
  assert.equal(r.drawn, 1, "卡池长度变了必须重洗");
  assert.ok(smaller.some((c) => c.id === r.card.id));
}

// ---- 空筛选 ----
assert.equal(createDeck().draw([], "x"), null);

// ---- history-store：写失败要能被调用方看见 ----
const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => {
    if (k === "__boom__") throw new Error("quota");
    store.set(k, v);
  },
  removeItem: (k) => store.delete(k),
};

assert.deepEqual(loadHistory(), [], "没有数据时返回空数组");
assert.equal(saveHistory([]), true);
assert.deepEqual(loadHistory(), []);
assert.equal(clearHistoryStore(), true);
assert.deepEqual(loadHistory(), []);

store.set("heartTalkHistory", "{ 不是 JSON");
assert.deepEqual(loadHistory(), [], "坏数据不能让页面白屏");
store.delete("heartTalkHistory");

// 模拟 QuotaExceededError：saveHistory 必须返回 false，
// main.js 的 saveAnswer 据此在改内存之前 return。
const realSetItem = globalThis.localStorage.setItem;
globalThis.localStorage.setItem = () => {
  throw new Error("QuotaExceededError");
};
assert.equal(saveHistory([{ id: 1 }]), false, "写失败必须返回 false");
globalThis.localStorage.setItem = realSetItem;

globalThis.localStorage.removeItem = () => {
  throw new Error("nope");
};
assert.equal(clearHistoryStore(), false, "清空失败必须返回 false");

console.log("selfcheck ok: heart-talk card-service.js + history-store.js 全部断言通过");
