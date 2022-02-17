const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const availableStores = {
  restaurant: "cafe tropical",
  general: "rose apothecary",
  fashion: "blouse barn",
  bar: "the wobbly elm"
};

//test cases

assertEqual(findKeyByValue(availableStores, "blouse barn"), "fashion");
assertEqual(findKeyByValue(availableStores, "the wobbly elm"), "bar");
assertEqual(findKeyByValue(availableStores, ""), undefined);
