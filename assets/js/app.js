import { renderPortfolioData } from './renderers.js';

renderPortfolioData();

// nav blur on scroll
const nav = document.getElementById('topnav');
const onScroll = () => {
  if (window.scrollY > 8) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// project filter
const filters = document.getElementById('filters');
const cards = document.querySelectorAll('#featured-projects [data-cat], #notable-projects [data-cat]');
filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  const alreadyActive = btn.classList.contains('active');
  const cat = (alreadyActive && btn.dataset.cat !== 'all') ? 'all' : btn.dataset.cat;
  filters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  filters.querySelector(`[data-cat="${cat}"]`).classList.add('active');
  cards.forEach(c => {
    if (cat === 'all' || c.dataset.cat === cat) c.style.display = '';
    else c.style.display = 'none';
  });
});

// open project pages from the full card
document.addEventListener('click', (e) => {
  if (e.target.closest('a, button')) return;
  const card = e.target.closest('.clickable-card[data-href]');
  if (!card) return;
  window.location.href = card.dataset.href;
});

document.addEventListener('keydown', (e) => {
  if (!['Enter', ' '].includes(e.key)) return;
  const card = e.target.closest('.clickable-card[data-href]');
  if (!card) return;
  e.preventDefault();
  window.location.href = card.dataset.href;
});

// cursor glow
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
  glow.style.opacity = '1';
}, { passive: true });
document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

// scroll reveal
const revealTargets = [
  '.section-head',
  '.feat-card', '.nb-card',
  '.cs-card',
  '.stack-group',
  '.tl-entry',
  '.cert',
  '.contact .inner > *',
];
revealTargets.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    // stagger siblings within the same parent grid
    const siblings = el.parentElement.querySelectorAll('.' + [...el.classList].find(c => c !== 'reveal' && c !== 'card'));
    const idx = [...siblings].indexOf(el);
    if (idx > 0) el.style.transitionDelay = (idx * 0.08) + 's';
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
