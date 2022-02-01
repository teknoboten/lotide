const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = () => {

};

const ab = { a: "1", b: "2"};
const bb = { b: "2", a: "2"};
const abc = { a: "1", b: "2", c: "3"};

const testTrue = eqObjects(ab, bb); //expected: true
const testFalse = eqObjects(ab, abc); //expected: false


//test cases 
assertEqual(testTrue, true);
assertEqual(testFalse, false);