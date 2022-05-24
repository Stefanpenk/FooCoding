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
   // .addIndicators()
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
   delay += (scrollpos - delay) * accelamount
   video.currentTime = delay;
}, 33.3);


//MAIN
const charsContainer = document.querySelector('.charsContainer');

const characters = (data) => {
   data.map(object => {
      const honeycomb = document.createElement('ul');
      honeycomb.classList.add('honeycomb')
      const li1 = document.createElement('li');
      li1.classList.add('honeycomb-cell');
      li1.classList.add('hover');
      honeycomb.appendChild(li1);
      const img = document.createElement('div');
      img.classList.add('honeycomb-cell_img');
      img.style.backgroundImage = `url(${object.img})`;
      li1.appendChild(img);
      const li2 = document.createElement('li');
      li2.classList.add('honeycomb-cell');
      li2.classList.add('flex');
      honeycomb.appendChild(li2);
      const smallText = document.createElement('div');
      smallText.classList.add('honeycomb-cell_smallText');
      smallText.textContent = object.occupation.join(', ');
      li2.appendChild(smallText);
      const li3 = document.createElement('li');
      li3.classList.add('honeycomb-cell');
      li3.classList.add('flex');
      honeycomb.appendChild(li3);
      const tittle = document.createElement('div');
      tittle.classList.add('honeycomb-cell_tittle');
      tittle.textContent = object.name;
      li3.appendChild(tittle);
      const nickname = document.createElement('div');
      nickname.classList.add('honeycomb-cell_nickname');
      nickname.textContent = object.nickname;
      li3.appendChild(nickname);
      const li4 = document.createElement('li');
      li4.classList.add('honeycomb-cell');
      li4.classList.add('flex');
      honeycomb.appendChild(li4);
      const serial = document.createElement('div')
      serial.classList.add('honeycomb-cell_serial');
      serial.textContent = `seasons: ${object.appearance.join(', ')}`;
      li4.appendChild(serial);
      charsContainer.appendChild(honeycomb);
   })
};

fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data => characters(data))