
const eqArrays = (arr1, arr2) => {
  //loop through arrays to check each el matches
  let result = false;
  let count = 0;
  for (const x of arr1) {
    if (x !== arr2[count]) {
      result = false;
      return result;
    } else {
      result = true;
      count += 1;
    }
  }
  return result;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("these arrays match!");
  } else {
    console.log("not a match!");
  }
};

const map = (array, callback) => {
  const results = [];
  for (let i of array) {
    console.log
    results.push(callback(i));
  }
  return results;
};


const words = ["everything", "is", "fine", "got", "my", "shinigami", "eyes"];
const numbers = [3, 5, 10, 80, 452, 6000];
const objects = [ { album: "geidi primes", year: 2010 }, { album: "visions", year: 2012 }, { album: "art angels", year: 2015 }, { album: "miss anthropocene", year: 2020 }]
const empty = [];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, n => n * 10);
const results3 = map(objects, a => a.year);

//testing
console.log(`testing an array of strings:`)
assertArraysEqual(results1, [ 'e', 'i', 'f', 'g', 'm', 's', 'e' ]);

console.log(`\ntesting an array of numbers:`);
assertArraysEqual(results2, [ 30, 50, 100, 800, 4520, 60000 ]);

console.log(`\ntesting an array of objects:`);
assertArraysEqual(results3, [ 2010, 2012, 2015, 2020 ]);

console.log(`\ntesting an empty array:`);
assertArraysEqual(results4, ["can't map an empty array!"])








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

