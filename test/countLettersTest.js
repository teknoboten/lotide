const countLetters = require('../countLetters');
const assertObjectsEqual = require('../assertObjectsEqual');

const message = "best wishes!";

const actual = countLetters(message);
const expected = {
  b: 1,
  e: 2,
  s: 3,
  t: 1,
  w: 1,
  i: 1,
  h: 1
};

console.log(`testing countLetters`);

console.log(`string provided:`);
assertObjectsEqual(actual, expected);

console.log(`empty string provided:`)
assertObjectsEqual(countLetters(""), "");