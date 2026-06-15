document.addEventListener('DOMContentLoaded', () => {
loadNavbar();
});

async function loadNavbar() {
const placeholder = document.getElementById('navbar-placeholder');
if (!placeholder) return;

try {
const response = await fetch('components/navbar.html');
if (!response.ok) throw new Error('Failed to load navbar');

const html = await response.text();
placeholder.innerHTML = html;

initNavbar();
highlightCurrentPage();

} catch (err) {
console.error('Navigation initialization error:', err);
}
}

function initNavbar() {
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
toggle.addEventListener('click', () => {
const isActive = menu.classList.toggle('active');
toggle.classList.toggle('active');

  toggle.setAttribute('aria-expanded', isActive);
  document.body.style.overflow = isActive? 'hidden': '';
});

}
}

function highlightCurrentPage() {
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
if (link.getAttribute('href') === currentPage) {
link.classList.add('active');
}
});
}

// ✅ Fixed dropdown support
document.addEventListener('click', function (e) {
const dropdown = e.target.closest('.dropdown');

if (dropdown && window.innerWidth < 768) {
const link = dropdown.querySelector('a');

if (e.target === link) {
  e.preventDefault();
  const menu = dropdown.querySelector('.submenu');
  if (menu) menu.classList.toggle('active');
}

}
});
