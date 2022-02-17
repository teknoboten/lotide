const letterPositions = require('../letterPositions');
const assertObejectsEqual = require('../assertObjectsEqual');


const empty = letterPositions("");
const testResult = letterPositions("oh hello");
const expectedResult = {
  o: [0, 7],
  h: [1, 3],
  e: [4],
  l: [5, 6]
};


console.log(`testing letter positions:`)
assertObejectsEqual(testResult, expectedResult);
assertObejectsEqual(empty, "");
