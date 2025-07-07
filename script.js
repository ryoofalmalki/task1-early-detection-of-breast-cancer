function navigateTo(page) {
  window.location.href = page;
}

function respond(answer) {
  const response = document.getElementById('response');
  if (answer === 'yes') {
    response.textContent = "Great job! Keep it up and encourage others too!";
  } else {
    response.textContent = "Don't wait! Early detection saves lives.";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
