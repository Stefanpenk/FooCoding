console.log('***********answer1***********')
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(`The length of myString is : ${myString.length}`);
console.log(myString.replaceAll(",", " "));

console.log('\n\n***********answer2***********')
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(`I think the new value of Array is 5`);
console.log(favoriteAnimals);
console.log(`The array has a length of: ${favoriteAnimals.length}`);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf("meerkat")}`);

console.log('\n\n***********MORE JAVASCRIPT***********')
console.log('***********answer1***********')
const addition = (num1, num2, num3) => {
  let add = num1 + num2 + num3;
  console.log(add);
}
addition(1, 5, 9)

console.log('\n\n***********answer2***********')
const colorCar = (color) => {
  console.log(`a ${color} car`);
}
colorCar("blue");

console.log('\n\n***********answer3***********')
const cartoonCat = {
  name: "Tom",
  species: 'cat',
  biggestRival: 'Jerry'
}

function showKeyValues(obj) {
  console.log(obj);
}
showKeyValues(cartoonCat);

console.log('\n\n***********answer4***********')
const vehicleType = (color, code) => {
  const type = code === 1 ? 'car' : code === 2 ? 'motorbike' : 'wrong code';
  return `a ${color} ${type}`
}
console.log(vehicleType("blue", 2));

console.log('\n\n***********answer5***********')
const check = (3 === 3) ? "yes" : "no";
console.log(check);

console.log('\n\n***********answer6***********')
console.log('rebuilt for ex 9 purpose')
// const vehicle = (color, code, age) => {
//   const type = code === 1 ? 'car' : code === 2 ? 'motorbike' : 'wrong code';
//   const carAge = age > 2 ? 'used' : 'new';
//   console.log(`a ${color} ${carAge} ${type}`)
// }
// vehicle("blue", 1, 5);

console.log('\n\n***********answer7***********')
const vehicles = ["motorbike", "caravan", "bike", "truck"];
console.log(vehicles);

console.log('\n\n***********answer8***********')
console.log(vehicles[2]);

console.log('\n\n***********answer9***********')
const vehicle = (color, code, age) => {
  const type = code > vehicles.length ? 'cannot find vehicle' : vehicles[code - 1];
  const carAge = age > 2 ? 'used' : 'new';
  console.log(`a ${color} ${carAge} ${type}`)
}
vehicle("green", 3, 1)

console.log('\n\n***********answer10***********')
const advertisement = () => {
  let ad = "Amazing Joe's Garage, we service ";
  for (let i = 0; i < vehicles.length; i++) {
    if (i === (vehicles.length - 2)) {
      ad += `${vehicles[i]}s and `
    } else if (i === (vehicles.length - 1)) {
      ad += `${vehicles[i]}s.`
    } else {
      ad += `${vehicles[i]}s, `
    }
  }
  console.log(ad);
}
advertisement();

console.log('\n\n***********answer11***********')
vehicles.push("porsche");
advertisement();

console.log('\n\n***********answer12***********')
const newEmptyObject = {};
console.log(newEmptyObject);

console.log('\n\n***********answer13***********')
const program = {
  teachers: ["Baraa", "Claudiu", "Seif", "Sahin"]
}
console.log(program);

console.log('\n\n***********answer14***********')
program["languages"] = ["HTML", "CSS", "JavaScript"];
console.log(program);

console.log('\n\n***********answer15***********')
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
(x == y) ? console.log(`x and y are equal`): console.log(`x and y aren't equal`);
(x === y) ? console.log(`x and y are strictly equal`): console.log(`x and y aren't stricly equal`);
(z == y) ? console.log(`z and y are equal`): console.log(`z and y aren't equal`);
(z == x) ? console.log(`z and x are strictly equal`): console.log(`z and x aren't stricly equal`);

console.log('\n\n***********answer16***********')
let o1 = {
  foo: "bar"
};
let o2 = {
  foo: "bar"
};
let o3 = o2;
o2 = {
  key: 'value'
}
console.log(o3);
o1 = {
  anotherKey: 'anotherValue'
}
console.log(o3);
console.log('Yes because o3 wasn\'t declared at that moment and because we used let we cannot declare another variable with the same name it would works only with var.');

console.log('\n\n***********answer17***********')
let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar);
console.log('it returns string because typeof operator returns value as a string.')