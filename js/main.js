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
    setupMobileDrillDown(); // Initialize the new mobile menu logic

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
    backItem.innerHTML = `<button class="mobile-back-btn">← Back</button>`;
    menu.prepend(backItem);
  });

  // 2. Handle Clicks for Drill-Down
  document.addEventListener('click', function (e) {
    if (window.innerWidth >= 768) return; // Only run on mobile sizes

    // --- GO FORWARD ---
    const link = e.target.closest('a');
    if (link) {
      const dropdownParent = link.parentElement;
      if (dropdownParent.classList.contains('dropdown') || dropdownParent.classList.contains('dropdown-submenu')) {
        e.preventDefault(); 
        
        // Find the specific submenu related to this link and slide it in
        const submenu = dropdownParent.querySelector('.dropdown-menu, .submenu');
        if (submenu) {
          submenu.classList.add('mobile-active');
        }
      }
    }

    // --- GO BACKWARD ---
    const backBtn = e.target.closest('.mobile-back-btn');
    if (backBtn) {
      // Find the closest active submenu and slide it out
      const activeSubmenu = backBtn.closest('.mobile-active');
      if (activeSubmenu) {
        activeSubmenu.classList.remove('mobile-active');
      }
    }
  });
}
