const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

const head = (arr) => {
  return arr[0];
};

assertEqual(head([3, 4, 6]), 3);
assertEqual(head([3, 4, 6]), 7);
assertEqual(head(["pink", "green", "turquoise"]), "pink");
assertEqual(head(["pink", "green", "turquoise"]), "green");
assertEqual(head([]), undefined);