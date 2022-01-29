const eqArrays = (arr1, arr2) => {
  //loop through arrays to check each el matches
  let result = false;
  let count = 0;
  for (const x of arr1) {
    if (x !== arr2[count]) {
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
// let arrC = ["moira", "alexis", "johnny"];
// let arrD = [];
// let arrE = ["stevie", "patrick", "twyla", "jocelyn"];

/*
inputs: two arrays || desired outputs: appropriate message logged to console
goal: make use of your eqArrays function for array comparison.
*/

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("these arrays match!");
  } else {
    console.log("not a match!");
  }
};

assertArraysEqual(arrA, arrB);

