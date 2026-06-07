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
    
    // We use a mapping of colors to their specific CSS filter requirements
    // This is the most reliable way to force-color a white icon
    const colorFilters = [
        "sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(50%)",   // Red
        "sepia(100%) saturate(500%) hue-rotate(100deg) brightness(40%)",    // Green
        "sepia(100%) saturate(500%) hue-rotate(160deg) brightness(50%)",    // Blue
        "sepia(0%) saturate(0%) brightness(20%)"                           // Dark Gray
    ];
    
    const randomFilter = colorFilters[Math.floor(Math.random() * colorFilters.length)];
    
    if (logoImg) {
        logoImg.style.filter = randomFilter;
    }
}