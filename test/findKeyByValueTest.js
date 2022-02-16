const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const availableStores = {
  restaurant: "cafe tropical",
  general: "rose apothecary",
  fashion: "blouse barn",
  bar: "the wobbly elm"
};

//test cases
assertEqual(findKeyByValue(availableStores, "fashion"), "blouse barn");
assertEqual(findKeyByValue(availableStores, "bar"), "the wobbly elm");
assertEqual(findKeyByValue(availableStores, "the nook"), undefined);
