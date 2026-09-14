# CLAUDE.md

## Deployment

- Hosted on **GitHub Pages** at https://harrytruong0804.github.io (no custom domain). Vercel is no longer used.
- `.github/workflows/deploy.yml`: every push to `main` runs `npm ci` → `npm run build` (static export to `out/`) → `touch out/.nojekyll` → `actions/deploy-pages`. Takes about a minute.
- **Pushing to `main` publishes.** Run `npm run build` locally first: a failed build means no deploy.
- This repo is **public** — keep private drafts out of it.
- Check deploys: `gh run list --limit 5`

## Blog Structure

- Next.js app in `src/app/`
- Posts live in `src/app/posts/[slug]/` with two files:
  - `page.tsx` — thin wrapper using `ArtifactEmbed` component
  - `content.ts` — exports `styles`, `html`, `script` as template literal strings
- Post metadata registered in `src/lib/posts.ts` (sorted by date descending)
- All CSS in `content.ts` must be scoped under `.artifact-scope` to avoid leaking into the Next.js layout
- `ArtifactEmbed` (`src/components/artifact-embed.tsx`) wraps HTML in `<div class="artifact-scope">` and injects styles/scripts

## Git

- Production branch: `main` (the only branch; there is no `master`)
