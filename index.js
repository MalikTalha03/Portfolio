const hamMenu = document.getElementById('hamMenu');
const overlayMenu = document.querySelector('.overlay-menu');
const hamMenuOverlay = document.getElementById('hamMenuOverlay');
const workSection = document.getElementById('workSec');
const aboutSection = document.getElementById('aboutSec');
const contactForm = document.getElementById('contactSec');

const projectButtons = document.querySelectorAll('.project.see');
const overlayCards = document.querySelectorAll('.overlay-card');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

hamMenuOverlay.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

function closeOverlayMenu() {
  overlayMenu.classList.remove('active');
  hamMenu.classList.remove('active');
}

workSection.addEventListener('click', closeOverlayMenu);
aboutSection.addEventListener('click', closeOverlayMenu);
contactForm.addEventListener('click', closeOverlayMenu);

projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    overlayCards[index].classList.add('active');
  });
});

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    closeButton.closest('.overlay-card').classList.remove('active');
  });
});

const toggleButtons = document.querySelectorAll('.toggle-arrow');
const languagesLists = document.querySelectorAll('.lang-drop');

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener('click', () => {
    languagesLists[index].classList.toggle('languages');
    toggleButton.classList.toggle('toggle-arroww');
  });
});
