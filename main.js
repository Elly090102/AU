// Highlight current nav link based on pathname
const links = document.querySelectorAll('.au-main-nav__list a');
links.forEach(link => {
  if (link.pathname === window.location.pathname) {
    link.classList.add('active');
  }
});

