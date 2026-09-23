// Book Copyediting Error Analysis - Mobile First JavaScript

// State
let activeCategory = 'all';
let isRandom = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderEntries();
  setupEventListeners();
  setupScrollToTop();
});

function setupEventListeners() {
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Don't trigger category change for random button
      if (btn.id === 'randomBtn') return;
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

  // Shuffle if random mode is on
  if (isRandom) {
    allEntries = shuffleArray([...allEntries]);
  }

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
          <span class="entry-id">${entry.year}</span>
          <span class="entry-category">${entry.category}</span>
        </div>
        <div class="entry-error">${renderHighlightedText(entry)}</div>
        ${entry.analysis ? `<div class="entry-analysis">${entry.analysis}</div>` : ''}
      </div>
    `;
  });
  
  html += `</div></div>`;
  main.innerHTML = html;
}

function toggleRandom() {
  isRandom = !isRandom;
  const btn = document.getElementById('randomBtn');
  if (btn) {
    btn.classList.toggle('active', isRandom);
  }
  renderEntries();
}

function shuffleArray(array) {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderHighlightedText(entry) {
  let text = entry.error || '';
  if (!text) return '';
  
  // Sort highlighted words by length (longest first) to avoid partial replacements
  const highlighted = [...(entry.highlighted_words || [])].sort((a, b) => b.length - a.length);
  
  for (const word of highlighted) {
    // Escape special regex characters
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Replace the highlighted word with a blue span
    const regex = new RegExp(escaped, 'g');
    text = text.replace(regex, '<span class="highlight-word">$&\</span>');
  }
  
  // Also highlight modification patterns
  text = text
    .replace(/(应改为|可改为)/g, '<span class="mod-word">$1</span>')
    .replace(/(删除|删去)/g, '<span class="mod-word">$1</span>');
  
  return text;
}
