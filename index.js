const hamMenu = document.getElementById('hamMenu');
const overlayMenu = document.querySelector('.overlay-menu');
const hamMenuOverlay = document.getElementById('hamMenuOverlay'); 

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

hamMenuOverlay.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});