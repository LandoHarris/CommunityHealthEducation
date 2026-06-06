// Load navbar into each page
document.addEventListener('DOMContentLoaded', function() {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  
  if (navbarPlaceholder) {
    fetch('components/navbar.html')
      .then(response => response.text())
      .then(html => {
        navbarPlaceholder.innerHTML = html;
        initNavbar();
        highlightCurrentPage();
      })
      .catch(err => console.error('Error loading navbar:', err));
  }
});

// Initialize mobile menu toggle
function initNavbar() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }
}

// Highlight current page in nav
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}
