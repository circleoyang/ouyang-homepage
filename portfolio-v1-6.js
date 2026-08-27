// v1.6 research portfolio expansion
(() => {
  if (!document.querySelector('link[href="styles-v1-6.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles-v1-6.css';
    document.head.appendChild(link);
  }

  const nav = document.querySelector('.site-header nav');
  if (nav) {
    nav.innerHTML = `
      <a href="#research">研究主題</a>
      <a href="#systems">系統與平台</a>
      <a href="#projects">研究成果</a>
      <a href="#publications">著作出版</a>
      <a href="#contact">聯絡</a>
    `;
  }

  const contact = document.getElementById('contact');
  if (!contact || document.getElementById('projects')) return;

  const fragment = document.createRange().createContextualFragment(`
    <section class="portfolio-section profile-highlights" id="profile">
      <div class="portfolio-wrap">
        <div class="portfolio-head reveal">
          <div class="head-copy">
            <span class="section-kicker">PROFILE HIGHLIGHTS</span>
            <h2>研究之外，也把技術帶進教育現場</h2>
          </div>
          <p>我的工作橫跨研究、系統開發、教材出版、教育推廣與產學實作，讓研究成果能以可使用的工具、教材與產品進入真實教學情境。</p>
        </div>
        <div class="highlight-grid">
          <article class="highlight-card reveal"><span class="highlight-index">P01</span><strong>YouTuber「小歐老師」／專書作者</strong><p>以數位多媒體、AR／VR、創客與科技教育為主題進行知識分享與出版。</p></article>
          <article class="highlight-card reveal"><span class="highlight-index">P02</span><strong>智慧實境科技有限公司創辦人兼首席顧問</strong><p>持續參與教育科技、互動媒體與虛實整合相關產品與應用開發。</p></article>
          <article class="highlight-card reveal"><span class="highlight-index">P03</span><strong>DMT 多媒體國際認證出題委員</strong><p>擁有 20 張以上國際證照，長期投入數位多媒體能力與專業人才培育。</p></article>
          <article class="highlight-card reveal"><span class="highlight-index">P04</span><strong>VR 技術專書作者／VR 美術館創作者</strong><p>從技術教學、內容製作到虛擬展示，累積完整的 XR 實作與教育應用經驗。</p></article>
          <article class="highlight-card reveal"><span class="highlight-index">P05</span><strong>教育部視覺藝術領域計畫主持人</strong><p>113–116 國小視覺藝術、115–116 國中視覺藝術領域計畫，推動數位科技融入藝術教學。</p></article>
          <article class="highlight-card reveal"><span class="highlight-index">P06</span><strong>教學實踐與科教實作研究</strong><p>110 年教育部教學實踐研究績優計畫；110 年科技部科學教育實作學門提名吳大猷獎候選人。</p></article>
        </div>
      </div>
    </section>

    <section class="portfolio-section selected-projects" id="projects">
      <div class="portfolio-wrap">
        <div class="portfolio-head reveal">
          <div class="head-copy"><span class="section-kicker">SELECTED PROJECTS</span><h2>代表研究與教育計畫</h2></div>
          <p>研究主題從語言科技、AR／VR 教學逐步延伸到 STEAM、教育機器人與 AI-ready 實體程式設計系統。</p>
        </div>
        <div class="project-timeline">
          <article class="timeline-card current reveal"><span class="timeline-year">CURRENT</span><span class="timeline-org">AI-READY LEARNING SYSTEM</span><h3>MangoBox</h3><p>整合 AI、Runtime、Gateway、硬體與學習歷程資料，支援多重抽象層次的實體程式設計與精準教學。</p></article>
          <article class="timeline-card reveal"><span class="timeline-year">115–116</span><span class="timeline-org">教育部</span><h3>因材網國中視覺藝術領域計畫</h3><p>以數位平台與教材設計支援國中視覺藝術領域教與學。</p></article>
          <article class="timeline-card reveal"><span class="timeline-year">113–116</span><span class="timeline-org">教育部</span><h3>因材網國小視覺藝術領域計畫</h3><p>推動視覺藝術教材研發、實驗與數位學習資源建置。</p></article>
          <article class="timeline-card reveal"><span class="timeline-year">112–113</span><span class="timeline-org">國科會</span><h3>AI 教育機器人套件與程式設計平台</h3><p>從教育機器人硬體、程式設計工具到教學活動設計，建立可操作的教育科技平台。</p></article>
          <article class="timeline-card reveal"><span class="timeline-year">110–112</span><span class="timeline-org">國科會</span><h3>STEAM 擴增實境玩具套件</h3><p>開發 AR 與 STEAM 結合的教育玩具套件，並推動實際教學與成果擴散。</p></article>
          <article class="timeline-card reveal"><span class="timeline-year">107–110</span><span class="timeline-org">國科會／教育部</span><h3>AR／VR 教育系統與教材</h3><p>聚焦虛擬教育機器人、VR 英語學習、翻轉課堂與沉浸式教材之設計與成效研究。</p></article>
          <article class="timeline-card reveal"><span class="timeline-year">112–114</span><span class="timeline-org">5G 新科技學習示範學校</span><h3>VR 與教育元宇宙融入教學</h3><p>擔任桃園市輔導專家召集人，協助學校把 XR 與新科技帶入教學現場。</p></article>
          <article class="timeline-card reveal"><span class="timeline-year">EARLIER</span><span class="timeline-org">RESEARCH EVOLUTION</span><h3>數位學習、行動學習與遊戲式學習</h3><p>早期研究累積於英語學習、行動系統、遊戲式學習與數位內容設計，形成後續實體互動研究基礎。</p></article>
        </div>
      </div>
    </section>

    <section class="portfolio-section practice-flow-section">
      <div class="portfolio-wrap">
        <div class="portfolio-head reveal">
          <div class="head-copy"><span class="section-kicker">FROM RESEARCH TO PRACTICE</span><h2>把教育研究做成可以使用的東西</h2></div>
          <p>技術研發不是終點；我更關注研究成果如何變成學生、教師與教育現場真正能使用的系統與教材。</p>
        </div>
        <div class="practice-flow reveal">
          <div class="practice-step"><span>01 RESEARCH</span><strong>研究問題</strong><small>從學習、互動與技術問題出發，建立可驗證的研究設計。</small></div>
          <div class="practice-step"><span>02 PROTOTYPE</span><strong>系統原型</strong><small>把概念做成 Runtime、平台、教育機器人或 AR／VR 系統。</small></div>
          <div class="practice-step"><span>03 PRODUCT</span><strong>教材與產品</strong><small>將技術轉化為教學套件、教材、專書與可部署工具。</small></div>
          <div class="practice-step"><span>04 DEPLOY</span><strong>教育現場</strong><small>透過試教、教師培訓與學校合作，觀察真實使用情境。</small></div>
          <div class="practice-step"><span>05 PUBLISH</span><strong>論文與擴散</strong><small>將實證結果重新回到研究與出版，形成下一輪設計。</small></div>
        </div>
      </div>
    </section>

    <section class="portfolio-section selected-publications" id="publications">
      <div class="portfolio-wrap">
        <div class="portfolio-head reveal">
          <div class="head-copy"><span class="section-kicker">SELECTED PUBLICATIONS</span><h2>代表著作</h2></div>
          <div><p>完整著作目前包含期刊論文、研討會論文與專書出版。</p><a class="text-link" href="publications.html">查看完整著作目錄 →</a></div>
        </div>
        <div class="pub-summary reveal">
          <div class="pub-stat"><strong>12</strong><span>Journal Articles</span></div>
          <div class="pub-stat"><strong>29</strong><span>Conference Papers</span></div>
          <div class="pub-stat"><strong>8</strong><span>Books</span></div>
        </div>
        <div class="pub-list">
          <article class="pub-item reveal"><div class="pub-year">2026</div><div><h3>Team collaborative norms enhance students’ behavioral engagement in team-based flipped classrooms: A multilevel analysis</h3><p>Computers & Education, 241</p></div><div class="pub-badges"><span class="badge">Q1</span><span class="badge">SSCI</span><span class="badge">IF 12.0</span></div></article>
          <article class="pub-item reveal"><div class="pub-year">2023</div><div><h3>Effect of augmented reality-based virtual educational robotics on programming students’ enjoyment of learning, computational thinking skills, and academic achievement</h3><p>Computers & Education, 195</p></div><div class="pub-badges"><span class="badge">Q1</span><span class="badge">SSCI</span><span class="badge">AR</span></div></article>
          <article class="pub-item reveal"><div class="pub-year">2020</div><div><h3>Facilitating Communicative Ability of EFL Learners via High Immersion Virtual Reality</h3><p>Educational Technology & Society, 23(1), 30–49</p></div><div class="pub-badges"><span class="badge">Q1</span><span class="badge">SSCI</span><span class="badge">VR</span></div></article>
          <article class="pub-item reveal"><div class="pub-year">2017</div><div><h3>Using Mixed-Modality Vocabulary Learning on Mobile Devices: Design and Evaluation</h3><p>Journal of Educational Computing Research, 54(8), 1043–1069</p></div><div class="pub-badges"><span class="badge">Q2</span><span class="badge">SSCI</span><span class="badge">Mobile Learning</span></div></article>
        </div>
      </div>
    </section>

    <section class="portfolio-section books-section" id="books">
      <div class="portfolio-wrap">
        <div class="portfolio-head reveal">
          <div class="head-copy"><span class="section-kicker">BOOKS & PUBLICATIONS</span><h2>專書出版</h2></div>
          <div><p>從數位多媒體、AR／VR 到 Raspberry Pi 與創客教育，出版內容持續跟著技術實作與教學現場演進。</p><a class="text-link" href="publications.html#books">查看 8 本專書完整資料 →</a></div>
        </div>
        <div class="books-showcase">
          <figure class="books-collage reveal"><img src="assets/books/books-collage.jpg" alt="歐陽芳泉歷年專書封面"><figcaption>部分專書封面 · AR / VR / Digital Media / Maker Education</figcaption></figure>
          <div class="books-mini-list">
            <article class="book-mini reveal"><span>2024</span><strong>從樹莓派到實踐創客學習寶典</strong><small>校園文化 · ISBN 9789869698337</small></article>
            <article class="book-mini reveal"><span>2023</span><strong>一次搞懂 AR 是什麼</strong><small>校園文化 · ISBN 9789869698320</small></article>
            <article class="book-mini reveal"><span>2019</span><strong>快快樂樂學 VR 主題特展</strong><small>台科大圖書 · Unity × Google VR</small></article>
            <article class="book-mini reveal"><span>2018</span><strong>快快樂樂學 AR 影像魔法</strong><small>台科大圖書 · Unity × Vuforia</small></article>
            <article class="book-mini reveal"><span>2017</span><strong>快速掌握 VR 基本功</strong><small>台科大圖書 · Unity 虛擬世界</small></article>
            <article class="book-mini reveal"><span>2016</span><strong>數位設計基礎</strong><small>台科大圖書 · DMT Fundamentals</small></article>
            <article class="book-mini reveal"><span>2016</span><strong>最新數位多媒體概論</strong><small>台科大圖書 · DMT 國際認證</small></article>
            <article class="book-mini reveal"><span>2010</span><strong>Collaboration of Presentation and Data among Heterogeneous Systems</strong><small>LAP LAMBERT Academic Publishing</small></article>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio-section current-research">
      <div class="portfolio-wrap">
        <div class="current-panel reveal">
          <div><span class="section-kicker" style="color:#64e8ff">CURRENT RESEARCH</span><h2>MangoBox：AI-ready 實體程式設計與學習系統</h2><p>目前持續發展人–AI–硬體學習歷程、Gateway、Runtime、多重抽象層次控制、學習診斷與教師端分析，嘗試建立一套能讓 AI、系統與學習者共享語意的教育運算環境。</p><a class="btn btn-primary" href="#systems" style="margin-top:22px">查看系統架構</a></div>
          <div class="current-stack"><span>Semantic Interface / 穩定高層語意介面</span><span>Predictable Runtime / 可預測執行環境</span><span>Gateway & Device Connectivity</span><span>Learning Process Data / 學習歷程資料</span><span>Human–AI Shared Context / 人機共享脈絡</span></div>
        </div>
      </div>
    </section>
  `);

  contact.parentNode.insertBefore(fragment, contact);
})();

(() => {
  const revealEls = document.querySelectorAll('.portfolio-section .reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
  revealEls.forEach(el => io.observe(el));

  const links = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const sync = () => {
    let active = '';
    sections.forEach(s => {
      const r = s.getBoundingClientRect();
      if (r.top <= 140 && r.bottom > 140) active = s.id;
    });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active));
  };
  window.addEventListener('scroll', sync, {passive:true});
  sync();
})();
