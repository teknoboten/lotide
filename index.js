const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const eqObjects = require('./eqObjects');

module.exports = { 
  head, tail, middle, assertArraysEqual, assertEqual, eqObjects,
  eqArrays, countOnly, countLetters, findKey, findKeyByValue, 
  flatten, map, takeUntil, without, assertObjectsEqual, letterPositions 
};