// v2.0 multi-page homepage expansion
(() => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'styles-v2.css';
  document.head.appendChild(style);

  // Mobile header: keep the desktop navigation unchanged, but collapse it
  // into a compact menu on phones so every destination remains reachable.
  const mobileStyle = document.createElement('style');
  mobileStyle.textContent = `
    .mobile-nav-toggle{
      display:none;
      width:42px;
      height:42px;
      flex:0 0 42px;
      align-items:center;
      justify-content:center;
      padding:0;
      border:1px solid rgba(23,108,144,.18);
      border-radius:12px;
      color:#17384b;
      background:rgba(255,255,255,.72);
      box-shadow:0 8px 24px rgba(17,65,91,.08);
      backdrop-filter:blur(12px);
      cursor:pointer;
    }
    .mobile-nav-toggle span,
    .mobile-nav-toggle::before,
    .mobile-nav-toggle::after{
      content:"";
      display:block;
      position:absolute;
      width:18px;
      height:2px;
      border-radius:2px;
      background:currentColor;
      transition:transform .22s ease, opacity .22s ease;
    }
    .mobile-nav-toggle{position:relative}
    .mobile-nav-toggle::before{transform:translateY(-6px)}
    .mobile-nav-toggle::after{transform:translateY(6px)}
    .site-header.nav-open .mobile-nav-toggle span{opacity:0}
    .site-header.nav-open .mobile-nav-toggle::before{transform:rotate(45deg)}
    .site-header.nav-open .mobile-nav-toggle::after{transform:rotate(-45deg)}

    @media(max-width:820px){
      .site-header{
        height:64px;
        padding:0 16px 0 18px;
        gap:12px;
      }
      .site-header .brand{
        min-width:0;
        flex:1 1 auto;
        overflow:hidden;
        white-space:nowrap;
      }
      .site-header .brand > span:last-child::after{
        content:"歐陽芳泉";
        font-size:14px;
        letter-spacing:.04em;
      }
      .mobile-nav-toggle{display:inline-flex}
      .site-header nav{
        position:absolute;
        top:calc(100% + 1px);
        left:12px;
        right:12px;
        display:none;
        flex-direction:column;
        align-items:stretch;
        gap:0!important;
        padding:8px;
        border:1px solid rgba(23,108,144,.16);
        border-radius:16px;
        background:rgba(248,252,254,.96);
        box-shadow:0 20px 50px rgba(17,65,91,.16);
        backdrop-filter:blur(20px) saturate(135%);
      }
      .site-header.nav-open nav{display:flex}
      .site-header nav a,
      .site-header nav a:nth-child(2),
      .site-header nav a:nth-child(3){
        display:block!important;
        padding:11px 13px;
        border-radius:10px;
        font-size:14px;
        font-weight:700;
        color:#294c5f;
        white-space:nowrap;
      }
      .site-header nav a:hover,
      .site-header nav a:focus-visible{
        color:#008eaf;
        background:rgba(16,191,232,.08);
      }
    }
  `;
  document.head.appendChild(mobileStyle);

  const brandLabel = document.querySelector('.site-header .brand span:last-child');
  if (brandLabel) brandLabel.textContent = '歐陽芳泉 / FANG-CHUAN OU YANG';

  // Keep the three portrait chips at the same semantic level: research fields.
  const learningSystemsChip = document.querySelector('.portrait-tech-frame .chip-b');
  if (learningSystemsChip) learningSystemsChip.textContent = 'LEARNING SYSTEMS';

  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  if (nav) nav.innerHTML = `
    <a href="index.html#research">研究主題</a>
    <a href="about.html">關於我</a>
    <a href="projects.html">研究計畫</a>
    <a href="publications.html">著作出版</a>
    <a href="https://circleoyang.github.io/MangoBox-Platform/">MangoBox</a>
    <a href="#contact">聯絡</a>
  `;

  if (header && nav) {
    let toggle = header.querySelector('.mobile-nav-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'mobile-nav-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', '開啟導覽選單');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span></span>';
      nav.insertAdjacentElement('afterend', toggle);
    }

    const closeMenu = () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '開啟導覽選單');
    };

    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const opening = !header.classList.contains('nav-open');
      header.classList.toggle('nav-open', opening);
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? '關閉導覽選單' : '開啟導覽選單');
    });

    nav.addEventListener('click', closeMenu);
    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) closeMenu();
    }, { passive:true });
  }

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