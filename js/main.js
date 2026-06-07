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
    
    // We use drop-shadow to color the white PNG
    // brightness(0) invert(1) makes the white heart black
    // drop-shadow paints that black heart
    const colors = [
        "drop-shadow(0 0 0 #ff0000)", // Red
        "drop-shadow(0 0 0 #2a7d4f)", // Primary Green
        "drop-shadow(0 0 0 #4a90a4)", // Secondary Blue
        "drop-shadow(0 0 0 #333333)"  // Dark Gray
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    if (logoImg) {
        // Set both the shape filter and the color filter
        logoImg.style.filter = `brightness(0) invert(1) ${randomColor}`;
    }
}