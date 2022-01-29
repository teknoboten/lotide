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

/*
inputs: source  & itemsToRemove arrays
desired outcome: return a new array containing elements from source that are not in itemsToRemove

requirements
- use assertArraysEqual to test
- does not need to accomodate nested arrays or objects
- write a test to verify original arrays are not modified
*/

const arrA = ["coding", "mealtime", "yoga", "family time", "cooking", "getting screamed at", "playing games", "tidying"];
const arrB = ["getting screamed at", "mealtime", "tidying"];

const without = (source, itemsToRemove) => {
  let result = [];
  //loop through source array
  for (const el of source) {
    let count = 0;  //set which item in itemsToRemove we are checking
    let isIncluded = false;
    while (count < itemsToRemove.length) {
      // console.log(`checking: ${itemsToRemove[count]}`);
      if (el === itemsToRemove[count]) {
        isIncluded = true;
      }
      count += 1;
    }
    //check value of included
    if (isIncluded === false) {
      result.push(el);
    }
    isIncluded = false;
  }
  return result;
};

let result = without(arrA, arrB);
let expected = [ 'coding', 'yoga', 'family time', 'cooking', 'playing games' ];

console.log(`testing with assertArraysEqual:`);
assertArraysEqual(result, expected);

console.log(`\nverify source was not modified:`);
// assertArraysEqual(arrA, ["coding", "mealtime", "yoga", "family time", "cooking", "getting screamed at", "playing games", "tidying"]);
if (eqArrays(arrA, ["coding", "mealtime", "yoga", "family time", "cooking", "getting screamed at", "playing games", "tidying"])) {
  console.log("source array was not modified!!");
} else {
  console.log("the original was modified!!");
}


//protips:
//filter array method
//array2.includes