/* eslint-disable */

/*
  Call this function to get a JSON string of the data
  (simulates calling a server to retrieve data)
*/
function fetchPokemonData() {
  return '{"abilities":[{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3},{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1}],"base_experience":63,"forms":[{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-form/7/"}],"height":5,"held_items":[],"id":7,"is_default":true,"location_area_encounters":"https://pokeapi.co/api/v2/pokemon/7/encounters","name":"squirtle","order":10,"species":{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-species/7/"},"sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png","front_shiny_female":null},"stats":[{"base_stat":43,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}},{"base_stat":64,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":50,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":65,"effort":1,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":48,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":44,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}}],"types":[{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}],"weight":90}';
}

/* Code goes below */
//Getting DOM elements
const mainScreen = document.querySelector('.screen');
const statsScreen = document.querySelector('ul');
const nameScreen = document.querySelector('.name');
const startButton = document.querySelector('.start_button');
const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');


//Whole data
const pokemonData = JSON.parse(fetchPokemonData());
// console.log(pokemonData);

//Sprites
const spritesList = Object.values(pokemonData.sprites).filter(data => data !== null);
// console.log(spritesList);

//Stats
const stats = Object.values(pokemonData.stats).map(stat => ({
  id: `${stat.stat.name}`,
  base_stat: `${stat.base_stat}`
}))

// const showImages = spritesList.map(image => {
//   pokemonImage = document.createElement('img');
//   pokemonImage.src = image;
//   pokemonImage.height = '200';
//   imgsContainer.appendChild(pokemonImage);
// });

let flag = 0;
const handlePrevClick = () => {
  if (flag === 0) {
    mainScreen.style.backgroundImage = `url("${spritesList[0]}")`
  } else {
    --flag
    mainScreen.style.backgroundImage = `url("${spritesList[flag]}")`
  }
  prevButton.style.setProperty('--display', 'none');
  // console.log(flag);
}

const handleNextClick = () => {
  if (flag !== spritesList.length - 1) {
    ++flag
    mainScreen.style.backgroundImage = `url("${spritesList[flag]}")`
  }
  nextButton.style.setProperty('--display', 'none');
  // console.log(flag);
}

const handleStartClick = () => {
  mainScreen.style.backgroundImage = `url("${spritesList[0]}")`
  nameScreen.textContent = `${pokemonData.name}`
  stats.map((stat) => {
    const li = document.createElement('li');
    li.classList.add('stat');
    li.textContent = `${stat.id} : ${stat.base_stat}`
    statsScreen.appendChild(li);
  })
  startButton.style.setProperty('--display', 'none');
  prevButton.addEventListener('click', handlePrevClick);
  nextButton.addEventListener('click', handleNextClick);
  startButton.removeEventListener('click', handleStartClick);
  startButton.removeEventListener('mousedown', handleChangeColor);
  startButton.removeEventListener('mouseup', handleChangeColor);
}

const handleChangeColor = () => {
  startButton.classList.toggle('clickStart');
}
const handleChangeColorPrev = () => {
  prevButton.classList.toggle('click');
}
const handleChangeColorNext = () => {
  nextButton.classList.toggle('click');
}

startButton.addEventListener('click', handleStartClick);
startButton.addEventListener('mousedown', handleChangeColor);
startButton.addEventListener('mouseup', handleChangeColor);
prevButton.addEventListener('mousedown', handleChangeColorPrev);
prevButton.addEventListener('mouseup', handleChangeColorPrev);
nextButton.addEventListener('mousedown', handleChangeColorNext);
nextButton.addEventListener('mouseup', handleChangeColorNext);