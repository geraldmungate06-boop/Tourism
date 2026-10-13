// ========== GALLERY PAGE JAVASCRIPT ==========
'use strict';

const GALLERY_ITEMS = [
  { id:1, category:'campus', icon:'fa-university', color:'linear-gradient(135deg,#1b5e20,#4caf50)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/06/K1024_IMG_0007.jpg', title:"Students' Life", caption:'MSU students in a campus gathering at Midlands State University.', height:280 },
  { id:2, category:'heritage', icon:'fa-landmark', color:'linear-gradient(135deg,#b8860b,#c8a000)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-30-at-18.35.52.jpeg', title:'Innovation Week', caption:'Midlands State University celebrates innovation and academic achievement on campus.', height:200 },
  { id:3, category:'nature', icon:'fa-tree', color:'linear-gradient(135deg,#388e3c,#1b5e20)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/K1600_187A0056-480x320.jpg', title:'Campus Grounds', caption:'MSU campus landscape and surrounding academic environment.', height:320 },
  { id:4, category:'students', icon:'fa-graduation-cap', color:'linear-gradient(135deg,#2d7d32,#8b6914)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/07/K1024_edu-1-480x320.jpg', title:'Academic Life', caption:'Students immersed in learning and campus life at Midlands State University.', height:250 },
  { id:5, category:'events', icon:'fa-masks-theater', color:'linear-gradient(135deg,#7b1fa2,#4a148c)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/820291833_1619902352897279_790328230157631792_n-480x320.jpg', title:'MSU Event', caption:'A lively university event organized by the Midlands State University community.', height:220 },
  { id:6, category:'campus', icon:'fa-book', color:'linear-gradient(135deg,#1565c0,#0d47a1)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/07/K1024_medicinee-480x320.jpg', title:'Learning Environment', caption:'An academic setting that reflects the spirit of learning at MSU.', height:300 },
  { id:7, category:'nature', icon:'fa-seedling', color:'linear-gradient(135deg,#2e7d32,#388e3c)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/07/bsn-1-480x320.webp', title:'MSU Community', caption:'The university community and green campus atmosphere.', height:200 },
  { id:8, category:'students', icon:'fa-running', color:'linear-gradient(135deg,#c62828,#b71c1c)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/WhatsApp-Image-2026-08-30-at-01.09.38.jpeg', title:'Student Engagement', caption:'Students actively participating in university activities and gatherings.', height:260 },
  { id:9, category:'heritage', icon:'fa-book-open', color:'linear-gradient(135deg,#4e342e,#3e2723)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/10/187A3667-480x320.jpg', title:'Heritage & Pride', caption:'MSU heritage and institutional pride captured through campus life.', height:230 },
  { id:10, category:'campus', icon:'fa-flask', color:'linear-gradient(135deg,#1b5e20,#2d7d32)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/06/K1024_IMG_0007.jpg', title:'Campus Culture', caption:'A welcoming campus culture defined by student energy and togetherness.', height:200 },
  { id:11, category:'events', icon:'fa-music', color:'linear-gradient(135deg,#b8860b,#8b6914)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-30-at-18.35.52.jpeg', title:'MSU Celebration', caption:'A moment of celebration and recognition at Midlands State University.', height:280 },
  { id:12, category:'nature', icon:'fa-mountain', color:'linear-gradient(135deg,#37474f,#263238)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/775213612_940696085727532_3871880173772086868_n-480x320.jpg', title:'Campus Atmosphere', caption:'The calm, vibrant environment of Midlands State University.', height:350 },
  { id:13, category:'students', icon:'fa-users', color:'linear-gradient(135deg,#00695c,#004d40)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/07/K1024_edu-1-480x320.jpg', title:'Student Community', caption:'Students collaborating, learning, and building community at MSU.', height:210 },
  { id:14, category:'campus', icon:'fa-bed', color:'linear-gradient(135deg,#1565c0,#283593)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/K1600_187A0056-480x320.jpg', title:'MSU Campus', caption:'The university environment where academic excellence is cultivated.', height:240 },
  { id:15, category:'heritage', icon:'fa-monument', color:'linear-gradient(135deg,#8b6914,#c8a000)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/10/187A3667-480x320.jpg', title:'Campus Identity', caption:'A visual reflection of Midlands State University identity and commitment.', height:270 },
  { id:16, category:'events', icon:'fa-trophy', color:'linear-gradient(135deg,#c62828,#b71c1c)', image:'https://www.msu.ac.zw/wp-content/uploads/2026/09/820291833_1619902352897279_790328230157631792_n-480x320.jpg', title:'Recognition Day', caption:'Official university recognition and public celebration of student achievement.', height:220 },
  { id:17, category:'campus', icon:'fa-utensils', color:'linear-gradient(135deg,#e65100,#bf360c)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/07/K1024_medicinee-480x320.jpg', title:'Campus Life', caption:'Daily university life and learning experiences at Midlands State University.', height:200 },
  { id:18, category:'nature', icon:'fa-butterfly', color:'linear-gradient(135deg,#6a1b9a,#4a148c)', image:'https://www.msu.ac.zw/wp-content/uploads/2025/07/bsn-1-480x320.webp', title:'MSU Spirit', caption:'The vibrant spirit and energy that define the Midlands State University community.', height:260 },
];

let currentIndex = 0;
let filtered = [...GALLERY_ITEMS];

function renderGallery(filter) {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  filtered = filter === 'all' ? [...GALLERY_ITEMS] : GALLERY_ITEMS.filter(i => i.category === filter);
  grid.innerHTML = filtered.map((item, idx) => `
    <div class="gallery-item" data-idx="${idx}" style="height:${item.height}px;">
      <div class="gallery-item-inner" style="background-image:linear-gradient(135deg, rgba(19, 79, 37, 0.35), rgba(0,0,0,0.45)), url('${item.image}'); background-size:cover; background-position:center; background-repeat:no-repeat; height:100%; width:100%; font-size:${Math.round(item.height/4)}px; color:rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; border-radius:18px; overflow:hidden;">
        <div class="gallery-overlay">
          <i class="fas ${item.icon}"></i>
          <span>${item.title}</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => openLightbox(parseInt(el.dataset.idx)));
  });
}

renderGallery('all');

document.querySelectorAll('[data-gfilter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-gfilter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.gfilter);
  });
});

// Lightbox
function openLightbox(idx) {
  currentIndex = idx;
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.add('open');
  showLightboxItem(idx);
  document.body.style.overflow = 'hidden';
}

function showLightboxItem(idx) {
  const item = filtered[idx];
  if (!item) return;
  const content = document.getElementById('lbContent');
  const caption = document.getElementById('lbCaption');
  if (content) {
    content.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="max-width:100%; max-height:75vh; object-fit:cover; border-radius:18px; box-shadow:0 25px 50px rgba(0,0,0,0.35);" />
    `;
  }
  if (caption) caption.innerHTML = `<strong>${item.title}</strong> — ${item.caption} <span style="color:rgba(255,255,255,0.4);margin-left:1rem;">${idx+1} / ${filtered.length}</span>`;
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
document.getElementById('lbPrev')?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
  showLightboxItem(currentIndex);
});
document.getElementById('lbNext')?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % filtered.length;
  showLightboxItem(currentIndex);
});
document.getElementById('lightbox')?.addEventListener('click', e => {
  if (e.target.id === 'lightbox') closeLightbox();
});
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb?.classList.contains('open')) return;
  if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + filtered.length) % filtered.length; showLightboxItem(currentIndex); }
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % filtered.length; showLightboxItem(currentIndex); }
  if (e.key === 'Escape') closeLightbox();
});
