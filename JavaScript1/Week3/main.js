//1. Write a console.log statement saying "Hello World!" for each language that you know.
console.log('***********answer1***********')
console.log("Czesc");
console.log("Hey");
console.log("Hej");

//2. Consider the following code:
console.log('\n\n***********answer2***********')
console.log('I\'m awesome');

//3. Declare a variable x and initialize it with an integer, using these exact steps:
console.log('\n\n***********answer3***********')
let x;
console.log(`The value of my variable x will be: ${x}`);
console.log(x);
x = 30;
console.log(`The value of x will be ${x}`);
console.log(x);

//4. Declare a variable y and assign a string to it.
console.log('\n\n***********answer4***********')
let y = "Test";
console.log(`I think the value of the string is: ${y}`);
console.log(y);
y = 'Test2';
console.log(`Now y will have the value of: ${y}`);
console.log(y);

//5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
console.log('\n\n***********answer5***********')
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highest = a > z ? a : z;
console.log(highest);

//6. Arrays
console.log('\n\n***********answer6***********')
let birds = [];
console.log(`the value will be an empty array : ${birds}`);
console.log(birds);
let myFavoriteAnimals = ["Puffin", "Tiger", "Lynx", "Kingfisher"];
myFavoriteAnimals.push("baby pig");
console.log(myFavoriteAnimals);

//7. More strings
console.log('\n\n***********answer7***********')
let myString = "this is a test";
console.log(myString);
console.log(`The length of the variable is: ${myString.length}`);

//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
console.log('\n\n***********answer8***********')
let array = ["name1", "name2"];
let number = 34;
let text = "'text'";
let boolean = true;
//8.2 For each variable write a console.log statement that logs the value
let i = 0;
let consoleLogForeach = [array, number, text, boolean];
consoleLogForeach.forEach(some => {
    console.log(`The value of my variable is: ${consoleLogForeach[i]}`);
    i++;
});
//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
let j = 0;
consoleLogForeach.forEach(some => {
    const type = typeof consoleLogForeach[j]
    console.log(`I think the type of variable is: ${type}`);
    j++;
});
//8.4 Now use typeof to log the actual type of your variables.
for (let i = 0; i < consoleLogForeach.length; i++) {
    console.log(typeof consoleLogForeach[i]);
};
//8.5 Now compare the types of your different variables with one another.
//8.6 Make sure to also show a message when the variables you are comparing are not the same type.
const btn = document.querySelector('button');
const span = document.querySelector('span');
let k = 0;
const options = [...document.querySelectorAll('.opt1')];
options.forEach(option => {
    const value = consoleLogForeach[k];
    option.textContent = `${option.value}: ${k === 0 ? '[ ' + value +' ]' : value}`;
    option.setAttribute('data', typeof value);
    k++;
})
let l = 0;
const options2 = [...document.querySelectorAll('.opt2')];
options2.forEach(option => {
    const value = consoleLogForeach[l];
    option.textContent = `${option.value}: ${l === 0 ? '[ ' + value +' ]' : value}`;
    option.setAttribute('data', typeof value);
    l++;
})
const handleClick = (e) => {
    e.preventDefault();
    const selection1 = document.getElementById('select1');
    const selection2 = document.getElementById('select2');
    if (selection1[selection1.selectedIndex].getAttribute('data') === selection2[selection2.selectedIndex].getAttribute('data')) {
        console.log('SAME TYPE');
        span.textContent = 'SAME TYPE';
    } else {
        console.log('NOT SAME TYPE');
        span.textContent = 'NOT SAME TYPE';
    }
}
btn.addEventListener('click', handleClick);

//9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
console.log('\n\n***********answer9***********')
console.log(7 % 3);
console.log(6 % 3);
console.log(9 % 3);

//10 Write a program to answer the following questions:
//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
console.log('\n\n***********answer10***********')
const myArray = [];

function addValues(value) {
    myArray.push(value);
    return array;
}
addValues(100);
addValues('text');
addValues(true);
addValues(["value1", "value2"]);
addValues(function age() {
    return new Date().getFullYear() - 1991
})
addValues({
    name: 'Stefan',
    surname: 'Penk',
    age: 31,
});
console.log(myArray);
//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
6 / 0 === 10 / 0 ? console.log("Infinities are equal") : console.log("Infinities aren't equal");