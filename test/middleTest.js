const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(`testing middle:\n`);

//test arrays
let singleArr = ["i'm lonely"];
let evenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(`array with 1 or 2 elements:`);
assertArraysEqual(middle(singleArr), []);

console.log(`\ntesting an even array:`);
assertArraysEqual(middle(evenArr), [ 5, 6 ]);

console.log(`\ntesting an odd array:`);
assertArraysEqual(middle(oddArr), [ 6 ]);

