function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('show');
}

// Optional: Close menu when clicking outside
document.addEventListener('click', function (event) {
  setTimeout(() => {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
      nav.classList.remove('show');
    }
  }, 0);
});
