const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (object, string) => {
  let isFound = false;
  //loop through object keys
  for(k in object){
    // console.log(k); //<- returns the key
    // console.log(object[k]); //<- returns the value
    if (k === string){
      isFound = true;
      return object[k];
    }
  }
  //if key === string, return it
  //if no keys match, return an error
  if (!isFound) {
    return undefined;
  }
}

const availableStores = {
  restaurant: "cafe tropical",
  general: "rose apothecary",
  fashion: "blouse barn",
  bar: "the wobbly elm"
}

// let testResult = findKeyByValue(availableStores, "fashion");

//test cases
assertEqual(findKeyByValue(availableStores, "fashion"), "blouse barn");
assertEqual(findKeyByValue(availableStores, "bar"), "the wobbly elm");
assertEqual(findKeyByValue(availableStores, "the nook"), undefined);
