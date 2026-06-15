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
  if (window.innerWidth >= 768) return; // Only run on mobile sizes

  // Find if the clicked element is a link or inside a link
  const link = e.target.closest('a');
  if (!link) return;

  // Check if the link's immediate parent is a dropdown container
  const dropdownParent = link.parentElement;
  
  if (dropdownParent.classList.contains('dropdown') || dropdownParent.classList.contains('dropdown-submenu')) {
    e.preventDefault(); // Stop the link from navigating
    dropdownParent.classList.toggle('active'); // Toggle the accordion open/closed
  }
});
