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

const letterPositions = (string) => {
  const results = {};
  //loop through string 
  //if letter is " ", continue
  //if letter !exist in result, add a new key and set it to any array of string[index]
  //if letter exists, push string[index] to result
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (string[i] === " ") {
      continue;
    }
    if (results[letter]){
      results[letter].push(i);
    }
    if(!results[letter]){
      let resArr = [i];
      results[letter] = resArr;
    } 
  }
  return results;
};

let testResult = letterPositions("oh hello");
let expectedResult = {
  o: [0, 7],
  h: [1, 3],
  e: [4],
  l: [5, 6]
};

assertArraysEqual(testResult['o'], expectedResult['o']);
assertArraysEqual(testResult['h'], expectedResult['h']);
assertArraysEqual(testResult['e'], expectedResult['e']);
assertArraysEqual(testResult['l'], expectedResult['l']);



















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