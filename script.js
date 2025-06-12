const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save user preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load saved preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
