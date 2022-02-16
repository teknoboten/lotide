
// const eqArrays = (arr1, arr2) => {
//   //loop through arrays to check each el matches
//   let result = false;
//   let count = 0;
//   for (const x of arr1) {
//     if (x !== arr2[count]) {
//       result = false;
//       return result;
//     } else {
//       result = true;
//       count += 1;
//     }
//   }
//   return result;
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) {
//     console.log("these arrays match!");
//   } else {
//     console.log("not a match!");
//   }
// };

const map = (array, callback) => {
  const results = [];
  for (let i of array) {
    console.log;
    results.push(callback(i));
  }
  return results;
};

module.exports = map;





//how it works:

//map calls whatever callback function we pass it when we call it
//map is a *higher order* function because it uses a callback
//it's an inline anonymous arrow function word => word[0]
//which is a short form of:
/*
const wordFunc = (word) => {
  return word[0];
}
*/

