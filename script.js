// scroll reveal
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold:0.15 });
  els.forEach(el=>io.observe(el));

  // card tilt on hover (desktop only)
  const cards = document.querySelectorAll('.id-card');
  const isFine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(isFine){
    cards.forEach(card=>{
      card.addEventListener('mousemove', (e)=>{
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width - 0.5;
        const y = (e.clientY - r.top)/r.height - 0.5;
        card.style.transform = `rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', ()=>{
        card.style.transform = 'rotateY(0) rotateX(0) translateY(0)';
      });
    });
  }
