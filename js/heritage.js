// ========== HERITAGE PAGE JAVASCRIPT ==========
'use strict';

const HERITAGE_SITES = [
  {
    id: 'founders',
    name: "The Founders' Hall",
    category: 'history',
    location: 'Main Campus, Mutare',
    year: 1983,
    tag: 'Founding Site',
    tagColor: 'var(--green-mid)',
    iconColor: 'linear-gradient(135deg,#1b5e20,#4caf50)',
    icon: 'fa-university',
    iconDisplay: '🏛️',
    rating: 4.9,
    description: "The original administration building that witnessed the birth of MSUAS. A testament to the vision of providing quality applied sciences education in Manicaland.",
    longDescription: "Established in 1983, The Founders' Hall stands as the cornerstone of MSUAS's rich history. It was within these walls that the first lectures were delivered to a pioneering cohort of students who dared to dream of a university in Manicaland. The building's colonial-era architecture has been carefully preserved while integrating modern facilities.",
    facts: ["Built in 1983", "Originally housed all 3 founding departments", "Named in honour of founding Vice-Chancellor Dr. J. Mutambirwa", "Renovated in 2010 retaining original facade"],
    openHours: "Mon–Fri: 7AM–6PM | Sat: 9AM–1PM",
    tags: ['History', 'Architecture', 'Must-Visit', 'Guided Tours'],
  },
  {
    id: 'nature',
    name: "Manicaland Nature Trail",
    category: 'nature',
    location: 'Eastern Highlands, Mutare',
    year: 1995,
    tag: 'Natural Heritage',
    tagColor: 'var(--gold-mid)',
    iconColor: 'linear-gradient(135deg,#b8860b,#c8a000)',
    icon: 'fa-tree',
    iconDisplay: '🌳',
    rating: 4.8,
    description: "A curated trail connecting MSUAS to Manicaland's breathtaking Eastern Highlands. Explore indigenous flora, fauna and the region's natural wonders.",
    longDescription: "The Manicaland Nature Trail is a 5km guided ecological walk through the university's conservation area and into the indigenous Eastern Highlands. The trail was established by the Faculty of Environmental Sciences and has become a cornerstone of the university's commitment to environmental education and ecotourism.",
    facts: ["5km well-marked trail", "Over 120 species of indigenous plants", "Home to 40+ bird species", "Self-guided maps available at reception"],
    openHours: "Daily: 6AM–5PM (guided tours at 8AM & 2PM)",
    tags: ['Nature', 'Ecology', 'Tourism', 'Bird Watching'],
  },
  {
    id: 'library',
    name: "Heritage Library Archive",
    category: 'culture',
    location: 'Campus Library Wing, Main Campus',
    year: 1990,
    tag: 'Cultural Center',
    tagColor: 'var(--green-mid)',
    iconColor: 'linear-gradient(135deg,#2d7d32,#8b6914)',
    icon: 'fa-book-open',
    iconDisplay: '📚',
    rating: 4.7,
    description: "Home to rare manuscripts, historical records, and Manicaland cultural artifacts. A living museum of the region's intellectual and cultural legacy.",
    longDescription: "The Heritage Library Archive houses over 5,000 rare books, manuscripts, and documents related to the history of Manicaland Province. The collection includes pre-colonial oral histories (transcribed), colonial-era records, and post-independence scholarly works. Visitors can explore digitised exhibits or handle preserved physical artifacts under curator supervision.",
    facts: ["5,000+ rare books and manuscripts", "Pre-colonial oral history transcriptions", "Digitised collection accessible online", "Annual heritage symposium hosted here"],
    openHours: "Mon–Fri: 8AM–8PM | Sat: 9AM–4PM",
    tags: ['Culture', 'Research', 'Archive', 'Museum'],
  },
  {
    id: 'great-hall',
    name: "The Great Hall",
    category: 'academic',
    location: 'Central Campus',
    year: 1988,
    tag: 'Academic Landmark',
    tagColor: 'var(--green-dark)',
    iconColor: 'linear-gradient(135deg,#1b5e20,#2d7d32)',
    icon: 'fa-graduation-cap',
    iconDisplay: '🎓',
    rating: 4.9,
    description: "MSUAS's iconic graduation hall, venue for all major academic ceremonies, convocations, and high-profile campus events.",
    longDescription: "The Great Hall is the beating heart of MSUAS's academic life. With a seating capacity of 2,000, it has witnessed thousands of graduation ceremonies, distinguished visitor lectures, and historic university milestones. The hall features a magnificent hand-painted ceiling mural depicting the evolution of Manicaland from pre-colonial times to the modern era.",
    facts: ["Capacity: 2,000 seated guests", "Hand-painted ceiling mural (2001)", "Acoustic design by internationally acclaimed engineers", "Hosts 15+ major events annually"],
    openHours: "Accessible during scheduled events; tours by appointment",
    tags: ['Academic', 'Architecture', 'Events', 'Heritage'],
  },
  {
    id: 'garden',
    name: "Mutare Botanical Garden",
    category: 'nature',
    location: 'South Campus, Mutare',
    year: 2000,
    tag: 'Green Heritage',
    tagColor: 'var(--green-light)',
    iconColor: 'linear-gradient(135deg,#388e3c,#1b5e20)',
    icon: 'fa-seedling',
    iconDisplay: '🌿',
    rating: 4.6,
    description: "A living garden of indigenous Zimbabwean and African flora maintained by the Faculty of Environmental Sciences.",
    longDescription: "The MSUAS Botanical Garden spans 3 hectares and features over 200 species of indigenous Zimbabwean plants, medicinal herbs documented in partnership with local traditional healers, and a butterfly sanctuary. The garden is used for research, environmental education, and provides a tranquil space for student recreation.",
    facts: ["3 hectares of botanical garden", "200+ indigenous plant species", "Butterfly sanctuary with 30+ species", "Community herb garden in partnership with local healers"],
    openHours: "Daily: 7AM–6PM",
    tags: ['Nature', 'Botany', 'Research', 'Relaxation'],
  },
  {
    id: 'culture-center',
    name: "Nyika Cultural Center",
    category: 'culture',
    location: 'Student Village, Main Campus',
    year: 2005,
    tag: 'Cultural Hub',
    tagColor: 'var(--gold-dark)',
    iconColor: 'linear-gradient(135deg,#8b6914,#c8a000)',
    icon: 'fa-masks-theater',
    iconDisplay: '🎭',
    rating: 4.8,
    description: "A vibrant center for Zimbabwean arts, crafts, music, dance, and cultural performances celebrating Manicaland heritage.",
    longDescription: "The Nyika Cultural Center ('Nyika' meaning 'the land' in Shona) opened in 2005 as a dedicated space for preserving and celebrating Manicaland's diverse cultural heritage. The center hosts weekly traditional music and dance performances, monthly craft markets, and an annual national cultural festival. It also features a permanent exhibition of traditional Shona art and pottery.",
    facts: ["Weekly cultural performances (Fridays 5PM)", "Monthly craft & arts market", "Annual Nyika Heritage Festival (November)", "Traditional craft-making workshops"],
    openHours: "Mon–Sat: 9AM–8PM | Sun: 12PM–6PM",
    tags: ['Culture', 'Arts', 'Music', 'Dance', 'Crafts'],
  },
];

const TIMELINE_DATA = [
  { year: '1983', title: 'MSUAS Founded', desc: 'Manicaland State University of Applied Sciences established with 3 founding departments and 120 students.' },
  { year: '1988', title: 'The Great Hall Built', desc: 'Construction of the iconic Great Hall, which would become the centre of academic ceremonies.' },
  { year: '1990', title: 'Heritage Archive Established', desc: 'The Heritage Library Archive opened, preserving Manicaland cultural and historical records.' },
  { year: '1995', title: 'Nature Trail Created', desc: 'Faculty of Environmental Sciences establishes the Manicaland Nature Trail.' },
  { year: '2000', title: 'Botanical Garden Opens', desc: 'A 3-hectare indigenous botanical garden is opened on South Campus.' },
  { year: '2005', title: 'Nyika Cultural Center', desc: 'The Nyika Cultural Center opens, celebrating Manicaland arts and traditions.' },
  { year: '2010', title: 'Founders Hall Renovated', desc: "Historic Founders' Hall renovated preserving colonial facade with modern interiors." },
  { year: '2018', title: 'UNESCO Recognition', desc: 'MSUAS Heritage program recognised as a UNESCO regional model for university cultural preservation.' },
  { year: '2023', title: 'Digital Heritage Platform', desc: 'Launch of the MSUAS digital heritage platform bringing heritage access to students worldwide.' },
];

const AUDIO_GUIDES = [
  { title: "Founders' Hall Tour", duration: "8 min", icon: "fa-university", desc: "Walk through the history of our founding building." },
  { title: "Nature Trail Guide", duration: "12 min", icon: "fa-tree", desc: "Narrated guide to the Eastern Highlands trail." },
  { title: "Cultural Center Story", duration: "6 min", icon: "fa-masks-theater", desc: "The story behind Nyika Cultural Center." },
  { title: "Campus History Walk", duration: "15 min", icon: "fa-walking", desc: "A full campus historical audio walkthrough." },
];

// Render Heritage Grid
(function renderHeritage() {
  const grid = document.getElementById('heritageGrid');
  if (!grid) return;

  function render(filter) {
    const sites = filter === 'all' ? HERITAGE_SITES : HERITAGE_SITES.filter(s => s.category === filter);
    grid.innerHTML = sites.map(s => `
      <article class="heritage-card heritage-item" data-category="${s.category}" data-id="${s.id}" data-aos="fade-up">
        <div class="card-img-wrap">
          <div class="card-img" style="background:${s.iconColor};display:flex;align-items:center;justify-content:center;height:220px;">
            <i class="fas ${s.icon}" style="font-size:5rem;color:rgba(255,215,0,0.8)"></i>
          </div>
          <div class="card-badge" style="background:${s.tagColor}">${s.tag}</div>
        </div>
        <div class="card-body">
          <div class="card-meta"><i class="fas fa-map-pin"></i> ${s.location} &nbsp;|&nbsp; <i class="fas fa-star" style="color:var(--gold-mid)"></i> ${s.rating}</div>
          <h3>${s.name}</h3>
          <p>${s.description}</p>
          <div class="card-tags">${s.tags.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <button class="btn btn-sm btn-primary open-modal" data-id="${s.id}"><i class="fas fa-info-circle"></i> Learn More</button>
            <a href="campus.html" class="btn btn-sm" style="border:2px solid var(--green-light);color:var(--green-dark);"><i class="fas fa-map-pin"></i> On Map</a>
          </div>
        </div>
      </article>
    `).join('');
    // Re-init AOS
    document.querySelectorAll('[data-aos]').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('aos-animate'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  }

  render('all');

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
      // Re-attach modal openers after render
      attachModalOpeners();
    });
  });

  attachModalOpeners();

  function attachModalOpeners() {
    document.querySelectorAll('.open-modal').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.id));
    });
  }
})();

// Modal
function openModal(id) {
  const site = HERITAGE_SITES.find(s => s.id === id);
  if (!site) return;
  const modal = document.getElementById('siteModal');
  const header = document.getElementById('modalHeader');
  const body = document.getElementById('modalBody');
  if (!modal || !header || !body) return;

  header.style.background = site.iconColor;
  header.innerHTML = `<i class="fas ${site.icon}" style="font-size:6rem;color:rgba(255,215,0,0.8)"></i>`;
  body.innerHTML = `
    <h2>${site.name}</h2>
    <div class="modal-meta">
      <span><i class="fas fa-map-pin"></i> ${site.location}</span>
      <span><i class="fas fa-calendar"></i> Est. ${site.year}</span>
      <span><i class="fas fa-star" style="color:var(--gold-mid)"></i> ${site.rating}/5.0</span>
      <span><i class="fas fa-clock"></i> ${site.openHours}</span>
    </div>
    <p>${site.longDescription}</p>
    <h3>Key Facts</h3>
    <ul>${site.facts.map(f => `<li>${f}</li>`).join('')}</ul>
    <div class="card-tags" style="margin-top:1.25rem;">${site.tags.map(t=>`<span>${t}</span>`).join('')}</div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

const modalClose = document.getElementById('modalClose');
const modal = document.getElementById('siteModal');
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
function closeModal() {
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Timeline
(function renderTimeline() {
  const container = document.getElementById('heritageTimeline');
  if (!container) return;
  container.innerHTML = TIMELINE_DATA.map((item, i) => `
    <div class="timeline-item" data-aos="${i % 2 === 0 ? 'fade-right' : 'fade-left'}">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-content">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
})();

// Audio Guides
(function renderAudioGuides() {
  const container = document.getElementById('audioGuides');
  if (!container) return;
  container.innerHTML = AUDIO_GUIDES.map(g => `
    <div class="audio-guide-card" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,215,0,0.3);border-radius:12px;padding:1.5rem;color:#fff;">
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
        <div style="width:48px;height:48px;border-radius:50%;background:var(--gold-mid);display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#fff;flex-shrink:0;">
          <i class="fas ${g.icon}"></i>
        </div>
        <div>
          <h4 style="font-size:0.95rem;font-weight:700;margin-bottom:0.2rem;">${g.title}</h4>
          <span style="font-size:0.78rem;color:rgba(255,215,0,0.8)"><i class="fas fa-clock"></i> ${g.duration}</span>
        </div>
      </div>
      <p style="font-size:0.85rem;color:rgba(255,255,255,0.75);margin-bottom:1rem;">${g.desc}</p>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <button onclick="toggleAudio(this)" style="background:var(--gold-mid);border:none;width:36px;height:36px;border-radius:50%;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-play"></i>
        </button>
        <div style="flex:1;height:4px;background:rgba(255,255,255,0.2);border-radius:2px;overflow:hidden;">
          <div class="audio-progress" style="height:100%;width:0;background:var(--gold-bright);transition:width 0.3s;"></div>
        </div>
        <span style="font-size:0.75rem;color:rgba(255,255,255,0.6);">${g.duration}</span>
      </div>
    </div>
  `).join('');
})();

function toggleAudio(btn) {
  const icon = btn.querySelector('i');
  const bar = btn.closest('[style*="rgba"]').querySelector('.audio-progress');
  if (icon.classList.contains('fa-play')) {
    icon.classList.replace('fa-play', 'fa-pause');
    // Simulate audio progress
    let w = 0;
    const timer = setInterval(() => {
      w = Math.min(w + 0.5, 100);
      if (bar) bar.style.width = w + '%';
      if (w >= 100) {
        clearInterval(timer);
        icon.classList.replace('fa-pause', 'fa-play');
        if (bar) bar.style.width = '0';
      }
    }, 100);
    btn._timer = timer;
  } else {
    icon.classList.replace('fa-pause', 'fa-play');
    if (btn._timer) clearInterval(btn._timer);
  }
}
