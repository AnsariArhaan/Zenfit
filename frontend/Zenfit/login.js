/* =====================================================
   ZENFIT — login page only
   (relies on switchAuthTab + showToast from common.js)
===================================================== */

/* ---------- open on the right tab ----------
   Home/About's "Sign Up" button links here with ?tab=signup;
   "Log In" links here with no param, so it defaults to login. */
(function initTab(){
  const params = new URLSearchParams(window.location.search);
  const startTab = params.get('tab') === 'signup' ? 'signup' : 'login';
  switchAuthTab(startTab);
})();

/* ---------- API-backed authentication ---------- */
async function authenticate(endpoint, body, button){
  button.disabled = true;
  const originalLabel = button.textContent;
  button.textContent = 'Please wait…';

  try {
    const response = await fetch(`/api/auth/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'Something went wrong.');

    localStorage.setItem('zenfitToken', result.token);
    localStorage.setItem('zenfitUser', JSON.stringify(result.user));
    showToast(result.message);
  } catch (error) {
    showToast(error.message);
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
}

document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) return showToast('Enter your email and password.');
  authenticate('login', { email, password }, document.getElementById('loginButton'));
});

document.getElementById('signupButton').addEventListener('click', () => {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  if (!name || !email || !password) return showToast('Complete all sign-up fields.');
  if (password.length < 6) return showToast('Password must be at least 6 characters.');
  authenticate('register', { name, email, password }, document.getElementById('signupButton'));
});
