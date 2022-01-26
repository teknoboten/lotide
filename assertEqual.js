const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

//test code
assertEqual("tekno", "tekno");
assertEqual("serra", "boten");
assertEqual(2,2);
assertEqual(1,2);

// If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
// Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)