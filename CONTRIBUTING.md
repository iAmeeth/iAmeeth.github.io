# Contributing — iAmeeth..github.io

Standards for commits, pull requests, and code review on this project.

## Commit messages

Every commit message must be a single, clear line describing what changed and why. Use the imperative mood (as if completing the sentence "This commit will ...").

### Format

```
<type>: <description>
```

### Types

| Type     | Use when                                                    |
|----------|-------------------------------------------------------------|
| `feat`   | Adding new content or functionality (new blog post, new section) |
| `fix`    | Fixing a broken link, layout bug, or incorrect content      |
| `style`  | Visual-only changes (colors, spacing, typography, animations) |
| `security` | Security improvements (CSP updates, link hardening)       |
| `docs`   | Changes to CLAUDE.md, CONTRIBUTING.md, README.md            |
| `chore`  | Maintenance (file cleanup, restructuring, no user-visible change) |

### Examples

```
feat: add blog post comparing Google Jitro and Claude
fix: resolve Contact nav link not scrolling to section
style: increase project card hover elevation
security: add noopener noreferrer to all external links
docs: define four agent roles in CLAUDE.md
chore: remove unused CSS classes
```

### Rules

- One logical change per commit. Do not bundle unrelated fixes.
- Keep the description under 72 characters.
- Do not end with a period.
- Reference an issue number if one exists: `fix: broken mobile menu (#12)`.
- Never commit with a generic message like "update", "fix stuff", or "changes".

## Pull requests

All non-trivial changes should go through a pull request, even when working solo. This creates a reviewable history.

### Branch naming

```
<type>/<short-description>
```

Examples: `feat/add-blog-post-ai-tools`, `fix/mobile-nav-overlap`, `style/dark-theme-refinements`.

### PR description template

Every PR description must follow this structure:

```markdown
## What

One or two sentences describing the change at a high level.

## Why

Why this change is needed. Link to an issue or explain the motivation.

## Changes

- Bullet list of specific files changed and what was done to each.

## Role checklist

- [ ] **UX/UI Designer:** Visual consistency verified, responsive on mobile and desktop, hover/focus states intact
- [ ] **Software Developer:** No build tools added, all links resolve, JS is defensive, BEM naming followed
- [ ] **Researcher:** (if blog content) Facts verified via web search, content is original, sources cited
- [ ] **Security Engineer:** CSP meta tags present on all pages, no inline JS, all external links have rel="noopener noreferrer"

## Screenshots

Before/after screenshots for any visual change. Skip for docs-only changes.
```

### Review process

1. Create the branch and make commits following the message format above.
2. Open a PR with the description template filled out.
3. Self-review against the four-role checklist before requesting review.
4. Squash-merge to `master` when approved. The squashed commit message should follow the same `<type>: <description>` format.

## Code review standards

When reviewing (or self-reviewing), check:

- **Links:** Every `href` points to a real, reachable target. No `href="#"` placeholders.
- **Security headers:** All HTML files have CSP, X-Content-Type-Options, and referrer meta tags.
- **External links:** All `target="_blank"` links include `rel="noopener noreferrer"`.
- **Responsiveness:** Test at 375px (mobile), 768px (tablet), and 1440px (desktop) widths.
- **Accessibility:** Interactive elements have aria-labels, images have alt text, focus order is logical.
- **Content accuracy:** Any factual claim in a blog post has been verified.
- **File hygiene:** No leftover test files, no commented-out code blocks, no console.log statements.
