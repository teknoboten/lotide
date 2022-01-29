const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  return arr.slice(1);
};

const roseFam = ["david", "moira", "alexis", "johnny"];
// const emptyArr = [];
// const lonelyElement = ["stevie"];

let result = tail(roseFam);
let expected = ["moira", "alexis", "johnny"];

const checkResult = (res, ex) => {
  for (let i = 0; i < res.length; i++) {
    assertEqual(res[i], ex[i]);
  }
};

checkResult(result, expected);

//test for empty array
// console.log(`empty array:`);
// console.log(tail(emptyArr));

//test for one element
// console.log(`array with a single element:`);
// console.log(tail(lonelyElement));

// const result = tail(["david", "moira", "alexis", "johnny"]);

//test to make sure original array is not modified after tail is run
// console.log(`check the orignal array is not modified:`);
// assertEqual(roseFam.length, 4);