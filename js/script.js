function setTheme(theme) {
  const body = document.body;
  body.classList.toggle('dark-mode', theme === 'dark');
  localStorage.setItem('theme', theme);
}

// Function to toggle the theme
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Check for user preference in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}

// Event listener for the theme toggle checkbox
const themeToggle = document.querySelector('.themeToggle');
themeToggle.addEventListener('click', toggleTheme);