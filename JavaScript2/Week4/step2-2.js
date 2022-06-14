'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  numbers.forEach(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      threeCallback(number);
      fiveCallback(number);
    } else if (number % 5 === 0) {
      fiveCallback(number);
    } else if (number % 3 === 0) {
      threeCallback(number);
    }
  });
}

function sayThree(number) {
  console.log(`${number} is multiplication of three.`);
}

function sayFive(number) {
  console.log(`${number} is multiplication of five.`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;