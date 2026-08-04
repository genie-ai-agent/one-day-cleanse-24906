(function(){
  const D = window.CLEANSE;

  // rules
  const rulesEl = document.getElementById('rules-list');
  D.rules.forEach((r,i)=>{
    const li = document.createElement('li');
    li.innerHTML = `<span class="num">${String(i+1).padStart(2,'0')}</span><span class="rule-text">${r.text}</span>`;
    rulesEl.appendChild(li);
  });

  // drinks
  const ok = document.getElementById('drink-ok');
  D.drinkOk.forEach(d=>{ const li=document.createElement('li'); li.textContent=d; ok.appendChild(li); });
  const no = document.getElementById('drink-no');
  D.drinkNo.forEach(d=>{ const li=document.createElement('li'); li.textContent=d; no.appendChild(li); });

  // meals
  const mg = document.getElementById('meal-grid');
  D.meals.forEach(m=>{
    const div = document.createElement('div');
    div.className = 'meal';
    div.innerHTML = `
      <span class="kcal">${m.kcal}</span>
      <div class="when">${m.when}</div>
      <h4>${m.title}</h4>
      <div class="cap">${m.cap}</div>
      <ul>${m.items.map(i=>`<li>${i}</li>`).join('')}</ul>
    `;
    mg.appendChild(div);
  });

  // snack
  const s = document.getElementById('snack-card');
  s.innerHTML = `
    <div class="icon">+1</div>
    <div class="body">
      <h4>${D.snack.title}</h4>
      <p>${D.snack.body}</p>
    </div>
    <span class="kcal">${D.snack.kcal}</span>
  `;

  // crew
  const crewList = document.getElementById('crew-list');
  function renderCrew(){
    crewList.innerHTML = '';
    let locked = 0;
    D.crew.forEach((c,idx)=>{
      if(c.locked) locked++;
      const li = document.createElement('li');
      li.className = c.locked ? 'locked' : '';
      li.innerHTML = `<span class="name">${c.name}</span><span class="status">${c.locked ? '[ LOCKED IN ]' : c.handle}</span>`;
      li.addEventListener('click', ()=>{ D.crew[idx].locked = !c.locked; renderCrew(); });
      crewList.appendChild(li);
    });
    document.getElementById('crew-count').textContent = locked;
  }
  renderCrew();

  // join button
  const btn = document.getElementById('join-btn');
  let joined = false;
  btn.addEventListener('click', ()=>{
    joined = !joined;
    btn.textContent = joined ? '[ LOCKED IN \u2713 ]' : '[ JOIN THE CLEANSE ]';
    btn.classList.toggle('locked', joined);
    // also flip "the crew" first open slot
    if(joined){
      const openIdx = D.crew.findIndex(c=>!c.locked);
      if(openIdx>-1){ D.crew[openIdx].locked = true; D.crew[openIdx].name = 'you'; D.crew[openIdx].handle = '@you'; renderCrew(); }
    }
  });

  // clock + countdown to 8pm
  function pad(n){return String(n).padStart(2,'0')}
  function tick(){
    const now = new Date();
    document.getElementById('clock').textContent =
      pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds());
    const cutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0);
    const diff = cutoff - now;
    const cd = document.getElementById('countdown');
    const bar = document.getElementById('cd-bar-fill');
    if(diff <= 0){
      cd.textContent = 'KITCHEN CLOSED';
      cd.style.color = '#ff4d4d';
      bar.style.width = '100%';
      bar.style.background = '#ff4d4d';
      return;
    }
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const sec = Math.floor((diff%60000)/1000);
    cd.textContent = pad(h)+':'+pad(m)+':'+pad(sec);
    // bar fills from morning (6am) to 8pm
    const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
    const total = cutoff - dayStart;
    const elapsed = Math.max(0, now - dayStart);
    const pct = Math.min(100, (elapsed/total)*100);
    bar.style.width = pct+'%';
  }
  tick(); setInterval(tick, 1000);
})();
