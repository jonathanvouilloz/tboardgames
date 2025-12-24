/**
 * Theme Loader
 * Charge les couleurs et fonts depuis config.json
 * et les applique aux CSS custom properties
 */

async function loadTheme() {
  try {
    // Charger le config.json
    const response = await fetch('config.json');
    const config = await response.json();
    
    // Appliquer les couleurs du branding
    if (config.branding && config.branding.colors) {
      const colors = config.branding.colors;
      const root = document.documentElement;
      
      // Override des couleurs principales
      if (colors.primary) {
        root.style.setProperty('--lime-500', colors.primary);
        // Auto-générer les variations (optionnel)
        root.style.setProperty('--lime-400', lighten(colors.primary, 10));
        root.style.setProperty('--lime-600', darken(colors.primary, 10));
      }
      
      if (colors.secondary) {
        root.style.setProperty('--pink-300', colors.secondary);
      }
      
      if (colors.accent) {
        root.style.setProperty('--yellow-400', colors.accent);
      }
      
      if (colors.cream) {
        root.style.setProperty('--cream-100', colors.cream);
      }
      
      if (colors.dark) {
        root.style.setProperty('--dark-900', colors.dark);
      }
    }
    
    // Appliquer les fonts
    if (config.branding && config.branding.fonts) {
      const fonts = config.branding.fonts;
      const root = document.documentElement;
      
      if (fonts.heading) {
        root.style.setProperty('--font-heading', `'${fonts.heading}', var(--font-body)`);
      }
      
      if (fonts.body) {
        root.style.setProperty('--font-body', `'${fonts.body}', -apple-system, BlinkMacSystemFont, sans-serif`);
      }
    }
    
    console.log('✅ Theme loaded successfully from config.json');
    
  } catch (error) {
    console.error('❌ Failed to load theme from config.json:', error);
    console.log('Using default CSS variables as fallback');
  }
}

// Helper functions pour générer variations de couleurs
// (optionnel, peut être simplifié)

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

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

// Charger le thème au chargement de la page
document.addEventListener('DOMContentLoaded', loadTheme);

// Export pour utilisation dans d'autres modules (si ESM)
export { loadTheme };
