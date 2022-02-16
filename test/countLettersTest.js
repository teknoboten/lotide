// const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const message = "best wishes!";
const counted = countLetters(message);

assertEqual(counted['b'], 1);
assertEqual(counted['e'], 2);
assertEqual(counted['s'], 3);
assertEqual(counted['t'], 1);
assertEqual(counted['w'], 1);
assertEqual(counted['i'], 1);
assertEqual(counted['h'], 1);



