const eqArrays = (arr1, arr2) => {
  let count = 0;

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const x of arr1) {
    if (x !== arr2[count]) {
      return false;
    } else {
      count += 1;
    }
  }
  return true;
};

module.exports = eqArrays;
