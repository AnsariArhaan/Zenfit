/* =====================================================
   ZENFIT — home page only
   (relies on motivationalLines + showToast from common.js)
===================================================== */

/* ---------- quote of the day ---------- */
(function setQuoteOfDay(){
  const idx = new Date().getDate() % motivationalLines.length;
  document.getElementById('quoteOfDay').textContent = motivationalLines[idx];
})();

/* ---------- share ---------- */
function shareWhatsApp(){
  window.open('https://wa.me/?text=' + encodeURIComponent("I'm tracking my fitness journey on ZENFIT 💪"), '_blank');
}
function shareTwitter(){
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent("Tracking progress on ZENFIT today 💪"), '_blank');
}
function copyLink(){
  const fakeLink = 'https://zenfit.app/journey/demo123';
  navigator.clipboard.writeText(fakeLink).then(()=>{
    showToast('Link copied — go share your progress!');
  }).catch(()=>{
    showToast('Could not copy — link: ' + fakeLink);
  });
}
