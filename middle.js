const middle = (arr) => {
//find the middle character(s) in an array and return it

  const l = arr.length;
  const result = [];
  
  if (l < 3) {      //array needs more than 2 values to have a middle
    return result;
  }

  if (l % 2 !== 0) {  //check if array length is odd
    result.push(Math.floor(l / 2) + 1);   //middle is a single value in the middle of the array
    return result;
  }

  if (l % 2 === 0) {        //check if array length is even
    const m = (l / 2) - 1;  //middle is 2 values in the middle of the array
    result.push(arr[m], arr[m + 1]);
    return result;
  }

};

module.exports = middle;