/**
 * ==============================================================================
 * MPSC Current Affairs Lab - Global App Controller
 * Theme management, navigation, and storage utilities
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  highlightActiveNav();
});

/**
 * Initialize Light / Dark theme with persistence
 */
function initTheme() {
  const savedTheme = localStorage.getItem('mpsc_lab_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('mpsc_lab_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  });
}

function updateThemeIcon(theme) {
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? 'लाइट मोड चालू करा' : 'डार्क मोड चालू करा');
    btn.title = theme === 'dark' ? 'लाइट मोड चालू करा' : 'डार्क मोड चालू करा';
  });
}

/**
 * Highlight current page in Desktop & Mobile bottom navigation
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const filename = currentPath.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-item');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const targetFile = href.split('/').pop().split('?')[0];

    if (
      (filename === '' || filename === 'index.html') && (targetFile === 'index.html' || targetFile === '') ||
      (filename.includes('decoder') && targetFile.includes('decoder')) ||
      (filename.includes('quiz') && targetFile.includes('quiz')) ||
      (filename.includes('revision') && targetFile.includes('revision'))
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Utility: Copy text to clipboard with tooltip toast
 */
function copyToClipboard(text, btnElement, successMsg = 'कॉपी झाले!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = btnElement.innerHTML;
      btnElement.innerHTML = `✓ ${successMsg}`;
      setTimeout(() => {
        btnElement.innerHTML = originalText;
      }, 2000);
    });
  } else {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = `✓ ${successMsg}`;
    setTimeout(() => {
      btnElement.innerHTML = originalText;
    }, 2000);
  }
}
