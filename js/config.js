/**
 * Config Loader
 * Loads config.json and provides translation utilities
 */

// Global config object
let CONFIG = null;

// Current language (default: English)
let currentLang = 'en';

/**
 * Load configuration from config.json
 * @returns {Promise<Object>} The loaded configuration
 */
async function loadConfig() {
  try {
    const response = await fetch('config.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    CONFIG = await response.json();
    console.log('Config loaded successfully');
    return CONFIG;
  } catch (error) {
    console.error('Failed to load config:', error);
    return null;
  }
}

/**
 * Get the current configuration
 * @returns {Object|null} The configuration object
 */
function getConfig() {
  return CONFIG;
}

/**
 * Get current language
 * @returns {string} Current language code ('en' or 'th')
 */
function getLang() {
  return currentLang;
}

/**
 * Set current language
 * @param {string} lang - Language code ('en' or 'th')
 */
function setLang(lang) {
  if (lang === 'en' || lang === 'th') {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    return true;
  }
  return false;
}

/**
 * Toggle between EN and TH
 * @returns {string} The new language code
 */
function toggleLang() {
  const newLang = currentLang === 'en' ? 'th' : 'en';
  setLang(newLang);
  return newLang;
}

/**
 * Initialize language from localStorage or browser preference
 */
function initLang() {
  // Check localStorage first
  const saved = localStorage.getItem('lang');
  if (saved && (saved === 'en' || saved === 'th')) {
    setLang(saved);
    return;
  }

  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.startsWith('th')) {
    setLang('th');
  } else {
    setLang('en');
  }
}

/**
 * Translate function - get text in current language
 * @param {Object|string} textObj - Object with 'en' and 'th' keys, or string
 * @param {string} [lang] - Optional language override
 * @returns {string} Translated text
 */
function t(textObj, lang) {
  const targetLang = lang || currentLang;

  // If it's already a string, return as-is
  if (typeof textObj === 'string') {
    return textObj;
  }

  // If it's an object with language keys
  if (textObj && typeof textObj === 'object') {
    // Try requested language first
    if (textObj[targetLang]) {
      return textObj[targetLang];
    }
    // Fallback to English
    if (textObj.en) {
      return textObj.en;
    }
    // Fallback to Thai
    if (textObj.th) {
      return textObj.th;
    }
  }

  // Return empty string if nothing found
  return '';
}

/**
 * Get nested config value using dot notation
 * @param {string} path - Dot-separated path (e.g., 'site.name')
 * @returns {*} The value at the path
 */
function getConfigValue(path) {
  if (!CONFIG) return null;

  const keys = path.split('.');
  let value = CONFIG;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return null;
    }
  }

  return value;
}

/**
 * Get translated config value
 * @param {string} path - Dot-separated path (e.g., 'site.name')
 * @returns {string} Translated value
 */
function tc(path) {
  const value = getConfigValue(path);
  return t(value);
}

// Export for ES modules
export {
  loadConfig,
  getConfig,
  getLang,
  setLang,
  toggleLang,
  initLang,
  t,
  tc,
  getConfigValue
};
