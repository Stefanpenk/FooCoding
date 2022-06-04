'use strict';

//1.1 - 1.3
// const ul = document.createElement("ul");
// document.body.appendChild(ul);

// const books = ['the_thing_with_feathers', 'shantaram', 'tricks_of_the_mind', 'mike_tyson_undisputed_truth', 'sapiens', 'the_magus', 'post_office', 'women', 'crime_and_punishment', 'the_da_vinci_code'];

// // console.log(books);


// const book = () => {
//   for (let i = 0; i < books.length; i++) {
//     const li = document.createElement("li");
//     li.setAttribute('id', `${books[i]}`);
//     li.textContent = `${books[i]}`;
//     // console.log(li);
//     ul.appendChild(li);
//     // console.log(li);
//   }
// };

// book()

//1.4-1.8
const myBooks = {
  the_thing_with_feathers: {
    id: 'the_thing_with_feathers',
    title: 'The Thing with Feathers',
    author: 'Noah Strycker',
    language: 'English',
    published: 2014,
    description: 'The surprising lives of brids and what they reveal about being human.',
  },
  shantaram: {
    id: 'shantaram',
    title: 'Shantaram',
    author: 'Gregory David Roberts',
    language: 'English',
    published: 2003,
    description: 'Novel in which a convicted Australian bank robber escapes from Pentridge Prison and flees to India. The novel is commended by many for its vivid portrayal of tumultuous life in Bombay in the early to late 80s.',
  },
  tricks_of_the_mind: {
    id: 'tricks_of_the_mind',
    title: 'Tricks of the Mind',
    author: 'Derren Brown',
    language: 'English',
    published: 2006,
    description: "Tricks of the Mind takes you on a journey into the structure and pyschology of magic. Derren teaches you how to read clues in people's behaviour and spot liars.",
  },
  mike_tyson_undisputed_truth: {
    id: 'mike_tyson_undisputed_truth',
    title: 'Mike Tyson Undisputed Truth: My Autobiography',
    author: 'Mike Tyson',
    language: 'English',
    published: 2013,
    description: 'A bare-knuckled, tell-all memoir from Mike Tyson, the onetime heavyweight champion of the world—and a legend both in and out of the ring.',
  },
  sapiens: {
    id: 'sapiens',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    language: 'English',
    published: 2014,
    description: 'Harari spans the whole of human history, from the very first humans to walk the earth to the radical—and sometimes devastating—breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions.',
  },
  the_magus: {
    id: 'the_magus',
    title: 'The Magus',
    author: 'John Fowles',
    language: 'English',
    published: 2014,
    description: 'Postmodern novel by British author John Fowles, telling the story of Nicholas Urfe, a young British graduate who is teaching English on a small Greek island. Urfe becomes embroiled in the psychological illusions of a master trickster, which become increasingly dark and serious.',
  },
  post_office: {
    id: 'post_office',
    title: 'Post Office',
    author: 'Charles Bukowski',
    language: 'English',
    published: 1971,
    description: "The book is an autobiographical memoir of Bukowski's years working at the United States Postal Service.",
  },
  women: {
    id: 'women',
    title: 'Women',
    author: 'Charles Bukowski',
    language: 'English',
    published: 1978,
    description: "Women is centered on Chinaski's later life, as a celebrated poet and writer, not as a dead-end lowlife. It does, however, feature the same constant carousel of women with whom Chinaski only finds temporary fulfillment.",
  },
  'crime_and_punishment': {
    id: 'crime_and_punishment',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    language: 'Russian',
    published: 1866,
    description: 'Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat.',
  },
  'the_da_vinci_code': {
    id: 'the_da_vinci_code',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    language: 'English',
    published: 2003,
    description: "The novel explores an alternative religious history, whose central plot point is that the Merovingian kings of France were descended from the bloodline of Jesus Christ and Mary Magdalene.",
  },
}

const buttonsContainer = document.querySelector('.buttons_container');
const clickButton = document.querySelector('button');

//Creating Array from myBooks object
const myBooksArray = Object.entries(myBooks).map(book => book[1]);

//Creating and appending ul inside HTML
const ul = document.createElement("ul");
const container = document.querySelector('.container').appendChild(ul);

//Creating sort button
const sortButton = document.createElement('div');
sortButton.classList.add('button');
sortButton.innerHTML = `<span class="material-symbols-outlined">sort_by_alpha</span>`;

//Showing books info function
const showInfo = (e) => {
  if (e.target.parentNode.classList[0] === 'info') {
    e.target.parentNode.classList.toggle('infoActive');
  }
};

//Showing books function and creating HTML elements
const objectElements = () => {
  for (let i = 0; i < myBooksArray.length; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);

    const cover = document.createElement('div');
    const image = document.createElement('img');
    cover.appendChild(image);
    cover.classList.add('cover');
    li.appendChild(cover);

    const info = document.createElement('div');
    info.classList.add('info');
    li.appendChild(info);


    const keys = Object.keys(myBooksArray[i]);
    const values = Object.values(myBooksArray[i]);

    keys.map((key, i) => {
      if (key === 'id') {
        image.setAttribute('src', `./assets/book_covers/${values[i]}.jpg`)
      } else if (key === 'language' || key === 'published') {
        const p = document.createElement('p');
        p.classList.add(`${key}`);
        p.textContent = `${key}: ${values[i]}`
        info.appendChild(p);
      } else {
        const div = document.createElement('div');
        div.classList.add(`${key}`);
        div.textContent = `${values[i]}`
        info.appendChild(div);
      }
    })
  }
  button.removeEventListener('click', objectElements);
  clickButton.remove();
  buttonsContainer.appendChild(sortButton);
};

//Sort function
const sortFunction = (a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}

//Sort button funcion
const handleSort = () => {
  myBooksArray.sort(sortFunction);
  ul.innerHTML = '';
  objectElements();
};

//Listener for click the button
const button = document.querySelector('.button');
button.addEventListener('click', objectElements);

//Listener for books info
document.body.addEventListener('click', showInfo);

//Listener for sort button
sortButton.addEventListener('click', handleSort);