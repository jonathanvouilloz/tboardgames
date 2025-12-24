/**
 * T Board Games & Cafe - Cafe Page Interactions
 * Floating CTA, Gallery pagination, Scroll animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initFloatingCTA();
  initGalleryPagination();
  initScrollAnimations();
  initMenuTabs();
});


/**
 * Floating CTA - Show/hide based on scroll position
 */
function initFloatingCTA() {
  const floatingCTA = document.getElementById('floating-cta');
  const hero = document.querySelector('.cafe-hero');

  if (!floatingCTA || !hero) return;

  // Use Intersection Observer to detect when hero is out of view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hero is visible - hide floating CTA
          floatingCTA.classList.remove('floating-cta--visible');
          document.body.classList.remove('has-floating-cta');
        } else {
          // Hero is not visible - show floating CTA
          floatingCTA.classList.add('floating-cta--visible');
          document.body.classList.add('has-floating-cta');
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of hero is visible
      rootMargin: '-50px 0px 0px 0px'
    }
  );

  observer.observe(hero);
}


/**
 * Gallery Pagination - Update dots on scroll
 */
function initGalleryPagination() {
  const carousel = document.querySelector('.gallery-carousel');
  const dots = document.querySelectorAll('.gallery-dot');
  const slides = document.querySelectorAll('.gallery-slide');

  if (!carousel || dots.length === 0 || slides.length === 0) return;

  // Update active dot based on scroll position
  const updateDots = () => {
    const scrollLeft = carousel.scrollLeft;
    const slideWidth = slides[0].offsetWidth;
    const gap = 16; // Approximate gap
    const activeIndex = Math.round(scrollLeft / (slideWidth + gap));

    dots.forEach((dot, index) => {
      dot.classList.toggle('gallery-dot--active', index === activeIndex);
    });
  };

  // Scroll to slide when dot is clicked
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const slide = slides[index];
      if (slide) {
        slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  });

  // Listen for scroll events (throttled)
  let scrollTimeout;
  carousel.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      updateDots();
      scrollTimeout = null;
    }, 50);
  }, { passive: true });

  // Initial update
  updateDots();
}


/**
 * Scroll Animations - Reveal elements on scroll
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
}


/**
 * Menu Tabs - Scroll spy and smooth scroll to sections
 */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');

  if (tabs.length === 0 || categories.length === 0) return;

  // Click handler for tabs
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;
      let targetId;

      switch (category) {
        case 'hot':
          targetId = 'hot-drinks';
          break;
        case 'cold':
          targetId = 'cold-drinks';
          break;
        case 'snacks':
          targetId = 'snacks';
          break;
        default:
          return;
      }

      const target = document.getElementById(targetId);
      if (target) {
        // Scroll to target with offset for sticky header
        const menuTabs = document.querySelector('.menu-tabs');
        const tabsHeight = menuTabs ? menuTabs.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - tabsHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }

      // Update active state
      tabs.forEach((t) => {
        t.classList.remove('menu-tab--active');
        t.setAttribute('aria-pressed', 'false');
      });
      tab.classList.add('menu-tab--active');
      tab.setAttribute('aria-pressed', 'true');
    });
  });

  // Scroll spy - update active tab based on scroll position
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id;
          let activeCategory;

          switch (categoryId) {
            case 'hot-drinks':
              activeCategory = 'hot';
              break;
            case 'cold-drinks':
              activeCategory = 'cold';
              break;
            case 'snacks':
              activeCategory = 'snacks';
              break;
            default:
              return;
          }

          tabs.forEach((tab) => {
            const isActive = tab.dataset.category === activeCategory;
            tab.classList.toggle('menu-tab--active', isActive);
            tab.setAttribute('aria-pressed', isActive.toString());
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-100px 0px -50% 0px'
    }
  );

  categories.forEach((category) => observer.observe(category));

  // Add shadow to tabs when stuck
  const menuTabs = document.querySelector('.menu-tabs');
  if (menuTabs) {
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        menuTabs.classList.toggle('menu-tabs--stuck', !entry.isIntersecting);
      },
      {
        threshold: 1,
        rootMargin: '-1px 0px 0px 0px'
      }
    );

    // Create a sentinel element above the tabs
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position: absolute; top: 0; height: 1px; width: 100%; pointer-events: none;';
    menuTabs.parentElement.insertBefore(sentinel, menuTabs);
    stickyObserver.observe(sentinel);
  }
}
