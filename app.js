(() => {
  const canvas = document.getElementById('networkCanvas');
  const ctx = canvas.getContext('2d', { alpha: true });
  const toggle = document.getElementById('motionToggle');
  let running = true;
  let width = 0, height = 0, dpr = 1;
  let nodes = [];
  let pulses = [];

  const palette = [
    [16,191,232],
    [43,143,255],
    [56,230,179],
    [119,110,255]
  ];

  function resize(){
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);

    const count = Math.max(22, Math.min(48, Math.round(width / 34)));
    nodes = Array.from({length:count}, (_,i) => ({
      x: width * (0.42 + Math.random() * 0.62),
      y: Math.random() * height,
      vx:(Math.random()-.5)*.14,
      vy:(Math.random()-.5)*.14,
      r:1.3+Math.random()*2.3,
      color:palette[i % palette.length]
    }));

    pulses = Array.from({length:8},(_,i)=>({
      from:i % Math.max(1,nodes.length-1),
      to:(i*3+5) % Math.max(1,nodes.length),
      t:Math.random(),
      speed:.0012+Math.random()*.0018
    }));

    if(!running) draw(performance.now());
  }

  function draw(time){
    ctx.clearRect(0,0,width,height);

    const maxDist = 145;
    for(let i=0;i<nodes.length;i++){
      const a=nodes[i];
      for(let j=i+1;j<nodes.length;j++){
        const b=nodes[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist=Math.hypot(dx,dy);
        if(dist<maxDist){
          const alpha=(1-dist/maxDist)*.19;
          const g=ctx.createLinearGradient(a.x,a.y,b.x,b.y);
          g.addColorStop(0,`rgba(${a.color.join(',')},${alpha})`);
          g.addColorStop(1,`rgba(${b.color.join(',')},${alpha})`);
          ctx.strokeStyle=g;
          ctx.lineWidth=.8;
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
        }
      }
    }

    for(const n of nodes){
      const glow=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,18);
      glow.addColorStop(0,`rgba(${n.color.join(',')},.34)`);
      glow.addColorStop(1,`rgba(${n.color.join(',')},0)`);
      ctx.fillStyle=glow;
      ctx.beginPath();ctx.arc(n.x,n.y,18,0,Math.PI*2);ctx.fill();

      ctx.fillStyle=`rgba(${n.color.join(',')},.72)`;
      ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fill();
    }

    for(const p of pulses){
      const a=nodes[p.from], b=nodes[p.to];
      if(!a||!b) continue;
      const x=a.x+(b.x-a.x)*p.t;
      const y=a.y+(b.y-a.y)*p.t;
      const col=a.color;
      ctx.fillStyle=`rgba(${col.join(',')},.92)`;
      ctx.beginPath();ctx.arc(x,y,2.1,0,Math.PI*2);ctx.fill();
      ctx.shadowBlur=12;ctx.shadowColor=`rgba(${col.join(',')},.8)`;
      ctx.fill();ctx.shadowBlur=0;
    }

    if(running){
      for(const n of nodes){
        n.x+=n.vx;n.y+=n.vy;
        if(n.x<width*.37||n.x>width*1.03)n.vx*=-1;
        if(n.y<0||n.y>height)n.vy*=-1;
      }
      for(const p of pulses){
        p.t += p.speed*16;
        if(p.t>1){ p.t=0; p.from=Math.floor(Math.random()*nodes.length); p.to=Math.floor(Math.random()*nodes.length); }
      }
      requestAnimationFrame(draw);
    }
  }

  toggle.addEventListener('click',()=>{
    running=!running;
    document.body.classList.toggle('motion-paused', !running);
    toggle.setAttribute('aria-pressed', String(!running));
    toggle.textContent=running?'暫停動畫':'播放動畫';
    const indicator = document.getElementById('motionIndicator');
    if (indicator) indicator.textContent = running ? '動態運作中' : '動畫已暫停';
    if(running) requestAnimationFrame(draw);
    else draw(performance.now());
  });

  window.addEventListener('resize',resize,{passive:true});
  resize();
  requestAnimationFrame(draw);
})();

// Scroll reveal + active navigation + sticky header polish
(() => {
  const revealEls = document.querySelectorAll('.reveal');
  const header = document.querySelector('.site-header');
  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  revealEls.forEach(el => io.observe(el));

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);

    let activeId = '';
    sections.forEach(section => {
      const r = section.getBoundingClientRect();
      if (r.top <= 140 && r.bottom > 140) activeId = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
    });
  };

  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
})();

// Use an embedded, web-optimized portrait so GitHub Pages does not depend on binary upload handling.
(() => {
  const portrait = document.querySelector('.portrait-card img');
  if (!portrait) return;
  portrait.decoding = 'async';
  portrait.src = 'data:image/jpeg;base64,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';
})();
