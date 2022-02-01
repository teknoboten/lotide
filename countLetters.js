const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

/*
inputs:
sentence: string of letters to count
output: an object containing a key/value for every letter in the sentence
*/

const countLetters = (sentence) => {
  let result = {};



  for (const letter of sentence) {
    if (skip[letter]) {
      continue;
    }
 
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
};

const message = "best wishes!";
const skip = {" ": true, "!": true, "?": true};
const counted = countLetters(message);

assertEqual(counted['b'], 1);
assertEqual(counted['e'], 2);
assertEqual(counted['s'], 3);
assertEqual(counted['t'], 1);
assertEqual(counted['w'], 1);
assertEqual(counted['i'], 1);
assertEqual(counted['h'], 1);

// { b: 1, e: 2, s: 3, t: 1, w: 1, i: 1, h: 1 });