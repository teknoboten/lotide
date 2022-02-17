
const letterPositions = (string) => {

  const results = {};
  
  //if letter is " ", continue
  //if letter !exist in result, add a new key and set it to any array of string[index]
  //if letter exists, push string[index] to result
  for (let i = 0; i < string.length; i++) {   //loop through string
    let letter = string[i];                   //save current character
    if (letter === " ") {                     //if letter is a space, skip to the next letter
      continue;
    }
    if (results[letter]) {       //if letter exists as a key in the results, push the current index the letter's array
      results[letter].push(i);
    }
    if (!results[letter]) {     //if !letter if results, create a new array containing current index
      let resArr = [i];
      results[letter] = resArr; //create a key for letter in the result and set it's value to the array we just made
    }
  }
  return results;
};

module.exports = letterPositions;



















/*
let expectedResult =
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
*/