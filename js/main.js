/* =====================================================
   MSUAS HERITAGE EXPLORER — MAIN JAVASCRIPT
   DSI236 Practical Assignment
===================================================== */

'use strict';

// ========== DATA ==========
const EVENTS_DATA = [
  { id: 1, day: '18', month: 'Oct', year: 2025, tag: 'Cultural', title: 'Manicaland Heritage Day Festival', desc: 'Annual celebration of Manicaland culture, arts and traditions.', time: '09:00 AM', venue: 'Main Quad', highlight: true },
  { id: 2, day: '25', month: 'Oct', year: 2025, tag: 'Academic', title: 'Open Day 2025', desc: 'Prospective students tour campus and meet faculty members.', time: '08:00 AM', venue: 'All Campus', highlight: false },
  { id: 3, day: '02', month: 'Nov', year: 2025, tag: 'Sports', title: 'Inter-University Sports Gala', desc: 'MSUAS hosts the regional inter-university sports championship.', time: '07:00 AM', venue: 'Sports Complex', highlight: false },
  { id: 4, day: '15', month: 'Nov', year: 2025, tag: 'Arts', title: 'Annual Arts & Crafts Exhibition', desc: 'Student and faculty showcase of fine arts inspired by Manicaland heritage.', time: '10:00 AM', venue: 'Heritage Center', highlight: true },
  { id: 5, day: '29', month: 'Nov', year: 2025, tag: 'Academic', title: 'Graduation Ceremony 2025', desc: 'Annual graduation celebrating the Class of 2025.', time: '10:00 AM', venue: 'Great Hall', highlight: false },
  { id: 6, day: '06', month: 'Dec', year: 2025, tag: 'Cultural', title: 'End-of-Year Cultural Gala', desc: 'Closing ceremony featuring traditional music, dance, and food.', time: '05:00 PM', venue: 'Founders Hall', highlight: false },
];

const SEARCH_DATA = [
  { name: "Founders Hall", type: "heritage", icon: "fa-landmark", url: "heritage.html#founders" },
  { name: "Nature Trail", type: "heritage", icon: "fa-tree", url: "heritage.html#nature" },
  { name: "Heritage Library Archive", type: "heritage", icon: "fa-book-open", url: "heritage.html#library" },
  { name: "Library", type: "facility", icon: "fa-book", url: "campus.html" },
  { name: "Sports Complex", type: "facility", icon: "fa-running", url: "campus.html" },
  { name: "Science Labs", type: "facility", icon: "fa-flask", url: "campus.html" },
  { name: "Student Center", type: "facility", icon: "fa-users", url: "campus.html" },
  { name: "Cafeteria", type: "facility", icon: "fa-utensils", url: "campus.html" },
  { name: "Heritage Day Festival", type: "event", icon: "fa-calendar", url: "events.html" },
  { name: "Open Day 2025", type: "event", icon: "fa-calendar", url: "events.html" },
  { name: "Graduation Ceremony", type: "event", icon: "fa-graduation-cap", url: "events.html" },
  { name: "Faculty of Applied Sciences", type: "department", icon: "fa-flask", url: "about.html#departments" },
  { name: "Faculty of Business", type: "department", icon: "fa-briefcase", url: "about.html#departments" },
  { name: "Faculty of ICT", type: "department", icon: "fa-laptop-code", url: "about.html#departments" },
];

const VIDEO_INFO = {
  intro:    { title: "Welcome to MSUAS", desc: "A 3-minute tour of our beautiful campus in the Eastern Highlands of Zimbabwe." },
  heritage: { title: "Heritage Documentary", desc: "Explore the rich cultural and historical heritage of Manicaland and MSUAS." },
  life:     { title: "Student Life at MSUAS", desc: "See what daily life looks like for our vibrant student community." },
};

// ========== UTILITY ==========
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function animateNumber(el) {
  const target = parseInt(el.dataset.target);
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString();
    if (current >= target) clearInterval(timer);
  }, 30);
}

// ========== PRELOADER ==========
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = $('#preloader');
    if (loader) loader.classList.add('hide');
  }, 1200);
});

// ========== NAVBAR ==========
(function initNavbar() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  const searchToggle = $('#searchToggle');
  const searchBar = $('#searchBar');
  const searchInput = $('#searchInput');
  const searchResults = $('#searchResults');
  const searchBtn = $('#searchBtn');

  if (!navbar) return;

  // Scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const cur = window.scrollY;
    if (cur > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = cur;
  }, { passive: true });

  // Hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // Search toggle
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open') && searchInput) {
        searchInput.focus();
      }
    });
  }

  // Search logic
  function doSearch(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    if (!q) { searchResults.innerHTML = ''; return; }
    const results = SEARCH_DATA.filter(d => d.name.toLowerCase().includes(q));
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item"><i class="fas fa-info-circle"></i> No results found</div>';
      return;
    }
    searchResults.innerHTML = results.map(r =>
      `<a href="${r.url}" class="search-result-item">
        <i class="fas ${r.icon}"></i>
        <div><strong>${r.name}</strong><br/><small>${r.type.charAt(0).toUpperCase() + r.type.slice(1)}</small></div>
      </a>`
    ).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => doSearch(e.target.value));
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch(e.target.value);
      if (e.key === 'Escape') searchBar.classList.remove('open');
    });
  }
  if (searchBtn) searchBtn.addEventListener('click', () => doSearch(searchInput ? searchInput.value : ''));

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });
})();

// ========== HERO SLIDER ==========
(function initHeroSlider() {
  const slides = $$('.hero-slide');
  const dotsContainer = $('#sliderDots');
  const prevBtn = $('#sliderPrev');
  const nextBtn = $('#sliderNext');
  if (!slides.length) return;

  let current = 0;
  let autoTimer;

  // Create dots
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    $$('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    updateDots();
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }
  function stopAuto() { clearInterval(autoTimer); }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  startAuto();

  // Animate stats on load
  $$('.stat-num').forEach(el => animateNumber(el));
})();

// ========== AOS (Intersection Observer) ==========
(function initAOS() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.aosDelay || 0;
        setTimeout(() => entry.target.classList.add('aos-animate'), parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  $$('[data-aos]').forEach(el => observer.observe(el));
})();

// ========== EVENTS GRID (homepage) ==========
(function initEventsGrid() {
  const grid = $('#eventsGrid');
  if (!grid) return;

  const preview = EVENTS_DATA.slice(0, 4);
  grid.innerHTML = preview.map(e => `
    <article class="event-card" data-aos="fade-up">
      <div class="event-date">
        <span class="day">${e.day}</span>
        <span class="month">${e.month}</span>
      </div>
      <div class="event-body">
        <span class="event-tag">${e.tag}</span>
        <h4>${e.title}</h4>
        <p>${e.desc}</p>
        <div class="event-meta">
          <span><i class="fas fa-clock"></i> ${e.time}</span>
          <span><i class="fas fa-map-pin"></i> ${e.venue}</span>
        </div>
      </div>
    </article>
  `).join('');
})();

// ========== CAMPUS MAP PREVIEW ==========
(function initMapPreview() {
  const buildings = $$('.map-building');
  const tooltip = $('#mapTooltip');
  if (!buildings.length) return;

  buildings.forEach(b => {
    b.addEventListener('mouseenter', e => {
      if (!tooltip) return;
      tooltip.textContent = b.dataset.name;
      tooltip.style.display = 'block';
      const rect = b.getBoundingClientRect();
      const mapRect = b.closest('.map-bg').getBoundingClientRect();
      tooltip.style.left = (rect.left - mapRect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = (rect.top - mapRect.top - 36) + 'px';
    });
    b.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.style.display = 'none';
    });
    b.addEventListener('click', () => {
      buildings.forEach(bb => bb.classList.remove('active'));
      b.classList.add('active');
    });
  });
})();

// ========== VIDEO TABS ==========
(function initVideoTabs() {
  const tabs = $$('.vtab');
  const videoInfo = $('#videoInfo');
  const playBtn = $('#playBtn');
  const mainVideo = $('#mainVideo');
  const placeholder = $('#videoPlaceholder');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.vid;
      if (videoInfo && VIDEO_INFO[key]) {
        videoInfo.innerHTML = `<h4>${VIDEO_INFO[key].title}</h4><p>${VIDEO_INFO[key].desc}</p>`;
      }
    });
  });

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (mainVideo && placeholder) {
        playBtn.style.display = 'none';
        placeholder.querySelector('.video-label').style.display = 'none';
        mainVideo.style.display = 'block';
        mainVideo.play().catch(() => {
          // No video file — show info message
          placeholder.innerHTML = `
            <div style="text-align:center;padding:2rem;color:rgba(255,255,255,0.7)">
              <i class="fas fa-film" style="font-size:3rem;color:var(--gold-bright);display:block;margin-bottom:1rem;"></i>
              <p>Campus tour video would play here.</p>
              <p style="font-size:0.8rem;margin-top:0.5rem;">Add a <code>campus-tour.mp4</code> to the <code>images/</code> folder.</p>
            </div>`;
        });
      }
    });
  }
})();

// ========== TESTIMONIALS ==========
(function initTestimonials() {
  const slides = $$('.testimonial-slide');
  const dotsContainer = $('#testimonialDots');
  if (!slides.length) return;

  let current = 0;

  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    $$('.testimonial-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  setInterval(() => goTo(current + 1), 6000);
})();

// ========== NEWSLETTER ==========
(function initNewsletter() {
  const form = $('#newsletterForm');
  const msg = $('#newsletterMsg');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fname = form.elements['fname']?.value.trim();
    const email = form.elements['email']?.value.trim();
    if (!fname || !email || !email.includes('@')) {
      if (msg) { msg.textContent = '⚠ Please enter a valid name and email.'; msg.style.color = '#ffaa00'; }
      return;
    }
    if (msg) {
      msg.textContent = '✅ Thank you, ' + fname + '! You\'re now subscribed to MSUAS Heritage Explorer updates.';
      msg.style.color = '#ffd700';
    }
    form.reset();
    setTimeout(() => { if (msg) msg.textContent = ''; }, 6000);
  });
})();

// ========== BACK TO TOP ==========
(function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ========== COOKIE BANNER ==========
(function initCookies() {
  const banner = $('#cookieBanner');
  const acceptBtn = $('#cookieAccept');
  if (!banner) return;
  if (!localStorage.getItem('msuas_cookies_accepted')) {
    setTimeout(() => banner.classList.add('show'), 2000);
  }
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      banner.classList.remove('show');
      localStorage.setItem('msuas_cookies_accepted', '1');
    });
  }
})();

// ========== PROGRESS BAR ==========
(function initProgressBar() {
  const bar = document.createElement('div');
  bar.id = 'progress-bar';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
})();

// ========== KEYBOARD ACCESSIBILITY ==========
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const searchBar = $('#searchBar');
    if (searchBar) searchBar.classList.remove('open');
    const modal = $('.site-modal.open');
    if (modal) modal.classList.remove('open');
    const lightbox = $('.lightbox.open');
    if (lightbox) lightbox.classList.remove('open');
  }
});

// ========== SMOOTH ANCHOR SCROLL ==========
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// ========== EXPORTS for inner pages ==========
window.MSUAS = {
  EVENTS_DATA,
  SEARCH_DATA,
  animateNumber,
};
