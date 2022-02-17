const flatten = (arr) => {
//takes in an 2 dimensional array and flattens it

  let flattened = [];

  for (const el of arr) {
    if (!Array.isArray(el)) {   //check if the element is not an array
      flattened.push(el);       //if not an array, push to result
    } else {                    // el is an array so we loop through it
      for (const r of el) {     //push each element to the flattened array
        flattened.push(r);
      }
    }
  }
  return flattened;
};

module.exports = flatten;

/*
note: in the future we will use recursion to solve this type of challenge!
*/