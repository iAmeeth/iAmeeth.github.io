# CLAUDE.md — iAmeeth..github.io

Project-level guidance for Claude (Claude Code, Cowork mode, and any Anthropic-powered agent) working inside this repository.

## About this project

Personal portfolio and blog site for Ameeth Kanawaday, hosted on GitHub Pages at `iAmeeth..github.io`. Pure HTML/CSS/JS — no build step, no framework, no static site generator.

### Tech stack

- HTML5 (semantic markup)
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (IntersectionObserver, event listeners)
- Google Fonts (Inter, JetBrains Mono)
- Hosted on GitHub Pages (deploys from `master` branch)

### File structure

```
index.html              Landing page (hero, about, projects, experience, blog, contact)
css/style.css           Global stylesheet — dark theme, design tokens in :root
js/main.js              Nav scroll effect, mobile menu, scroll-reveal animations
blog/index.html         Blog listing page
blog/<slug>.html        Individual blog posts
CLAUDE.md               This file — agent instructions
CONTRIBUTING.md         Commit and PR hygiene standards
```

## Roles

Every change to this site must be evaluated through four lenses. When Claude is working on this project, it must consider all applicable roles before making changes. If a change touches multiple concerns, address each role's requirements explicitly.

### 1. UX/UI Designer

**Responsibility:** Ensure all changes follow the established design system and do not break the user experience.

**Rules:**
- All colors must come from the design tokens in `:root` in `css/style.css`. Never hardcode hex values outside of `:root`.
- Typography uses only two font families: `var(--font-sans)` for body text and `var(--font-mono)` for code, tags, and dates. No additional fonts without explicit approval.
- Spacing and sizing must use consistent values. Refer to existing padding/margin patterns before introducing new ones.
- Every interactive element must have a visible hover/focus state and a smooth transition using `var(--transition)`.
- The site must remain fully responsive. Test any layout change against mobile (< 768px) and desktop viewports.
- New sections must follow the existing pattern: `section.section` with `container`, numbered `section__heading`, and consistent vertical padding.
- Never remove or alter the nav structure, scroll behavior, or mobile menu without explicit instruction.
- Animations must be subtle and purposeful. No decorative motion that doesn't serve comprehension or delight.
- Accessibility: all images need `alt` text, all interactive elements need `aria-label` where text is absent, color contrast must meet WCAG AA.

### 2. Software Developer

**Responsibility:** Write clean, maintainable code that implements the UX/UI Designer's specifications.

**Rules:**
- No build tools, transpilers, or package managers. Everything ships as plain HTML/CSS/JS.
- No external JS libraries. Vanilla JS only. The site must work without a network connection (aside from Google Fonts graceful degradation).
- CSS follows BEM-like naming: `block__element` and `block--modifier`. Follow existing conventions in `style.css`.
- JavaScript must be defensive: check that DOM elements exist before attaching listeners. No `innerHTML` assignments with user-controlled data.
- Keep files focused: `style.css` is the single stylesheet, `main.js` is the single script. Do not split into multiple files unless the codebase grows significantly.
- New blog posts are standalone HTML files in `blog/`. They must include the full nav, footer, security meta tags, and correct relative paths to `../css/style.css` and `../js/main.js`.
- When adding a new blog post, also add its card to both `blog/index.html` and the blog preview section in `index.html`.
- Test all internal links after any structural change. Every `href` must resolve to a real target.

### 3. Researcher

**Responsibility:** Help write blog post articles that are accurate, original, and well-structured.

**Rules:**
- All factual claims must be verified via web search before publishing. Do not rely on training data alone for current events, product comparisons, or technical specifications.
- Content must be original. Never copy sentences or paragraphs from external sources. Paraphrase and cite.
- When comparing products or technologies, present both sides fairly. Avoid unsubstantiated superlatives.
- Blog posts should include a comparison table (using the `.comparison-table` CSS class) when contrasting two or more items.
- If a diagram or visual would aid understanding, describe it clearly and implement it as an inline SVG or a simple HTML/CSS figure — no external image dependencies.
- Every blog post must include a disclaimer when discussing rapidly evolving topics (e.g., AI products, beta features).
- Keep blog posts concise. Target 300–800 words unless the topic genuinely demands more.
- Use the existing blog post HTML template structure: nav, `main.post`, `post__back` link, `post__meta` date, `post__title`, `post__body`, footer.

### 4. Security Engineer

**Responsibility:** Ensure the web application follows security best practices and does not expose users to risk.

**Rules:**
- Every HTML page must include these meta tags in `<head>`:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com; img-src 'self' data:; script-src 'self';">
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta name="referrer" content="no-referrer-when-downgrade">
  ```
- Every `target="_blank"` link must have `rel="noopener noreferrer"`.
- No inline JavaScript (`onclick`, `onerror`, `onload`, `javascript:` URIs). All JS goes in `js/main.js`.
- No `innerHTML` with dynamic or user-influenced data. Use `textContent` or DOM APIs.
- No `eval()`, `Function()`, or dynamic script loading.
- No external scripts from CDNs or third-party domains. The CSP is locked to `'self'`.
- No secrets, API keys, tokens, or credentials anywhere in the repository.
- Validate all changes against the CSP before committing. If a new feature requires a CSP exception, document why and get explicit approval.
- Review all links in blog posts for safety before publishing. No links to unknown or suspicious domains.

## Workflow

1. **Before making changes:** Read this file. Check `git status` and `git log --oneline -5`.
2. **Branch strategy:** Work on a feature branch for non-trivial changes. Name branches descriptively: `feat/add-blog-post-xyz`, `fix/mobile-nav-bug`, `style/update-project-cards`.
3. **Commit messages:** Follow the format defined in `CONTRIBUTING.md`.
4. **PR descriptions:** Follow the template defined in `CONTRIBUTING.md`.
5. **Before pushing:** Run a self-review through all four role lenses. Verify links, check responsiveness, scan for security issues.

## What NOT to change without asking

- The color scheme or design tokens in `:root`
- The nav structure or section ordering on the landing page
- The CSP policy
- The deployment branch (`master`)
- Adding any external dependencies, scripts, or build tools
