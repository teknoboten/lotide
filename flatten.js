const eqArrays = (arr1, arr2) => {
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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("these arrays match!");
  } else {
    console.log("not a match!");
  }
};

const flatten = (arr) => {
  let flattened = [];
  //loop through the outer array
  for (const el of arr) {
    if (!Array.isArray(el)) { //check if the element is not an array
      flattened.push(el);   //if not an array, push to result
    } else { // el is an array so we loop through it
      for (const r of el) {
        flattened.push(r);
      }
    }
  }
  return flattened;
};

let result = flatten([1, 2, [3, 4], 5, [6]]);
let expected = [ 1, 2, 3, 4, 5, 6 ];

console.log(`testing with assertArraysEqual:`);
assertArraysEqual(result, expected);


/*
input: an array containing arrays and not arrays
desired output: all elements from all arrays

note: our function only needs to handle one level of nesting
note: when we are smarter we will use recursion to solve this type of challenge
*/