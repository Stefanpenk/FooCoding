let myArray = [];

fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data => myArray = [...data])