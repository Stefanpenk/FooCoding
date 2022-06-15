'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const myArr = arr.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue)
    }
    return previousValue
  }, [])
  return myArr
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);


// Do not change or remove anything below this line
// module.exports = makeUnique;