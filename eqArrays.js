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
  let result = false;
  let count = 0;
    for(const x of arr1){
      if(x !== arr2[count]){
        result = false;
        return result;
      } else {
        result = true;
        count += 1;
      }
    }
  return result;
};

//test arrays
let arrA = ["david", "moira", "alexis", "johnny"];
let arrB = ["david", "moira", "alexis", "johnny"];
let arrC = ["moira", "alexis", "johnny"];
let arrD = [];
let arrE = ["stevie", "patrick", "twyla", "jocelyn"];

assertEqual(eqArrays(arrA, arrB), true); //should PASS
assertEqual(eqArrays(arrA, arrC), false); //should PASS
assertEqual(eqArrays(arrA, arrE), false);  //should FAIL
assertEqual(eqArrays(arrD, arrE), false); //should PASS