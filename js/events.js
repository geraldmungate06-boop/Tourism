// ========== EVENTS PAGE JAVASCRIPT ==========
'use strict';

const ALL_EVENTS = [
  { id:1, day:18, month:'Oct', monthNum:10, year:2025, tag:'Cultural', tagColor:'#2d7d32', title:'Manicaland Heritage Day Festival', desc:'Annual celebration of Manicaland culture, arts, traditional music and community traditions. Features live performances, food stalls, and craft markets.', time:'09:00 AM – 6:00 PM', venue:'Main Quadrangle', organiser:'Cultural Affairs Office', highlight:true },
  { id:2, day:25, month:'Oct', monthNum:10, year:2025, tag:'Academic', tagColor:'#1565c0', title:'Open Day 2025', desc:"Prospective students and parents explore the campus, meet faculty members, and learn about MSUAS programmes and admission requirements.", time:'08:00 AM – 4:00 PM', venue:'All Campus', organiser:'Admissions Office', highlight:false },
  { id:3, day:2, month:'Nov', monthNum:11, year:2025, tag:'Sports', tagColor:'#c62828', title:'Inter-University Sports Gala', desc:'MSUAS hosts the regional inter-university sports championship featuring football, basketball, volleyball, athletics, and swimming.', time:'07:00 AM – 6:00 PM', venue:'Sports Complex', organiser:'Sports Department', highlight:false },
  { id:4, day:8, month:'Nov', monthNum:11, year:2025, tag:'Academic', tagColor:'#1565c0', title:'Research Symposium & Innovation Expo', desc:"Annual showcase of student and faculty research innovations. This year's theme: 'Technology for Sustainable Development in Manicaland.'", time:'09:00 AM – 5:00 PM', venue:'Great Hall', organiser:'Research Office', highlight:false },
  { id:5, day:15, month:'Nov', monthNum:11, year:2025, tag:'Arts', tagColor:'#7b1fa2', title:'Annual Arts & Crafts Exhibition', desc:'Student and faculty showcase of fine arts, sculpture, photography, and crafts inspired by Manicaland cultural heritage and the natural environment.', time:'10:00 AM – 7:00 PM', venue:'Heritage Cultural Center', organiser:'Faculty of Arts', highlight:true },
  { id:6, day:20, month:'Nov', monthNum:11, year:2025, tag:'Cultural', tagColor:'#2d7d32', title:'Nyika Heritage Night', desc:"An evening of traditional Shona music, mbira performances, storytelling, and culinary heritage celebrating Manicaland's cultural wealth.", time:'05:00 PM – 10:00 PM', venue:'Nyika Cultural Center', organiser:'Cultural Affairs', highlight:false },
  { id:7, day:29, month:'Nov', monthNum:11, year:2025, tag:'Academic', tagColor:'#1565c0', title:'Graduation Ceremony 2025', desc:'Annual graduation ceremony celebrating the Class of 2025. Featuring keynote address by guest speaker and honorary degree awards.', time:'10:00 AM – 2:00 PM', venue:'The Great Hall', organiser:"Vice-Chancellor's Office", highlight:true },
  { id:8, day:6, month:'Dec', monthNum:12, year:2025, tag:'Cultural', tagColor:'#2d7d32', title:'End-of-Year Cultural Gala', desc:'Closing ceremony of the academic year featuring traditional music and dance, student performances, student awards, and festive food.', time:'05:00 PM – Late', venue:"Founders' Hall", organiser:'Student Affairs', highlight:false },
];

const TAG_COLORS = { Cultural:'#2d7d32', Academic:'#1565c0', Sports:'#c62828', Arts:'#7b1fa2' };
const EVENT_DAYS = [2, 8, 15, 18, 20, 25, 29, 6];

// ---- Render Events ----
function renderEvents(filter) {
  const grid = document.getElementById('eventsFullGrid');
  if (!grid) return;
  const events = filter === 'all' ? ALL_EVENTS : ALL_EVENTS.filter(e => e.tag === filter);
  if (!events.length) { grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--gray-600);">No events found for this category.</p>'; return; }
  grid.innerHTML = events.map(e => `
    <article class="event-full-card" data-id="${e.id}" ${e.highlight ? 'style="border:2px solid var(--gold-mid);"' : ''}>
      ${e.highlight ? '<div style="background:linear-gradient(90deg,var(--gold-mid),var(--gold-light));color:#fff;font-size:0.7rem;font-weight:700;padding:0.3rem 1rem;letter-spacing:1px;">★ FEATURED EVENT</div>' : ''}
      <div class="event-card-header">
        <div class="event-big-date">
          <div class="big-day">${e.day}</div>
          <div class="big-month">${e.month}</div>
          <div class="big-month" style="font-size:0.6rem;">${e.year}</div>
        </div>
        <div class="event-card-info">
          <span class="event-tag" style="background:${TAG_COLORS[e.tag]}20;color:${TAG_COLORS[e.tag]}">${e.tag}</span>
          <h3>${e.title}</h3>
          <p><i class="fas fa-user-tie" style="color:${TAG_COLORS[e.tag]}"></i> ${e.organiser}</p>
        </div>
      </div>
      <div class="event-card-body">
        <p>${e.desc}</p>
        <div class="event-card-footer">
          <span class="event-detail"><i class="fas fa-clock"></i> ${e.time}</span>
          <span class="event-detail"><i class="fas fa-map-pin"></i> ${e.venue}</span>
          <button type="button" class="btn btn-sm btn-primary register-event-btn" style="margin-top:0.5rem;"><i class="fas fa-ticket-alt"></i> Register</button>
        </div>
        <form class="event-registration-form" data-event-id="${e.id}" style="display:none;gap:0.5rem;margin-top:1rem;">
          <label for="eventEmail${e.id}">Email address to register</label>
          <input type="email" id="eventEmail${e.id}" name="email" autocomplete="email" required placeholder="you@example.com" style="padding:0.6rem 0.9rem;border:1px solid var(--gray-300);border-radius:6px;">
          <div style="display:flex;gap:0.5rem;">
            <button type="submit" class="btn btn-sm btn-primary">Confirm Registration</button>
            <button type="button" class="btn btn-sm cancel-registration-btn">Cancel</button>
          </div>
        </form>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.register-event-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const form = btn.closest('.event-card-body').querySelector('.event-registration-form');
      btn.hidden = true;
      form.style.display = 'grid';
      form.querySelector('input[type="email"]').focus();
    });
  });

  grid.querySelectorAll('.cancel-registration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const form = btn.closest('.event-registration-form');
      form.style.display = 'none';
      form.closest('.event-card-body').querySelector('.register-event-btn').hidden = false;
      form.reset();
    });
  });

  grid.querySelectorAll('.event-registration-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const event = ALL_EVENTS.find(item => item.id === Number(form.dataset.eventId));
      if (!event) return;
      const email = form.elements.email.value.trim();
      alert(`✅ You have successfully registered for "${event.title}" on ${event.day} ${event.month} ${event.year} with the email address ${email}.`);
      form.style.display = 'none';
      form.closest('.event-card-body').querySelector('.register-event-btn').hidden = false;
      form.reset();
    });
  });
}

renderEvents('all');

document.querySelectorAll('[data-efilter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-efilter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderEvents(btn.dataset.efilter);
  });
});

// ---- Calendar ----
let calYear = 2025, calMonth = 9; // Oct = 9 (0-indexed)
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function renderCalendar() {
  const title = document.getElementById('calTitle');
  const grid = document.getElementById('calGrid');
  if (!title || !grid) return;
  title.textContent = MONTHS[calMonth] + ' ' + calYear;

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date();
  const eventMonthDays = ALL_EVENTS.filter(e => e.monthNum === calMonth + 1 && e.year === calYear).map(e => e.day);

  let html = DAYS.map(d => `<div class="cal-cell head">${d}</div>`).join('');
  for (let i = 0; i < firstDay; i++) html += '<div class="cal-cell"></div>';
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = today.getDate() === d && today.getMonth() === calMonth && today.getFullYear() === calYear;
    const hasEvent = eventMonthDays.includes(d);
    html += `<div class="cal-cell ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}" title="${hasEvent ? 'Event on this day' : ''}">${d}</div>`;
  }
  grid.innerHTML = html;

  grid.querySelectorAll('.cal-cell:not(.head)').forEach(cell => {
    cell.addEventListener('click', () => {
      grid.querySelectorAll('.cal-cell').forEach(c => c.classList.remove('selected'));
      if (cell.textContent.trim()) cell.classList.add('selected');
    });
  });
}

renderCalendar();
document.getElementById('calPrev')?.addEventListener('click', () => {
  calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCalendar();
});
document.getElementById('calNext')?.addEventListener('click', () => {
  calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCalendar();
});

// ---- Notify form ----
document.getElementById('eventNotifyForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('notifyEmail')?.value.trim();
  const msg = document.getElementById('notifyMsg');
  if (!email || !email.includes('@')) {
    if (msg) { msg.textContent = '⚠ Enter a valid email.'; msg.style.color = '#ffaa00'; }
    return;
  }
  if (msg) { msg.textContent = '✅ Subscribed! You\'ll receive event reminders.'; msg.style.color = 'var(--gold-bright)'; }
  document.getElementById('notifyEmail').value = '';
  setTimeout(() => { if (msg) msg.textContent = ''; }, 5000);
});
