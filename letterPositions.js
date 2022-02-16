
const letterPositions = (string) => {
  const results = {};
  //loop through string
  //if letter is " ", continue
  //if letter !exist in result, add a new key and set it to any array of string[index]
  //if letter exists, push string[index] to result
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (string[i] === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    }
    if (!results[letter]) {
      let resArr = [i];
      results[letter] = resArr;
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