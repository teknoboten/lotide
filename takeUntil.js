const takeUntil = (array, callback) => {
//iterate over an array until the given callback returns true 

  const result = [];
  
  for (const e of array) {    //pass each element to the given callback

    if (!callback(e)) {       //if callback returns false, push element to result
      result.push(e);
    } else {
      return result;          //if callback returns true, return result
    }
  }
  return result;              //if callback never returns true, return entire array
};

module.exports = takeUntil;