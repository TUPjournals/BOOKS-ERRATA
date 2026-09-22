// Book Copyediting Error Analysis - Main JavaScript

// State
let currentView = 'home'; // 'home' or 'quarter'
let currentQuarter = null;
let searchQuery = '';
let activeCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  setupEventListeners();
});

function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      if (currentView === 'quarter') {
        renderQuarterDetail(currentQuarter);
      } else {
        filterEntries();
      }
    });
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      if (currentView === 'quarter') {
        renderQuarterDetail(currentQuarter);
      } else {
        filterEntries();
      }
    });
  });
}

function renderHome() {
  currentView = 'home';
  const main = document.getElementById('mainContent');
  
  // Calculate stats
  const totalEntries = BOOK_DATA.reduce((sum, q) => sum + q.total_entries, 0);
  const totalQuarters = BOOK_DATA.length;
  const years = [...new Set(BOOK_DATA.map(q => q.year))].sort();
  
  // Category stats
  const catStats = {};
  BOOK_DATA.forEach(q => {
    Object.entries(q.categories).forEach(([cat, entries]) => {
      catStats[cat] = (catStats[cat] || 0) + entries.length;
    });
  });

  let html = `
    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item">
          <div class="stat-value">${totalEntries}</div>
          <div class="stat-label">总错例数</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${totalQuarters}</div>
          <div class="stat-label">季度数</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${years.length}</div>
          <div class="stat-label">年份跨度</div>
        </div>
        ${Object.entries(catStats).map(([cat, count]) => `
          <div class="stat-item">
            <div class="stat-value">${count}</div>
            <div class="stat-label">${cat}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="main">
  `;

  // Group by year
  const byYear = {};
  BOOK_DATA.forEach(q => {
    if (!byYear[q.year]) byYear[q.year] = [];
    byYear[q.year].push(q);
  });

  // Sort years descending
  const sortedYears = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  sortedYears.forEach(year => {
    const quarters = byYear[year].sort((a, b) => a.quarter.localeCompare(b.quarter));
    html += `
      <div class="year-section">
        <div class="year-title">${year} 年</div>
        <div class="quarter-grid">
    `;
    
    quarters.forEach(q => {
      const catTags = Object.entries(q.categories)
        .filter(([_, entries]) => entries.length > 0)
        .map(([cat, entries]) => `<span class="cat-tag">${cat} (${entries.length})</span>`)
        .join('');
      
      html += `
        <div class="quarter-card" onclick="showQuarter('${q.year}', '${q.quarter}')">
          <div class="quarter-card-title">${q.year} 年 ${getQuarterName(q.quarter)}</div>
          <div class="quarter-card-meta">共 ${q.total_entries} 条错例</div>
          <div class="category-tags">${catTags}</div>
        </div>
      `;
    });
    
    html += `</div></div>`;
  });

  html += `</div>`;
  main.innerHTML = html;
}

function getQuarterName(q) {
  const map = { 'Q1': '第一季度', 'Q2': '第二季度', 'Q3': '第三季度', 'Q4': '第四季度' };
  return map[q] || q;
}

function showQuarter(year, quarter) {
  currentView = 'quarter';
  currentQuarter = { year, quarter };
  renderQuarterDetail({ year, quarter });
}

function renderQuarterDetail({ year, quarter }) {
  const qData = BOOK_DATA.find(q => q.year === year && q.quarter === quarter);
  if (!qData) return;

  const main = document.getElementById('mainContent');
  
  // Filter entries
  let allEntries = [];
  Object.entries(qData.categories).forEach(([cat, entries]) => {
    entries.forEach(entry => {
      if (activeCategory === 'all' || cat === activeCategory) {
        if (!searchQuery || 
            entry.error.toLowerCase().includes(searchQuery) || 
            (entry.analysis && entry.analysis.toLowerCase().includes(searchQuery))) {
          allEntries.push({ ...entry, category: cat });
        }
      }
    });
  });

  // Group by category for display
  const byCategory = {};
  allEntries.forEach(entry => {
    if (!byCategory[entry.category]) byCategory[entry.category] = [];
    byCategory[entry.category].push(entry);
  });

  let html = `
    <div class="main">
      <button class="back-btn" onclick="renderHome()">← 返回总览</button>
      <div class="year-title">${year} 年 ${getQuarterName(quarter)}</div>
      <div class="quarter-card-meta" style="margin-bottom: 16px;">
        显示 ${allEntries.length} / ${qData.total_entries} 条错例
        ${searchQuery ? ` (搜索: "${searchQuery}")` : ''}
        ${activeCategory !== 'all' ? ` [筛选: ${activeCategory}]` : ''}
      </div>
  `;

  // Category filter buttons for this quarter
  const cats = Object.keys(qData.categories).filter(c => qData.categories[c].length > 0);
  html += `
    <div class="filter-group" style="margin-bottom: 16px;">
      <button class="filter-btn ${activeCategory === 'all' ? 'active' : ''}" data-category="all" onclick="setCategory('all')">全部</button>
      ${cats.map(cat => `
        <button class="filter-btn ${activeCategory === cat ? 'active' : ''}" data-category="${cat}" onclick="setCategory('${cat}')">${cat} (${qData.categories[cat].length})</button>
      `).join('')}
    </div>
  `;

  // Render entries by category
  Object.entries(byCategory).forEach(([cat, entries]) => {
    html += `<h3 style="color: var(--primary-dark); margin: 20px 0 12px; font-size: 1.1rem;">${cat} (${entries.length})</h3>`;
    html += `<div class="entry-list">`;
    
    entries.forEach(entry => {
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
    
    html += `</div>`;
  });

  html += `</div>`;
  main.innerHTML = html;
}

function formatErrorText(text) {
  // Highlight "应改为" / "可改为" / "删除" patterns
  return text
    .replace(/(应改为|可改为)/g, '<span style="color: #d32f2f; font-weight: 600;">$1</span>')
    .replace(/(删除|删去)/g, '<span style="color: #d32f2f; font-weight: 600;">$1</span>')
    .replace(/(〖简析〗)/, '<span style="color: var(--primary); font-weight: 600;">$1</span>');
}

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === cat);
  });
  if (currentView === 'quarter') {
    renderQuarterDetail(currentQuarter);
  } else {
    filterEntries();
  }
}

function filterEntries() {
  // For home view, filter the quarter cards
  if (searchQuery) {
    document.querySelectorAll('.quarter-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(searchQuery) ? '' : 'none';
    });
  } else {
    document.querySelectorAll('.quarter-card').forEach(card => {
      card.style.display = '';
    });
  }
}
