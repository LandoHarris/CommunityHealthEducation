document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
});

async function loadNavbar() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  try {
    const response = await fetch('/components/navbar.html');
    if (!response.ok) throw new Error('Failed to load navbar');

    const html = await response.text();
    placeholder.innerHTML = html;

    // Initialize all navbar features AFTER injection
    initNavbar();
    highlightCurrentPage();
    setupMobileDrillDown();

  } catch (err) {
    console.error('Navigation initialization error:', err);
  }
}

/* ---------------------------------------------
   MOBILE MENU TOGGLE
--------------------------------------------- */
function initNavbar() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isActive = menu.classList.toggle('active');
      toggle.classList.toggle('active');

      toggle.setAttribute('aria-expanded', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';

      // Close all submenus when closing main menu
      if (!isActive) {
        document.querySelectorAll('.mobile-active').forEach(sub => {
          sub.classList.remove('mobile-active');
        });
      }
    });
  }
}

/* ---------------------------------------------
   ACTIVE PAGE HIGHLIGHTER (Robust)
--------------------------------------------- */
function highlightCurrentPage() {
  const current = window.location.pathname.replace(/\/$/, ""); // remove trailing slash

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Resolve relative paths to absolute paths
    const resolved = new URL(href, window.location.origin).pathname.replace(/\/$/, "");

    if (resolved === current) {
      link.classList.add('active');
    }
  });
}

/* ---------------------------------------------
   MOBILE DRILLDOWN NAVIGATION
--------------------------------------------- */
function setupMobileDrillDown() {
  // 1. Add Back buttons to all dropdowns/submenus
  const dropdownMenus = document.querySelectorAll('.dropdown-menu, .submenu');

  dropdownMenus.forEach(menu => {
    if (menu.querySelector('.mobile-back-item')) return; // prevent duplicates

    const backItem = document.createElement('li');
    backItem.className = 'mobile-back-item';
    backItem.innerHTML = `<button class="mobile-back-btn">‹ Back</button>`;
    menu.prepend(backItem);
  });

  // 2. Event delegation for forward/back navigation
  const navMenu = document.querySelector('.nav-menu');
  if (!navMenu) return;

  navMenu.addEventListener('click', function (e) {
    if (window.innerWidth >= 768) return; // Only mobile

    // --- GO FORWARD ---
    const link = e.target.closest('a');
    if (link) {
      const parent = link.parentElement;
      const submenu = parent.querySelector(':scope > .dropdown-menu, :scope > .submenu');

      if (submenu) {
        e.preventDefault();
        submenu.classList.add('mobile-active');
        navMenu.style.overflow = 'hidden';
      }
    }

    // --- GO BACK ---
    const backBtn = e.target.closest('.mobile-back-btn');
    if (backBtn) {
      const activeSubmenu = backBtn.closest('.mobile-active');
      if (activeSubmenu) {
        activeSubmenu.classList.remove('mobile-active');

        // If returning to root level
        if (!activeSubmenu.parentElement.closest('.mobile-active')) {
          navMenu.style.overflow = 'auto';
        }
      }
    }
  });
}
