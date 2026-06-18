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
    setupMobileDrillDown();

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
      document.body.style.overflow = isActive ? 'hidden' : '';

      // If closing the main menu, also close all open submenus
      if (!isActive) {
        document.querySelectorAll('.mobile-active').forEach(sub => {
          sub.classList.remove('mobile-active');
        });
      }
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

function setupMobileDrillDown() {
  // 1. Inject a "Back" button at the top of every dropdown/submenu
  const dropdownMenus = document.querySelectorAll('.dropdown-menu, .submenu');
  dropdownMenus.forEach(menu => {
    // Prevent adding multiple back buttons if initialized twice
    if (menu.querySelector('.mobile-back-item')) return; 

    const backItem = document.createElement('li');
    backItem.className = 'mobile-back-item';
    // Added an actual arrow character for better UX
    backItem.innerHTML = `<button class="mobile-back-btn">‹ Back</button>`;
    menu.prepend(backItem);
  });

  // 2. Handle Clicks for Drill-Down (Using Event Delegation on the Nav Menu)
  const navMenu = document.querySelector('.nav-menu');
  if (!navMenu) return;

  navMenu.addEventListener('click', function (e) {
    if (window.innerWidth >= 768) return; // Only run on mobile sizes

    // --- GO FORWARD ---
    const link = e.target.closest('a');
    if (link) {
      const dropdownParent = link.parentElement;
      const submenu = dropdownParent.querySelector('.dropdown-menu, .submenu');
      
      // Only prevent navigation if there is actually a submenu to slide in
      if (submenu) {
        e.preventDefault(); 
        submenu.classList.add('mobile-active');
        
        // Optional: Hide overflow on the parent menu to prevent background scrolling
        navMenu.style.overflow = 'hidden'; 
      }
    }

    // --- GO BACKWARD ---
    const backBtn = e.target.closest('.mobile-back-btn');
    if (backBtn) {
      const activeSubmenu = backBtn.closest('.mobile-active');
      if (activeSubmenu) {
        activeSubmenu.classList.remove('mobile-active');
        
        // Restore parent scroll if we are returning to the root menu
        if (!activeSubmenu.parentElement.closest('.mobile-active')) {
           navMenu.style.overflow = 'auto';
        }
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
    // 1. Your existing logic to fetch/inject the navbar
    // ... code to inject the nav ...

    // 2. Then, run the "Active" state highlighter
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // This compares the link's href to the current page URL
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});