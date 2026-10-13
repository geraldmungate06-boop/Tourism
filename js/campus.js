// ========== CAMPUS TOUR PAGE JAVASCRIPT ==========
'use strict';

const BUILDINGS = [
  { id:'admin', name:'Administration Block', type:'academic', color:'#2d7d32', icon:'fa-university', x:12, y:12, desc:'Main administration, vice-chancellor office, registrar and student affairs.', hours:'Mon-Fri 7AM-5PM', floor:'3 Floors', capacity:'200 Staff' },
  { id:'lib', name:'Main Library', type:'academic', color:'#2d7d32', icon:'fa-book', x:40, y:12, desc:'Central library with 50,000+ volumes, digital resources, study rooms, and research databases.', hours:'Mon-Fri 7AM-8PM | Sat 9AM-4PM', floor:'4 Floors', capacity:'600 Students' },
  { id:'scilab', name:'Science Laboratories', type:'academic', color:'#2d7d32', icon:'fa-flask', x:70, y:12, desc:'State-of-the-art science labs for chemistry, physics, biology, and applied research.', hours:'Mon-Fri 8AM-6PM', floor:'2 Floors', capacity:'400 Students' },
  { id:'ict', name:'ICT Center', type:'academic', color:'#2d7d32', icon:'fa-laptop-code', x:12, y:38, desc:'Computer labs, software development studios, and the university data center.', hours:'Mon-Fri 7AM-9PM | Sat 8AM-4PM', floor:'2 Floors', capacity:'350 Students' },
  { id:'heritage', name:'Heritage & Cultural Center', type:'services', color:'#b8860b', icon:'fa-landmark', x:40, y:38, desc:'The heart of MSUAS heritage. Houses exhibits, the Heritage Library Archive, and the Nyika Cultural Center.', hours:'Mon-Sat 8AM-8PM | Sun 12PM-6PM', floor:'3 Floors', capacity:'500 Visitors' },
  { id:'students', name:'Student Center', type:'services', color:'#b8860b', icon:'fa-users', x:70, y:38, desc:'Student union, clubs offices, counselling, career center, and student support services.', hours:'Mon-Fri 8AM-8PM | Sat 9AM-4PM', floor:'2 Floors', capacity:'800 Students' },
  { id:'hostels', name:'Student Hostels', type:'residential', color:'#1565c0', icon:'fa-bed', x:12, y:65, desc:'On-campus accommodation for 1,200 students across 6 residence blocks with common rooms and laundry.', hours:'24 Hours', floor:'4-5 Floors', capacity:'1,200 Students' },
  { id:'sports', name:'Sports Complex', type:'sports', color:'#c62828', icon:'fa-running', x:40, y:65, desc:'Football pitch, basketball courts, swimming pool, gym, and indoor sports hall.', hours:'Mon-Sat 6AM-8PM | Sun 8AM-4PM', floor:'Ground + Stands', capacity:'2,000 Spectators' },
  { id:'cafeteria', name:'Main Cafeteria', type:'services', color:'#b8860b', icon:'fa-utensils', x:70, y:65, desc:'Main dining facility serving breakfast, lunch and dinner. Vegetarian and dietary options available.', hours:'Daily 6AM-8PM', floor:'1 Floor', capacity:'600 Diners' },
  { id:'clinic', name:'Campus Health Clinic', type:'services', color:'#b8860b', icon:'fa-clinic-medical', x:82, y:25, desc:'Student health center offering primary healthcare, counselling, and emergency services.', hours:'Mon-Fri 7AM-8PM | 24hr Emergency', floor:'1 Floor', capacity:'50 Beds' },
  { id:'chapel', name:'Multi-Faith Chapel', type:'services', color:'#b8860b', icon:'fa-place-of-worship', x:22, y:52, desc:'Interdenominational space for prayer, meditation, and spiritual reflection.', hours:'Daily 6AM-10PM', floor:'1 Floor', capacity:'150 Persons' },
];

const FACILITIES = [
  { name:'Main Library', icon:'fa-book', color:'var(--green-mid)', desc:'50,000+ volumes, digital databases, 600 study seats', status:'open', hours:'7AM–8PM' },
  { name:'Science Labs', icon:'fa-flask', color:'var(--green-dark)', desc:'Chemistry, Physics, Biology & Applied Research labs', status:'open', hours:'8AM–6PM' },
  { name:'ICT Center', icon:'fa-laptop-code', color:'#1565c0', desc:'450 computers, high-speed WiFi, software dev studios', status:'open', hours:'7AM–9PM' },
  { name:'Sports Complex', icon:'fa-running', color:'#c62828', desc:'Pool, gym, football pitch, courts, indoor hall', status:'open', hours:'6AM–8PM' },
  { name:'Student Hostels', icon:'fa-bed', color:'#1565c0', desc:'1,200 beds, common rooms, laundry facilities', status:'open', hours:'24 Hours' },
  { name:'Main Cafeteria', icon:'fa-utensils', color:'var(--gold-mid)', desc:'Breakfast, lunch & dinner, dietary options available', status:'open', hours:'6AM–8PM' },
  { name:'Health Clinic', icon:'fa-stethoscope', color:'#c62828', desc:'Primary care, counselling, 24hr emergency services', status:'open', hours:'7AM–8PM' },
  { name:'Heritage Center', icon:'fa-landmark', color:'var(--gold-dark)', desc:'Cultural exhibits, archive, Nyika Cultural Center', status:'open', hours:'8AM–8PM' },
  { name:'Botanical Garden', icon:'fa-seedling', color:'var(--green-light)', desc:'3-hectare indigenous garden, butterfly sanctuary', status:'open', hours:'7AM–6PM' },
  { name:'Great Hall', icon:'fa-theater-masks', color:'var(--green-dark)', desc:'2,000 seat auditorium for ceremonies & events', status:'limited', hours:'Events Only' },
  { name:'Parking', icon:'fa-parking', color:'var(--gray-600)', desc:'800 parking bays, 24hr security surveillance', status:'open', hours:'24 Hours' },
  { name:'Chapel', icon:'fa-place-of-worship', color:'#7b1fa2', desc:'Multi-faith space, counselling & meditation rooms', status:'open', hours:'6AM–10PM' },
];

const VR_SPOTS = [
  { id:'main-gate', label:'Main Gate', icon:'fa-archway' },
  { id:'founders-hall', label:"Founders' Hall", icon:'fa-university' },
  { id:'library', label:'Library Atrium', icon:'fa-book' },
  { id:'great-hall', label:'The Great Hall', icon:'fa-theater-masks' },
  { id:'garden', label:'Botanical Garden', icon:'fa-seedling' },
  { id:'sports', label:'Sports Complex', icon:'fa-running' },
];

const TRANSPORT = [
  { icon:'fa-bus', mode:'By Bus', desc:'ZUPCO and private buses run from Mutare City Centre to MSUAS every 30 minutes, 5AM–8PM.' },
  { icon:'fa-car', mode:'By Car', desc:'Take Bvumba Road from Mutare CBD. MSUAS is 4km from the city center, about 10 minutes drive.' },
  { icon:'fa-taxi', mode:'By Taxi', desc:'Taxis available from Mutare Rank. Ask for MSUAS Main Campus. Estimated \$3-5 from city center.' },
  { icon:'fa-walking', mode:'On Foot', desc:'The campus is 45 minutes walk from Mutare CBD via Aerodrome Road through the university area.' },
];

// Tabs
document.querySelectorAll('.campus-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.campus-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.campus-tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const id = 'tab-' + tab.dataset.tab;
    const content = document.getElementById(id);
    if (content) content.classList.add('active');
  });
});

// Render Full Map
(function renderMap() {
  const map = document.getElementById('fullMap');
  if (!map) return;

  BUILDINGS.forEach(b => {
    const el = document.createElement('div');
    el.className = 'map-building';
    el.style.cssText = `top:${b.y}%;left:${b.x}%;border-color:${b.color};`;
    el.innerHTML = `<i class="fas ${b.icon}" style="color:${b.color}"></i><span>${b.name.split(' ')[0]}</span>`;
    el.addEventListener('click', () => showBuildingInfo(b));
    map.appendChild(el);
  });

  // Paths
  ['28','60'].forEach(top => {
    const p = document.createElement('div');
    p.className='map-path h';
    p.style.cssText=`top:${top}%;left:5%;width:90%;`;
    map.appendChild(p);
  });
  ['35','65'].forEach(left => {
    const p = document.createElement('div');
    p.className='map-path v';
    p.style.cssText=`top:5%;left:${left}%;height:90%;`;
    map.appendChild(p);
  });
})();

function showBuildingInfo(b) {
  const info = document.getElementById('buildingInfo');
  const name = document.getElementById('bldName');
  const desc = document.getElementById('bldDesc');
  const meta = document.getElementById('bldMeta');
  if (!info) return;
  info.style.display = 'block';
  info.style.borderLeftColor = b.color;
  if (name) name.textContent = b.name;
  if (desc) desc.textContent = b.desc;
  if (meta) meta.innerHTML = `
    <span><i class="fas fa-clock" style="color:${b.color}"></i> ${b.hours}</span>
    <span><i class="fas fa-layer-group" style="color:${b.color}"></i> ${b.floor}</span>
    <span><i class="fas fa-users" style="color:${b.color}"></i> ${b.capacity}</span>
  `;
  info.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

// Map zoom controls
(function initMapControls() {
  const map = document.querySelector('.full-map-inner');
  if (!map) return;
  let scale = 1;
  document.getElementById('mapZoomIn')?.addEventListener('click', () => { scale = Math.min(scale + 0.15, 1.8); map.style.transform = `scale(${scale})`; map.style.transformOrigin = 'center center'; });
  document.getElementById('mapZoomOut')?.addEventListener('click', () => { scale = Math.max(scale - 0.15, 0.7); map.style.transform = `scale(${scale})`; });
  document.getElementById('mapReset')?.addEventListener('click', () => { scale = 1; map.style.transform = 'scale(1)'; });
})();

// Render Facilities
(function renderFacilities() {
  const grid = document.getElementById('facilityGrid');
  if (!grid) return;
  grid.innerHTML = FACILITIES.map(f => `
    <div class="facility-card" data-aos="fade-up">
      <div class="fac-icon" style="background:${f.color}"><i class="fas ${f.icon}"></i></div>
      <h4>${f.name}</h4>
      <p>${f.desc}</p>
      <p style="font-size:0.78rem;color:var(--gray-600);margin-top:0.5rem;"><i class="fas fa-clock" style="color:${f.color}"></i> ${f.hours}</p>
      <span class="fac-status ${f.status}">${f.status === 'open' ? '● Open Now' : f.status === 'closed' ? '● Closed' : '⚠ Limited Access'}</span>
    </div>
  `).join('');
})();

// Render VR Spots
(function renderVR() {
  const container = document.getElementById('vrSpots');
  const viewer = document.getElementById('vrViewer');
  if (!container) return;
  container.innerHTML = VR_SPOTS.map(s => `
    <div class="vr-spot" data-id="${s.id}">
      <i class="fas ${s.icon}"></i>
      <span>${s.label}</span>
    </div>
  `).join('');
  container.querySelectorAll('.vr-spot').forEach(spot => {
    spot.addEventListener('click', () => {
      container.querySelectorAll('.vr-spot').forEach(s => s.classList.remove('active'));
      spot.classList.add('active');
      if (viewer) {
        viewer.innerHTML = `
          <div style="text-align:center;padding:2rem;">
            <div style="font-size:5rem;margin-bottom:1rem;animation:spin 3s linear infinite;display:inline-block;color:var(--gold-bright)">
              <i class="fas fa-vr-cardboard"></i>
            </div>
            <h3 style="color:#fff;margin-bottom:0.5rem;">Loading: ${VR_SPOTS.find(v=>v.id===spot.dataset.id)?.label}</h3>
            <p style="color:rgba(255,255,255,0.7);font-size:0.85rem;">In the full version, a 360° panoramic view would be displayed here.</p>
            <p style="color:rgba(255,255,255,0.5);font-size:0.78rem;margin-top:0.5rem;">Add panoramic images to <code>images/vr/</code> and integrate with A-Frame or Pannellum.</p>
          </div>`;
      }
    });
  });
})();

// Render Directions
(function renderDirections() {
  const container = document.getElementById('directionsInfo');
  if (!container) return;
  container.innerHTML = `
    <p style="color:var(--gray-600);margin-bottom:1.5rem;">Manicaland State University of Applied Sciences (MSUAS) is centrally located in Mutare, the capital of Manicaland Province, Zimbabwe.</p>
    <div style="display:grid;gap:1rem;">
      ${TRANSPORT.map(t => `
        <div style="display:flex;gap:1rem;align-items:flex-start;background:var(--green-pale);padding:1rem;border-radius:8px;">
          <div style="width:42px;height:42px;border-radius:50%;background:var(--green-mid);display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;"><i class="fas ${t.icon}"></i></div>
          <div><h4 style="color:var(--green-dark);font-weight:700;margin-bottom:0.25rem;">${t.mode}</h4><p style="font-size:0.875rem;color:var(--gray-600);">${t.desc}</p></div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:1.5rem;padding:1rem;background:var(--gold-pale);border-radius:8px;border-left:4px solid var(--gold-mid);">
      <h4 style="color:var(--gold-dark);margin-bottom:0.4rem;"><i class="fas fa-map-pin"></i> Address</h4>
      <p style="font-size:0.875rem;color:var(--gray-700,#555);">Manicaland State University of Applied Sciences<br/>P.O. Box 523, Mutare, Manicaland, Zimbabwe<br/>GPS Coordinates: 18.9761° S, 32.6709° E</p>
    </div>
  `;
})();
