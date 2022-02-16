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

const middle = (arr) => {
  let l = arr.length;
  let result = [];
  
  if (l < 3) {
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

};

module.exports = middle;