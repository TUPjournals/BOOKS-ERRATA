// Book Copyediting Error Analysis - Main JavaScript

// State
let activeCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderEntries();
  setupEventListeners();
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
