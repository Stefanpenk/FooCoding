// //INTRO
// const intro = document.querySelector('.intro');
// const video = intro.querySelector('video');
// const text = intro.querySelector('.intro_title');

// const section = document.querySelector('.main');
// const end = section.querySelector('h1');

// //SCROLL MAGIC
// const controller = new ScrollMagic.Controller();

// //Scenes
// const scene = new ScrollMagic.Scene({
//       duration: 9000,
//       triggerElement: intro,
//       triggerHook: 0
//    })
//    // .addIndicators()
//    .setPin(intro)
//    .addTo(controller);

// //Text Animation
// const textAnim = TweenMax.fromTo(text, 3, {
//    opacity: 0
// }, {
//    opacity: 1
// });

// const scene2 = new ScrollMagic.Scene({
//       duration: 3000,
//       triggerElement: intro,
//       triggerHook: 0
//    })
//    .setTween(textAnim)
//    .addTo(controller);



// //Video Animation
// let accelamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on('update', e => {
//    scrollpos = e.scrollPos / 1000;
// })

// setInterval(() => {
//    delay += (scrollpos - delay) * accelamount
//    video.currentTime = delay;
// }, 33.3);

//MAIN
const charsContainer = document.querySelector('.charsContainer');

//input
const input = document.querySelector('input');

//likes counter
const likeCounter = document.querySelector('.board_like');
const dislikeCounter = document.querySelector('.board_dislike');

const characters = (data) => {
   let container = [];
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
      const likeboard = document.createElement('div');
      likeboard.classList.add('buttons');
      li3.appendChild(likeboard);
      const like = document.createElement('div');
      like.classList.add('like_button');
      likeboard.appendChild(like);
      like.innerHTML = `<img src='./assets/like-icon.svg' alt="like button" style="color:green;"/>`;
      const dislike = document.createElement('div');
      dislike.classList.add('dislike_button');
      dislike.innerHTML = `<img src='./assets/dislike-icon.svg' alt="dislike button" style="color:green;"/>`;
      likeboard.appendChild(dislike);

      const li4 = document.createElement('li');
      li4.classList.add('honeycomb-cell');
      li4.classList.add('flex');
      honeycomb.appendChild(li4);
      const serial = document.createElement('div')
      serial.classList.add('honeycomb-cell_serial');
      serial.textContent = `seasons: ${object.appearance.join(', ')}`;
      li4.appendChild(serial);

      container.push(honeycomb);
   })
   console.log(container);

   container.map(ul => charsContainer.appendChild(ul));

   //filter
   const searchTask = (e) => {
      const searchText = e.target.value.toLowerCase();
      let tasks = container;
      tasks = tasks.filter(task => task.childNodes[2].childNodes[0].innerText.toLowerCase().includes(searchText));
      // console.log(tasks);
      charsContainer.textContent = '';
      tasks.forEach(el => charsContainer.appendChild(el))
   }
   input.addEventListener('input', searchTask);

   // console.log(container[1].childNodes[2].childNodes[2].childNodes[0])
   //likes counter
   const likeCounter = document.querySelector('.board_like');
   const dislikeCounter = document.querySelector('.board_dislike');
   let likeNumber = 0
   let dislikeNumber = 0
   likeCounter.textContent = 0;
   dislikeCounter.textContent = 0;

   const addLike = (e) => {
      ++likeNumber;
      likeCounter.textContent = likeNumber;
      // console.log(e.target);
      e.target.remove();
   }

   const addDislike = (e) => {
      ++dislikeNumber;
      dislikeCounter.textContent = dislikeNumber;
      // console.log(e.target);
      e.target.remove();
   }

   container.forEach((ul, e) => {
      const likeButton = ul.childNodes[2].childNodes[2].childNodes[0];
      likeButton.addEventListener('click', addLike)
   })

   container.forEach((ul, e) => {
      const dislikeButton = ul.childNodes[2].childNodes[2].childNodes[1];
      dislikeButton.addEventListener('click', addDislike)
   })
};

fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data => {
      characters(data);
   })