const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

let result = flatten([1, 2, [3, 4], 5, [6]]);
let expected = [ 1, 2, 3, 4, 5, 6 ];

assertArraysEqual(result, expected);

