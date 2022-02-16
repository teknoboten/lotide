const countLetters = (sentence) => {
  const skip = {" ": true, "!": true, "?": true};
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

module.exports = countLetters;
