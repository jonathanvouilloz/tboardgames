# Plan d'Implémentation - T Board Games & Cafe

> Site web multipage statique pour un café de jeux de société à Chiang Mai, Thaïlande.

**Stack**: HTML5 + CSS3 + JS Vanilla + Alpine.js + PhotoSwipe
**Déploiement**: Netlify
**Bilingue**: EN/TH

---

## Phase 0: Documentation Initiale ✅

- [x] Créer `claude.md` (contexte projet)
- [x] Créer `plan.md` (ce fichier)

---

## Phase 1: Setup & Infrastructure ✅

### Dossiers
- [x] `css/`
- [x] `js/`
- [x] `images/hero/`
- [x] `images/cafe/`
- [x] `images/games/`
- [x] `images/gallery/`
- [x] `images/decorative/`
- [x] `images/favicon/`

### Fichiers
- [x] `config.json` - Configuration centralisée (bilingue EN/TH)
- [x] `css/reset.css` - CSS reset moderne
- [x] `css/variables.css` - Design tokens (200+ variables)
- [x] `css/base.css` - Styles HTML globaux
- [x] `netlify.toml` - Configuration Netlify
- [x] `_redirects` - Redirections

### JavaScript
- [x] `js/config.js` - Loader config.json + fonction `t()`
- [x] `js/theme-loader.js` - Synchronisation config → CSS variables

---

## Phase 2: Composants CSS de Base ✅

### css/layout.css
- [x] `.container` (responsive max-width, variantes sm/md/lg)
- [x] `.grid` (2, 3, 4 colonnes responsive)
- [x] `.flex` utilities (direction, wrap, justify, align, gap)

### css/components.css
- [x] `.btn` (primary, secondary, ghost, sizes)
- [x] `.card` (image, title, description, meta, hover effects)
- [x] `.badge` (easy, medium, hard, new, popular)
- [x] `.section` (backgrounds, header, title, subtitle)
- [x] `.divider` (simple et gradient)

### css/animations.css
- [x] `@keyframes` (fadeIn, slideUp, slideDown, pulse, bounce, float)
- [x] `.animate-*` scroll classes (fade, slide, scale)
- [x] `.stagger-*` delays (1-6)
- [x] `.hover-*` utilities (lift, scale, glow)

### css/utilities.css
- [x] Text (alignment, size, weight, color, truncate)
- [x] Spacing (margin, padding, responsive)
- [x] Display (hidden, block, responsive visibility)
- [x] Background, Border, Shadow, Position, Z-index

---

## Phase 3: Navigation & Footer ✅

### css/header.css
- [x] Header sticky avec shadow on scroll
- [x] Logo cliquable
- [x] Navigation desktop (nav__link, nav__link--active)
- [x] Language toggle (lang-toggle)
- [x] Menu hamburger mobile (menu-toggle avec animation X)

### css/footer.css
- [x] Footer dark avec grid 4 colonnes
- [x] Logo + tagline + description
- [x] Quick links navigation
- [x] Contact info avec icônes
- [x] Social links avec hover effects
- [x] Copyright + made with love

### css/mobile-menu.css
- [x] Menu fullscreen slide-in
- [x] Overlay dark
- [x] Navigation mobile large
- [x] Language toggle buttons
- [x] Body scroll lock

### JavaScript
- [x] `js/nav.js` - Active state + header scroll + Alpine mobileMenu
- [x] `js/lang.js` - Toggle EN/TH + localStorage + Alpine language

---

## Phase 4: Homepage (index.html) ✅

### Structure
- [x] `<head>` meta tags, fonts, CSS
- [x] Skip link accessibilité
- [x] Header (navigation)

### Hero Section
- [x] Background image fullscreen
- [x] Overlay gradient lime
- [x] Titre H1 + Subtitle
- [x] CTA button "Explore Games"
- [x] Scroll indicator animé

### About Section
- [x] Titre H2
- [x] Paragraphe descriptif
- [x] Background crème

### Features Grid
- [x] 4 cards avec icônes
- [x] Grid 2x2 mobile → 4x1 desktop
- [x] Staggered fade-in

### Upcoming Events
- [x] Titre H2
- [x] 3 event cards (date, time, description)
- [x] Timeline layout

### CTA Section
- [x] Gradient background
- [x] "Ready to Play?"
- [x] 2 buttons

### Footer
- [x] Intégrer footer global

---

## Phase 5: Cafe Page (cafe.html) ✅

- [x] Header + meta tags
- [x] Hero section (image café)
- [x] Intro text
- [x] Menu Section
  - [x] Hot Drinks (6 items)
  - [x] Cold Drinks (5 items)
  - [x] Snacks (4 items)
- [x] Hours & Pricing card
- [x] Mini-gallery (3-4 photos)
- [x] CTA "Visit Us"
- [x] Footer

---

## Phase 6: Games Page (games.html) ✅

- [x] Header + meta tags
- [x] Hero section
- [x] Intro text
- [x] Games Grid
  - [x] 6+ game cards
  - [x] Image, Nom, Players, Duration
  - [x] Badge difficulty
  - [x] Description hover
- [x] Callout box
- [x] CTA "Come Play"
- [x] Footer

---

## Phase 7: Gallery Page (gallery.html) ✅

- [x] Header + meta tags
- [x] Titre "Gallery"
- [x] Photo Grid Masonry
  - [x] 2→3→4 colonnes responsive
  - [x] Lazy loading
- [x] PhotoSwipe integration
  - [x] Script inline module (CDN)
  - [x] Navigation clavier
  - [x] Zoom
- [x] Footer

---

## Phase 8: Contact Page (contact.html) ✅

### Layout 2 colonnes
- [x] Header + meta tags
- [x] Hero titre "Visit Us"

### Left: Contact Info
- [x] Adresse avec icône
- [x] Phone (lien tel:)
- [x] WhatsApp button
- [x] Email (lien mailto:)
- [x] Hours

### Right: Google Maps
- [x] iframe embed
- [x] Lien "Open in Maps"

### Autre
- [x] Social Links section
- [x] Contact Form (Netlify)
- [x] Footer

---

## Phase 9: 404 Page ✅

- [x] Header simple
- [x] Illustration SVG
- [x] "404 - Game Not Found"
- [x] Message fun
- [x] Button "Back to Home"
- [x] Footer

---

## Phase 10: SEO & Meta Tags

### Par page
- [ ] `<title>` unique
- [ ] `<meta description>` unique
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Hreflang (en, th)

### Fichiers globaux
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Schema.org JSON-LD (LocalBusiness)
- [ ] OG image 1200x630px

---

## Phase 11: Assets & Images

### Logo
- [ ] `images/logo.svg` (full)
- [ ] `images/logo-icon.svg` (icon only)

### Favicons
- [ ] `images/favicon/favicon.svg`
- [ ] `images/favicon/favicon-32x32.png`
- [ ] `images/favicon/favicon-16x16.png`
- [ ] `images/favicon/apple-touch-icon.png`

### Décoration
- [ ] SVG moutons
- [ ] SVG formes organiques
- [ ] Icônes custom (dice, coffee, users, calendar)

### Images placeholder
- [ ] Hero images
- [ ] Game covers

---

## Phase 12: JavaScript Avancé

### js/animations.js
- [x] IntersectionObserver
- [x] Staggered reveals
- [ ] Alpine.js x-intersect

### Alpine.js setup
- [x] CDN dans `<head>`
- [x] x-data components
- [x] x-show/x-if

### Fonctionnalités
- [x] Scroll animations
- [x] Language toggle persiste
- [ ] Events depuis config.json
- [x] Mobile menu smooth

---

## Phase 13: Testing & Optimisation

### Responsive
- [ ] 375px (iPhone SE)
- [ ] 414px (iPhone Pro Max)
- [ ] 768px (iPad)
- [ ] 1024px (Desktop)
- [ ] 1440px (Large desktop)

### Browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance
- [ ] Lighthouse audit (90+)
- [ ] Images optimisées
- [ ] CSS/JS minifiés
- [ ] Lazy loading

### Accessibilité
- [ ] Semantic HTML
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Focus styles
- [ ] Contraste AA

---

## Phase 14: Documentation Client

### README.md
- [ ] Mise à jour config.json
- [ ] Ajout photos
- [ ] Changement couleurs
- [ ] Ajout événements
- [ ] Redéploiement Netlify
- [ ] Troubleshooting

---

## Phase 15: Déploiement

- [ ] Compte Netlify
- [ ] Deploy initial
- [ ] URL .netlify.app fonctionnelle
- [ ] Domaine custom (optionnel)
- [ ] SSL actif
- [ ] Forms testés
- [ ] Redirects OK
- [ ] Google Search Console

---

## Documents de Référence

| Document | Description |
|----------|-------------|
| `PRD-T-BoardGames-Cafe.md` | Spécifications complètes |
| `THEME-GUIDE.md` | Guide thème |
| `css-variables-theme.css` | Design tokens |
| `js-theme-loader.js` | Theme loader |
| `claude.md` | Contexte projet |

---

## Légende

- `[ ]` = À faire
- `[x]` = Complété
- Phase en cours = mentionnée dans les conversations

---

*Dernière mise à jour: 22 décembre 2025*

---

## Notes d'Implémentation Phase 4

### Fichiers créés:
- `css/homepage.css` - Styles hero, events timeline, CTA section
- `index.html` - Page d'accueil complète
- `js/animations.js` - Scroll animations avec IntersectionObserver

### Dépendances utilisées:
- Alpine.js CDN (v3.x)
- Google Fonts: Fredoka + Poppins
- SVG inline icons (Heroicons style)

---

## Notes d'Implémentation Phase 5

### Fichiers créés:
- `cafe.html` - Page café complète avec menu et galerie
- `css/cafe.css` - Styles menu cards, info cards, gallery

### Images placeholder créées:
- `images/hero/cafe.jpg` - Hero image (SVG placeholder)
- `images/cafe/ambiance-1.jpg` à `ambiance-4.jpg` - Galerie (SVG placeholders)

### Composants implémentés:
- Menu cards avec dots leaders (`.menu-card`, `.menu-item`)
- Info cards pour horaires/pricing (`.info-card`)
- Galerie responsive (`.cafe-gallery`)
- Hero short variant (`.hero--short`)

---

## Notes d'Implémentation Phase 6

### Fichiers créés:
- `games.html` - Page jeux complète avec grille et callout
- `css/games.css` - Styles game cards et callout box

### Jeux implémentés (6):
- Catan (Medium)
- Ticket to Ride (Easy)
- Codenames (Easy)
- Azul (Medium)
- Splendor (Easy)
- 7 Wonders (Medium)

### Composants implémentés:
- Game cards avec image, badge difficulty, meta (players/duration), description
- Callout box avec icône dice
- Hero short variant (réutilisé de cafe.html)
- Animations staggered sur les cartes (`.animate-scale .stagger-1` à `.stagger-6`)

---

## Notes d'Implémentation Phase 7

### Fichiers créés:
- `gallery.html` - Page galerie complète avec PhotoSwipe
- `css/gallery.css` - Styles grille responsive et items
- `images/gallery/photo-1.svg` à `photo-8.svg` - 8 images placeholder

### Fonctionnalités implémentées:
- Grille responsive: 2 cols (mobile) → 3 cols (tablet) → 4 cols (desktop)
- PhotoSwipe 5 via CDN (ESM modules)
- Navigation clavier (Esc, flèches gauche/droite)
- Zoom: fit initial, 1.5x au clic, max 3x
- Lazy loading sur toutes les images
- Gestures tactiles (swipe, pinch to close)

### PhotoSwipe configuration:
- `gallery: '#gallery-grid'`
- `escKey: true`, `arrowKeys: true`
- `initialZoomLevel: 'fit'`, `secondaryZoomLevel: 1.5`, `maxZoomLevel: 3`
- `preload: [1, 2]`, `trapFocus: true`, `returnFocus: true`

### Composants CSS:
- `.gallery-grid` - Grille responsive avec gap adaptatif
- `.gallery-item` - Figure avec hover lift + lime shadow
- `.gallery-item__image` - Image avec scale on hover
- `.gallery-hero` - Hero gradient avec pattern SVG
- `.gallery-intro` - Texte d'introduction centré

---

## Notes d'Implémentation Phase 8

### Fichiers créés:
- `contact.html` - Page contact complète avec formulaire Netlify
- `css/contact.css` - Styles layout 2 colonnes et composants

### Sections implémentées:
- Hero gradient "Visit Us" avec pattern SVG
- Contact Info Card (adresse, phone, WhatsApp, email, hours)
- Google Maps iframe avec lien externe
- Social Links (Instagram, Facebook, TikTok)
- Formulaire Netlify avec honeypot anti-spam

### Composants CSS:
- `.contact-grid` - Layout 2 colonnes responsive (1 col mobile, 2 cols desktop)
- `.contact-info` - Card avec items icône + label + valeur
- `.contact-map` - Container iframe avec footer lien
- `.btn--whatsapp` - Bouton vert WhatsApp avec icône
- `.contact-social` - Section réseaux sociaux avec hover effects
- `.contact-form` - Formulaire stylé avec focus states lime

### Formulaire Netlify:
- `name="contact"` avec `data-netlify="true"`
- Honeypot `netlify-honeypot="bot-field"` anti-spam
- Champs: name, email, message (tous required)

---

## Notes d'Implémentation Phase 9

### Fichiers créés:
- `404.html` - Page d'erreur 404 complète avec navigation et footer
- `css/404.css` - Styles spécifiques pour la page 404

### Design implémenté:
- **Illustration SVG inline**: 3 dés stylisés (lime, rose, jaune)
  - Dé lime avec "?" au lieu de points
  - Dé rose avec 4 points
  - Dé jaune avec 6 points
  - Animation flottante individuelle sur chaque dé

### Composants CSS:
- `.error-section` - Section principale pleine hauteur avec gradient soft
- `.error-content` - Container centré (max-width: 600px)
- `.error-illustration` - SVG dés animés (180px mobile, 220px desktop)
- `.error-code` - "404" géant (clamp 6-10rem) avec text-shadow lime
- `.error-title` - Titre h1 bilingue
- `.error-message` - Message fun avec max-width 45ch
- `.error-actions` - Groupe de boutons (Home + Explore Games)

### Animations:
- `dice-float` - Animation flottante pour les dés (3s ease-in-out)
- Staggered delays sur les 3 dés (0s, 0.3s, 0.6s)
- `.animate-scale`, `.animate-slide` avec stagger classes

### Accessibilité:
- `aria-labelledby` sur la section
- `aria-hidden="true"` sur l'illustration SVG
- Skip link fonctionnel
- Focus visible sur les boutons

### Netlify:
- Redirection 404 déjà configurée dans `netlify.toml` (lignes 43-47)
- `meta robots="noindex, nofollow"` pour éviter indexation
