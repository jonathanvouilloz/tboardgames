/**
 * Language Module
 * Handles bilingual toggle between EN and TH
 */

/**
 * Get initial language from localStorage or browser preference
 */
function getInitialLanguage() {
  // Check localStorage first
  const saved = localStorage.getItem('lang');
  if (saved && (saved === 'en' || saved === 'th')) {
    return saved;
  }
  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.startsWith('th')) {
    return 'th';
  }
  return 'en';
}

/**
 * Apply language to the document
 * Updates html lang attribute and shows/hides translated content
 */
function applyLanguage(lang) {
  // Update html lang attribute
  document.documentElement.lang = lang;

  // Show/hide bilingual elements
  const bilingualElements = document.querySelectorAll('[data-lang-en], [data-lang-th]');

  bilingualElements.forEach(el => {
    const hasEn = el.hasAttribute('data-lang-en');
    const hasTh = el.hasAttribute('data-lang-th');

    // If element has both attributes, it's a single element with translations
    if (hasEn && hasTh) {
      el.textContent = lang === 'en'
        ? el.getAttribute('data-lang-en')
        : el.getAttribute('data-lang-th');
    }
    // If element only has one, show/hide based on current language
    else if (hasEn && !hasTh) {
      el.style.display = lang === 'en' ? '' : 'none';
    }
    else if (hasTh && !hasEn) {
      el.style.display = lang === 'th' ? '' : 'none';
    }
  });
}

/**
 * Register Alpine.js store for language (shared state)
 * Uses alpine:init event to register BEFORE Alpine processes the DOM
 */
document.addEventListener('alpine:init', () => {
  Alpine.store('language', {
    current: getInitialLanguage(),

    init() {
      // Apply initial language
      applyLanguage(this.current);
    },

    toggle() {
      this.current = this.current === 'en' ? 'th' : 'en';
      localStorage.setItem('lang', this.current);
      applyLanguage(this.current);
    },

    setLanguage(lang) {
      if (lang !== 'en' && lang !== 'th') {
        console.warn('Invalid language:', lang);
        return;
      }
      this.current = lang;
      localStorage.setItem('lang', this.current);
      applyLanguage(this.current);
    },

    isActive(lang) {
      return this.current === lang;
    }
  });
});

// Apply initial language on DOM ready (before Alpine fully processes)
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(getInitialLanguage());
});

// Export functions for ES modules
export { getInitialLanguage, applyLanguage };
