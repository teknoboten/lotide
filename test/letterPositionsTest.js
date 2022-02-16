const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

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