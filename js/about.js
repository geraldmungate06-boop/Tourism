// ========== ABOUT PAGE JAVASCRIPT ==========
'use strict';

const DEPARTMENTS = [
  { id:'fas', name:'Faculty of Applied Sciences', icon:'fa-flask', color:'#2d7d32', desc:'The flagship faculty offering programmes in Chemistry, Physics, Biology, and Applied Mathematics. Equipped with state-of-the-art laboratories and research centres.', courses:['BSc Chemistry', 'BSc Physics', 'BSc Biology', 'BSc Applied Mathematics', 'BSc Environmental Science', 'BSc Geology'] },
  { id:'fict', name:'Faculty of ICT', icon:'fa-laptop-code', color:'#1565c0', desc:'Leading the digital transformation agenda with programmes in computer science, software engineering, cybersecurity, and data science for the 4th Industrial Revolution.', courses:['BSc Computer Science', 'BSc Software Engineering', 'BSc Cybersecurity', 'HND ICT', 'BSc Data Science', 'Diploma in Networking'] },
  { id:'fbs', name:'Faculty of Business Sciences', icon:'fa-briefcase', color:'#b8860b', desc:'Producing business leaders and entrepreneurs equipped to drive economic development in Zimbabwe and the broader African continent.', courses:['BCom Accounting', 'BCom Finance', 'BCom Marketing', 'BCom Human Resources', 'BSc Economics', 'Diploma in Business Admin'] },
  { id:'fes', name:'Faculty of Environmental Sciences', icon:'fa-leaf', color:'#388e3c', desc:'Dedicated to environmental research, conservation, and sustainable development. Custodians of the MSUAS Botanical Garden and Nature Trail.', courses:['BSc Environmental Science', 'BSc Geography', 'BSc Ecology', 'BSc Conservation Biology', 'HND Environmental Health'] },
  { id:'fta', name:'Faculty of Tourism, Arts & Heritage', icon:'fa-landmark', color:'#c8a000', desc:'A unique faculty combining tourism management, cultural heritage, creative arts, and hospitality — leveraging Manicaland\'s rich cultural and natural resources.', courses:['BSc Tourism & Heritage', 'BA Cultural Studies', 'HND Hospitality', 'Diploma in Visual Arts', 'BSc Tourism Management', 'BA Fine Arts'] },
  { id:'fhe', name:'Faculty of Health Sciences', icon:'fa-stethoscope', color:'#c62828', desc:'Training healthcare professionals to serve Zimbabwe\'s health sector, with a strong emphasis on community and public health in Manicaland.', courses:['BSc Nursing', 'BSc Public Health', 'BSc Environmental Health', 'Diploma Pharmacy Tech', 'HND Health Services Management'] },
];

const LEADERSHIP = [
  { name:'Prof. J. Mutambirwa', role:'Vice-Chancellor', icon:'fa-user-tie', bg:'linear-gradient(135deg,#1b5e20,#2d7d32)' },
  { name:'Dr. R. Chigwanda', role:'Deputy VC — Academics', icon:'fa-graduation-cap', bg:'linear-gradient(135deg,#b8860b,#c8a000)' },
  { name:'Dr. S. Pfidze', role:'Deputy VC — Finance', icon:'fa-chart-line', bg:'linear-gradient(135deg,#1565c0,#0d47a1)' },
  { name:'Prof. A. Mazarura', role:'Dean of Applied Sciences', icon:'fa-flask', bg:'linear-gradient(135deg,#2d7d32,#4caf50)' },
  { name:'Dr. T. Mutasa', role:'Dean of ICT', icon:'fa-laptop-code', bg:'linear-gradient(135deg,#1565c0,#283593)' },
  { name:'Ms. C. Bhila', role:'Registrar', icon:'fa-user-cog', bg:'linear-gradient(135deg,#8b6914,#b8860b)' },
  { name:'Mr. K. Chimba', role:'Dean of Student Affairs', icon:'fa-users', bg:'linear-gradient(135deg,#00695c,#004d40)' },
  { name:'Dr. N. Chuma', role:'Director, Heritage Center', icon:'fa-landmark', bg:'linear-gradient(135deg,#c8a000,#f57f17)' },
];

// Render Departments
(function renderDepts() {
  const container = document.getElementById('deptAccordion');
  if (!container) return;
  container.innerHTML = DEPARTMENTS.map(d => `
    <div class="dept-item" data-id="${d.id}">
      <div class="dept-header" role="button" tabindex="0" aria-expanded="false">
        <div class="dept-icon" style="background:${d.color}"><i class="fas ${d.icon}"></i></div>
        <h4>${d.name}</h4>
        <span style="margin-left:auto;color:var(--gray-600);font-size:0.8rem;margin-right:0.5rem;">${d.courses.length} programmes</span>
        <i class="fas fa-chevron-down dept-toggle"></i>
      </div>
      <div class="dept-body">
        <p>${d.desc}</p>
        <h3 style="font-size:0.85rem;font-weight:700;color:var(--green-dark);margin-bottom:0.5rem;">Programmes Offered:</h3>
        <div class="dept-courses">${d.courses.map(c => `<span>${c}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.dept-header').forEach(header => {
    header.addEventListener('click', () => toggleDept(header));
    header.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') toggleDept(header); });
  });
})();

function toggleDept(header) {
  const isOpen = header.classList.contains('open');
  // Close all
  document.querySelectorAll('.dept-header').forEach(h => {
    h.classList.remove('open');
    h.setAttribute('aria-expanded','false');
    const body = h.nextElementSibling;
    if (body) body.classList.remove('open');
  });
  if (!isOpen) {
    header.classList.add('open');
    header.setAttribute('aria-expanded','true');
    const body = header.nextElementSibling;
    if (body) body.classList.add('open');
  }
}

// Render Team
(function renderTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  grid.innerHTML = LEADERSHIP.map(l => `
    <div class="team-card" data-aos="fade-up">
      <div class="team-avatar" style="background:${l.bg}"><i class="fas ${l.icon}"></i></div>
      <div class="team-info">
        <h4>${l.name}</h4>
        <p>${l.role}</p>
        <div class="team-socials">
          <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  `).join('');
})();

// Animate stat numbers on about page
(function animateStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(el => {
          if (window.MSUAS) window.MSUAS.animateNumber(el);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  const statSection = document.querySelector('.about-grid');
  if (statSection) observer.observe(statSection);
})();

// Contact Form Validation
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  let valid = true;

  function validate(name, errId, condition) {
    const el = form.elements[name];
    const err = document.getElementById(errId);
    if (!el || !err) return;
    if (!condition(el.value.trim())) {
      err.classList.add('show'); valid = false;
    } else {
      err.classList.remove('show');
    }
  }

  validate('fname', 'fnameErr', v => v.length > 1);
  validate('lname', 'lnameErr', v => v.length > 1);
  validate('email', 'emailErr', v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));
  validate('message', 'msgErr', v => v.length > 10);

  if (valid) {
    const msg = document.getElementById('contactMsg');
    const fname = form.elements['fname'].value.trim();
    if (msg) {
      msg.textContent = `✅ Thank you, ${fname}! Your message has been sent. We'll respond within 24–48 hours.`;
      msg.style.color = 'var(--green-dark)';
    }
    form.reset();
    setTimeout(() => { if(msg) msg.textContent = ''; }, 8000);
  }
});
