/**
 * ==============================================================================
 * MPSC Current Affairs Lab - News Decoder Controller
 * Renders in-depth news analysis with syllabus mapping and exam angles
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  renderDecoderArticle();
  renderSidebarList();
});

function getArticleFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');
  if (articleId && window.MPSC_ARTICLES) {
    const found = window.MPSC_ARTICLES.find(a => a.id === articleId);
    if (found) return found;
  }
  return window.MPSC_ARTICLES ? window.MPSC_ARTICLES[0] : null;
}

function renderDecoderArticle() {
  const article = getArticleFromUrl();
  const container = document.getElementById('decoder-content-area');
  if (!article || !container) return;

  // Set document title dynamically
  document.title = `${article.title} | MPSC डिकोडर`;

  // Render HTML
  container.innerHTML = `
    <!-- Top Tags & Date Row -->
    <div class="page-badge-row">
      <span class="badge badge-category">${article.categoryBadge}</span>
      <span class="badge badge-mpsc">${article.syllabusBadge}</span>
      <span class="badge badge-demo">डेमो डेटा / Sample Article</span>
    </div>

    <!-- Article Main Title -->
    <h1 class="page-title" style="margin-top: 10px; font-size: 26px;">${article.title}</h1>
    <p class="featured-eng-title" style="margin-bottom: 16px;">${article.englishTitle}</p>

    <!-- Meta Information Row -->
    <div class="article-meta-row" style="margin-bottom: 20px;">
      <span class="meta-item">📅 <strong>तारीख:</strong> ${article.date}</span>
      <span class="meta-item">⏱️ <strong>वेळ:</strong> ${article.readTime}</span>
      <span class="meta-item">📰 <strong>स्त्रोत:</strong> ${article.sourceName}</span>
    </div>

    <!-- Source Verification Callout -->
    <div class="decoder-source-callout">
      <div class="source-left">
        <span>🔗 <strong>मूळ संदर्भ व बातमी स्त्रोत:</strong></span>
        <span>${article.sourceName}</span>
      </div>
      <a href="${article.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link-btn" title="मूळ बातमी स्त्रोत उघडा (नवीन टॅब)">
        अधिकृत स्त्रोत उघडा ↗
      </a>
    </div>

    <!-- 1. बातमीचा नेमका संदर्भ (Context) -->
    <section class="decoder-section">
      <h2 class="decoder-section-title">
        <span class="sec-icon">📌</span> बातमीचा संदर्भ (Context & Relevance)
      </h2>
      <p class="decoder-p">${article.context}</p>
      
      <div class="syllabus-pill-box" style="margin-top: 14px;">
        <p><strong>🎯 MPSC पूर्व परीक्षा संदर्भ:</strong> ${article.syllabusMapping.prelims}</p>
        <p style="margin-top: 6px;"><strong>🎯 MPSC मुख्य परीक्षा संदर्भ:</strong> ${article.syllabusMapping.mains}</p>
      </div>
    </section>

    <!-- 2. पार्श्वभूमी आणि मूळ संकल्पना (Background & Core Concepts) -->
    <section class="decoder-section">
      <h2 class="decoder-section-title">
        <span class="sec-icon">📖</span> पार्श्वभूमी आणि मूळ संकल्पना (Background & Concept)
      </h2>
      <p class="decoder-p">${article.background}</p>
    </section>

    <!-- 3. पूर्व परीक्षा पॉईंटर्स (Prelims Key Pointers) -->
    <section class="decoder-section">
      <h2 class="decoder-section-title">
        <span class="sec-icon">⚡</span> पूर्व परीक्षा पॉईंटर्स (High-Yield Prelims Facts)
      </h2>
      <ul class="pointer-list">
        ${article.prelimsPointers.map(ptr => `<li class="pointer-item">✓ ${ptr}</li>`).join('')}
      </ul>
    </section>

    <!-- 4. मुख्य परीक्षा विश्लेषणात्मक कोन (Mains Analytical Angle) -->
    <section class="decoder-section">
      <h2 class="decoder-section-title">
        <span class="sec-icon">📝</span> मुख्य परीक्षा विश्लेषणात्मक कोन (Mains Angle & Answer Blueprint)
      </h2>
      
      <div class="mains-box">
        <div class="mains-question-card">
          <span style="color: var(--brand-orange); font-size: 13px; display: block; margin-bottom: 4px;">संभाव्य मुख्य परीक्षा प्रश्न (${article.mainsAngle.marks}):</span>
          ${article.mainsAngle.question}
        </div>

        <h4 style="font-size: 14px; margin-bottom: 8px; color: var(--text-primary);">उत्तराचा अपेक्षित आराखडा (Model Answer Framework):</h4>
        <ul class="mains-points-list">
          ${article.mainsAngle.modelPointers.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- 5. महत्त्वाच्या संज्ञा व शब्दकोश (Bilingual Glossary) -->
    <section class="decoder-section">
      <h2 class="decoder-section-title">
        <span class="sec-icon">💡</span> महत्त्वाच्या संकल्पना व शब्दकोश (Exam Terminology)
      </h2>
      <div class="glossary-grid">
        ${article.glossary.map(item => `
          <div class="glossary-item">
            <span class="glossary-term">${item.term}</span>
            <span class="glossary-eng">${item.english}</span>
            <p class="glossary-def">${item.definition}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Action Bar: Copy / Practice Quiz / Back -->
    <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; border-top: 1px solid var(--border-light); padding-top: 20px;">
      <a href="quiz.html" class="btn btn-primary">
        ✍️ या घटकावरील सराव प्रश्न सोडवा
      </a>
      <button class="btn btn-secondary" id="copy-notes-btn">
        📋 नोट्स कॉपी करा
      </button>
      <a href="index.html" class="btn btn-secondary">
        ← मुख्य पानावर परत जा
      </a>
    </div>
  `;

  // Hook up copy button
  const copyBtn = document.getElementById('copy-notes-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = `[MPSC Current Affairs Lab - ${article.title}]\n` +
        `तारीख: ${article.date}\n` +
        `अभ्यासक्रम: ${article.syllabusBadge}\n\n` +
        `संदर्भ:\n${article.context}\n\n` +
        `पूर्व परीक्षा महत्त्वाचे पॉईंटर्स:\n` +
        article.prelimsPointers.map(p => `- ${p}`).join('\n') + `\n\n` +
        `मुख्य परीक्षा प्रश्न:\n${article.mainsAngle.question}`;
      copyToClipboard(textToCopy, copyBtn, 'नोट्स कॉपी झाल्या!');
    });
  }
}

function renderSidebarList() {
  const sidebarList = document.getElementById('decoder-sidebar-list');
  if (!sidebarList || !window.MPSC_ARTICLES) return;

  const currentArticle = getArticleFromUrl();
  const currentId = currentArticle ? currentArticle.id : '';

  sidebarList.innerHTML = window.MPSC_ARTICLES.map(art => {
    const isActive = art.id === currentId ? 'active' : '';
    return `
      <li class="article-nav-item ${isActive}">
        <a href="decoder.html?id=${art.id}">
          <span style="font-size: 11px; color: var(--brand-orange); display: block;">${art.category} • ${art.date}</span>
          ${art.title}
        </a>
      </li>
    `;
  }).join('');
}
