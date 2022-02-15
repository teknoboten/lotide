const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//testing eqArrays
console.log(`\ntesting eqArrays:\n`);

//test arrays
let arrA = ["david", "moira", "alexis", "johnny"];
let arrB = ["david", "moira", "alexis", "johnny"];
let arrD = [];
let arrE = ["stevie", "patrick", "twyla", "jocelyn"];

// test cases
console.log(`matching arrays. expected: true`);
assertEqual(eqArrays(arrA, arrB), true);

console.log(`\nnon-matching arrays. expected: false`);
assertEqual(eqArrays(arrA, arrE), false);

console.log(`\nfirst array empty. expected: false`);
assertEqual(eqArrays(arrD, arrE), false);

console.log(`\n second array empty. expected: false`);
assertEqual(eqArrays(arrE, arrD), false);

console.log(`\ntwo empty arrays. expected: true`);
assertEqual(eqArrays(arrD, arrD), true);

console.log(`\ncheck the orignal array is not modified:`);
assertEqual(arrA.length, 4);


