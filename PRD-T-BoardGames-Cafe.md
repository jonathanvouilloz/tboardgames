# PRD - T Board Games & Cafe Website

**Version:** 1.0  
**Date:** 21 décembre 2025  
**Type:** Multipage static website  
**Déploiement:** Netlify  

---

## 1. Vue d'ensemble

### 1.1 Contexte
T Board Games & Cafe est un café de jeux de société situé à Tanadon, Chiang Mai, Thaïlande. Le café s'adresse principalement à une clientèle locale thaïlandaise, avec une ouverture aux expatriés et touristes. L'établissement combine café et ludothèque dans une ambiance ludique et chaleureuse.

### 1.2 Objectifs du site
1. **Visibilité locale SEO** : Être trouvé sur Google pour les mots-clés "board games", "cafe games", "board game club", "board games place" à Chiang Mai
2. **Présence digitale** : Offrir un point de référence web au-delà des réseaux sociaux
3. **Information pratique** : Horaires, localisation, événements à venir
4. **Showcase** : Présenter l'ambiance, la collection de jeux, et le café
5. **Autonomie** : Permettre au client de modifier facilement le contenu via fichier config

### 1.3 Audience cible
- **Primaire** : Locaux thaïlandais (20-35 ans), étudiants, jeunes professionnels
- **Secondaire** : Expatriés et touristes anglophones
- **Comportement** : Recherche mobile first, réseaux sociaux actifs, WhatsApp comme canal de contact privilégié

### 1.4 Données SEO (Google Keyword Planner - Chiang Mai)
```
Mot-clé              | Volume/mois | Concurrence | CPC
---------------------|-------------|-------------|--------
board games          | 100-1k      | Faible      | 0.13 CHF
cafe games           | 10-100      | Faible      | —
board games place    | 10-100      | Faible      | —
play board game      | 10-100      | Faible      | —
board game club      | 10-100      | Faible      | —
monopoly             | 100-1k      | Moyen       | —
chess online         | 100-1k      | Faible      | 0.05 CHF
```

**Focus SEO** : "board games chiang mai", "board game cafe chiang mai", "play board games thailand", "board game club tanadon"

---

## 2. Direction créative & esthétique

### 2.1 Concept visuel

**Aesthetic Direction:** **Organic Playfulness** — Un équilibre entre minimalisme moderne et ludisme chaleureux

**Tone:** Playful, approachable, joyful, welcoming — mais jamais enfantin  
**Feeling:** Comme entrer dans un espace où le jeu redevient naturel, sans artifice  

**Différenciation clé :**  
Utilisation de formes organiques (moutons, nuages, formes fluides) issues du branding physique du café, intégrées en SVG animé dans le design web pour créer une continuité entre l'espace physique et digital.

### 2.2 Palette de couleurs

**Couleurs principales** (basées sur la devanture du café)
```css
:root {
  /* Primary */
  --lime-500: #A8D973;        /* Vert kiwi du logo */
  --lime-400: #B8E38A;        /* Variation plus claire */
  --lime-600: #8FC45C;        /* Variation plus foncée */
  
  /* Secondary */
  --pink-300: #FFB3D9;        /* Rose pastel des moutons */
  --pink-200: #FFD4E8;        /* Variation plus claire */
  
  /* Neutral */
  --cream-100: #F5E6D3;       /* Fond crème chaleureux */
  --cream-200: #EDD9C0;       /* Variation */
  --white: #FFFFFF;
  --dark-900: #2D3436;        /* Texte principal */
  --dark-700: #636E72;        /* Texte secondaire */
  
  /* Accent */
  --yellow-400: #FFE66D;      /* Accents ludiques */
  --blue-300: #A8E6CF;        /* Touches fraîches */
}
```

**Gradient signatures**
```css
--gradient-hero: linear-gradient(135deg, var(--lime-400) 0%, var(--lime-600) 100%);
--gradient-soft: linear-gradient(180deg, var(--cream-100) 0%, var(--white) 100%);
--gradient-playful: linear-gradient(90deg, var(--pink-200) 0%, var(--yellow-400) 50%, var(--lime-400) 100%);
```

### 2.3 Typographie

**Heading Font:** [Fredoka](https://fonts.google.com/specimen/Fredoka) (Variable)
- Weights: 400, 500, 600, 700
- Usage: H1, H2, H3, Logo text, Buttons
- Caractère: Rounded, friendly, playful mais moderne
- Supporte: Latin, Cyrillic

**Body Font:** [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 300, 400, 500, 600
- Usage: Body text, paragraphs, navigation
- Caractère: Clean, modern, excellent lisibilité
- **Support Thai:** ✅ Excellent (crucial pour le marché local)

**Display Font (optionnel):** [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Weight: 700
- Usage: Hero titles oversize, special callouts
- Caractère: Geometric, clean, impactful

**Type Scale**
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

### 2.4 Spacing & Layout

**Spacing Scale** (basé sur 4px baseline)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Border Radius**
```css
--radius-sm: 0.5rem;   /* 8px - Buttons, cards */
--radius-md: 1rem;     /* 16px - Large cards */
--radius-lg: 1.5rem;   /* 24px - Sections */
--radius-xl: 2rem;     /* 32px - Hero elements */
--radius-full: 9999px; /* Pills, rounded buttons */
```

**Container**
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

### 2.5 Motion & Animation

**Timing Functions**
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-gentle: cubic-bezier(0.33, 1, 0.68, 1);
```

**Animation Patterns**
1. **Fade-in on scroll**: Sections apparaissent avec opacity + translateY
2. **Hover lift**: Cards se soulèvent avec shadow enhancement
3. **Staggered reveals**: Éléments de liste apparaissent en cascade (animation-delay)
4. **Playful hover**: Boutons et liens avec légère rotation ou scale
5. **Organic shapes**: SVG shapes avec subtle morphing animation (si applicable)

**Alpine.js Directives (pour animations)**
```html
<!-- Fade in on scroll -->
<div x-intersect="$el.classList.add('animate-in')"></div>

<!-- Staggered children -->
<div x-intersect="children.forEach((el, i) => setTimeout(() => el.classList.add('show'), i * 100))"></div>
```

### 2.6 Visual Details & Atmosphere

**Backgrounds**
- **Hero sections**: Gradient mesh avec formes organiques SVG en overlay (opacity 0.1-0.3)
- **Sections alternées**: Crème / Blanc pour rythme visuel
- **Subtle textures**: Noise texture légère (opacity 0.02) pour profondeur

**Shadows**
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
--shadow-hover: 0 12px 40px rgba(168, 217, 115, 0.3); /* Lime glow */
```

**Decorative Elements**
- Moutons SVG (du branding) utilisés comme decorative floaters
- Formes organiques (nuages, taches) en background subtil
- Dividers custom avec formes ondulées au lieu de lignes droites
- Icons custom en SVG (jeu de cartes, dés, meeples) pour les features

---

## 3. Architecture technique

### 3.1 Stack technologique

**Frontend**
- HTML5 sémantique
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript Vanilla ES6+
- [Alpine.js](https://alpinejs.dev/) v3 (3KB) pour réactivité
- [PhotoSwipe](https://photoswipe.com/) v5 pour lightbox gallery

**Fonts & Icons**
- Google Fonts API (Fredoka, Poppins)
- SVG icons custom (inline)

**Déploiement**
- Netlify (hosting + forms + redirects)
- Domaine custom (à définir)

**Performance Target**
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

### 3.2 Structure de fichiers

```
t-boardgames-cafe/
├── index.html              # Homepage
├── cafe.html               # Cafe page
├── games.html              # Games library
├── gallery.html            # Photo gallery
├── contact.html            # Contact & location
├── 404.html                # Error page
├── config.json             # ⭐ Fichier de configuration éditable
│
├── css/
│   ├── reset.css           # CSS reset moderne
│   ├── variables.css       # 🎨 DESIGN TOKENS - 200+ variables (voir css-variables-theme.css)
│   ├── base.css            # Styles globaux
│   ├── components.css      # Composants réutilisables
│   ├── layout.css          # Grilles et layouts
│   ├── animations.css      # Animations et transitions
│   └── utilities.css       # Classes utilitaires
│
├── js/
│   ├── config.js           # Load et parse config.json
│   ├── theme-loader.js     # 🎨 Synchronise config.json → CSS variables
│   ├── lang.js             # Gestion bilingue EN/TH + localStorage
│   ├── nav.js              # Navigation active state + mobile menu
│   ├── animations.js       # Scroll animations (Alpine.js)
│   ├── calendar.js         # Google Calendar API integration
│   └── gallery.js          # PhotoSwipe lightbox init
│
├── images/
│   ├── logo.svg            # Logo principal
│   ├── hero/               # Images hero sections
│   │   ├── homepage.jpg
│   │   ├── cafe.jpg
│   │   └── games.jpg
│   ├── cafe/               # Photos café/menu
│   ├── games/              # Couvertures de jeux
│   ├── gallery/            # Photos ambiance (auto-détectées)
│   ├── decorative/         # SVG décoratifs (moutons, formes)
│   └── favicon/            # Favicons multi-tailles
│
├── fonts/                  # Fonts en local (optionnel, backup)
│
├── _redirects              # Netlify redirects
├── netlify.toml            # Configuration Netlify
├── robots.txt              # SEO
├── sitemap.xml             # SEO
└── README.md               # Documentation pour le client
```

### 3.3 Gestion multilingue

**Stratégie**
- Toggle EN/TH en header (flag icons ou text)
- Préférence sauvegardée dans `localStorage`
- Attribut `lang` sur `<html>` mis à jour dynamiquement
- Attributs `data-lang-en` et `data-lang-th` sur éléments traduisibles

**Implémentation Alpine.js**
```javascript
Alpine.data('language', () => ({
  current: localStorage.getItem('lang') || 'en',
  
  toggle() {
    this.current = this.current === 'en' ? 'th' : 'en';
    localStorage.setItem('lang', this.current);
    document.documentElement.lang = this.current;
    this.updateTexts();
  },
  
  updateTexts() {
    document.querySelectorAll('[data-lang-en][data-lang-th]').forEach(el => {
      el.textContent = el.dataset[`lang${this.current.charAt(0).toUpperCase() + this.current.slice(1)}`];
    });
  }
}));
```

**HTML Example**
```html
<div x-data="language">
  <button @click="toggle()">
    <span x-show="current === 'en'">🇹🇭 ไทย</span>
    <span x-show="current === 'th'">🇬🇧 EN</span>
  </button>
  
  <h1 data-lang-en="Welcome" data-lang-th="ยินดีต้อนรับ"></h1>
</div>
```

---

## 5. Système de Theming

### 15.1 Vue d'ensemble

Le site utilise un **système de theming à 2 niveaux** permettant une personnalisation facile :

**Niveau 1 - Client (simple)** : `config.json` → Section `branding`
- 5 couleurs principales
- 2 polices
- Modifications sans toucher au code CSS

**Niveau 2 - Développeur (avancé)** : `css/variables.css`
- 200+ variables CSS (design tokens)
- Contrôle total du design system
- Modification centralisée en 1 fichier

### 15.2 Fichiers concernés

**`css/variables.css`** (voir fichier `css-variables-theme.css`)
- Toutes les variables CSS organisées par catégorie
- Colors, Typography, Spacing, Borders, Shadows, Gradients, Transitions, Layout, Z-index
- Source de vérité pour tout le design

**`js/theme-loader.js`**
- Charge `config.json` au démarrage
- Override les CSS variables avec valeurs du branding
- Synchronisation automatique config → CSS

**Documentation complète :** Voir `THEME-GUIDE.md`

### 15.3 Variables clés (extraits)

**Couleurs :**
```css
--lime-500: #A8D973;        /* Couleur principale */
--pink-300: #FFB3D9;        /* Couleur secondaire */
--cream-100: #F5E6D3;       /* Background */
--dark-900: #2D3436;        /* Texte principal */
--yellow-400: #FFE66D;      /* Accent */
```

**Typography :**
```css
--font-heading: 'Fredoka', sans-serif;
--font-body: 'Poppins', sans-serif;
--text-base: 1rem;          /* 16px */
--text-4xl: 2.25rem;        /* 36px titres */
```

**Spacing :**
```css
--space-4: 1rem;            /* 16px */
--space-6: 1.5rem;          /* 24px */
--space-8: 2rem;            /* 32px */
--space-16: 4rem;           /* 64px */
```

**Autres :**
```css
--radius-md: 1rem;          /* Border radius cards */
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--container-xl: 1280px;
```

### 15.4 Utilisation dans le code

**❌ Mauvais (valeurs en dur) :**
```css
.button {
  background: #A8D973;
  padding: 24px;
  border-radius: 16px;
}
```

**✅ Bon (variables CSS) :**
```css
.button {
  background: var(--lime-500);
  padding: var(--space-6);
  border-radius: var(--radius-md);
}
```

### 15.5 Modification par le client

Dans `config.json`, section `branding` :
```json
{
  "branding": {
    "colors": {
      "primary": "#A8D973",    // Change le vert partout
      "secondary": "#FFB3D9",  // Change le rose
      "accent": "#FFE66D",     // Change le jaune
      "cream": "#F5E6D3",      // Change le fond
      "dark": "#2D3436"        // Change le texte foncé
    },
    "fonts": {
      "heading": "Fredoka",    // Police des titres
      "body": "Poppins"        // Police du texte
    }
  }
}
```

Au chargement de la page, `theme-loader.js` :
1. Lit `config.json`
2. Override `--lime-500` avec `colors.primary`
3. Override `--pink-300` avec `colors.secondary`
4. Etc.

**Résultat :** Le client peut changer le thème sans toucher au CSS.

### 15.6 Ordre de priorité

```
config.json (client) > css/variables.css (dev) > Valeurs par défaut
```

Si `config.json` définit `"primary": "#FF0000"`, cette couleur rouge override la valeur `--lime-500` du CSS.

### 15.7 Intégration dans le HTML

**Dans `<head>` de toutes les pages :**
```html
<!-- CSS Variables (design system) -->
<link rel="stylesheet" href="css/variables.css">

<!-- Autres CSS files -->
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/base.css">
<!-- ... -->

<!-- Theme loader (après config.js) -->
<script src="js/config.js" defer></script>
<script src="js/theme-loader.js" defer></script>
```

**Important :** `theme-loader.js` doit être chargé APRÈS `config.js` pour avoir accès à la config.

---

## 6. Configuration (config.json)

### 12.1 Structure complète

```json
{
  "site": {
    "name": {
      "en": "T Board Games & Cafe",
      "th": "ที บอร์ดเกม แอนด์ คาเฟ่"
    },
    "tagline": {
      "en": "Enjoy Your Game",
      "th": "เพลิดเพลินกับเกมของคุณ"
    },
    "description": {
      "en": "Your favorite board game cafe in Chiang Mai. Over 100 games, great coffee, and a welcoming atmosphere for all players.",
      "th": "คาเฟ่บอร์ดเกมโปรดของคุณในเชียงใหม่ มีเกมมากกว่า 100 เกม กาแฟอร่อย และบรรยากาศที่เป็นกันเองสำหรับผู้เล่นทุกคน"
    },
    "url": "https://tboardgames.com",
    "logo": "images/logo.svg"
  },
  
  "branding": {
    "colors": {
      "primary": "#A8D973",
      "secondary": "#FFB3D9",
      "accent": "#FFE66D",
      "cream": "#F5E6D3",
      "dark": "#2D3436"
    },
    "fonts": {
      "heading": "Fredoka",
      "body": "Poppins"
    }
  },
  
  "navigation": {
    "items": [
      {
        "label": { "en": "Home", "th": "หน้าแรก" },
        "href": "index.html"
      },
      {
        "label": { "en": "Cafe", "th": "คาเฟ่" },
        "href": "cafe.html"
      },
      {
        "label": { "en": "Games", "th": "เกม" },
        "href": "games.html"
      },
      {
        "label": { "en": "Gallery", "th": "แกลเลอรี" },
        "href": "gallery.html"
      },
      {
        "label": { "en": "Contact", "th": "ติดต่อ" },
        "href": "contact.html"
      }
    ]
  },
  
  "homepage": {
    "hero": {
      "image": "images/hero/homepage.jpg",
      "title": {
        "en": "Your Board Game Haven in Chiang Mai",
        "th": "สวรรค์บอร์ดเกมของคุณในเชียงใหม่"
      },
      "subtitle": {
        "en": "100+ games • Cozy atmosphere • Open daily 1PM-12AM",
        "th": "เกมมากกว่า 100 เกม • บรรยากาศสบาย • เปิดทุกวัน 13:00-00:00"
      },
      "cta": {
        "text": { "en": "Explore Games", "th": "สำรวจเกม" },
        "link": "games.html"
      }
    },
    "about": {
      "title": {
        "en": "About Us",
        "th": "เกี่ยวกับเรา"
      },
      "text": {
        "en": "T Board Games & Cafe is Chiang Mai's premier destination for board game enthusiasts. Whether you're a seasoned strategist or just discovering the joy of tabletop gaming, we offer a welcoming space with an extensive library, delicious beverages, and a vibrant community.",
        "th": "T Board Games & Cafe เป็นจุดหมายปลายทางชั้นนำของเชียงใหม่สำหรับผู้ชื่นชอบบอร์ดเกม ไม่ว่าคุณจะเป็นนักกลยุทธ์ที่มากประสบการณ์หรือเพิ่งค้นพบความสนุกของการเล่นเกมบนโต๊ะ เรามีพื้นที่ต้อนรับพร้อมห้องสมุดที่กว้างขวาง เครื่องดื่มอร่อย และชุมชนที่มีชีวิตชีวา"
      }
    },
    "features": [
      {
        "icon": "dice",
        "title": { "en": "100+ Games", "th": "เกมมากกว่า 100 เกม" },
        "description": {
          "en": "From classic favorites to modern hits",
          "th": "ตั้งแต่เกมคลาสสิกไปจนถึงเกมยอดนิยมสมัยใหม่"
        }
      },
      {
        "icon": "coffee",
        "title": { "en": "Great Coffee & Snacks", "th": "กาแฟและของว่างอร่อย" },
        "description": {
          "en": "Fuel your game nights with quality drinks",
          "th": "เติมพลังให้คืนเกมของคุณด้วยเครื่องดื่มคุณภาพ"
        }
      },
      {
        "icon": "users",
        "title": { "en": "Welcoming Community", "th": "ชุมชนที่เป็นกันเอง" },
        "description": {
          "en": "Meet fellow players and make new friends",
          "th": "พบปะผู้เล่นคนอื่นๆ และสร้างเพื่อนใหม่"
        }
      },
      {
        "icon": "calendar",
        "title": { "en": "Regular Events", "th": "กิจกรรมประจำ" },
        "description": {
          "en": "Tournaments, game nights, and special sessions",
          "th": "ทัวร์นาเมนต์ คืนเกม และเซสชั่นพิเศษ"
        }
      }
    ],
    "socialFeed": {
      "instagram": "@tboardgamescafe",
      "tiktok": "@tboardgamescafe"
    }
  },
  
  "cafe": {
    "hero": {
      "image": "images/hero/cafe.jpg",
      "title": {
        "en": "Coffee, Snacks & Good Times",
        "th": "กาแฟ ของว่าง และเวลาดีๆ"
      }
    },
    "description": {
      "en": "Our cafe offers a carefully curated selection of beverages and snacks to keep you energized during your gaming sessions. From specialty coffee to refreshing drinks and tasty treats, we've got everything you need for the perfect game day.",
      "th": "คาเฟ่ของเรานำเสนอเครื่องดื่มและของว่างที่คัดสรรมาอย่างดีเพื่อให้คุณมีพลังงานระหว่างการเล่นเกม ตั้งแต่กาแฟพิเศษไปจนถึงเครื่องดื่มสดชื่นและของว่างอร่อย เรามีทุกสิ่งที่คุณต้องการสำหรับวันเล่นเกมที่สุดยอด"
    },
    "menu": [
      {
        "category": { "en": "Hot Drinks", "th": "เครื่องดื่มร้อน" },
        "items": [
          {
            "name": { "en": "Espresso", "th": "เอสเพรสโซ" },
            "price": "50"
          },
          {
            "name": { "en": "Americano", "th": "อเมริกาโน" },
            "price": "60"
          },
          {
            "name": { "en": "Cappuccino", "th": "คาปูชิโน่" },
            "price": "70"
          },
          {
            "name": { "en": "Latte", "th": "ลาเต้" },
            "price": "70"
          },
          {
            "name": { "en": "Mocha", "th": "มอคค่า" },
            "price": "80"
          },
          {
            "name": { "en": "Thai Tea", "th": "ชาไทย" },
            "price": "60"
          }
        ]
      },
      {
        "category": { "en": "Cold Drinks", "th": "เครื่องดื่มเย็น" },
        "items": [
          {
            "name": { "en": "Iced Americano", "th": "อเมริกาโนเย็น" },
            "price": "65"
          },
          {
            "name": { "en": "Iced Latte", "th": "ลาเต้เย็น" },
            "price": "75"
          },
          {
            "name": { "en": "Iced Mocha", "th": "มอคค่าเย็น" },
            "price": "85"
          },
          {
            "name": { "en": "Smoothie", "th": "สมูทตี้" },
            "price": "90"
          },
          {
            "name": { "en": "Fresh Juice", "th": "น้ำผลไม้สด" },
            "price": "70"
          }
        ]
      },
      {
        "category": { "en": "Snacks", "th": "ของว่าง" },
        "items": [
          {
            "name": { "en": "Cookies", "th": "คุกกี้" },
            "price": "40"
          },
          {
            "name": { "en": "Brownies", "th": "บราวนี่" },
            "price": "50"
          },
          {
            "name": { "en": "Sandwich", "th": "แซนด์วิช" },
            "price": "80"
          },
          {
            "name": { "en": "Chips", "th": "มันฝรั่งทอด" },
            "price": "45"
          }
        ]
      }
    ],
    "hours": {
      "daily": {
        "en": "Open Daily: 1:00 PM - 12:00 AM",
        "th": "เปิดทุกวัน: 13:00 - 00:00"
      }
    },
    "pricing": {
      "title": {
        "en": "Game Library Access",
        "th": "การเข้าถึงห้องสมุดเกม"
      },
      "description": {
        "en": "Free access to our entire game library with any purchase from our cafe menu.",
        "th": "เข้าถึงห้องสมุดเกมทั้งหมดของเราได้ฟรีเมื่อซื้อสินค้าใดๆ จากเมนูคาเฟ่"
      }
    }
  },
  
  "games": {
    "hero": {
      "image": "images/hero/games.jpg",
      "title": {
        "en": "100+ Games to Play",
        "th": "เกมมากกว่า 100 เกมให้เล่น"
      },
      "subtitle": {
        "en": "From strategy classics to party favorites",
        "th": "ตั้งแต่เกมกลยุทธ์คลาสสิกไปจนถึงเกมปาร์ตี้โปรด"
      }
    },
    "intro": {
      "en": "Explore our extensive collection of board games, carefully selected to offer something for everyone. Whether you're into deep strategy, cooperative adventures, or quick party games, we've got you covered.",
      "th": "สำรวจคอลเลกชั่นบอร์ดเกมที่กว้างขวางของเรา คัดสรรมาอย่างดีเพื่อเสนอสิ่งที่เหมาะกับทุกคน ไม่ว่าคุณจะชอบเกมกลยุทธ์ลึกซึ้ง เกมผจญภัยร่วมมือ หรือเกมปาร์ตี้แบบรวดเร็ว เรามีครบทุกอย่าง"
    },
    "collection": [
      {
        "name": "Catan",
        "image": "images/games/catan.jpg",
        "players": "3-4",
        "duration": "60-90 min",
        "difficulty": {
          "en": "Medium",
          "th": "ปานกลาง"
        },
        "description": {
          "en": "Classic resource management and trading game",
          "th": "เกมการจัดการทรัพยากรและการซื้อขายคลาสสิก"
        }
      },
      {
        "name": "Ticket to Ride",
        "image": "images/games/ticket-to-ride.jpg",
        "players": "2-5",
        "duration": "30-60 min",
        "difficulty": {
          "en": "Easy",
          "th": "ง่าย"
        },
        "description": {
          "en": "Build railway routes across the country",
          "th": "สร้างเส้นทางรถไฟทั่วประเทศ"
        }
      },
      {
        "name": "Codenames",
        "image": "images/games/codenames.jpg",
        "players": "4-8",
        "duration": "15-30 min",
        "difficulty": {
          "en": "Easy",
          "th": "ง่าย"
        },
        "description": {
          "en": "Word-based party game of deduction",
          "th": "เกมปาร์ตี้แบบใช้คำศัพท์และการสืบสวน"
        }
      },
      {
        "name": "Azul",
        "image": "images/games/azul.jpg",
        "players": "2-4",
        "duration": "30-45 min",
        "difficulty": {
          "en": "Medium",
          "th": "ปานกลาง"
        },
        "description": {
          "en": "Beautiful tile-laying puzzle game",
          "th": "เกมปริศนาวางกระเบื้องที่สวยงาม"
        }
      },
      {
        "name": "Splendor",
        "image": "images/games/splendor.jpg",
        "players": "2-4",
        "duration": "30 min",
        "difficulty": {
          "en": "Easy",
          "th": "ง่าย"
        },
        "description": {
          "en": "Gem trading and card development",
          "th": "การซื้อขายอัญมณีและการพัฒนาการ์ด"
        }
      },
      {
        "name": "7 Wonders",
        "image": "images/games/7-wonders.jpg",
        "players": "3-7",
        "duration": "30 min",
        "difficulty": {
          "en": "Medium",
          "th": "ปานกลาง"
        },
        "description": {
          "en": "Build the greatest civilization",
          "th": "สร้างอารยธรรมที่ยิ่งใหญ่ที่สุด"
        }
      }
    ],
    "callout": {
      "text": {
        "en": "Don't see your favorite game? We're always expanding our collection. Let us know what you'd like to play!",
        "th": "ไม่เห็นเกมโปรดของคุณ? เรากำลังขยายคอลเลกชั่นของเราอยู่เสมอ บอกเราหน่อยว่าคุณอยากเล่นเกมอะไร!"
      }
    }
  },
  
  "events": {
    "source": "manual",
    "googleCalendarId": "",
    "title": {
      "en": "Upcoming Events",
      "th": "กิจกรรมที่กำลังจะมาถึง"
    },
    "items": [
      {
        "title": {
          "en": "Friday Game Night",
          "th": "คืนเกมวันศุกร์"
        },
        "date": "2025-12-26",
        "time": "19:00",
        "description": {
          "en": "Join us for a casual game night every Friday. Bring your friends or make new ones!",
          "th": "มาร่วมกับเราในคืนเกมแบบสบายๆ ทุกวันศุกร์ พาเพื่อนมาหรือสร้างเพื่อนใหม่!"
        }
      },
      {
        "title": {
          "en": "Catan Tournament",
          "th": "ทัวร์นาเมนต์ Catan"
        },
        "date": "2026-01-05",
        "time": "14:00",
        "description": {
          "en": "Monthly Catan tournament. Sign up at the cafe. Prize for the winner!",
          "th": "ทัวร์นาเมนต์ Catan รายเดือน ลงทะเบียนที่คาเฟ่ มีรางวัลสำหรับผู้ชนะ!"
        }
      },
      {
        "title": {
          "en": "New Year Game Marathon",
          "th": "มาราธอนเกมปีใหม่"
        },
        "date": "2026-01-01",
        "time": "13:00",
        "description": {
          "en": "Ring in the new year with 12 hours of non-stop gaming! Special menu and prizes.",
          "th": "เฉลิมฉลองปีใหม่ด้วยการเล่นเกม 12 ชั่วโมงไม่หยุด! เมนูพิเศษและของรางวัล"
        }
      }
    ]
  },
  
  "contact": {
    "address": {
      "street": {
        "en": "Tanadon Road",
        "th": "ถนนตนาดล"
      },
      "city": {
        "en": "Chiang Mai",
        "th": "เชียงใหม่"
      },
      "country": {
        "en": "Thailand",
        "th": "ประเทศไทย"
      },
      "full": {
        "en": "Tanadon Road, Chiang Mai, Thailand",
        "th": "ถนนตนาดล เชียงใหม่ ประเทศไทย"
      }
    },
    "phone": "+66 XX XXX XXXX",
    "whatsapp": "+66XXXXXXXXX",
    "email": "hello@tboardgames.com",
    "hours": {
      "daily": {
        "en": "Open Daily: 1:00 PM - 12:00 AM",
        "th": "เปิดทุกวัน: 13:00 - 00:00"
      }
    },
    "googleMapsEmbed": "https://www.google.com/maps/embed?pb=...",
    "googleMapsLink": "https://maps.app.goo.gl/...",
    "social": {
      "instagram": "https://instagram.com/tboardgamescafe",
      "tiktok": "https://tiktok.com/@tboardgamescafe",
      "facebook": "https://facebook.com/tboardgamescafe"
    }
  },
  
  "footer": {
    "copyright": {
      "en": "© 2025 T Board Games & Cafe. All rights reserved.",
      "th": "© 2025 T Board Games & Cafe สงวนลิขสิทธิ์"
    },
    "madeWith": {
      "en": "Made with ♥ in Chiang Mai",
      "th": "สร้างด้วย ♥ ในเชียงใหม่"
    }
  }
}
```

---

## 7. Pages - Spécifications détaillées

### 15.1 Homepage (`index.html`)

**Sections:**

1. **Navigation** (global, toutes pages)
   - Logo (SVG, cliquable → home)
   - Menu items (Home, Cafe, Games, Gallery, Contact)
   - Language toggle (EN/TH)
   - Mobile hamburger menu

2. **Hero Section**
   - Fullscreen background image (config: `homepage.hero.image`)
   - Overlay gradient (semi-transparent lime)
   - Centered content:
     - Title (H1) : `homepage.hero.title`
     - Subtitle : `homepage.hero.subtitle`
     - CTA button : `homepage.hero.cta`
   - Decorative SVG shapes (moutons) floating
   - Scroll indicator (animated chevron down)

3. **About Section**
   - Container centered
   - Title (H2) : `homepage.about.title`
   - Text paragraph : `homepage.about.text`
   - Background: cream

4. **Features Grid**
   - 4 cards en grid (2x2 mobile, 4x1 desktop)
   - Chaque card :
     - Icon SVG custom
     - Title (H3)
     - Description
   - Hover effect: lift + shadow
   - Staggered fade-in on scroll

5. **Upcoming Events** (max 3-5 events)
   - Title (H2) : `events.title`
   - Event cards en timeline/list :
     - Date badge (jour + mois)
     - Event title
     - Time
     - Short description
   - CTA: "See all events" (si > 5 events, sinon hide)
   - Source: Manual JSON ou Google Calendar API

6. **Instagram/TikTok Feed** (optionnel, embed)
   - Section title "Follow Our Adventures"
   - Embed widget Instagram OU TikTok
   - OU juste liens sociaux avec preview images

7. **CTA Section**
   - Background: gradient playful
   - Large heading "Ready to Play?"
   - Buttons: "Explore Games" + "Visit Us"

8. **Footer** (global, toutes pages)
   - Logo + tagline
   - Quick links (navigation)
   - Contact info
   - Social icons
   - Copyright + "Made with ♥ in Chiang Mai"

**SEO Meta Tags:**
```html
<title>T Board Games & Cafe - Board Game Cafe in Chiang Mai | 100+ Games</title>
<meta name="description" content="Your favorite board game cafe in Chiang Mai. 100+ games, great coffee, welcoming atmosphere. Open daily 1PM-12AM. Visit us at Tanadon Road.">
<meta name="keywords" content="board games chiang mai, board game cafe, cafe games, play board games, board game club, chiang mai cafe">
```

---

### 15.2 Cafe Page (`cafe.html`)

**Sections:**

1. **Navigation** (global)

2. **Hero Section**
   - Background image: `cafe.hero.image`
   - Title: `cafe.hero.title`

3. **Intro Text**
   - Description: `cafe.description`

4. **Menu Section**
   - Tabs ou sections par catégorie
   - Display: Grid ou columns
   - Format:
     ```
     [Item Name] .................... [Price] ฿
     ```
   - Categories: Hot Drinks, Cold Drinks, Snacks (from config)

5. **Hours & Pricing**
   - Card avec icône horloge
   - Hours: `cafe.hours.daily`
   - Game library pricing: `cafe.pricing`

6. **Ambiance Photos** (mini-gallery)
   - 3-4 photos du café
   - Lightbox on click (PhotoSwipe)

7. **CTA**
   - "Visit Us Today" button → contact page

8. **Footer** (global)

**SEO Meta Tags:**
```html
<title>Cafe Menu - T Board Games & Cafe Chiang Mai</title>
<meta name="description" content="Enjoy great coffee, drinks, and snacks at T Board Games Cafe. Free access to 100+ games with any purchase. Open daily 1PM-12AM.">
```

---

### 15.3 Games Page (`games.html`)

**Sections:**

1. **Navigation** (global)

2. **Hero Section**
   - Background image: `games.hero.image`
   - Title: `games.hero.title`
   - Subtitle: `games.hero.subtitle`

3. **Intro Text**
   - Description: `games.intro`

4. **Games Grid**
   - Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
   - Chaque game card:
     - Image (couverture du jeu)
     - Name
     - Players (icon + text)
     - Duration (icon + text)
     - Difficulty badge (colored)
     - Description (on hover ou toggle)
   - Hover effect: lift + border glow
   - Optionnel: Simple filter par difficulty ou players

5. **Callout Box**
   - Text: `games.callout.text`
   - Style: Fun background color

6. **CTA**
   - "Come Play With Us" → contact page

7. **Footer** (global)

**SEO Meta Tags:**
```html
<title>Board Games Library - 100+ Games | T Board Games Cafe Chiang Mai</title>
<meta name="description" content="Explore our collection of 100+ board games in Chiang Mai. Strategy games, party games, classics, and modern hits. Something for everyone!">
```

---

### 15.4 Gallery Page (`gallery.html`)

**Sections:**

1. **Navigation** (global)

2. **Hero Section** (optionnel, peut être juste un title)
   - Title: "Gallery" / "แกลเลอรี"
   - Subtitle: "Moments from our game nights"

3. **Photo Grid** (Masonry layout)
   - Auto-detect images from `images/gallery/` folder
   - Responsive masonry (2 cols mobile, 3 cols tablet, 4 cols desktop)
   - Lightbox on click (PhotoSwipe)
   - Categories (optionnel):
     - All
     - Events
     - Games
     - Ambiance

4. **Footer** (global)

**SEO Meta Tags:**
```html
<title>Gallery - T Board Games & Cafe Chiang Mai</title>
<meta name="description" content="Photos from our board game events, cozy cafe atmosphere, and happy players at T Board Games Cafe in Chiang Mai.">
```

---

### 15.5 Contact Page (`contact.html`)

**Sections:**

1. **Navigation** (global)

2. **Hero Section** (optionnel)
   - Title: "Visit Us" / "มาเยือนเรา"

3. **2-Column Layout**
   
   **Left Column: Contact Info**
   - Address (with map pin icon)
   - Phone (with phone icon, tel: link)
   - WhatsApp button (prominent, green, click-to-chat link)
   - Email (with email icon, mailto: link)
   - Hours (with clock icon)
   
   **Right Column: Map**
   - Google Maps embed (iframe from config)
   - "Open in Google Maps" link below

4. **Social Links**
   - Large icon buttons for Instagram, TikTok, Facebook
   - "Follow us for updates!"

5. **Contact Form** (optionnel, Netlify Forms)
   - Fields: Name, Email, Message
   - Submit button
   - Success message handler
   - Form action: Netlify magic

   ```html
   <form name="contact" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="contact">
     <!-- fields -->
   </form>
   ```

6. **Footer** (global)

**SEO Meta Tags:**
```html
<title>Contact & Location - T Board Games & Cafe Chiang Mai</title>
<meta name="description" content="Visit T Board Games Cafe at Tanadon Road, Chiang Mai. Open daily 1PM-12AM. WhatsApp, call, or drop by anytime!">
```

---

### 15.6 404 Page (`404.html`)

**Sections:**

1. **Navigation** (global)

2. **Error Content** (centered)
   - Large 404 illustration (SVG mouton perdu)
   - Heading: "Oops! Game Not Found" / "ไม่พบหน้านี้"
   - Message: "Looks like this page rolled a critical miss..."
   - Button: "Back to Home"

3. **Footer** (global)

---

## 8. Logo SVG - Spécifications précises

### 12.1 Description visuelle (basée sur photo devanture)

**Éléments principaux:**
1. **Cercle extérieur**
   - Diamètre: 200px (pour version principale)
   - Stroke: 8px, couleur `--lime-500` (#A8D973)
   - Fill: transparent ou `--white`

2. **Cercle intérieur** (bordure double)
   - Diamètre: 190px
   - Stroke: 2px, couleur `--lime-600` (#8FC45C)
   - Gap de 4px avec cercle extérieur

3. **Trèfle central** (stylisé géométrique)
   - 4 "feuilles" en forme de losange/diamant
   - Disposition en croix/rotation 90°
   - Couleur: `--lime-500` (#A8D973)
   - Centre: petit cercle `--lime-600`
   - Style: Clean, géométrique, symétrique

4. **Texte circulaire** (le long du cercle)
   - TOP: "T BOARD GAME & CAFE" (en arc)
   - Font: Fredoka, weight 600
   - Taille: 16px
   - Couleur: `--dark-900` (#2D3436)
   - Path suivant la courbe du cercle

5. **Variations du logo:**
   - **Full version**: Avec texte circulaire (pour header, hero)
   - **Icon version**: Juste cercle + trèfle (pour favicon, mobile)
   - **Horizontal version**: Logo + "T Board Games & Cafe" en ligne (optionnel)

### 12.2 Code SVG Template

```svg
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Cercle extérieur -->
  <circle cx="100" cy="100" r="96" 
          fill="transparent" 
          stroke="#A8D973" 
          stroke-width="8"/>
  
  <!-- Cercle intérieur -->
  <circle cx="100" cy="100" r="91" 
          fill="transparent" 
          stroke="#8FC45C" 
          stroke-width="2"/>
  
  <!-- Trèfle (4 feuilles en losange) -->
  <g id="clover" fill="#A8D973">
    <!-- Feuille TOP -->
    <path d="M 100 50 L 110 70 L 100 90 L 90 70 Z"/>
    <!-- Feuille RIGHT -->
    <path d="M 150 100 L 130 110 L 110 100 L 130 90 Z"/>
    <!-- Feuille BOTTOM -->
    <path d="M 100 150 L 110 130 L 100 110 L 90 130 Z"/>
    <!-- Feuille LEFT -->
    <path d="M 50 100 L 70 110 L 90 100 L 70 90 Z"/>
    <!-- Centre -->
    <circle cx="100" cy="100" r="8" fill="#8FC45C"/>
  </g>
  
  <!-- Texte circulaire (path + textPath) -->
  <defs>
    <path id="circlePath" 
          d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"/>
  </defs>
  <text font-family="Fredoka" font-size="16" font-weight="600" fill="#2D3436">
    <textPath href="#circlePath" startOffset="50%" text-anchor="middle">
      T BOARD GAME & CAFE
    </textPath>
  </text>
  
  <!-- Tagline en bas (optionnel) -->
  <text x="100" y="185" 
        font-family="Fredoka" font-size="10" 
        text-anchor="middle" fill="#636E72">
    ENJOY YOUR GAME
  </text>
</svg>
```

**Notes:**
- Les valeurs de path pour le trèfle sont approximatives, à ajuster pour une forme parfaite
- Le `startOffset` du textPath peut être ajusté pour positionner le texte
- Ajouter un `id="logo"` sur le SVG pour réutilisation

---

## 9. Composants réutilisables

### 15.1 Card Component

**Usage:** Games, Events, Features

```css
.card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease-smooth);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-sm);
}

.card__title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  color: var(--dark-900);
  margin-top: var(--space-4);
}

.card__description {
  font-size: var(--text-sm);
  color: var(--dark-700);
  margin-top: var(--space-2);
}
```

### 15.2 Button Component

**Variations:** Primary, Secondary, Ghost

```css
.btn {
  font-family: var(--font-heading);
  font-weight: 600;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: all 0.2s var(--ease-smooth);
  text-decoration: none;
  display: inline-block;
}

.btn--primary {
  background: var(--lime-500);
  color: var(--white);
}

.btn--primary:hover {
  background: var(--lime-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn--secondary {
  background: var(--pink-300);
  color: var(--dark-900);
}

.btn--ghost {
  background: transparent;
  border: 2px solid var(--lime-500);
  color: var(--lime-600);
}
```

### 15.3 Section Container

```css
.section {
  padding: var(--space-16) var(--space-4);
  max-width: var(--container-xl);
  margin: 0 auto;
}

.section--cream {
  background: var(--cream-100);
}

.section__title {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  text-align: center;
  margin-bottom: var(--space-8);
  color: var(--dark-900);
}

@media (min-width: 768px) {
  .section {
    padding: var(--space-24) var(--space-8);
  }
  
  .section__title {
    font-size: var(--text-5xl);
  }
}
```

### 15.4 Badge Component

**Usage:** Difficulty, Players count, etc.

```css
.badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
}

.badge--easy {
  background: var(--lime-400);
  color: var(--dark-900);
}

.badge--medium {
  background: var(--yellow-400);
  color: var(--dark-900);
}

.badge--hard {
  background: var(--pink-300);
  color: var(--dark-900);
}
```

---

## 10. JavaScript Modules

### 12.1 Config Loader (`config.js`)

```javascript
// Load config.json and expose globally
let CONFIG = {};

async function loadConfig() {
  try {
    const response = await fetch('config.json');
    CONFIG = await response.json();
    return CONFIG;
  } catch (error) {
    console.error('Failed to load config:', error);
    return null;
  }
}

// Helper to get translated value
function t(path, lang = 'en') {
  const keys = path.split('.');
  let value = CONFIG;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return typeof value === 'object' && value !== null ? value[lang] : value;
}

export { loadConfig, CONFIG, t };
```

### 12.2 Language Manager (`lang.js`)

```javascript
import Alpine from 'alpinejs';

Alpine.data('language', () => ({
  current: localStorage.getItem('lang') || 'en',
  
  init() {
    this.applyLanguage();
  },
  
  toggle() {
    this.current = this.current === 'en' ? 'th' : 'en';
    localStorage.setItem('lang', this.current);
    this.applyLanguage();
  },
  
  applyLanguage() {
    document.documentElement.lang = this.current;
    
    // Update all elements with data-lang-* attributes
    document.querySelectorAll('[data-lang-en][data-lang-th]').forEach(el => {
      const key = `lang${this.current.charAt(0).toUpperCase() + this.current.slice(1)}`;
      el.textContent = el.dataset[key];
    });
  }
}));
```

### 12.3 Navigation Active State (`nav.js`)

```javascript
// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('nav__link--active');
    }
  });
});

// Mobile menu toggle
Alpine.data('mobileMenu', () => ({
  isOpen: false,
  
  toggle() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }
}));
```

### 12.4 Scroll Animations (`animations.js`)

```javascript
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

Alpine.plugin(intersect);

// Fade in on scroll
Alpine.directive('fade-in', (el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Usage in HTML:
// <div x-intersect="$el.style.opacity = '1'; $el.style.transform = 'translateY(0)'" x-fade-in></div>

// Staggered children
Alpine.directive('stagger', (el, { expression }, { evaluate }) => {
  const delay = evaluate(expression) || 100;
  const children = Array.from(el.children);
  
  children.forEach((child, i) => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(20px)';
    child.style.transition = `opacity 0.5s ease ${i * delay}ms, transform 0.5s ease ${i * delay}ms`;
  });
});

// Usage: <div x-intersect="$el.querySelectorAll(':scope > *').forEach(c => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; })" x-stagger="100"></div>
```

### 12.5 Google Calendar Integration (`calendar.js`)

```javascript
const CALENDAR_API_KEY = 'YOUR_API_KEY'; // To be replaced

async function fetchEvents(calendarId, maxResults = 5) {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${CALENDAR_API_KEY}&maxResults=${maxResults}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Calendar fetch error:', error);
    return [];
  }
}

function formatEvent(event) {
  return {
    title: event.summary,
    date: new Date(event.start.dateTime || event.start.date).toLocaleDateString(),
    time: event.start.dateTime ? new Date(event.start.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'All day',
    description: event.description || ''
  };
}

export { fetchEvents, formatEvent };
```

### 12.6 Gallery Lightbox (`gallery.js`)

```javascript
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

// Initialize PhotoSwipe for gallery
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
  
  // Options
  bgOpacity: 0.95,
  padding: { top: 20, bottom: 40, left: 100, right: 100 },
  
  // UI
  closeTitle: 'Close',
  zoomTitle: 'Zoom',
  arrowPrevTitle: 'Previous',
  arrowNextTitle: 'Next',
});

lightbox.init();
```

---

## 11. SEO & Meta Tags

### 15.1 JSON-LD Schema.org (LocalBusiness)

À inclure dans `<head>` de toutes les pages principales:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "T Board Games & Cafe",
  "image": "https://tboardgames.com/images/logo.svg",
  "description": "Board game cafe in Chiang Mai with 100+ games, great coffee, and welcoming atmosphere.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tanadon Road",
    "addressLocality": "Chiang Mai",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXX",
    "longitude": "XX.XXXX"
  },
  "url": "https://tboardgames.com",
  "telephone": "+66XXXXXXXXX",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "13:00",
    "closes": "00:00"
  },
  "priceRange": "$$",
  "servesCuisine": "Cafe",
  "sameAs": [
    "https://instagram.com/tboardgamescafe",
    "https://tiktok.com/@tboardgamescafe"
  ]
}
</script>
```

### 15.2 Base Meta Tags (toutes pages)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- Primary Meta Tags -->
<title><!-- Page specific title --></title>
<meta name="title" content="<!-- Page specific title -->">
<meta name="description" content="<!-- Page specific description -->">
<meta name="keywords" content="board games chiang mai, board game cafe, cafe games, play board games">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tboardgames.com/">
<meta property="og:title" content="<!-- Page specific title -->">
<meta property="og:description" content="<!-- Page specific description -->">
<meta property="og:image" content="https://tboardgames.com/images/og-image.jpg">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="th_TH">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://tboardgames.com/">
<meta property="twitter:title" content="<!-- Page specific title -->">
<meta property="twitter:description" content="<!-- Page specific description -->">
<meta property="twitter:image" content="https://tboardgames.com/images/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png">

<!-- Language alternates -->
<link rel="alternate" hreflang="en" href="https://tboardgames.com/">
<link rel="alternate" hreflang="th" href="https://tboardgames.com/">
<link rel="alternate" hreflang="x-default" href="https://tboardgames.com/">

<!-- Canonical -->
<link rel="canonical" href="https://tboardgames.com/<!-- page path -->">
```

### 15.3 Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://tboardgames.com/</loc>
    <lastmod>2025-12-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://tboardgames.com/"/>
    <xhtml:link rel="alternate" hreflang="th" href="https://tboardgames.com/"/>
  </url>
  <url>
    <loc>https://tboardgames.com/cafe.html</loc>
    <lastmod>2025-12-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tboardgames.com/games.html</loc>
    <lastmod>2025-12-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tboardgames.com/gallery.html</loc>
    <lastmod>2025-12-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://tboardgames.com/contact.html</loc>
    <lastmod>2025-12-21</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 15.4 Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://tboardgames.com/sitemap.xml
```

---

## 12. Netlify Configuration

### 12.1 netlify.toml

```toml
[build]
  publish = "."
  
[build.environment]
  NODE_VERSION = "18"

# Redirects
[[redirects]]
  from = "/home"
  to = "/"
  status = 301

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

# Headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

# Forms
[forms]
  [forms.settings]
    spam_filter = true
```

### 12.2 _redirects

```
# Redirect home variations
/home     /     301
/index    /     301

# Handle 404
/*        /404.html   404
```

---

## 13. Performance Optimization

### 15.1 Images

**Guidelines:**
- Hero images: Max 1920x1080px, WebP format, ~150KB
- Game covers: 400x600px, WebP, ~50KB
- Gallery photos: Max 1200x800px, WebP, ~100KB
- Logo SVG: Optimized with SVGO
- Use `loading="lazy"` on all images except hero
- Use `<picture>` with WebP + fallback JPG

**Example:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="..." loading="lazy">
</picture>
```

### 15.2 CSS

- Critical CSS inline dans `<head>`
- Non-critical CSS avec `preload` + async load
- Minify CSS en production
- Use CSS custom properties pour theming (no duplication)

### 15.3 JavaScript

- Alpine.js via CDN (bénéficie du cache)
- Defer scripts non-critiques
- Lazy load PhotoSwipe uniquement sur gallery page
- Minify JS en production

### 15.4 Fonts

- Google Fonts avec `display=swap`
- Preconnect to fonts.googleapis.com et fonts.gstatic.com
- Subset fonts si possible (Latin + Thai only)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## 14. Accessibility

**Checklist:**
- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- [ ] ARIA labels sur éléments interactifs
- [ ] Alt text sur toutes les images (descriptif, pas générique)
- [ ] Focus styles visibles (outline custom avec couleur lime)
- [ ] Keyboard navigation fonctionnelle (tab order logique)
- [ ] Skip to content link (hidden, visible on focus)
- [ ] Color contrast ratio: AA minimum (4.5:1 pour texte)
- [ ] Form labels associés aux inputs
- [ ] Lang attributes (`<html lang="en">` + toggle)
- [ ] Headings hierarchy (H1 → H2 → H3, pas de saut)

**Focus Styles:**
```css
:focus-visible {
  outline: 3px solid var(--lime-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

**Skip Link:**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--lime-500);
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

---

## 15. Testing Checklist

### 15.1 Functional Testing

- [ ] Navigation links fonctionnent sur toutes les pages
- [ ] Language toggle fonctionne et persiste (localStorage)
- [ ] Mobile menu s'ouvre/ferme correctement
- [ ] Contact form submit (si implémenté)
- [ ] WhatsApp click-to-chat link fonctionne
- [ ] Google Maps embed s'affiche correctement
- [ ] Gallery lightbox s'ouvre et permet navigation
- [ ] Events affichés (manual OU Google Calendar)
- [ ] Config.json charges et data s'affiche

### 15.2 Responsive Testing

**Breakpoints à tester:**
- Mobile: 375px (iPhone SE)
- Mobile large: 414px (iPhone Pro Max)
- Tablet: 768px (iPad)
- Desktop: 1024px
- Large desktop: 1440px

**Éléments clés:**
- [ ] Navigation passe en hamburger menu < 768px
- [ ] Grids passent en 1 colonne sur mobile
- [ ] Images responsive (pas de débordement)
- [ ] Text lisible (pas trop petit)
- [ ] Boutons tappables (min 44x44px touch target)
- [ ] Spacing adapté (moins d'espace sur mobile)

### 15.3 Browser Testing

- [ ] Chrome (desktop + mobile)
- [ ] Firefox
- [ ] Safari (desktop + iOS)
- [ ] Edge

### 15.4 Performance Testing

**Outils:**
- Google Lighthouse (dans Chrome DevTools)
- PageSpeed Insights
- GTmetrix

**Targets:**
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Best Practices: 90+
- [ ] Lighthouse SEO: 95+
- [ ] First Contentful Paint: < 1.5s
- [ ] Time to Interactive: < 3s
- [ ] Total page size: < 1MB (homepage)

### 15.5 SEO Testing

- [ ] Meta tags présents sur toutes pages
- [ ] Sitemap.xml accessible et valide
- [ ] Robots.txt accessible
- [ ] Schema.org markup valide (tester avec schema.org validator)
- [ ] Canonical URLs corrects
- [ ] Hreflang tags pour bilingue
- [ ] Open Graph tags pour social sharing
- [ ] Google Search Console setup (post-deploy)

---

## 16. Déploiement

### 16.1 Pre-deployment Checklist

- [ ] Toutes les images optimized (WebP + compression)
- [ ] CSS et JS minifiés
- [ ] Config.json rempli avec vraies données
- [ ] Remplacer tous les placeholders (phone, email, adresse)
- [ ] Google Maps embed URL actualisée
- [ ] Google Calendar API key configurée (si utilisé)
- [ ] Favicon généré (toutes tailles)
- [ ] OG image créée (1200x630px)
- [ ] Tester tous les liens (internal + external)
- [ ] Vérifier orthographe (EN + TH)

### 16.2 Netlify Deployment

**Étapes:**
1. Créer compte Netlify (ou login)
2. "New site from Git" OU "Deploy manually"
3. **Manual Deploy:**
   - Drag & drop le dossier du projet
   - Site live immédiatement avec URL Netlify (.netlify.app)
4. **Custom Domain:**
   - Acheter domaine (ex: Namecheap, GoDaddy)
   - Dans Netlify: Settings → Domain management → Add custom domain
   - Configurer DNS records (Netlify fournit les instructions)
   - SSL certificate auto-généré par Netlify (Let's Encrypt)
5. **Netlify Forms:**
   - Déjà activé automatiquement si form avec `data-netlify="true"`
   - Check Form submissions dans Netlify dashboard

### 16.3 Post-deployment

- [ ] Tester site sur le domaine custom
- [ ] Submit sitemap à Google Search Console
- [ ] Vérifier Google Analytics (si ajouté)
- [ ] Tester forms submission
- [ ] Check toutes les redirects
- [ ] Monitor performance avec Lighthouse
- [ ] Setup Netlify Analytics (optionnel, payant mais bon)

---

## 17. Documentation Client (README.md)

Créer un README.md clair pour le client:

```markdown
# T Board Games & Cafe - Website Guide

## How to Update Your Website

### Updating Content (config.json)

All the content on your website is controlled by one file: `config.json`

**What you can update:**
- Site name and tagline
- About text
- Cafe menu (items & prices)
- Games library
- Events
- Contact information
- Hours of operation

**How to update:**
1. Open `config.json` in any text editor (Notepad, VS Code, etc.)
2. Find the section you want to change
3. Edit the text between the quotes `"your text here"`
4. **IMPORTANT**: Keep the structure (commas, brackets, quotes) intact
5. Save the file
6. Re-upload to Netlify (drag & drop your entire folder)

### Adding Photos

**Gallery Photos:**
1. Resize your photos to max 1200x800px
2. Name them simply: `1.jpg`, `2.jpg`, etc.
3. Place them in `images/gallery/` folder
4. They will automatically appear on the Gallery page

**Game Covers:**
1. Find the game cover image online (400x600px recommended)
2. Save as `images/games/gamename.jpg`
3. Add game details in `config.json` under `games.collection`

**Cafe Photos:**
1. Add photos to `images/cafe/` folder
2. Update `cafe.html` if needed

### Changing Colors

In `config.json`, find the `branding.colors` section:

```json
"colors": {
  "primary": "#A8D973",    // Main green color
  "secondary": "#FFB3D9",  // Pink accent
  "accent": "#FFE66D"      // Yellow highlight
}
```

You can change these hex codes to any color you want. Use a color picker: https://htmlcolorcodes.com/

### Updating Events

**Manual Events:**
In `config.json`, find `events.items`:

```json
{
  "title": { "en": "Event Name", "th": "ชื่อกิจกรรม" },
  "date": "2025-12-26",
  "time": "19:00",
  "description": { "en": "...", "th": "..." }
}
```

Add new events by copying this structure. Maximum 5 events recommended.

**Google Calendar (Optional):**
If you prefer to manage events via Google Calendar:
1. Create a public Google Calendar
2. Get the Calendar ID
3. In `config.json`, change:
   ```json
   "source": "google-calendar",
   "googleCalendarId": "your-calendar-id@group.calendar.google.com"
   ```

### Re-deploying to Netlify

After making changes:
1. Go to https://app.netlify.com
2. Login to your account
3. Find your site
4. Click "Deploys" tab
5. Drag and drop your updated project folder
6. Wait 30 seconds
7. Your site is updated!

## Need Help?

If something breaks or you're unsure, contact [your contact info].

**Common Issues:**
- **Syntax Error**: Check that all quotes and commas are in place in config.json
- **Images not showing**: Verify file paths and names (case-sensitive!)
- **Changes not visible**: Clear your browser cache (Ctrl+Shift+R)
```

---

## 18. Checklist Finale

### Development
- [ ] Toutes les pages HTML créées (5 pages + 404)
- [ ] CSS structure complète (7 fichiers CSS)
- [ ] JavaScript modules implémentés (6 fichiers JS)
- [ ] Config.json structure complète
- [ ] Logo SVG créé
- [ ] Composants réutilisables codés
- [ ] Alpine.js intégré
- [ ] PhotoSwipe configuré
- [ ] Responsive design implémenté
- [ ] Animations au scroll
- [ ] Language toggle fonctionnel

### Content
- [ ] Toutes les traductions EN/TH
- [ ] Photos optimisées (WebP)
- [ ] Favicon généré (multi-tailles)
- [ ] OG image créée
- [ ] Menu café rempli
- [ ] Games library remplie (6+ jeux)
- [ ] Events ajoutés (3+ events)
- [ ] Contact info vérifiée

### SEO
- [ ] Meta tags sur toutes pages
- [ ] Schema.org JSON-LD
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Canonical URLs
- [ ] Hreflang tags
- [ ] Alt text sur images
- [ ] Semantic HTML

### Performance
- [ ] Images lazy load
- [ ] CSS/JS minified
- [ ] Critical CSS inline
- [ ] Fonts optimized
- [ ] Lighthouse score 90+
- [ ] < 1MB homepage size

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Focus styles
- [ ] Color contrast AA
- [ ] Skip link
- [ ] Alt texts

### Testing
- [ ] Tous liens testés
- [ ] Responsive sur 5+ devices
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Forms fonctionnent
- [ ] Lightbox fonctionne
- [ ] Language toggle testé
- [ ] Config.json loads correctement

### Deployment
- [ ] Netlify account créé
- [ ] Site déployé
- [ ] Custom domain configuré
- [ ] SSL activé
- [ ] Forms Netlify actives
- [ ] Redirects testées
- [ ] Google Search Console configuré

### Documentation
- [ ] README.md client créé
- [ ] Instructions config.json
- [ ] Guide photo upload
- [ ] Contact support

---

## 19. Nice-to-Have (Phase 2)

Features optionnelles pour futures itérations:

1. **Newsletter Signup**
   - Mailchimp/ConvertKit integration
   - Popup ou footer form

2. **Reservations System**
   - Calendly embed
   - OU simple booking form → WhatsApp

3. **Game Search & Filter**
   - Recherche par nom
   - Filtres: players, duration, difficulty
   - Favoris system (localStorage)

4. **Member Profiles** (si pertinent)
   - Login system
   - Game tracking
   - Loyalty program

5. **Blog/News Section**
   - Game reviews
   - Event recaps
   - Headless CMS (Sanity, Contentful)

6. **Multi-language Enhancement**
   - Ajouter d'autres langues (Chinois, Japonais)
   - Auto-detect browser language

7. **Analytics Dashboard**
   - Google Analytics 4
   - Visitor stats
   - Popular games tracking

8. **Progressive Web App (PWA)**
   - Offline mode
   - Add to homescreen
   - Push notifications pour events

---

**Fin du PRD**

---

**Notes de version:**
- Version 1.0 - 21 décembre 2025
- PRD créé pour Claude Code implementation
- Toutes specs basées sur analyse photo devanture + données SEO
- Design direction: Organic Playfulness, minimaliste mais joyeux
- Stack: HTML/CSS/JS + Alpine.js + PhotoSwipe + Netlify
