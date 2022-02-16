const without = (source, itemsToRemove) => {
  let result = [];
  //loop through source array
  for (const el of source) {
    let count = 0;  //set which item in itemsToRemove we are checking
    let isIncluded = false;
    while (count < itemsToRemove.length) {
      // console.log(`checking: ${itemsToRemove[count]}`);
      if (el === itemsToRemove[count]) {
        isIncluded = true;
      }
      count += 1;
    }
    //check value of included
    if (isIncluded === false) {
      result.push(el);
    }
    isIncluded = false;
  }
  return result;
};

module.exports = without;

/*
inputs: source  & itemsToRemove arrays
desired outcome: return a new array containing elements from source that are not in itemsToRemove

requirements
- use assertArraysEqual to test
- does not need to accomodate nested arrays or objects
- write a test to verify original arrays are not modified
*/


//protips:
//filter array method
//array2.includes