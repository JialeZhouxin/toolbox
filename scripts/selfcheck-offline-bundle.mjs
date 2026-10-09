// 离线单文件包结构自检 —— 运行：node scripts/selfcheck-offline-bundle.mjs
//
// 单文件包的价值在于「双击就能用」，所以凡是包内不存在的引用都是 bug：
// 残留的 <script src>、manifest、apple-touch-icon、指向产物自身的下载链接。
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BUNDLE = path.join(ROOT, "heart-talk", "heart-talk-cards-offline.html");
const SRC = path.join(ROOT, "heart-talk", "src", "data", "cards.js");

const html = fs.readFileSync(BUNDLE, "utf8");

// ---- 不得有任何外部/包外引用 ----
assert.equal(/<script[^>]+src=/.test(html), false, "单文件包里不该还有 <script src>");
assert.equal(/<link[^>]+rel="manifest"/.test(html), false, "不该还有 manifest 引用");
assert.equal(/<link[^>]+apple-touch-icon/.test(html), false, "不该还有 apple-touch-icon 引用");
assert.equal(/fonts\.googleapis\.com/.test(html), false, "不该还有 Google Fonts 外链");
// 注意：shared/theme.css 的注释里提到过 href="../shared/theme.css"，
// 所以只匹配真正的 <a> 标签，别被注释里的示例文字误伤。
assert.equal(
  /<a\b[^>]*href="\.\.\//.test(html),
  false,
  "不该还有指向工具箱首页的链接"
);
assert.equal(
  /<a\b[^>]*download-offline[^>]*>/.test(html),
  false,
  "不该还有指向产物自身的「下载离线包」按钮"
);

// ---- 代码与样式都真的内联了 ----
assert.ok(/<style>[\s\S]*<\/style>/.test(html), "样式应内联");
assert.ok(/<script>[\s\S]*<\/script>/.test(html), "脚本应内联");
assert.ok(html.includes("createDeck"), "抽卡队列代码应内联");
assert.ok(!html.includes("CACHE_PREFIX"), "Service Worker 代码不该混进单文件包");

// ---- 卡数据与 src/ 逐字一致（builder 的核心承诺）----
const srcText = fs.readFileSync(SRC, "utf8").replace(/^\uFEFF/, "");
const grab = (text) => {
  const m = text.match(/const cards\s*=\s*(\[[\s\S]*?\]);/);
  assert.ok(m, "找不到 cards 数组字面量");
  return m[1];
};
assert.equal(grab(html), grab(srcText), "离线包卡数据与 src/data/cards.js 必须逐字一致");

const count = (grab(html).match(/\bid:\s*\d+/g) || []).length;
assert.equal(count, 250, `卡数应为 250，实际 ${count}`);

console.log(`selfcheck ok: 离线包无死链、数据一致（${count} 张卡）`);
