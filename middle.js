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

const middle = (arr) => {
  let l = arr.length;
  let result = [];
  
  if (l < 3){
    return result;
  }

  if (l % 2 !== 0) {
    result.push(Math.floor(l / 2) + 1);
    return result;
  }

  if (l % 2 === 0) {
    //find middle 
    let m = (l / 2) - 1;
    result.push(arr[m], arr[m + 1]);
    return result;
  }

}

//test arrays
let singleArr = ["i'm lonely"];
let evenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(middle(singleArr));
// console.log(middle(oddArr));

console.log(`array with 1 or 2 elements:`);
assertArraysEqual(middle(singleArr), []);

console.log(`\ntesting an even array:`);
assertArraysEqual(middle(evenArr), [ 5, 6 ] );

console.log(`\ntesting an odd array:`);
assertArraysEqual(middle(oddArr), [ 6 ]);














/* take in an array and return the middle-most element(s) of the given array 

1. For arrays with one or two elements, there is no middle. Return an empty array.
2. For arrays with odd number of elements, an array containing a single middle element should be returned.
3. For arrays with an even number of elements, an array containing the two elements in the middle should be returned

Use assertArraysEqual for testing
*/ 