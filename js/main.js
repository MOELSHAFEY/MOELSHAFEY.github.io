/**
 * Mohamed Elshafey Portfolio - Main Application Logic
 * Clean, modern ES6+ vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initMockupSwitcher();
  initProjectFilter();
  initClipboardActions();
  initEmailComposer();
});

/* --------------------------------------------------------------------------
   Theme Controller (Dark Mode as Default)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('shafey_theme');

  // Default to dark mode
  const activeTheme = savedTheme || 'dark';
  setTheme(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('shafey_theme', newTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('is-active');
    navLinks.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('is-active');
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('is-open')) {
      menuToggle.classList.remove('is-active');
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      menuToggle.classList.remove('is-active');
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   Interactive Smartphone Mockup Switcher (Switches Live Screenshots)
   -------------------------------------------------------------------------- */
const MOCKUP_SCREENS = {
  menoufia: {
    imageSrc: "assets/screenshots/menoufia_university/screen_1.png",
    alt: "Menoufia University Official App - Dynamic Directory (Official Apple App Store)"
  },
  semu: {
    imageSrc: "assets/screenshots/semu_elshefa/screen_1.png",
    alt: "Semu Elshefa Saudi Arabia Domestic Recruitment Platform (Apple App Store)"
  },
  ikhtabr: {
    imageSrc: "assets/screenshots/ikhtabr_qurani/screen_1.jpg",
    alt: "Ikhtabr Qurani Interactive Verse Assessment App Screenshot"
  },
  bigbrother: {
    imageSrc: "assets/screenshots/big_brother/screen_1.png",
    alt: "Big Brother Smart QR Attendance Scanner (Apple App Store)"
  }
};

function initMockupSwitcher() {
  const tabs = document.querySelectorAll('.switcher-tab');
  const phoneScreenImg = document.getElementById('hero-phone-screen-img');

  if (!tabs.length || !phoneScreenImg) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const appKey = tab.getAttribute('data-mockup-app');
      const data = MOCKUP_SCREENS[appKey];
      if (!data) return;

      phoneScreenImg.style.opacity = '0.3';
      setTimeout(() => {
        phoneScreenImg.src = data.imageSrc;
        phoneScreenImg.alt = data.alt;
        phoneScreenImg.style.opacity = '1';
      }, 150);
    });
  });
}

/* --------------------------------------------------------------------------
   Project Filter Controller
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('[data-category]');

  if (!filterBtns.length || !projectItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCategory === filterVal) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(12px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Interactive Clipboard Copy with Toast Feedback
   -------------------------------------------------------------------------- */
function initClipboardActions() {
  const copyBtns = document.querySelectorAll('[data-copy-text]');
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Text';

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`✓ ${label} copied to clipboard!`);
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.textContent = 'Copy';
        }, 2000);
      }).catch(() => {
        showToast(`Selected: ${textToCopy}`);
      });
    });
  });

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* --------------------------------------------------------------------------
   Dynamic Email Composer
   -------------------------------------------------------------------------- */
function initEmailComposer() {
  const composerForm = document.getElementById('email-composer-form');
  if (!composerForm) return;

  composerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const topicSelect = document.getElementById('email-topic');
    const senderName = document.getElementById('sender-name');
    const projectDetails = document.getElementById('project-details');

    const topic = topicSelect ? topicSelect.value : 'Full-time / Remote Opportunity';
    const name = senderName ? senderName.value.trim() : 'Recruiter / Client';
    const details = projectDetails ? projectDetails.value.trim() : 'Hello Mohamed, I would like to discuss an opportunity.';

    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${topic} - ${name}`);
    const emailBody = encodeURIComponent(`Hi Mohamed,\n\nMy name is ${name}.\n\nInquiry Details:\n${details}\n\nLooking forward to hearing from you!`);

    const mailtoUrl = `mailto:shafymo15@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;
  });
}
