const button = document.getElementById('participate');
button.addEventListener('click', (event) => {
  event.preventDefault();
  alert("Les inscriptions sont closes pour le moment.\n\nVeuillez réessaayer plus tard.")
});

const burgerButton = document.getElementById('burger-button');
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    if (window.getComputedStyle(burgerButton).display !== 'none') {
      burgerButton.click();
    }
  });
});


const navbarCollapse = document.getElementById('navbarLinks');
window.addEventListener('resize', () => {
  if (window.getComputedStyle(navbarCollapse).display !== 'none') {
      burgerButton.click();
    }
});
