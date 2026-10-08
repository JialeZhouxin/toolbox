#!/usr/bin/env python3
"""Content-address a Service Worker's CACHE key.

Reads the ASSETS list inside a sw.js, hashes the listed files, and rewrites
the `const CACHE = "..."` line so the cache version tracks content, not a
hand-maintained string. Run after any build step that changes assets.

Usage:
    python3 scripts/bump_sw_cache.py <sw.js path> <assets root dir> [name prefix]

The assets root is the directory the sw.js paths are relative to (e.g. the
tool's own folder). ASSETS entries that are directories ("./") hash the
index.html of that dir; missing files are skipped with a warning.

Cache naming: CacheStorage is shared across the whole origin, and every
Service Worker here prunes only the keys carrying its own prefix — otherwise
the tools in this repo would delete each other's caches. So a sw.js declares

    const CACHE_PREFIX = "heart-talk-";
    const CACHE = "heart-talk-<digest>";

and this script rewrites only the CACHE line, reusing whatever CACHE_PREFIX
it finds in the file. Without a CACHE_PREFIX (or an explicit argument) the
name falls back to "<sw.js stem>-<digest>".
"""

from __future__ import annotations

import hashlib
import re
import sys
from pathlib import Path


def _resolve(asset: str, root: Path) -> Path | None:
    # Strip a literal "./" prefix only. str.lstrip("./") is character-based,
    # so it also ate the leading dots of "../" — which silently dropped
    # ../shared/theme.css out of every tool's hash.
    rel = asset[2:] if asset.startswith("./") else asset
    if rel == "":
        return root / "index.html"
    return root / rel


def read_prefix(sw_path: Path) -> str | None:
    m = re.search(r'const\s+CACHE_PREFIX\s*=\s*"([^"]*)"', sw_path.read_text(encoding="utf-8"))
    return m.group(1) if m else None


def collect_hashes(sw_path: Path, root: Path) -> str:
    src = sw_path.read_text(encoding="utf-8")
    m = re.search(r"const\s+ASSETS\s*=\s*\[([^\]]*)\]", src, re.S)
    if not m:
        raise SystemExit(f"no ASSETS list in {sw_path}")
    assets = re.findall(r"[\"']([^\"']+)[\"']", m.group(1))
    h = hashlib.sha256()
    for a in assets:
        p = _resolve(a, root)
        if p is None or not p.exists():
            print(f"  warn: skip missing {a}", file=sys.stderr)
            continue
        h.update(p.read_bytes())
    return h.hexdigest()[:8]


def bump(sw_path: Path, root: Path, prefix: str | None = None) -> str:
    digest = collect_hashes(sw_path, root)
    name = f"{prefix or read_prefix(sw_path) or sw_path.stem + '-'}{digest}"
    src = sw_path.read_text(encoding="utf-8")
    out, n = re.subn(r'const\s+CACHE\s*=\s*"[^"]*"\s*;', f'const CACHE = "{name}";', src, count=1)
    if n == 0:
        raise SystemExit(f"no CACHE line in {sw_path}")
    sw_path.write_text(out, encoding="utf-8")
    return name


if __name__ == "__main__":
    if len(sys.argv) not in (3, 4):
        raise SystemExit("usage: bump_sw_cache.py <sw.js> <assets root> [name prefix]")
    name = bump(Path(sys.argv[1]), Path(sys.argv[2]), sys.argv[3] if len(sys.argv) == 4 else None)
    print(f"bumped {sys.argv[1]} -> {name}")
