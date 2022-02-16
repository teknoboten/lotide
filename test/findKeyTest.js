const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const data2 = {
  "david": { says: "incorrect"},
  "alexis": { says: "ew, david!"},
  "moira": { says: "the crows have eyes!"},
  "stevie": { says: "best wishes"}
};

const result1 = findKey(data1, x => x.stars === 2);
const result2 = findKey(data2, x => x.says === "ew, david!");

assertEqual(result1, "noma");
assertEqual(result2, "alexis");
