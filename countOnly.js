const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

// inputs
// allItems: an array of strings we need to look through
// itemsToCount: an object specifying if we should count a particular string or not

const countOnly = (allItems, itemsToCount) => {
  let results = {};

  for (const item of allItems) {
    // check if item exists in itemsToCount
    if (!itemsToCount[item]) {
      continue;
    }

    //check if the item exists in results
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  //if yes, increment the value by one
  //if no, create it and set the value to one
  return results;
};

//Test Code

//allItems to check
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//call countOnly on the list of names and save the counted truthy keys to result 1
const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//check that the resulting count of Jason === 1
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

