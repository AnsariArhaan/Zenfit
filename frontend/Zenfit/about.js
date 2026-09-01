/* =====================================================
   ZENFIT — about page only

   Improvement over the original: the team row was hand-typed
   HTML. Every other section on the site (workouts, supplements,
   blog) builds its cards from a data array, so this does the
   same here — same three cards, same content, just easier to
   add/edit a teammate later (one line instead of a markup block).
===================================================== */

const teamMembers = [
  { initial:"A", name:"Person A", role:"UML & Diagrams" },
  { initial:"B", name:"Person B", role:"Frontend & UI" },
  { initial:"C", name:"Person C", role:"Database & Backend" }
];

function renderTeam(){
  const host = document.getElementById('teamRow');
  teamMembers.forEach(member=>{
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <div class="avatar">${member.initial}</div>
      <strong>${member.name}</strong>
      <div style="color:var(--muted);font-size:.8rem;">${member.role}</div>
    `;
    host.appendChild(card);
  });
}

/* ---------- init ---------- */
renderTeam();
