/**
 * Main Application Logic
 * Handles dynamic navbar injection and component initialization.
 */

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
});

/**
 * Fetches the navigation component and initializes dependencies
 */
async function loadNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  try {
    const response = await fetch('components/navbar.html');
    if (!response.ok) throw new Error('Failed to load navbar');
    
    const html = await response.text();
    placeholder.innerHTML = html;

    // Initialize navbar UI and state
    initNavbar();
    highlightCurrentPage();

  } catch (err) {
    console.error('Navigation initialization error:', err);
  }
}

/**
 * Sets up mobile menu toggle behavior
 */
function initNavbar() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isActive = menu.classList.toggle('active');
      toggle.classList.toggle('active');
      
      // Toggle body scroll lock
      document.body.style.overflow = isActive ? 'hidden' : '';
    });
  }
}

/**
 * Sets the active class on the current page link
 */
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}
`// Dropdown support for mobile
document.addEventListener('click', function (e) {
const dropdown = e.target.closest('.dropdown > a');

if (dropdown && window.innerWidth < 768) {
e.preventDefault();
const menu = dropdown.nextElementSibling;
menu.classList.toggle('active');
}
});
`

