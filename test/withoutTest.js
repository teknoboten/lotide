const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

const arrA = ["coding", "mealtime", "yoga", "family time", "cooking", "getting screamed at", "playing games", "tidying"];
const arrB = ["getting screamed at", "mealtime", "tidying"];

const result = without(arrA, arrB);
const expected = [ 'coding', 'yoga', 'family time', 'cooking', 'playing games' ];

console.log(`testing with assertArraysEqual:`);
assertArraysEqual(result, expected);
