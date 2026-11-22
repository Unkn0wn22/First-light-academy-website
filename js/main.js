
/* ============ FIRST LIGHT ACADEMY — shared JS ============ */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const isTouch = matchMedia('(pointer:coarse)').matches;
const lerp = (a,b,t)=>a+(b-a)*t;

/* ================= I18N ================= */
const I18N = {
  /* nav */
  nav_home:['Nyumbani','Home'], nav_about:['Kuhusu Sisi','About'], nav_programs:['Programu','Programs'],
  nav_schedule:['Ratiba','Schedule'], nav_gallery:['Galeria','Gallery'], nav_join:['Jiunge','Join Us'],
  nav_cta:['Jiunge Sasa','Join Now'],
  /* hero */
  hero_badge:['Akademi ya Soka kwa Vijana','Youth Football Academy'],
  hero_tag:['Kukuza Kipaji, Kuunda Maadili','Nurturing Talent, Building Values'],
  hero_sub:['Mafunzo ya soka kwa watoto wa miaka 3-14. Jumamosi & Jumapili, Saa 4:00 - 5:30 jioni. Yemen, Nyuma na Chuo cha Duce.',
            'Football training for kids aged 3-14. Saturdays & Sundays, 4:00 - 5:30 PM. Yemen, opposite Duce College.'],
  hero_c1:['Jiunge Sasa','Join Now'], hero_c2:['Tazama Programu','View Programs'],
  scroll:['Sogeza Chini','Scroll Down'],
  /* journey */
  j_kick:['Safari Yetu','Our Journey'], j_hint:['endelea kusogeza','keep scrolling'],
  st1t:['Stadi za Soka','Football Skills'], st1s:['Misingi imara: udhibiti wa mpira, kupiga pasi, na kufunga.','Strong fundamentals: ball control, passing, and finishing.'],
  st2t:['Kukuza Kipaji','Nurturing Talent'], st2s:['Kila mtoto ana kipaji - sisi tunakichochea.','Every child has talent - we ignite it.'],
  st3t:['Kuunda Maadili','Building Values'], st3s:['Heshima, ushirikiano, na uvumilivu kwanza.','Respect, teamwork, and patience first.'],
  st4t:['Ndoto Zinakuwa Kweli','Dreams Come True'], st4s:['Tunachochea kipaji chako, tunaimarisha ndoto yako.','We spark your talent, we strengthen your dream.'],
  /* pillars */
  why_k:['Kwa Nini Sisi','Why First Light'], why_t:['Zaidi ya Soka — <em>Tunakua Pamoja</em>','More Than Football — <em>We Grow Together</em>'],
  p1t:['Mafunzo ya Msingi','Core Skills'],        p1s:['Udhibiti wa mpira, kupiga pasi, na kufunga kwa usahihi.','Ball control, passing, and accurate finishing.'],
  p2t:['Mafunzo ya Kimkakati','Tactical Training'], p2s:['Uelewa wa mchezo, nafasi, na ushirikiano wa timu.','Game awareness, positioning, and team cooperation.'],
  p3t:['Mafunzo ya Kimwili','Physical Training'],  p3s:['Ustahimilivu, mwendo, na usawa wa mwili.','Stamina, agility, and body balance.'],
  p4t:['Maadili ya Michezo','Sportsmanship'],      p4s:['Heshima, ushirikiano, na uvumilivu - ndani na nje ya uwanja.','Respect, teamwork, and patience - on and off the pitch.'],
  /* stats */
  stat1:['Vikundi vya Umri','Age Groups'], stat2:['Mazoezi kwa Wiki','Sessions a Week'],
  stat3:['Wachezaji wa Chini','Players & Counting'], stat4:['Kocha Mwenye Cheti','Certified Coach'],
  /* teaser + cta */
  te_k:['Karibu','Welcome'], te_t:['Mahali ambapo kila goli ni <em>mwanzo wa ndoto</em>','Where Every Goal Is <em>a Dream Starting</em>'],
  te_p:['First Light Academy ni nyumba ya vijana wanaopenda soka. Tunafundisha stadi, tunajenga tabia, na tunafurahia kila dakika uwanjani.',
        'First Light Academy is home to young football lovers. We teach skills, build character, and enjoy every minute on the pitch.'],
  cta_t:['Uwanja Unakungoja!','The Pitch Is Waiting!'],
  cta_p:['Anza safari ya mtoto wako leo. Vigundi vyote vya umri viko wazi - U6, U10, na U14.','Start your child\'s journey today. All age groups are open - U6, U10, and U14.'],
  /* about */
  ab_k:['Kuhusu Sisi','About Us'], ab_t:['Akademi Inayong\'aa <em>Kama Nuru ya Asubuhi</em>','An Academy That Shines <em>Like First Light</em>'],
  ab_p1:['First Light Academy ni akademi ya soka inayolenga kukua kwa kipaji cha vijana. Tunazingatia ujuzi wa msingi, maadili ya michezo, afya bora, na kujenga moyo wa ushirikiano.',
         'First Light Academy is a football academy focused on growing youth talent. We emphasize core skills, sportsmanship, good health, and a spirit of teamwork.'],
  ab_p2:['Tunaamini kila mtoto ana nuru yake ndani. Kazi yetu ni kuionyesha uwanjani - kwa mafunzo bora, mazoezi ya kila wiki, na mazingira salama yenye furaha.',
         'We believe every child has their own light within. Our job is to show it on the pitch - through quality coaching, weekly training, and a safe, joyful environment.'],
  goal_t:['Lengo Letu','Our Goal'],
  goal_p:['Kukuza kizazi kijacho cha wachezaji wenye stadi, nidhamu, na maadili ya hali ya juu.','To raise the next generation of players with skill, discipline, and strong values.'],
  val_t:['Maadili Yetu','Our Values'],
  v1:['Heshima','Respect'], v2:['Ushirikiano','Teamwork'], v3:['Uvumilivu','Patience'], v4:['Nidhamu','Discipline'],
  fac_k:['Vifaa & Uwanja','Facilities'], fac_t:['Tayari kwa <em>Mazoezi Bora</em>','Ready for <em>Great Training</em>'],
  f1:['Uwanja wa kisasa unaokidhi viwango','A modern pitch that meets standards'],
  f2:['Vifaa vyote vya mazoezi vinapatikana','All training equipment provided'],
  f3:['Kocha mwenye ustadi na cheti','A skilled, certified coach'],
  f4:['Vikundi tofauti kulingana na umri','Separate groups for every age'],
  quote:['Tunachochea kipaji chako, tunaimarisha ndoto yako!','We spark your talent, we strengthen your dream!'],
  /* programs */
  pr_k:['Programu Zetu','Our Programs'], pr_t:['Kila Umri, <em>Njia Yake</em>','Every Age, <em>Its Own Path</em>'],
  ag_k:['Vikundi vya Umri','Age Groups'],
  u6a:['Miaka 3-6','Ages 3-6'], u6p:['Misingi ya msingi na kucheza kwa furaha.','Core fundamentals and joyful play.'],
  u10a:['Miaka 7-10','Ages 7-10'], u10p:['Uendelezaji wa stadi na ushirikiano.','Skill development and teamwork.'],
  u14a:['Miaka 11-14','Ages 11-14'], u14p:['Uimarishaji wa stadi na mbinu za soka.','Advanced skills and football tactics.'],
  tr_k:['Mafunzo Tunayotoa','What We Train'],
  tr1:['Mafunzo ya msingi: udhibiti mpira, kupiga pasi, kufunga','Core training: ball control, passing, shooting'],
  tr2:['Mafunzo ya kimkakati: uelewa mchezo, nafasi, ushirikiano','Tactical training: game awareness, spacing, teamwork'],
  tr3:['Mafunzo ya kimwili: ustahimilivu, mwendo, usawa wa mwili','Physical training: stamina, movement, body balance'],
  tr4:['Maadili ya michezo: heshima, ushirikiano, uvumilivu','Sportsmanship: respect, teamwork, patience'],
  /* schedule */
  sc_k:['Ratiba','Schedule'], sc_t:['Wikendi ya <em>Mazoezi</em>','Weekends of <em>Training</em>'],
  sc_p:['Mazoezi hufanyika Jumamosi na Jumapili, kila wiki bila kukoma.','Training runs every Saturday and Sunday, all year round.'],
  sat:['Jumamosi','Saturday'], sun:['Jumapili','Sunday'], time_l:['Saa 4:00 asubuhi - 5:30 usiku','4:00 PM - 5:30 PM'],
  freq:['Mara 2 kwa Wiki','Twice a Week'],
  tl_k:['Dakika kwa Dakika','Minute by Minute'],
  t1t:['16:00','Kujipasha Mwili','Warm-up'], t2t:['16:20','Mazoezi ya Stadi','Skills Drills'],
  t3t:['16:50','Michezo Midogo','Small-Sided Games'], t4t:['17:20','Mechi na Kufungia','Match & Cool-down'],
  t1p:['Rope jumps, stretching, na mazoezi ya mwendo.','Skipping, stretching, and movement drills.'],
  t2p:['Udhibiti, pasi, na kufunga - kila kikundi kwa kiwango chake.','Control, passing, and finishing - each group at its level.'],
  t3p:['Michezo ya timu ndogo kuimarisha uamuzi na ushirikiano.','Small games to sharpen decision-making and teamwork.'],
  t4p:['Mechi ya kirafiki na mazoezi ya kufungia kipindi.','A friendly match and cool-down exercises.'],
  /* gallery */
  ga_k:['Galeria','Gallery'], ga_t:['Picha <em>Kutoka Uwanjani</em>','Moments <em>From the Pitch</em>'],
  ga_p:['Tabasamu, jasho, na magoli - hii ni First Light Academy.','Smiles, sweat, and goals - this is First Light Academy.'],
  /* join */
  jo_k:['Jiunge','Join Us'], jo_t:['Anza Safari Yako <em>Leo</em>','Start Your Journey <em>Today</em>'],
  jo_p:['Kujiunga ni rahisi - hatua tatu tu na mtoto wako yuko uwanjani.','Joining is easy - just three steps and your child is on the pitch.'],
  s1t:['Piga Simu au Tuma Ujumbe','Call or Message Us'], s1p:['Wasiliana nasi kupitia simu au WhatsApp - tumalize usajili.','Reach us by phone or WhatsApp - we will sort out registration.'],
  s2t:['Tembelea Uwanja','Visit the Pitch'], s2p:['Yemen, kinyume na Chuo cha Duce - rahisi kufikiwa.','Yemen, opposite Duce College - easy to reach.'],
  s3t:['Anza Mazoezi','Start Training'], s3p:['Saa 4:00 - 5:30, Jumamosi na Jumapili. Karibu uwanjani!','4:00 - 5:30 PM, Saturdays and Sundays. See you on the pitch!'],
  wa_b:['Ongea WhatsApp','Chat on WhatsApp'], call_b:['Piga Simu','Call Now'],
  loc_k:['Mahali','Location'],
  l1:['Yemen, kinyume na Chuo cha Duce','Yemen, opposite Duce College'],
  l2:['Rahisi kufikiwa, usafiri mwingi','Easy to reach, plenty of transport'],
  l3:['Mazingira salama kwa watoto','A safe environment for children'],
  fm_k:['Fomu ya Kujiunga','Quick Registration'],
  fm_n:['Jina la Mtoto','Child\'s Name'], fm_g:['Kundi la Umri','Age Group'],
  fm_s:['Tuma Kupitia WhatsApp','Send via WhatsApp'],
  fm_p:['Baada ya kubofya, WhatsApp itafunguka na ujumbe tayari.','After tapping, WhatsApp opens with the message ready.'],
  g_u6:'U6 (Miaka 3-6 / Ages 3-6)', g_u10:'U10 (Miaka 7-10 / Ages 7-10)', g_u14:'U14 (Miaka 11-14 / Ages 11-14)'
};

let LANG = localStorage.getItem('fl-lang') || 'sw';
function T(key){ const e = I18N[key]; return e ? e[LANG==='sw'?0:1] : key; }
function applyLang(){
  $$('[data-i18n]').forEach(el=>{ const v = T(el.dataset.i18n); if(el.dataset.ihtml!==undefined) el.innerHTML=v; else el.textContent=v; });
  $$('.lang button').forEach(b=>b.classList.toggle('on', b.dataset.lang===LANG));
  document.documentElement.lang = LANG==='sw'?'sw':'en';
  if(typeof renderStage==='function') renderStage(true);
}
document.addEventListener('click', e=>{
  const b = e.target.closest('.lang button'); if(!b) return;
  LANG = b.dataset.lang; localStorage.setItem('fl-lang', LANG); applyLang();
});

/* ================= NAV ================= */
const burger = $('.burger'), navLinks = $('.nav-links');
if(burger) burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));

/* ================= CURSOR ================= */
if(!isTouch){
  const d=document.createElement('div'), r=document.createElement('div');
  d.className='cur-d'; r.className='cur-r'; document.body.append(d,r);
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;});
  (function loop(){ rx=lerp(rx,mx,.16); ry=lerp(ry,my,.16);
    d.style.transform=`translate(${mx-4}px,${my-4}px)`;
    const s=r.classList.contains('hot')?29:18;
    r.style.transform=`translate(${rx-s}px,${ry-s}px)`;
    requestAnimationFrame(loop); })();
  document.addEventListener('pointerover',e=>{
    r.classList.toggle('hot', !!e.target.closest('a,button,.masonry figure,.agecard,input,select'));
  });
}

/* ================= PARTICLES: floating balls & stars ================= */
const dust = document.createElement('canvas'); dust.id='dust'; document.body.prepend(dust);
const dctx = dust.getContext('2d');
function sizeDust(){ dust.width=innerWidth; dust.height=innerHeight; }
sizeDust(); addEventListener('resize', sizeDust);
const bits = Array.from({length: isTouch?22:45}, ()=>({
  x:Math.random()*innerWidth, y:Math.random()*innerHeight,
  r: 2+Math.random()*4, vy:.15+Math.random()*.4, sway:Math.random()*2*Math.PI,
  type: Math.random()<.6?'ball':'star', a:.12+Math.random()*.3
}));
function drawBall(x,y,r,a){
  dctx.globalAlpha=a; dctx.fillStyle='#e8f4ff';
  dctx.beginPath(); dctx.arc(x,y,r,0,7); dctx.fill();
  dctx.fillStyle='#0f172a';
  for(let i=0;i<3;i++){ const t=i*2.1;
    dctx.beginPath(); dctx.arc(x+Math.cos(t)*r*.5, y+Math.sin(t)*r*.5, r*.22,0,7); dctx.fill(); }
  dctx.globalAlpha=1;
}
function drawStar(x,y,r,a){
  dctx.globalAlpha=a; dctx.fillStyle='#fbbf24';
  dctx.beginPath();
  for(let i=0;i<10;i++){ const t=i/10*2*Math.PI - Math.PI/2, rr=i%2?r*.45:r;
    dctx[i?'lineTo':'moveTo'](x+Math.cos(t)*rr, y+Math.sin(t)*rr); }
  dctx.closePath(); dctx.fill(); dctx.globalAlpha=1;
}
(function dustLoop(){
  dctx.clearRect(0,0,dust.width,dust.height);
  for(const b of bits){
    b.y-=b.vy; b.sway+=.01;
    if(b.y<-12){ b.y=innerHeight+12; b.x=Math.random()*innerWidth; }
    const x=b.x+Math.sin(b.sway)*22;
    b.type==='ball' ? drawBall(x,b.y,b.r,b.a) : drawStar(x,b.y,b.r*1.2,b.a);
  }
  requestAnimationFrame(dustLoop);
})();

/* ================= SHAPESHIFT JOURNEY ================= */
const N=24;
const SHAPES = {
  ball: Array.from({length:N},(_,i)=>{const t=i/N*2*Math.PI;return [.5+.48*Math.cos(t),.5+.48*Math.sin(t)];}),
  star: Array.from({length:N},(_,i)=>{const t=i/N*2*Math.PI;const r=.48*(.52+.48*Math.abs(Math.cos(2.5*t)));return [.5+r*Math.cos(t),.5+r*Math.sin(t)];}),
  heart: (()=>{ const raw=[]; for(let i=0;i<N;i++){ const t=i/N*2*Math.PI;
      raw.push([16*Math.sin(t)**3, -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))]); }
    const xs=raw.map(p=>p[0]), ys=raw.map(p=>p[1]);
    const cx=(Math.max(...xs)+Math.min(...xs))/2, cy=(Math.max(...ys)+Math.min(...ys))/2;
    const s=.92/Math.max(Math.max(...xs)-Math.min(...xs), Math.max(...ys)-Math.min(...ys));
    return raw.map(([x,y])=>[.5+(x-cx)*s,.5+(y-cy)*s]); })(),
  trophy: [[.26,.08],[.74,.08],[.75,.15],[.83,.19],[.81,.33],[.71,.35],[.68,.45],[.60,.53],
           [.57,.57],[.58,.62],[.71,.64],[.71,.72],[.65,.72],[.65,.90],[.35,.90],[.35,.72],
           [.29,.72],[.29,.64],[.42,.62],[.43,.57],[.40,.53],[.32,.45],[.29,.35],[.19,.33]]
};
const STAGES = [
  {img:'images/1000920503.jpg', c:'#22c55e'},
  {img:'images/1000920375.jpg', c:'#fbbf24'},
  {img:'images/1000920471.jpg', c:'#fb7185'},
  {img:'images/1000920341.jpg', c:'#fbbf24'}
];
const journey = $('.journey'), morph = $('.morph'), jGlow = $('.j-glow'),
      jWord = $('.j-word'), jSub = $('.j-sub'), jDots = $$('.j-dots i');
let stageIdx = -1;

if(journey && morph){
  /* preload stage images */
  STAGES.forEach(s=>{ const im=new Image(); im.src=s.img; });
  /* build imgs */
  STAGES.forEach((s,i)=>{ const im=document.createElement('img'); im.src=s.img; im.alt='First Light Academy';
    if(i===0) im.classList.add('show'); morph.appendChild(im); });

  function setStage(i){
    if(i===stageIdx) return; stageIdx=i;
    $$('.morph img').forEach((im,k)=>im.classList.toggle('show', k===i));
    jWord.textContent = T('st'+(i+1)+'t'); jSub.textContent = T('st'+(i+1)+'s');
    jGlow.style.background = `radial-gradient(circle, ${STAGES[i].c}38, transparent 62%)`;
    jDots.forEach((d,k)=>d.classList.toggle('on', k===i));
    if(window.gsap) gsap.fromTo('.j-text > *',{y:26,opacity:0},{y:0,opacity:1,duration:.7,ease:'back.out(2)',stagger:.08});
  }
  window.renderStage = force => { if(force) setStage(stageIdx<0?0:stageIdx); };

  const smooth = t => t*t*(3-2*t);
  function frame(){
    const r = journey.getBoundingClientRect();
    const total = r.height - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    const seg = Math.min(2, Math.floor(p*3));
    const lp = smooth((p*3) - seg);
    const A = [SHAPES.ball,SHAPES.star,SHAPES.heart][seg],
          B = [SHAPES.star,SHAPES.heart,SHAPES.trophy][seg];
    const pts = A.map((a,i)=>[lerp(a[0],B[i][0],lp)*100, lerp(a[1],B[i][1],lp)*100]);
    morph.style.clipPath = 'polygon(' + pts.map(pt=>pt[0].toFixed(1)+'% '+pt[1].toFixed(1)+'%').join(',') + ')';
    setStage(Math.min(3, Math.round(p*3)));
    requestAnimationFrame(frame);
  }
  frame();
  setStage(0);
}

/* ================= REVEALS & COUNTERS ================= */
if(window.gsap && window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  $$('.reveal').forEach(el=>{
    gsap.fromTo(el,{opacity:0,y:56,rotate:0},{opacity:1,y:0,duration:.9,ease:'power3.out',
      scrollTrigger:{trigger:el,start:'top 88%'}});
  });
  $$('.count').forEach(el=>{
    const target = +el.dataset.n, o={v:0};
    ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>{
      gsap.to(o,{v:target,duration:1.6,ease:'power2.out',onUpdate:()=>el.textContent=Math.round(o.v)+'+'});
    }});
  });
  /* floating hero balls */
  if($('.hero-ball')) $$('.hero-ball').forEach((b,i)=>{
    gsap.to(b,{y:'-=26',x:i%2?'+=18':'-=18',rotate:20,duration:3+i,yoyo:true,repeat:-1,ease:'sine.inOut'});
  });
}

/* ================= GALLERY LIGHTBOX ================= */
const lb = document.createElement('div'); lb.className='lightbox';
lb.innerHTML = '<button class="lb-x">\u00d7</button><img alt=""><button class="lb-nav lb-prev">\u2039</button><button class="lb-nav lb-next">\u203a</button>';
document.body.appendChild(lb);
const lbImg = lb.querySelector('img');
let gal = [], gi = 0;
function openLB(i){ gi=i; lbImg.src=gal[i].src; lb.classList.add('open'); document.body.style.overflow='hidden'; }
function closeLB(){ lb.classList.remove('open'); document.body.style.overflow=''; }
function stepLB(d){ gi=(gi+d+gal.length)%gal.length; lbImg.src=gal[gi].src; }
$$('.masonry figure').forEach((f,i)=>{ gal.push(f.querySelector('img')); f.addEventListener('click',()=>openLB(i)); });
lb.querySelector('.lb-x').addEventListener('click',closeLB);
lb.querySelector('.lb-prev').addEventListener('click',e=>{e.stopPropagation();stepLB(-1);});
lb.querySelector('.lb-next').addEventListener('click',e=>{e.stopPropagation();stepLB(1);});
lb.addEventListener('click',e=>{ if(e.target===lb) closeLB(); });
addEventListener('keydown',e=>{ if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLB(); if(e.key==='ArrowLeft')stepLB(-1); if(e.key==='ArrowRight')stepLB(1); });

/* ================= JOIN FORM -> WHATSAPP ================= */
const jf = $('#join-form');
if(jf) jf.addEventListener('submit', e=>{
  e.preventDefault();
  const name = $('#f-name').value.trim() || (LANG==='sw'?'Jina':'Name');
  const grp  = $('#f-group').value;
  const msg = LANG==='sw'
    ? `Habari! Nataka kusajili mtoto wangu kwenye First Light Academy.\nJina: ${name}\nKundi: ${grp}`
    : `Hello! I would like to register my child at First Light Academy.\nName: ${name}\nGroup: ${grp}`;
  open('https://wa.me/255629384806?text='+encodeURIComponent(msg),'_blank');
});

/* ================= INIT LANG ================= */
applyLang();
