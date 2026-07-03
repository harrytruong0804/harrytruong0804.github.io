# Artifact Style Guide

The contract every post on this blog follows — editorial voice and visual theme.
Agents reworking or publishing posts MUST follow this document.

## Editorial principles

1. **Compression.** Short, dense, tightly argued. Homepage descriptions are ONE
   message in 90–170 characters. Inside a post, cut every sentence that doesn't
   advance the single lesson. Prefer one strong sentence over three hedged ones.
2. **Packaging.** One post = one clear message/lesson. Don't cram. If a section
   teaches a second lesson, it belongs in another post.
3. **Method, not label.** Every post reasons from the ground up — but NEVER says
   so. The phrases "first principles", "from first principles", "from the ground
   up" (as a badge), "bytebytego-style" must not appear in titles, eyebrows,
   section tags, footers, descriptions, or tags. The reader should *feel* the
   method. Exception: a post whose literal SUBJECT is the technique (e.g. the
   first-principles-prompting post) may name it as subject matter — never as
   self-praise.
4. **Visual-first.** Every load-bearing concept earns a diagram. Diagrams carry
   the explanation; prose connects them. Don't announce that something is
   "visualized" — just show it.
5. **Consistency.** All posts share the site's archive theme (tokens below) and
   are written in English. No exceptions.

## Theme kit (CSS custom properties)

Defined on `.artifact-scope` in `src/app/globals.css`. They follow the site
theme and flip automatically in dark mode — an artifact that only uses these
tokens gets light/dark support for free.

| Token | Role |
|---|---|
| `--at-bg` | page background (paper) |
| `--at-surface` | raised panels, cards |
| `--at-inset` | code blocks, wells, terminal panes |
| `--at-text` | primary text (ink) |
| `--at-muted` | secondary text |
| `--at-faint` | tertiary text, captions, hairline labels |
| `--at-line` | hairline borders/dividers |
| `--at-line-strong` | strong rules (the double-rule device) |
| `--at-accent` | brand vermilion — emphasis, links, the ONE highlight |
| `--at-accent-soft` | vermilion wash for backgrounds |
| `--at-blue / -soft` | semantic hue: data, inputs, "the client side" |
| `--at-green / -soft` | semantic hue: success, cache hit, verified |
| `--at-amber / -soft` | semantic hue: compute, warnings, "the middle" |
| `--at-violet / -soft` | semantic hue: types, hardware, "the other side" |
| `--at-font-display` | headings (Fraunces) |
| `--at-font-body` | prose (Newsreader) |
| `--at-font-mono` | code, labels, metadata (Spline Sans Mono) |

### Conversion rules for artifact `content.ts`

- The `styles` string must NOT define its own palette (`:root`-style custom
  props duplicating the kit), must NOT `@import` Google Fonts (site self-hosts),
  and must NOT set a page background/color on `.artifact-scope` (the kit does).
- Replace every hard-coded color with the nearest kit token. Diagram semantics
  survive via the four hues; the vermilion accent is reserved for the one thing
  the reader must see first.
- SVG diagrams: `fill`/`stroke` attributes accept `var(--at-*)` inside inline
  SVG — use them. Same for inline `style=` colors in HTML.
- Canvas/JS-drawn visuals: read tokens at draw time via
  `getComputedStyle(document.querySelector('.artifact-scope')).getPropertyValue('--at-blue')`
  so a theme toggle + redraw picks up the right colors.
- Syntax highlighting token classes map to: keyword→`--at-accent`,
  string→`--at-green`, comment→`--at-faint` italic, type→`--at-violet`,
  number/decorator→`--at-amber`, function→`--at-blue`.
- Remove any embedded site-nav `.topbar` markup and its CSS — the posts layout
  renders the real one.
- Text on `--at-accent`-colored backgrounds must be `--at-bg` (paper), never
  white literals.

### Escaping warning

`content.ts` exports template literals. When editing, keep `\`` and `\${`
escapes intact everywhere inside `styles`/`html`/`script` — a raw backtick or
`${` breaks the module.

## Homepage metadata (`src/lib/posts.ts`)

- `title`: crisp, ≤ 60 chars preferred; no keyword badges.
- `description`: 90–170 chars, one message, active voice.
- `tags`: lowercase topics only; the tag `first-principles` is banned.
- `slug` and `date` are immutable once published.
