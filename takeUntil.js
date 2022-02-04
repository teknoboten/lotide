const eqArrays = (arr1, arr2) => {
  //loop through arrays to check each el matches
  let result = false;
  let count = 0;
  for (const x of arr1) {
    if (x !== arr2[count]) {
      result = false;
      return result;
    } else {
      result = true;
      count += 1;
    }
  }
  return result;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("these arrays match!");
  } else {
    console.log("not a match!");
  }
};

const takeUntil = (array, callback) => {
  const result = [];
  for (const e of array) {
    if (!callback(e)) {
      result.push(e);
    } else {
      return result;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
