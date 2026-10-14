// 属灵恩赐测试离线化自检 — run: node scripts/check-spiritual-gifts.mjs
// 校验：1) 无外部 CDN 引用 2) 每个本地资源真实存在 3) 题库与恩赐类别数量对得上
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "spiritual-gifts");
const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");

// ---- 1. 不留 CDN 依赖：断网可用 ----
const external = [
  ...html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g),
  ...html.matchAll(/url\('(https?:\/\/[^']+)'\)/g),
].map((m) => m[1]);
assert.deepEqual(external, [], `仍有外部引用:\n${external.join("\n")}`);

// ---- 2. 本地资源都在 ----
const refs = [
  ...html.matchAll(/(?:src|href)="(\.\/[^"]+)"/g),
  ...html.matchAll(/url\('(\.\/[^']+)'\)/g),
].map((m) => m[1]);
assert.ok(refs.length >= 6, `本地资源引用过少: ${refs.length}`);
for (const ref of new Set(refs)) {
  if (ref === "./") continue;
  assert.ok(fs.existsSync(path.join(dir, ref)), `资源缺失: ${ref}`);
}

// ---- 3. 题库自洽：125 题、25 类、每类 5 题 ----
const categories = html.match(/const CATEGORIES = \[([\s\S]*?)\];/)[1];
const catCount = [...categories.matchAll(/\{ key: '/g)].length;
assert.equal(catCount, 25, `恩赐类别应为 25，实际 ${catCount}`);

const questions = html.match(/const QUESTION_TEXTS = \[([\s\S]*?)\];/)[1];
const qCount = [...questions.matchAll(/^\s*"/gm)].length;
assert.equal(qCount, 125, `题目应为 125，实际 ${qCount}`);
assert.equal(qCount / catCount, 5, "每类恩赐题数应为 5");

// ---- 4. 共享主题键已接入 ----
assert.ok(html.includes("toolbox-theme"), "未接入工具箱共享主题键 toolbox-theme");
assert.ok(html.includes('href="../"'), "缺少返回工具箱链接");

console.log(`selfcheck ok: 属灵恩赐测试离线可用（${catCount} 类 / ${qCount} 题，${new Set(refs).size} 个本地资源）`);
