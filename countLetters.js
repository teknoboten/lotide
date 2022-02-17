const countLetters = (sentence) => {
//takes in a string

  const skip = {" ": true, "!": true, "?": true}; //define characters that should *not* be counted
  let result = {};  //accumulator

  for (const letter of sentence) {  // loop through provided string

    if (skip[letter]) {
      continue;
    }
 
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  
  return result;
};

module.exports = countLetters;
