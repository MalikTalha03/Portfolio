const hamMenu = document.getElementById('hamMenu');
const overlayMenu = document.querySelector('.overlay-menu');
const hamMenuOverlay = document.getElementById('hamMenuOverlay'); 
const workSection = document.getElementById('workSec');
const aboutSection = document.getElementById('aboutSec');
const contactForm = document.getElementById('contactSec');

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

workSection.addEventListener('click',closeOverlayMenu);
aboutSection.addEventListener('click',closeOverlayMenu);
contactForm.addEventListener('click',closeOverlayMenu);