# CLAUDE.md

## Deployment

- Hosted on **Vercel Hobby plan** (owner: `harrytruong0804` / `Noi Truong`)
- Hobby plan only allows the project owner to deploy. Commits by other git authors (e.g. `Harry <harry.truong@akila3d.com>`) will be **blocked**.
- **Always use the PR workflow**: push to a feature branch, create a PR, and merge via GitHub. The merge commit is attributed to the repo owner, which Vercel accepts.
- **Never push directly to `master`** — it will trigger a blocked deployment.

## Blog Structure

- Next.js app in `src/app/`
- Posts live in `src/app/posts/[slug]/` with two files:
  - `page.tsx` — thin wrapper using `ArtifactEmbed` component
  - `content.ts` — exports `styles`, `html`, `script` as template literal strings
- Post metadata registered in `src/lib/posts.ts` (sorted by date descending)
- All CSS in `content.ts` must be scoped under `.artifact-scope` to avoid leaking into the Next.js layout
- `ArtifactEmbed` (`src/components/artifact-embed.tsx`) wraps HTML in `<div class="artifact-scope">` and injects styles/scripts

## Git

- Production branch: `master`
- Default PR base: `master`
- Commits should NOT include `Co-Authored-By` trailers (Vercel Hobby treats them as collaborators)
