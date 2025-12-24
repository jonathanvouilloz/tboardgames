/**
 * T Board Games & Cafe - Scroll Animations
 * Uses IntersectionObserver for scroll-triggered animations
 */

/**
 * Initialize scroll-triggered animations
 * Adds .animate-in class when elements enter the viewport
 */
function initScrollAnimations() {
  // Select all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.animate-fade, .animate-slide, .animate-slide-left, .animate-slide-right, .animate-scale'
  );

  if (!animatedElements.length) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If user prefers reduced motion, show all elements immediately
    animatedElements.forEach(el => {
      el.classList.add('animate-in');
    });
    return;
  }

  // IntersectionObserver options
  const observerOptions = {
    root: null, // Use viewport as root
    rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters viewport
    threshold: 0.1 // Trigger when 10% of element is visible
  };

  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animate-in class to trigger animation
        entry.target.classList.add('animate-in');
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Initialize hero animations
 * Hero content animates immediately on page load
 */
function initHeroAnimations() {
  const heroElements = document.querySelectorAll('.hero .animate-slide, .hero .animate-fade, .hero .animate-scale');

  if (!heroElements.length) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    heroElements.forEach(el => el.classList.add('animate-in'));
    return;
  }

  // Small delay to ensure CSS is loaded, then animate hero
  requestAnimationFrame(() => {
    heroElements.forEach(el => {
      el.classList.add('animate-in');
    });
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initScrollAnimations();
});

// Export for module usage
export { initScrollAnimations, initHeroAnimations };
