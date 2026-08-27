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
