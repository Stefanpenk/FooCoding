//INTRO
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('.intro_title');

const section = document.querySelector('.main');
const end = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Scenes
const scene = new ScrollMagic.Scene({
      duration: 9000,
      triggerElement: intro,
      triggerHook: 0
   })
   .addIndicators()
   .setPin(intro)
   .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, {
   opacity: 0
}, {
   opacity: 1
});

const scene2 = new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: intro,
      triggerHook: 0
   })
   .setTween(textAnim)
   .addTo(controller);



//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
   scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
   delay += (scrollpos - delay) * accelamount;
   //   console.log(scrollpos, delay);

   video.currentTime = delay;
}, 33.3);


//MAIN
const charsContainer = document.querySelector('.charsContainer');

const characters = (data) => {
   data.map(object => {
      const container = document.createElement('div');
      container.classList.add('character')
      const name = document.createElement('h3');
      name.textContent = object.name;
      container.appendChild(name);
      const nickname = document.createElement('h4');
      nickname.textContent = object.nickname;
      container.appendChild(nickname);
      const occupation = document.createElement('h5');
      occupation.textContent = object.occupation.join(', ');
      container.appendChild(occupation);
      const appearance = document.createElement('p');
      appearance.textContent = `seasons: ${object.appearance.join(', ')}`;
      container.appendChild(appearance);
      const overflowHidden = document.createElement('div');
      overflowHidden.classList.add('overflowHidden');
      container.appendChild(overflowHidden);
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('img-container');
      imgDiv.style.backgroundImage = `url(${object.img})`;
      overflowHidden.appendChild(imgDiv);
      charsContainer.appendChild(container);
   })
};

fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data => characters(data))