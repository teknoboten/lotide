const map = (array, callback) => {
//perform a given callback on each element in an array and create a new array

  const results = [];   //accumulator
  
  for (let i of array) {        //loop through array and call callback on each element
 
    results.push(callback(i));  //push callback return value to results
  }
  return results;
};

module.exports = map;