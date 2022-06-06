//1.1
// function doubleOddNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

// const myNumbers = [1, 2, 3, 4];
// console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]


const doubleOddNumbers = numbers => numbers.filter(number => number % 2 !== 0).map(number => number * 2);

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

//1.2
const monday = [{
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [{
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const durationsInHours = monday.concat(tuesday).map(duration => duration.duration / 60);
const filterDurations = durationsInHours.filter(duration => duration > 2);
const earned = `€${filterDurations.reduce((prev, curr) => prev + curr, 0) * 20}`;
console.log(earned);