# 心语卡牌 · 仓库约定

> 本目录（`heart-talk/`）是 toolbox 仓库的子项目。改动前先读本文件。
> 注意：整个仓库共用一个源（localStorage 按 origin 共享），
> 三个 PWA 的 Service Worker 也在同一个 CacheStorage 里，详见下文「Service Worker」。

## 项目结构

纯静态前端，无构建步骤、无依赖、无框架。

- `index.html`：页面外壳与 DOM 锚点；`<head>` 里有一段**首屏防闪**内联脚本，
  只设 `data-theme`，不要往里加业务逻辑
- `src/main.js`：应用引导、状态、事件接线、弹窗管理
- `src/core/`
  - `card-service.js` 筛选、洗牌、按文本去重、抽卡队列（纯函数，可单测）
  - `history-store.js` 历史记录读写（全部返回布尔值，调用方必须检查）
- `src/ui/render.js`：渲染卡牌、进度、历史列表
- `src/data/cards.js`：130 张卡（题目文本有 7 组重复，属设计意图，见下）
- `src/styles.css`：本工具样式；基础变量来自 `../shared/theme.css`
- `sw.js` / `manifest.webmanifest` / `icons/`：PWA
- `heart-talk-cards-offline.html`：**自动生成，勿手改**，离线单文件包

## 常用命令

```bash
python -m http.server 8921              # 本地预览（PWA 与分享功能需要 http）
node ../scripts/check-ui-chinese.js     # 界面文案英文检查（脚本在仓库根 scripts/）
node ../scripts/selfcheck-heart-talk.mjs      # 抽卡/存储纯模块自检
node ../scripts/selfcheck-offline-bundle.mjs  # 离线包死链与数据一致性
python ../scripts/build_offline_html.py       # 重建离线单文件包（会自动 bump 缓存指纹）
```

改动 `src/` 后必须重跑 `build_offline_html.py`，它会：
1. 把模块内联进单文件包
2. 清理包内不存在的引用（`<script src>`、manifest、apple-touch-icon、指向产物自身的下载链接）
3. 调 `bump_sw_cache.py` 重算 `sw.js` 的缓存指纹

## Service Worker

CacheStorage 按 **origin** 共享，不受 SW scope 限制。历史上三个工具的 SW
都写 `caches.keys().filter(k => k !== CACHE)`，导致任一工具激活时会删掉
另外两个工具的缓存。现在的约定：

- 每个 `sw.js` 声明 `const CACHE_PREFIX = "<工具名>-";`，activate 只删**带本前缀**的 key
- `const CACHE = "<工具名>-<8位内容哈希>"` 由 `scripts/bump_sw_cache.py` 生成，
  改名或改内容后都要重跑（`python scripts/bump_sw_cache.py heart-talk/sw.js heart-talk`）
- fetch 兜底只在 `request.mode === "navigate"` 时回退 `./index.html`，
  否则 JS/CSS 请求失败会拿到一坨 HTML
- 新增文件时要同步加进 `ASSETS` 预缓存列表，否则首次离线打开会 404

## 卡牌数据

- 130 张，`level` 1~3，`category` 为 couple/friend/family/self
- **level 3 只在 couple 下存在**（40 张）。friend/family/self 的三级按钮由
  `pruneLevelFilters()` 动态隐藏；若将来补了三级卡，代码会自动放出来
- 7 组题干逐字重复（同一句话在多个场景都成立），**不删**。抽卡时由
  `dedupeByQuestion()` 保证一轮内不出现重复题面，所以一轮是 121 题而非 130 张

## 存储

- 历史：`heartTalkHistory`；主题：`heartTalkTheme`
- 另外写一份共享主题键 `toolbox-theme`，供根聚合首页跟随主题
- **写失败必须能被看见**：`saveHistory` / `clearHistoryStore` 返回布尔值，
  调用方先落盘成功再改内存，失败就 toast 报错并保持原状

## 中文文本改动（避免乱码）

不要在命令行内联中文参数。稳定做法：
1. 先把改动写成 UTF-8 文件
2. Node 里 `fs.readFileSync(..., 'utf8')` 读入，`.replace(/^\uFEFF/, '')` 去 BOM
3. 写完立刻校验：`node scripts/check-ui-chinese.js` 且文件里 `?` 计数为 0

原因：PowerShell/终端传参可能把中文静默变成 `?`。

## 提交约定

简洁的祈使句标题，可带前缀：`feat:` / `fix:` / `chore:` / `docs:`。
提交信息说明**为什么**改。

## 安全

- 不提交任何密钥，全部客户端运行
- `localStorage` 只存本机数据，不上传服务器
