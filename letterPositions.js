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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("these arrays match!");
  } else {
    console.log("not a match!");
  }
};

const letterPositions = () => {
  const results = {h: [0]};
  // logic here
  return results;
};

let testResult = letterPositions("hello");
let expectedResult = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};

assertArraysEqual(testResult['h'], expectedResult['h']);




















/* 
let expectedResult = 
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
*/