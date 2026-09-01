/* =====================================================
   ZENFIT — shared across every page
   (floating quotes, page-enter flash, auth modal, toast)
   Load this BEFORE the page-specific <page>.js file.
===================================================== */

/* ---------- shared data: motivational lines ---------- */
const motivationalLines = [
  "Every rep counts.",
  "Discipline outlasts motivation.",
  "Sweat now, shine later.",
  "Your only competition is yesterday's you.",
  "Small reps, big future.",
  "Consistency is the real supplement.",
  "Show up even on the slow days.",
  "The weight doesn't care about your excuses.",
  "Progress, not perfection.",
  "Log it, don't just live it."
];

/* ---------- page-enter ZENFIT flash ----------
   Original site was a single-page app: navigate() re-ran this
   flash on every internal click. Now each page is its own file,
   so the flash simply plays once when that file finishes loading. */
window.addEventListener('DOMContentLoaded', ()=>{
  const overlay = document.getElementById('pulseTransition');
  if(overlay) overlay.classList.add('run');
});

/* ---------- floating ambient quotes ---------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function spawnDrift(){
  if(reduceMotion) return;
  const layer = document.getElementById('floatingLayer');
  if(!layer) return;
  const el = document.createElement('div');
  el.className = 'drift';
  el.textContent = motivationalLines[Math.floor(Math.random()*motivationalLines.length)];
  el.style.left = (Math.random()*80+5) + '%';
  el.style.setProperty('--dx', (Math.random()*80-40)+'px');
  const dur = 14 + Math.random()*10;
  el.style.animationDuration = dur + 's';
  layer.appendChild(el);
  setTimeout(()=>el.remove(), dur*1000);
}
setInterval(spawnDrift, 2600);
spawnDrift();

/* ---------- auth modal ---------- */
function openAuth(tab){
  const modal = document.getElementById('authModal');
  if(modal) modal.classList.add('open');
  switchAuthTab(tab);
}
function closeAuth(){
  const modal = document.getElementById('authModal');
  if(modal) modal.classList.remove('open');
}
function switchAuthTab(tab){
  document.getElementById('tabLogin').classList.toggle('active', tab==='login');
  document.getElementById('tabSignup').classList.toggle('active', tab==='signup');
  document.getElementById('viewLogin').classList.toggle('active', tab==='login');
  document.getElementById('viewSignup').classList.toggle('active', tab==='signup');
}
function fakeSubmit(kind){
  closeAuth();
  showToast(kind==='login' ? "Welcome back, champ!" : "Account created — let's get moving.");
}

/* ---------- toast ---------- */
function showToast(msg){
  const host = document.getElementById('toastHost');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  host.appendChild(t);
  setTimeout(()=>t.remove(), 3200);
}
