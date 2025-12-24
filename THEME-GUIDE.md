# 🎨 Guide du Système de Thème

## Vue d'ensemble

Le site a **2 niveaux de personnalisation** :

1. **Niveau Développeur** → `css/variables.css` (complet, 200+ variables)
2. **Niveau Client** → `config.json` → section `branding` (simple, 5 valeurs principales)

---

## Pour le CLIENT (simple)

### Changer les couleurs principales

Dans `config.json`, section `branding.colors` :

```json
{
  "branding": {
    "colors": {
      "primary": "#A8D973",    // 👈 Changer cette couleur = change le vert partout
      "secondary": "#FFB3D9",  // 👈 Change le rose
      "accent": "#FFE66D",     // 👈 Change le jaune
      "cream": "#F5E6D3",      // 👈 Change le fond crème
      "dark": "#2D3436"        // 👈 Change le texte foncé
    },
    "fonts": {
      "heading": "Fredoka",    // 👈 Change la police des titres
      "body": "Poppins"        // 👈 Change la police du texte
    }
  }
}
```

**C'est tout !** Ces 5 couleurs + 2 fonts contrôlent 80% du design.

### Comment trouver un code couleur ?

1. Aller sur https://htmlcolorcodes.com/
2. Choisir une couleur avec le color picker
3. Copier le code hex (ex: `#FF5733`)
4. Coller dans `config.json`

---

## Pour le DÉVELOPPEUR (avancé)

### Fichier principal : `css/variables.css`

Contient **TOUTES** les variables du design system :

- ✅ **Couleurs** : 20+ variations (lime-400, lime-500, pink-300, etc.)
- ✅ **Typographie** : Tailles, poids, line-heights
- ✅ **Spacing** : 20+ espacements (space-1 à space-48)
- ✅ **Shadows** : 10+ ombres (shadow-sm à shadow-2xl)
- ✅ **Border radius** : 8+ valeurs (radius-sm à radius-full)
- ✅ **Gradients** : 5 gradients prédéfinis
- ✅ **Transitions** : Durées et easings
- ✅ **Z-index** : Système de layering

### Comment utiliser les variables

```css
/* ❌ MAUVAIS - Valeurs en dur */
.button {
  background: #A8D973;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

/* ✅ BON - Utiliser les variables */
.button {
  background: var(--lime-500);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

**Avantages :**
- Changer `--lime-500` dans `variables.css` = change tous les boutons
- Cohérence garantie sur tout le site
- Maintenance facile

### Architecture CSS

```
css/
├── variables.css     👈 MODIFIER ICI pour changer le thème
├── reset.css         (reset CSS moderne)
├── base.css          (styles HTML de base)
├── components.css    (boutons, cards, etc.)
├── layout.css        (grilles, containers)
├── animations.css    (transitions, keyframes)
└── utilities.css     (classes utilitaires)
```

---

## Synchronisation config.json ↔ CSS

### Comment ça marche ?

1. **Par défaut** : Le site utilise `css/variables.css`
2. **Au chargement** : Le script `js/theme-loader.js` :
   - Lit `config.json`
   - Override les 5 couleurs principales
   - Override les 2 fonts
3. **Résultat** : Le client peut changer les couleurs dans `config.json` sans toucher au CSS

### Ordre de priorité

```
config.json (client) > CSS variables (dev) > Valeurs par défaut
```

---

## Exemples de modifications

### Exemple 1 : Changer la couleur principale en bleu

**config.json :**
```json
{
  "branding": {
    "colors": {
      "primary": "#4A90E2"  // Bleu au lieu de vert
    }
  }
}
```

**Résultat :**
- Tous les boutons → bleus
- Logo → bleu
- Liens → bleus
- Accents → bleus

### Exemple 2 : Thème sombre

**config.json :**
```json
{
  "branding": {
    "colors": {
      "primary": "#A8D973",
      "cream": "#1A1D1F",     // Fond sombre
      "dark": "#FFFFFF"        // Texte blanc
    }
  }
}
```

### Exemple 3 : Changer les fonts

**config.json :**
```json
{
  "branding": {
    "fonts": {
      "heading": "Montserrat",  // Au lieu de Fredoka
      "body": "Open Sans"        // Au lieu de Poppins
    }
  }
}
```

**Important :** Les fonts doivent être chargées via Google Fonts dans `<head>` :
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

---

## Variables CSS les plus utilisées

### Couleurs (top 10)
```css
var(--lime-500)      /* Couleur principale */
var(--pink-300)      /* Couleur secondaire */
var(--white)         /* Blanc */
var(--dark-900)      /* Texte principal */
var(--cream-100)     /* Background */
var(--yellow-400)    /* Accents */
var(--dark-700)      /* Texte secondaire */
var(--success)       /* Messages de succès */
var(--error)         /* Messages d'erreur */
var(--warning)       /* Alertes */
```

### Spacing (top 10)
```css
var(--space-2)       /* 8px - Petits gaps */
var(--space-4)       /* 16px - Standard spacing */
var(--space-6)       /* 24px - Padding cards */
var(--space-8)       /* 32px - Sections spacing */
var(--space-12)      /* 48px - Large gaps */
var(--space-16)      /* 64px - Section padding */
var(--space-24)      /* 96px - Hero padding */
```

### Typography (top 5)
```css
var(--font-heading)  /* Titres */
var(--font-body)     /* Texte */
var(--text-base)     /* 16px - Taille standard */
var(--text-2xl)      /* 24px - Sous-titres */
var(--text-4xl)      /* 36px - Titres */
```

### Autres (top 5)
```css
var(--radius-md)     /* Border radius cards */
var(--shadow-md)     /* Ombre cards */
var(--ease-smooth)   /* Transition douce */
var(--duration-base) /* Durée transition */
var(--container-xl)  /* Max-width container */
```

---

## Checklist avant de modifier

- [ ] Backup de `variables.css` avant modifications
- [ ] Tester les changements sur toutes les pages
- [ ] Vérifier le contraste des couleurs (accessibilité)
- [ ] Tester sur mobile + desktop
- [ ] Rebuild CSS si minifié

---

## Outils recommandés

**Couleurs :**
- https://htmlcolorcodes.com/ (color picker)
- https://coolors.co/ (générateur de palettes)
- https://webaim.org/resources/contrastchecker/ (vérifier contraste)

**Fonts :**
- https://fonts.google.com/ (Google Fonts)
- https://fontpair.co/ (suggestions de paires de fonts)

**Design Tokens :**
- https://uicolors.app/ (générer variations de couleurs)

---

## FAQ

**Q: Je change `primary` dans config.json mais rien ne change ?**
A: Vérifier que `js/theme-loader.js` est bien chargé dans le HTML et qu'il n'y a pas d'erreur console.

**Q: Je veux plus de contrôle que les 5 couleurs de base ?**
A: Modifier directement `css/variables.css` (toutes les variables sont là).

**Q: Peut-on avoir plusieurs thèmes (light/dark) ?**
A: Oui ! Créer des classes CSS avec des variables overridées :
```css
.theme-dark {
  --cream-100: #1A1D1F;
  --dark-900: #FFFFFF;
}
```

**Q: Les couleurs dans config.json sont prioritaires sur variables.css ?**
A: Oui ! `config.json` override les CSS variables au chargement de la page.

---

## Support

Pour toute question sur le theming, consulter :
- `css/variables.css` (variables complètes avec commentaires)
- `PRD-T-BoardGames-Cafe.md` section 2 (Direction créative)
