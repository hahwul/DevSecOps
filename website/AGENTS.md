# AGENTS.md - AI Agent Instructions for Hwaro Site

This document provides instructions for AI agents working on this Hwaro-generated website.

## Project Overview

This is a static website built with [Hwaro](https://github.com/hahwul/hwaro), a fast and lightweight static site generator written in Crystal.

## Essential Commands

| Command | Description |
|---------|-------------|
| `hwaro build` | Build the site to `public/` directory |
| `hwaro serve` | Start development server with live reload |
| `hwaro new <path>` | Create new content from archetype |
| `hwaro deploy` | Deploy the site (requires configuration) |
| `hwaro build --drafts` | Include draft content |
| `hwaro serve -p 8080` | Serve on custom port (default: 3000) |
| `hwaro build --base-url "https://example.com"` | Set base URL for production |

## Directory Structure

```
.
├── config.toml          # Site configuration
├── content/             # Markdown content files
│   ├── index.md         # Homepage (single file, no underscore)
│   ├── about.md         # Standalone page
│   └── <section>/       # Section directory (posts/, guide/, chapter-1/, …)
│       ├── _index.md    # Section landing page (underscore-prefixed)
│       └── *.md         # Pages within the section
├── templates/           # Jinja2 templates (Crinja)
│   ├── header.html      # Shared <head> + <body> open
│   ├── footer.html      # Shared <body>/<html> close
│   ├── page.html        # Page template
│   ├── section.html     # Section listing template
│   ├── 404.html         # Not-found page
│   ├── partials/        # Reusable fragments (nav, search, sidebar)
│   └── shortcodes/      # Shortcode templates
├── static/              # Static assets (copied as-is)
└── archetypes/          # Content templates for `hwaro new`
```

## Notes for AI Agents

1. **Front matter** can be TOML (`+++`), YAML (`---`), or JSON (`{...}` at file start). Pick one per file and keep delimiters matched.
2. **Rendered content** is `{{ content }}` in templates (already-safe HTML — no extra `| safe` needed).
3. **Custom metadata** is `page.extra.field`, not `page.params.field`.
4. **Always preview** with `hwaro serve` before committing.
5. **Validate front matter syntax** (TOML, YAML, or JSON) and `config.toml` after edits.
6. **Use `{{ base_url }}` prefix** for URLs in templates.
7. **Escape user content** with `{{ value | e }}` (or `| escape`) in templates.

## Full Reference

For detailed documentation on content, templates, configuration, and more:

- [Hwaro Documentation](https://hwaro.hahwul.com)
- [Configuration Guide](https://hwaro.hahwul.com/start/config/)
- [Full LLM Reference](https://hwaro.hahwul.com/llms-full.txt) — comprehensive reference optimized for AI agents

To generate the full embedded AGENTS.md locally, run:
```
hwaro tool agents-md --local --write
```

## Site-Specific Instructions

This site is a trilingual (en at root, /ko/, /ja/) comic field guide to DevSecOps, deployed to https://devsecops.hahwul.com (CNAME lives in `static/CNAME`).

- Every content page exists three times: `foo.md`, `foo.ko.md`, `foo.ja.md`. Keep the shortcode structure of the three files identical; only translate prose, dialogue, and front matter strings. UI strings live in `i18n/{en,ko,ja}.toml`.
- The comic system is shortcode-driven: `strip` (panel column/row), `panel` (args: tint="sec"|"warm", halftone, center), `bubble` (args: who, dir, kind, name), `scene` (args: name, pose, alt, size, bg="board"|"window"|"gears"|"radar" for a muted backdrop), `caps` and `resources` (wrap markdown lists), `team`/`member`, `loop_diagram`, `episode_rail`, `finale`.
- Characters are inline SVG partials in `templates/partials/svg/` (char-dev, char-sec, char-ops, char-bug + trio/loop/icon). Rules: strokes `var(--ink)`, fills only from `--c-*`/`--paper` tokens plus the shading tokens (`--c-*-sh`, `--c-*-hi`, `--shade`, `--ground`), no `<text>` elements ever (all dialogue must stay translatable HTML), poses are Jinja branches. Every character gets a ground shadow, one `-sh` shading pass, and one `-hi` sheen so they never read as flat pasted shapes.
- Chapter pages use `template = "chapter"` with `[extra] phase/episode/hook/has_tools`. The loop order lives in `data/chapters.yml`; the tool list in `data/tools.yml` (with `description_ko`/`description_ja`).
- Design constraints: no em-dashes anywhere in visible copy (any language), one accent (mint teal) + one support hue (apricot), light/dark via `light-dark()` tokens in `static/css/site.css`, motion gated behind `html.js` + `prefers-reduced-motion: no-preference`, no `window.addEventListener("scroll")`.
- Tools content mirrors `../tools/README.md`; when tools are added to the repo table, add them to `data/tools.yml` too.