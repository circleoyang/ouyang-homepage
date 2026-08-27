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