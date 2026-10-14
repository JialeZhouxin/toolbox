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

// ---- 5. 配色已并入工具箱暖色调，且不再有紫调残留 ----
// 紫调 hex 若回归，说明有人从原仓库重新拷贝了 index.html，主题会再次跑偏。
// 先去掉 CSS/JS 注释，避免注释里提到旧色值就误报。
const codeOnly = html.replace(/\/\*[\s\S]*?\*\//g, "").replace(/<!--[\s\S]*?-->/g, "").replace(/\/\/[^\n]*/g, "");
const purpleHex = codeOnly.match(/#(?:5645d4|6b5cdb|3a2a99|8c7de4|b3a8ed|d6cff5|2a1f7a|4534b3|1a1458|efe9fb|14142a|1a1640|241e50|1e1e38|16162e|2a2a4a|35355a|3a2a6a|4a3a8a|0b0b14|e8e4f0|d1cce0|c0bcd0|a8a4bc|8a86a0|6b6880|ccc4f5|4a3a7a|6a5a9a|3a2a7a|2a1f5a|1a1440|f8f6ff|e0d8f5|f0edf9)/gi) || [];
assert.deepEqual(purpleHex, [], `仍有紫调 hex 残留: ${[...new Set(purpleHex)].join(", ")}`);
assert.ok(/primary:\s*\{[^}]*#a86428/s.test(html), "primary-500 未锚定工具箱 --accent-strong #a86428");
assert.ok(/neutral:\s*\{[^}]*#715740/s.test(html), "neutral-600 未锚定工具箱 --text-secondary #715740");

// 冷色系 utility（emerald/rose/cyan/slate/blue…）若回归，页面会重新冒出第二套色相
const coolHue = codeOnly.match(/(?:emerald|rose|cyan|slate|violet|indigo|purple|blue|teal)-\d+/g) || [];
assert.deepEqual(coolHue, [], `仍有冷色系 utility: ${[...new Set(coolHue)].join(", ")}`);

// ---- 6. 选项按钮可读：标签与分值对比度都达 WCAG AA(4.5) ----
// 原值 标签 1.74 / 数字 1.28，四个按钮看起来像禁用态
const lum = (hex) => {
  const [r, g, b] = hex.replace("#", "").match(/../g)
    .map((h) => parseInt(h, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)];
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};
const optionBlock = html.match(/<button @click="setAnswer[\s\S]*?<\/button>/)[0];
const labelColor = optionBlock.match(/font-semibold text-(neutral-\d+)/);
const valueColor = optionBlock.match(/'text-primary-600' : 'text-(neutral-\d+)'/);
assert.ok(labelColor, "选项标签未使用加粗深色 token");
assert.ok(valueColor, "选项分值未使用可读 token");

const palette = {};
for (const m of html.matchAll(/(\d+):\s*"(#[0-9a-f]{6})"/gi)) palette[m[1]] = m[2];
const onWhite = (token) => contrast(palette[token.replace("neutral-", "")], "#ffffff");
assert.ok(onWhite(labelColor[1]) >= 4.5, `选项标签 ${labelColor[1]} 对比度 ${onWhite(labelColor[1]).toFixed(2)} < 4.5`);
assert.ok(onWhite(valueColor[1]) >= 4.5, `选项分值 ${valueColor[1]} 对比度 ${onWhite(valueColor[1]).toFixed(2)} < 4.5`);

console.log(`selfcheck ok: 属灵恩赐测试离线可用（${catCount} 类 / ${qCount} 题，${new Set(refs).size} 个本地资源，暖色调，选项对比度 ${onWhite(labelColor[1]).toFixed(1)}/${onWhite(valueColor[1]).toFixed(1)}）`);
