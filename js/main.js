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
        applyRandomLogoColor(); // Added this call
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
      toggle.classList.toggle('active');
      
      // Lock or unlock body scrolling
      if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
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



function applyRandomLogoColor() {
    const logoImg = document.querySelector(".nav-logo img");
    
    // These are high-saturation, bright, "pop" colors
    const colors = [
        "#FF0000", // Bright Red
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    if (logoImg) {
        // Direct color application - no murkiness
        logoImg.style.backgroundColor = randomColor;
    }
}