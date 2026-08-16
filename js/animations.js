/**
 * Animations & Micro-Interactions Controller
 * Lightweight, high-performance, 60fps animations using IntersectionObserver
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initMetricCounters();
  initScrollSpy();
  initCardTilts();
});

/**
 * Scroll Reveal Observer
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Metric Counters on Viewport Entry
 */
function initMetricCounters() {
  const metricElements = document.querySelectorAll('[data-counter-target]');
  if (!metricElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseInt(el.getAttribute('data-counter-target'), 10);
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        animateValue(el, 0, targetValue, 1200, prefix, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  metricElements.forEach(el => observer.observe(el));
}

function animateValue(element, start, end, duration, prefix = '', suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Ease out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(easeProgress * (end - start) + start);
    
    // Format numbers with comma if > 1000
    const formatted = currentVal > 999 ? currentVal.toLocaleString() : currentVal;
    element.textContent = `${prefix}${formatted}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      const finalFormatted = end > 999 ? end.toLocaleString() : end;
      element.textContent = `${prefix}${finalFormatted}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
}

/**
 * ScrollSpy for Navigation Links
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header background elevation
    if (header) {
      if (scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    // ScrollSpy active link
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/**
 * Subtle Micro-Tilt on Featured Cards
 */
function initCardTilts() {
  // Only apply on devices that support hover (desktop)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const tiltCards = document.querySelectorAll('.phone-mockup, .skill-category-card, .value-card');
    
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const maxAngle = 3;
        const rotateX = (-y / (rect.height / 2)) * maxAngle;
        const rotateY = (x / (rect.width / 2)) * maxAngle;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
}
