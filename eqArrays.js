const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = (arr1, arr2) => {
  //loop through arrays to check each el matches
  // let result = false;
  let count = 0;

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const x of arr1) {
    if (x !== arr2[count]) {
      return false;
    } else {
      count += 1;
    }
  }
  return true;
};

//test arrays
let arrA = ["david", "moira", "alexis", "johnny"];
let arrB = ["david", "moira", "alexis", "johnny"];
let arrD = [];
let arrE = ["stevie", "patrick", "twyla", "jocelyn"];

// test cases
console.log(`matching arrays. expected: true`);
assertEqual(eqArrays(arrA, arrB), true);

console.log(`\nnon-matching arrays. expected: false`);
assertEqual(eqArrays(arrA, arrE), false);

console.log(`\nfirst array empty. expected: false`);
assertEqual(eqArrays(arrD, arrE), false);

console.log(`\n second array empty. expected: false`);
assertEqual(eqArrays(arrE, arrD), false);

console.log(`\ntwo empty arrays. expected: true`);
assertEqual(eqArrays(arrD, arrD), true);
