const eqObjects = (obj1, obj2) => {
  //check if both objects have the same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const k in obj1) {
    if (!obj2[k]) {   //if k does not exist in obj2, return false
      return false;
    }
    if (Array.isArray(obj1[k]) && Array.isArray(obj2[k])) {   // check if k is an array
      if (!eqArrays(obj1[k], obj2[k])) {
        return false;
      }
    }  else {
      if (obj1[k] !== obj2[k]) {    //if obj2[k] !== obj2[k], return false
        return false;
      }
    }
  }
  return true;
};

const eqArrays = (arr1, arr2) => {
  //loop through arrays to check each el matches
  // let result = false;
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

const assertObjectsEqual = (a, b) => {
  const inspect = require('util').inspect;
  let actual = eqObjects(a, b);
  if (!actual) {
    console.log(`💀 assertion failed 💀 -> ${inspect(a)} !== ${inspect(b)}`);
  } else {
    console.log(`🌟 assertion passed 🌟 -> ${inspect(a)} === ${inspect(b)}`);
  }
};

//test objects
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//test
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);



// assertObjectsEqual(eqObjects(cd, dc), true);
// assertObjectsEqual(eqObjects(cd, cd2), false);

//original
// const assertObjectsEqual = (a, b) => {
// if (actual !== expected) {
//   console.log(`💀 assertion failed 💀 -> ${actual} !== ${expected}`);
// } else {
//   console.log(`🌟 assertion passed 🌟 -> ${actual} === ${expected}`);
// }}