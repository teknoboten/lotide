const flatten = (arr) => {
  let flattened = [];

  for (const el of arr) {
    if (!Array.isArray(el)) { //check if the element is not an array
      flattened.push(el);   //if not an array, push to result
    } else { // el is an array so we loop through it
      for (const r of el) {
        flattened.push(r);
      }
    }
  }
  return flattened;
};

module.exports = flatten;

/*
input: an array containing arrays and not arrays
desired output: all elements from all arrays

note: our function only needs to handle one level of nesting
note: when we are smarter we will use recursion to solve this type of challenge
*/