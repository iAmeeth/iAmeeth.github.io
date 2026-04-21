/* ─── NAV SCROLL EFFECT ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 40);
});

/* ─── MOBILE MENU ─── */
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  links.classList.toggle('open');
});

// Close menu on link click
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('active');
    links.classList.remove('open');
  });
});

/* ─── SCROLL REVEAL ─── */
const reveals = document.querySelectorAll(
  '.project-card, .timeline__item, .blog-card, .about__grid, .contact__text'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal', 'visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
