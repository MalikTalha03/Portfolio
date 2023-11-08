const hamMenu = document.getElementById('hamMenu');
const overlayMenu = document.querySelector('.overlay-menu');
const hamMenuOverlay = document.getElementById('hamMenuOverlay');
const workSection = document.getElementById('workSec');
const aboutSection = document.getElementById('aboutSec');
const contactForm = document.getElementById('contactSec');

const toggleButtons = document.querySelectorAll('.toggle-arrow');
const languagesLists = document.querySelectorAll('.lang-drop');
const projectButtons = document.querySelectorAll('.project.see');
const cardData = [];

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const titleElement = card.querySelector('.title');
  const imagesDiv = card.querySelector('.images');
  if (imagesDiv && titleElement) {
    const imagesHTML = imagesDiv.innerHTML;
    const title = titleElement.innerHTML;
    cardData.push({ title, imagesHTML });
  }
});

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

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    closeButton.closest('.overlay-card').classList.remove('active');
  });
});

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener('click', () => {
    languagesLists.forEach((list, i) => {
      if (i !== index) {
        list.classList.remove('languages');
      }
    });
    toggleButtons.forEach((btn, i) => {
      if (i !== index) {
        btn.classList.remove('toggle-arroww');
      }
    });
    languagesLists[index].classList.toggle('languages');
    toggleButton.classList.toggle('toggle-arroww');
  });
});

const workcrd = document.querySelectorAll('.work-card');

const overlaycard = document.createElement('div');

overlaycard.setAttribute('class', 'overlay-card');
overlaycard.setAttribute('id', 'overlay-card');

projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    overlaycard.innerHTML = `<div class="card">  
<div class="card-details align">
    <div class="top-card">
        ${cardData[index].title}
        <img src="./images/Cancel.svg" alt="cancel button" class="close" id="close">
    </div>
    <div class="techs-overlay">
        <h3 class="tech-item no-margin font">Canopy</h3>
        <img src="./images/Counter.svg" alt="">
        <h3 class="tech-item">Back End Dev</h3>
        <img src="./images/Counter.svg" alt="">
        <h3 class="tech-item">2015</h3>
    </div>
</div>
<div class="img-overlay">
    ${cardData[index].imagesHTML}
</div>
<div class="card-details detail-overlay">
    <div class="para">
        <p class="p-over mob-hide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
        <p class="p-over">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
    </div>
    <div class="langs-button">
        <ul>
            <li class="lang-list"><a href="https://html.spec.whatwg.org/multipage/">HTML</a></li>
            <li class="lang-list"><a href="https://devdocs.io/css/">CSS</a></li>
            <li class="lang-list"><a href="https://devdocs.io/javascript/">Javascript</a></li>
            <li  class="mob-hide lang-list"><a href="https://guides.rubyonrails.org/">Ruby on rails</a></li>
            <li  class="mob-hide lang-list"><a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">Bootstrap</a></li>
        </ul>
        <div class="buttons">
            <button class="mob-hide special-project">See Live
                <img src="./images/live.svg" alt="live button">
            </button>
            <button class="mob-hide special-project">See Source
                <img src="./images/git icon.svg" alt="github">
            </button>
            <button class="pc-hide project-mob">See Live
                <img src="./images/live.svg" alt="live button">
            </button>
            <button class="pc-hide project-mob">See Source
                <img src="./images/git icon.svg" alt="github">
            </button>
        </div>
    </div>
</div>
</div>`;
    workcrd[index].appendChild(overlaycard);
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', (event) => {
        const card = event.target.closest('.overlay-card');
        if (card) {
          card.remove();
        }
      });
    });
  });
});
