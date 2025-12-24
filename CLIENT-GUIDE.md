# T Board Games Website - Configuration Guide

This guide explains how to update the content on your website. All changes are made in a single file: `config.json`.

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Understanding the File Format](#understanding-the-file-format)
3. [Bilingual Text (English & Thai)](#bilingual-text-english--thai)
4. [Site Information](#site-information)
5. [Branding (Colors & Fonts)](#branding-colors--fonts)
6. [Navigation Menu](#navigation-menu)
7. [Homepage](#homepage)
8. [Cafe & Menu](#cafe--menu)
9. [Games](#games)
10. [Events](#events)
11. [Contact Information](#contact-information)
12. [Footer](#footer)
13. [Working with Images](#working-with-images)
14. [Common Mistakes to Avoid](#common-mistakes-to-avoid)

---

## Before You Start

### Important Safety Tips

1. **Always make a backup** - Before editing, copy `config.json` and save it as `config-backup.json`
2. **Use a code editor** - We recommend [Visual Studio Code](https://code.visualstudio.com/) (free) or any text editor that shows line numbers
3. **Test your changes** - After saving, refresh your website to see if everything works
4. **If something breaks** - Restore your backup file

---

## Understanding the File Format

The `config.json` file uses JSON format. Here are the basic rules:

### Text values use double quotes
```json
"name": "T Board Games & Cafe"
```

### Numbers don't need quotes
```json
"price": "80"
```
(We use quotes for prices to keep the format consistent)

### Multiple items are separated by commas
```json
{
  "name": "Value 1",
  "description": "Value 2",
  "price": "Value 3"
}
```

### The last item has NO comma
```json
{
  "name": "Value 1",
  "description": "Value 2",
  "price": "Value 3"    <-- No comma here!
}
```

---

## Bilingual Text (English & Thai)

Most text on the website appears in both English and Thai. These are written like this:

```json
"name": {
  "en": "T Board Games & Cafe",
  "th": "ที บอร์ดเกม แอนด์ คาเฟ่"
}
```

- `"en"` = English text
- `"th"` = Thai text

**To change text:** Edit the text inside the quotes for each language.

---

## Site Information

**Location in file:** Look for `"site": {`

| Field | What it does | Example |
|-------|--------------|---------|
| `name` | Website name shown in browser tab and header | `"T Board Games & Cafe"` |
| `tagline` | Short catchphrase | `"Enjoy Your Game"` |
| `description` | Description for search engines (Google) | `"Your favorite board game cafe..."` |
| `url` | Your website address | `"https://tboardgames.com"` |
| `logo` | Path to your logo file | `"images/logo.svg"` |

### Example

```json
"site": {
  "name": {
    "en": "T Board Games & Cafe",
    "th": "ที บอร์ดเกม แอนด์ คาเฟ่"
  },
  "tagline": {
    "en": "Enjoy Your Game",
    "th": "เพลิดเพลินกับเกมของคุณ"
  }
}
```

---

## Branding (Colors & Fonts)

**Location in file:** Look for `"branding": {`

### Colors

You can customize 5 main colors. Colors use "hex codes" (# followed by 6 characters).

| Color | What it affects | Current value |
|-------|-----------------|---------------|
| `primary` | Main brand color (buttons, highlights) | `#A8D973` (lime green) |
| `secondary` | Secondary accent (some backgrounds) | `#FFB3D9` (pink) |
| `accent` | Third accent color (badges, icons) | `#FFE66D` (yellow) |
| `cream` | Light background color | `#F5E6D3` (cream) |
| `dark` | Text color | `#2D3436` (dark gray) |

**To find color codes:** Use a website like [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/)

### Fonts

| Font | What it affects | Current value |
|------|-----------------|---------------|
| `heading` | Titles and headings | `Fredoka` |
| `body` | Regular text | `Poppins` |

**Note:** Only use Google Fonts that are already loaded on the website.

### Example

```json
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
}
```

---

## Navigation Menu

**Location in file:** Look for `"navigation": {`

The navigation menu contains links to your main pages.

### Current menu items

| Label | Links to |
|-------|----------|
| Home | index.html |
| Cafe | cafe.html |
| Games | games.html |
| Gallery | gallery.html |
| Contact | contact.html |

### Example

```json
"navigation": {
  "items": [
    {
      "label": { "en": "Home", "th": "หน้าแรก" },
      "href": "index.html"
    },
    {
      "label": { "en": "Cafe", "th": "คาเฟ่" },
      "href": "cafe.html"
    }
  ]
}
```

**To change a menu label:** Edit the `"en"` and `"th"` text inside `"label"`.

---

## Homepage

**Location in file:** Look for `"homepage": {`

### Hero Section (Main Banner)

The large banner at the top of the homepage.

| Field | What it does |
|-------|--------------|
| `hero.image` | Background image path |
| `hero.title` | Main headline |
| `hero.subtitle` | Text below the headline |
| `hero.cta.text` | Button text |
| `hero.cta.link` | Where the button goes |

### Featured Game

The game highlighted on the homepage.

| Field | What it does |
|-------|--------------|
| `featuredGame.name` | Game name |
| `featuredGame.image` | Game image path |
| `featuredGame.description` | Short description |
| `featuredGame.badge` | Badge text (e.g., "Featured") |
| `featuredGame.cta` | Button text |

### About Section

| Field | What it does |
|-------|--------------|
| `about.title` | Section title |
| `about.text` | Description paragraph |

### Features Section (4 blocks)

Each feature has:
- `icon` - Icon name (dice, coffee, users, calendar)
- `title` - Feature title
- `description` - Short description

### Social Feed

| Field | What it does |
|-------|--------------|
| `socialFeed.instagram` | Instagram handle (e.g., @tboardgamescafe) |
| `socialFeed.tiktok` | TikTok handle |

---

## Cafe & Menu

**Location in file:** Look for `"cafe": {`

### Cafe Description

| Field | What it does |
|-------|--------------|
| `hero.image` | Banner image for cafe page |
| `hero.title` | Page title |
| `description` | Main description text |

### Menu Items

The menu is organized by category. Each category has items with names and prices.

**Example menu item:**
```json
{
  "name": { "en": "Cappuccino", "th": "คาปูชิโน่" },
  "price": "70"
}
```

**To change a price:** Find the item and change the number in `"price"`.

**To change a name:** Edit the `"en"` and `"th"` text in `"name"`.

### Operating Hours

| Field | What it does |
|-------|--------------|
| `hours.daily` | Your opening hours |

### Pricing Policy

| Field | What it does |
|-------|--------------|
| `pricing.title` | Section title |
| `pricing.description` | Explanation of your pricing |

---

## Games

**Location in file:** Look for `"games": {`

### Games Page Header

| Field | What it does |
|-------|--------------|
| `hero.image` | Banner image |
| `hero.title` | Page title |
| `hero.subtitle` | Text below title |
| `intro` | Introduction paragraph |

### Game Collection

Each game in the `"collection"` array has:

| Field | What it does | Example |
|-------|--------------|---------|
| `name` | Game title | `"Catan"` |
| `image` | Image path | `"images/games/catan.jpg"` |
| `players` | Number of players | `"3-4"` |
| `duration` | Playing time | `"60-90 min"` |
| `difficulty` | Difficulty level (bilingual) | Easy, Medium |
| `description` | Game description (bilingual) | What the game is about |

### Callout Section

| Field | What it does |
|-------|--------------|
| `callout.text` | Message at bottom of games page |

---

## Events

**Location in file:** Look for `"events": {`

### Event Configuration

| Field | What it does |
|-------|--------------|
| `source` | How events are managed (keep as `"manual"`) |
| `title` | Section title |

### Event Items

Each event in the `"items"` array has:

| Field | What it does | Format |
|-------|--------------|--------|
| `title` | Event name (bilingual) | Text |
| `date` | Event date | `YYYY-MM-DD` (e.g., `"2025-12-26"`) |
| `time` | Start time | 24-hour format (e.g., `"19:00"`) |
| `description` | Event details (bilingual) | Text |

### Example Event

```json
{
  "title": { "en": "Friday Game Night", "th": "คืนเกมวันศุกร์" },
  "date": "2025-12-26",
  "time": "19:00",
  "description": {
    "en": "Join us for a casual game night every Friday.",
    "th": "มาร่วมกับเราในคืนเกมแบบสบายๆ ทุกวันศุกร์"
  }
}
```

**Important:** Dates must use the format `YYYY-MM-DD` (year-month-day).

---

## Contact Information

**Location in file:** Look for `"contact": {`

### Address

| Field | What it does |
|-------|--------------|
| `address.street` | Street name (bilingual) |
| `address.city` | City (bilingual) |
| `address.country` | Country (bilingual) |
| `address.full` | Complete address (bilingual) |

### Contact Details

| Field | What it does | Example |
|-------|--------------|---------|
| `phone` | Phone number | `"+66 XX XXX XXXX"` |
| `whatsapp` | WhatsApp number (no spaces) | `"+66XXXXXXXXX"` |
| `email` | Email address | `"hello@tboardgames.com"` |

### Operating Hours

| Field | What it does |
|-------|--------------|
| `hours.daily` | Your opening hours (bilingual) |

### Google Maps

| Field | What it does |
|-------|--------------|
| `googleMapsEmbed` | Embed code for the map on your contact page |
| `googleMapsLink` | Direct link to Google Maps |

**To get these values:**
1. Go to Google Maps and find your location
2. Click "Share" > "Embed a map" > Copy the URL from the `src` attribute
3. For the direct link, click "Share" > "Send a link" > Copy the link

### Social Media Links

| Field | What it does |
|-------|--------------|
| `social.instagram` | Full Instagram URL |
| `social.tiktok` | Full TikTok URL |
| `social.facebook` | Full Facebook URL |

---

## Footer

**Location in file:** Look for `"footer": {`

| Field | What it does |
|-------|--------------|
| `copyright` | Copyright text (bilingual) |
| `madeWith` | Tagline at bottom (bilingual) |

---

## Working with Images

### Where to put images

All images go in the `images/` folder:
- `images/hero/` - Banner images for page headers
- `images/games/` - Game photos
- `images/gallery/` - Gallery photos
- `images/logo.svg` - Your logo

### How to reference images

Use the path relative to the website root:
```json
"image": "images/games/catan.jpg"
```

### Recommended image formats

| Type | Format | Recommended size |
|------|--------|------------------|
| Photos | `.jpg` or `.webp` | 1200px wide max |
| Logo | `.svg` or `.png` | As provided |
| Icons | `.svg` | As provided |

---

## Common Mistakes to Avoid

### Missing comma
```json
// WRONG - missing comma after first line
{
  "name": "Value 1"
  "description": "Value 2"
}

// CORRECT
{
  "name": "Value 1",
  "description": "Value 2"
}
```

### Extra comma at the end
```json
// WRONG - extra comma after last item
{
  "name": "Value 1",
  "description": "Value 2",
}

// CORRECT
{
  "name": "Value 1",
  "description": "Value 2"
}
```

### Missing quotes
```json
// WRONG
{
  name: "Value"
}

// CORRECT
{
  "name": "Value"
}
```

### Using single quotes
```json
// WRONG
{
  'name': 'Value'
}

// CORRECT
{
  "name": "Value"
}
```

---

## Need Help?

If you encounter any issues or need to make changes beyond what's covered in this guide, please contact your web developer.

**Tip:** You can use an online JSON validator like [jsonlint.com](https://jsonlint.com/) to check if your file has any errors before saving.
