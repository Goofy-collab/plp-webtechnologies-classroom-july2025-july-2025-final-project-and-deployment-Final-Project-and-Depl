// Navigation toggle
const navToggle = document.getElementById('nav-toggle-3');
const siteNav = document.getElementById('site-nav-3');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
  });
}

// Update year
document.querySelectorAll('#year').forEach(span => {
  span.textContent = new Date().getFullYear();
});
// Menu tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.tab;
    document.querySelectorAll('.menu-tab').forEach(tab => {
      tab.classList.toggle('hidden', tab.dataset.tabContent !== target);
    });
  });
});


// Form validation (reservation)
const form = document.getElementById('reservation-form');
const msg = document.getElementById('form-msg');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const date = form.date.value;
    const time = form.time.value;

    if (!name || !email || !date || !time) {
      msg.textContent = 'Please fill in all required fields.';
      msg.style.color = 'crimson';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msg.textContent = 'Enter a valid email.';
      msg.style.color = 'crimson';
      return;
    }

    msg.textContent = `Thanks ${name.split(' ')[0]}! Your reservation request for ${date} at ${time} has been received.`;
    msg.style.color = 'green';
    form.reset();
  });
}

 // Tab switching logic
    document.querySelectorAll(".tab-btn").forEach(button => {
      button.addEventListener("click", () => {
        const tab = button.dataset.tab;

        document.querySelectorAll(".menu-tab").forEach(section => {
          section.classList.add("hidden");
        });

        document.querySelector(`[data-tab-content="${tab}"]`).classList.remove("hidden");
      });
    });