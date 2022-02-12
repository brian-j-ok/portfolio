const toggbleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggbleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});