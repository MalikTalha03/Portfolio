const workcrd = document.querySelectorAll(".work-card");

const overlaycard = document.createElement("div");

overlaycard.setAttribute("class","overlay-card");
overlaycard.setAttribute("id","overlay-card");

overlaycard.innerHTML = `<div class="card">  
<div class="card-details align">
    <div class="top-card">
        <h1>Tonic</h1>
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
    <img class="mob-hide" src="./images/desktop/cardoverlay1.png" alt="card1">
    <img class="pc-hide" src="./images/Snapshoot1.png" alt="card1">
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

const projectButtons = document.querySelectorAll('.project.see');

projectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      workcrd[index].appendChild(overlaycard);
      const closeButtons = document.querySelectorAll('.close');
      closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', function(event) {
            const card = event.target.closest('.work-card');
            if (card) {
              card.remove();
            }
    });
    });
  });
});


  
  