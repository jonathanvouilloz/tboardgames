/**
 * Theme Loader
 * Charge les couleurs et fonts depuis config.json
 * et les applique aux CSS custom properties
 */

/**
 * Load and apply theme from config.json
 * Should be called after config.js has loaded the CONFIG
 */
function applyTheme(config) {
  if (!config) {
    console.warn('No config provided to applyTheme');
    return;
  }

  const root = document.documentElement;

  // Apply branding colors
  if (config.branding && config.branding.colors) {
    const colors = config.branding.colors;

    if (colors.primary) {
      root.style.setProperty('--lime-500', colors.primary);
      root.style.setProperty('--lime-400', lighten(colors.primary, 10));
      root.style.setProperty('--lime-600', darken(colors.primary, 10));
      root.style.setProperty('--lime-700', darken(colors.primary, 20));
    }

    if (colors.secondary) {
      root.style.setProperty('--pink-300', colors.secondary);
      root.style.setProperty('--pink-200', lighten(colors.secondary, 10));
      root.style.setProperty('--pink-400', darken(colors.secondary, 10));
    }

    if (colors.accent) {
      root.style.setProperty('--yellow-400', colors.accent);
    }

    if (colors.cream) {
      root.style.setProperty('--cream-100', colors.cream);
      root.style.setProperty('--cream-200', darken(colors.cream, 5));
    }

    if (colors.dark) {
      root.style.setProperty('--dark-900', colors.dark);
      root.style.setProperty('--dark-800', lighten(colors.dark, 5));
    }
  }

  // Apply branding fonts
  if (config.branding && config.branding.fonts) {
    const fonts = config.branding.fonts;

    if (fonts.heading) {
      root.style.setProperty('--font-heading', `'${fonts.heading}', var(--font-body)`);
    }

    if (fonts.body) {
      root.style.setProperty('--font-body', `'${fonts.body}', -apple-system, BlinkMacSystemFont, sans-serif`);
    }
  }

  // Mark theme as loaded
  root.setAttribute('data-theme-override', 'true');
  console.log('Theme applied successfully');
}

/**
 * Helper: Convert hex to RGB object
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Helper: Convert RGB values to hex
 */
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Helper: Lighten a hex color by percentage
 */
function lighten(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const amount = Math.round(2.55 * percent);
  return rgbToHex(
    Math.min(255, rgb.r + amount),
    Math.min(255, rgb.g + amount),
    Math.min(255, rgb.b + amount)
  );
}

/**
 * Helper: Darken a hex color by percentage
 */
function darken(hex, percent) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const amount = Math.round(2.55 * percent);
  return rgbToHex(
    Math.max(0, rgb.r - amount),
    Math.max(0, rgb.g - amount),
    Math.max(0, rgb.b - amount)
  );
}

// Export for ES modules
export { applyTheme, lighten, darken };
