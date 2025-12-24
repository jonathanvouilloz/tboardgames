/**
 * Navigation Module
 * Handles active state, mobile menu, and header scroll effects
 */

/**
 * Initialize navigation active state
 * Highlights the current page link in navigation
 */
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Desktop nav links
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('nav__link--active');
    }
  });

  // Mobile menu links
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('mobile-menu__link--active');
    }
  });
}

/**
 * Initialize header scroll effect
 * Adds shadow when page is scrolled
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const scrollThreshold = 50;

  function updateHeader() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  // Check on load
  updateHeader();

  // Check on scroll with throttle
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Register Alpine.js store for mobile menu (shared state)
 * Uses alpine:init event to register BEFORE Alpine processes the DOM
 */
document.addEventListener('alpine:init', () => {
  Alpine.store('mobileMenu', {
    isOpen: false,

    toggle() {
      this.isOpen = !this.isOpen;
      this.updateBodyScroll();
    },

    open() {
      this.isOpen = true;
      this.updateBodyScroll();
    },

    close() {
      this.isOpen = false;
      this.updateBodyScroll();
    },

    updateBodyScroll() {
      if (this.isOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && Alpine.store('mobileMenu').isOpen) {
      Alpine.store('mobileMenu').close();
    }
  });
});

/**
 * Initialize all navigation functionality
 */
function initNav() {
  initActiveNav();
  initHeaderScroll();
}

// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initNav);

// Export functions for ES modules
export { initNav, initActiveNav, initHeaderScroll };
