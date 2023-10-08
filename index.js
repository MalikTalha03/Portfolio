const hamMenu = document.getElementById('hamMenu');
const overlayMenu = document.querySelector('.overlay-menu');
const hamMenuOverlay = document.getElementById('hamMenuOverlay'); 
const workSection = document.getElementById('workSec');
const aboutSection = document.getElementById('aboutSec');
const contactForm = document.getElementById('contactSec');

// Get all the buttons that open card overlays
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

// Add click event listeners to each project button
projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Show the overlay card associated with the clicked button
    overlayCards[index].classList.add('active');
  });
});

// Add click event listener to close buttons in overlay cards
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    // Hide the overlay card when the close button is clicked
    closeButton.closest('.overlay-card').classList.remove('active');
  });
});
