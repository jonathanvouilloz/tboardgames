# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static multipage website for **T Board Games & Cafe**, a board game cafe in Chiang Mai, Thailand. Pure HTML/CSS/JavaScript with no build tools.

## Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom Properties, Grid, Flexbox (16 stylesheets, 200+ design tokens)
- **JavaScript ES6+** - Vanilla modules, no bundler
- **Alpine.js v3** - Lightweight reactivity (CDN)
- **PhotoSwipe v5** - Image lightbox gallery (CDN)
- **Netlify** - Hosting, forms, SSL

## Development

**No build process** - Open HTML files directly in browser or use a local server:
```bash
python3 -m http.server 8080
# or
npx serve .
```

**No tests** - Manual testing only. Test at breakpoints: 375px, 414px, 768px, 1024px, 1440px.

## Architecture

### Content Management
All editable content lives in `config.json` - site info, navigation, menu items, games, events, contact details. This file is client-facing for easy updates without touching code.

### Bilingual System (EN/TH)
- HTML uses `data-lang-en` and `data-lang-th` attributes
- Config uses `{ "en": "...", "th": "..." }` objects
- `t(textObj)` helper returns text for current language
- `tc(path)` helper accesses nested config translations
- Language persisted to localStorage

### CSS Architecture
1. `variables.css` - Single source of truth for all design tokens
2. Component files follow BEM-like naming: `.block`, `.block__element`, `.block--modifier`
3. Mobile-first responsive design

### JavaScript Modules
- `config.js` - Loads config.json, provides translation helpers
- `theme-loader.js` - Applies branding colors from config to CSS variables
- `lang.js` - Language toggle with Alpine.js store
- `nav.js` - Navigation state, mobile menu, scroll effects
- `animations.js` - IntersectionObserver scroll animations (respects prefers-reduced-motion)

### Theme Priority
```
config.json branding > css/variables.css > defaults
```

## CSS Conventions

Always use CSS variables from `variables.css`:
```css
/* Correct */
background: var(--lime-500);
padding: var(--space-6);
border-radius: var(--radius-md);

/* Never hardcode values */
background: #A8D973;  /* Wrong */
padding: 24px;        /* Wrong */
```

## Key Files

| File | Purpose |
|------|---------|
| `config.json` | All editable content (bilingual) |
| `css/variables.css` | Design tokens (colors, spacing, typography) |
| `netlify.toml` | Deployment config, headers, caching |
| `PRD-T-BoardGames-Cafe.md` | Full product requirements |
| `plan.md` | Implementation checklist |

## Performance Targets

- Lighthouse: 90+ all categories
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Page size: < 1MB (homepage)

## Deployment

Hosted on Netlify. Push to main branch triggers deploy. Forms use Netlify's built-in form handling with `data-netlify="true"` attribute.
