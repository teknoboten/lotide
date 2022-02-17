const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

// test arrays
console.log(`testing assertArraysEqual:\n`);

let arrA = ["david", "moira", "alexis", "johnny"];
let arrB = ["david", "moira", "alexis", "johnny"];
let arrD = [];
let arrE = ["stevie", "patrick", "twyla", "jocelyn"];

// test cases
console.log(`matching arrays. expected: true`);
assertArraysEqual(arrA, arrB);

console.log(`\nnon-matching arrays. expected: false`);
assertArraysEqual(arrA, arrE);

console.log(`\nfirst array empty. expected: false`);
assertArraysEqual(arrD, arrE);

console.log(`\n second array empty. expected: false`);
assertArraysEqual(arrE, arrD);

console.log(`\ntwo empty arrays. expected: true`);
assertArraysEqual(arrD, arrD);

console.log(`\ncheck the orignal array is not modified:`);
assertEqual(arrA.length, 4);


