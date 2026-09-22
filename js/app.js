// Book Copyediting Error Analysis - Mobile First JavaScript

// State
let activeCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderEntries();
  setupEventListeners();
  setupScrollToTop();
});

function setupEventListeners() {
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderEntries();
    });
  });
}

function setupScrollToTop() {
  // Simple back-to-top button for mobile
  let backTop = document.createElement('button');
  backTop.id = 'backToTop';
  backTop.innerHTML = '↑';
  backTop.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 16px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--primary);
    color: #fff;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(230,126,34,0.3);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s, transform 0.3s;
    z-index: 98;
    touch-action: manipulation;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  document.body.appendChild(backTop);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backTop.style.opacity = '1';
      backTop.style.transform = 'translateY(0)';
    } else {
      backTop.style.opacity = '0';
      backTop.style.transform = 'translateY(20px)';
    }
  }, { passive: true });
  
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function renderEntries() {
  const main = document.getElementById('mainContent');
  
  // Collect all entries
  let allEntries = [];
  BOOK_DATA.forEach(cat => {
    if (activeCategory === 'all' || cat.category === activeCategory) {
      cat.entries.forEach(entry => {
        allEntries.push({
          ...entry,
          category: cat.category
        });
      });
    }
  });

  let html = `<div class="main">`;
  
  // Results info
  html += `
    <div class="results-info">
      共 ${allEntries.length} 条错例
      ${activeCategory !== 'all' ? ` [${activeCategory}]` : ''}
    </div>
  `;

  // Entry list
  html += `<div class="entry-list">`;
  
  allEntries.forEach(entry => {
    html += `
      <div class="entry-item">
        <div class="entry-header">
          <span class="entry-id">${entry.id}</span>
          <span class="entry-category">${entry.category}</span>
        </div>
        <div class="entry-error">${formatErrorText(entry.error)}</div>
        ${entry.analysis ? `<div class="entry-analysis">${entry.analysis}</div>` : ''}
      </div>
    `;
  });
  
  html += `</div></div>`;
  main.innerHTML = html;
}

function formatErrorText(text) {
  if (!text) return '';
  return text
    .replace(/(应改为|可改为)/g, '<span style="color: #d32f2f; font-weight: 600;">$1</span>')
    .replace(/(删除|删去)/g, '<span style="color: #d32f2f; font-weight: 600;">$1</span>')
    .replace(/(〖简析〗)/, '<span style="color: var(--primary); font-weight: 600;">$1</span>');
}
