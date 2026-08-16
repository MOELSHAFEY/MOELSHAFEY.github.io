/**
 * Project Screenshot Slider & Lightbox Controller
 * Supports Next/Prev controls, pagination dots, touch swipes, and image zoom lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectSliders();
  initScreenshotLightbox();
});

function initProjectSliders() {
  const sliderContainers = document.querySelectorAll('[data-slider-id]');

  sliderContainers.forEach(container => {
    const slides = container.querySelectorAll('.phone-slide-image');
    const prevBtn = container.querySelector('[data-slider-prev]');
    const nextBtn = container.querySelector('[data-slider-next]');
    const dotsContainer = container.querySelector('[data-slider-dots]');
    const counterBadge = container.querySelector('[data-slider-counter]');

    if (!slides.length) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Build dots if container provided
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Screenshot ${i + 1}`);
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          goToSlide(i);
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateSlider() {
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentIndex);
      });

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }

      if (counterBadge) {
        counterBadge.textContent = `${currentIndex + 1} / ${totalSlides} Screenshots`;
      }
    }

    function goToSlide(index) {
      currentIndex = (index + totalSlides) % totalSlides;
      updateSlider();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });

    // Touch Swipe Support
    let startX = 0;
    let endX = 0;

    container.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      if (startX - endX > 40) {
        nextSlide();
      } else if (endX - startX > 40) {
        prevSlide();
      }
    }, { passive: true });
  });
}

/* --------------------------------------------------------------------------
   Fullscreen Screenshot Lightbox Modal
   -------------------------------------------------------------------------- */
function initScreenshotLightbox() {
  let lightbox = document.getElementById('screenshot-lightbox');
  
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'screenshot-lightbox';
    lightbox.className = 'lightbox-modal';
    lightbox.innerHTML = `
      <div class="lightbox-content-wrapper">
        <button class="lightbox-close-btn" id="lightbox-close" aria-label="Close Lightbox">✕</button>
        <img src="" alt="Screenshot Full View" class="lightbox-img" id="lightbox-img">
        <div class="lightbox-caption" id="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  // Open on clicking any slide image
  document.querySelectorAll('.phone-slide-image, .flagship-screenshot-img, .phone-screen-img').forEach(img => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt') || 'Application Screenshot';
      
      lightboxImg.src = src;
      lightboxCaption.textContent = alt;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close handlers
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}
