const eqArrays = (arr1, arr2) => {

  let count = 0;

  if (arr1.length !== arr2.length) {    //if arrays are not the same length, return false
    return false;
  }

  for (const x of arr1) {     //loop through each element of arr1
    if (x !== arr2[count]) {  //compare the array values (count = x because it increments every time a matching value is found)
      return false;           //if they don't match, return false (ending the loop)
    } else {
      count += 1;             //if they match, increment count by 1 and check the next value
    }
  }
  return true;                //only returns if all values in arr1 and arr2 match
};

module.exports = eqArrays;
