'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// Function f1 passed argument from variable x, added 1 and returned 10 but variable x remained same as before, because function wasn't built to change value of this variable but to copy value of variable.
//Function f2 passed argument from const y, retured '10' and changed value of 'y', because this value is an object type, which means variable is just a link to the value.