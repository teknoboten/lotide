const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {


  if (Object.keys(obj1).length !== Object.keys(obj2).length) {  //check if both objects have the same number of keys
    return false;                                               //if not, return false
  }
  for (const k in obj1) {   //loop through all keys in object 1
    if (!obj2[k]) {         //if k does not exist in obj2, return false
      return false;
    }

    if (Array.isArray(obj1[k]) && Array.isArray(obj2[k])) {   // check if k is an array in both objects
      if (!eqArrays(obj1[k], obj2[k])) {                      //if they are both arrays, check if they match with eqarrays
        return false;                                         //if not, return false
      }
    } else {   
      if (obj1[k] !== obj2[k]) {    //if obj2[k] !== obj2[k], return false
        return false;
      }
    }
  }
  return true;          
};

module.exports = eqObjects;