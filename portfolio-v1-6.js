// v2.0 multi-page homepage expansion
(() => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'styles-v2.css';
  document.head.appendChild(style);

  const brandLabel = document.querySelector('.site-header .brand span:last-child');
  if (brandLabel) brandLabel.textContent = '歐陽芳泉 / FANG-CHUAN OU YANG';

  const nav = document.querySelector('.site-header nav');
  if (nav) nav.innerHTML = `
    <a href="index.html#research">研究主題</a>
    <a href="about.html">關於我</a>
    <a href="projects.html">研究計畫</a>
    <a href="publications.html">著作出版</a>
    <a href="#contact">聯絡</a>
  `;

  document.querySelectorAll('.card-grid, .project-grid').forEach(el => el.classList.add('plain-list'));
  document.querySelectorAll('.info-card, .project-card').forEach(el => el.classList.add('plain-row'));

  // Research focus: long-term research agenda rather than product-only architecture.
  const research = document.getElementById('research');
  if (research) {
    const intro = research.querySelector('.section-heading > p');
    if (intro) {
      intro.textContent = '目前研究聚焦於學習分析、實體運算與人–AI–系統協作，從學習資料、抽象層次與執行環境三個面向，探索 AI 時代的教育科技如何支援學習診斷、創作實作與學習者主導性。';
    }

    const items = research.querySelectorAll('.info-card');
    const researchFocus = [
      {
        title: '學習分析與 AI 精準教學',
        text: '結合學習歷程資料、即時診斷與生成式 AI，建立能支援教師決策、個別化回饋與學習介入的智慧學習環境。'
      },
      {
        title: '實體運算與多重抽象層次',
        text: '以實體程式設計平台為基礎，探索硬體抽象、Runtime、Gateway 與多層次程式介面，讓學習者能依任務與能力在適當的抽象層次進行理解、設計與實作。'
      },
      {
        title: '人–AI–系統協作與複雜度重新分配',
        text: '研究學習者、AI、執行環境與硬體如何共享語意、責任與驗證機制，將適合自動化的底層複雜度交由系統承擔，同時保留學習者在問題界定、規劃、判斷、驗證與創作上的主導性。'
      }
    ];

    items.forEach((item, index) => {
      const data = researchFocus[index];
      if (!data) return;
      const title = item.querySelector('h3');
      const text = item.querySelector('p');
      if (title) title.textContent = data.title;
      if (text) text.textContent = data.text;
    });
  }

  const contact = document.getElementById('contact');
  if (!contact || document.getElementById('directory')) return;

  const fragment = document.createRange().createContextualFragment(`
    <section class="v2-directory" id="directory">
      <div class="v2-wrap">
        <div class="v2-section-head">
          <span class="section-kicker">RESEARCH DIRECTORY</span>
          <h2>完整資料分頁瀏覽</h2>
          <p>首頁保留研究主張與系統架構；完整經歷、計畫與出版資料移到獨立頁面，以年份與條列方式呈現。</p>
        </div>

        <div class="directory-list">
          <a class="directory-row" href="about.html">
            <span class="directory-code">01</span>
            <div><strong>關於我</strong><small>學術與實務經歷、專業角色、教育與技術實作</small></div>
            <span class="directory-arrow">→</span>
          </a>
          <a class="directory-row" id="projects" href="projects.html">
            <span class="directory-code">02</span>
            <div><strong>研究計畫</strong><small>國科會／科技部、教育部、產學合作計畫完整列表</small></div>
            <span class="directory-arrow">→</span>
          </a>
          <a class="directory-row" id="publications" href="publications.html">
            <span class="directory-code">03</span>
            <div><strong>著作與出版</strong><small>12 篇期刊論文、29 篇研討會論文、8 本專書</small></div>
            <span class="directory-arrow">→</span>
          </a>
          <a class="directory-row" id="books" href="publications.html#books">
            <span class="directory-code">04</span>
            <div><strong>專書出版</strong><small>數位多媒體、AR／VR、創客與教育科技專書</small></div>
            <span class="directory-arrow">→</span>
          </a>
        </div>

        <div class="current-line">
          <span class="current-dot"></span>
          <strong>目前研究：MangoBox</strong>
          <span>AI-ready Learning System · Runtime · Gateway · Physical Computing · Learning Analytics</span>
        </div>
      </div>
    </section>
  `);
  contact.parentNode.insertBefore(fragment, contact);
})();