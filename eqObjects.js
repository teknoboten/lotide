const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  //loop through arrays to check each el matches

  // console.log(arr1, arr2);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

//array test cases
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc), true);

//primitive test cases
// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1"};
// const abc = { a: "1", b: "2", c: "3"};

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
