const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🌟 Assertion Passed: 🌟 ${actual} === ${expected}`);
  } else {
    console.log(`💀 Assertion Failed: 💀 ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const o in object) {  //o gives us the key of the nested object
    // console.log(object[o]); <- object[o] gives the nested object
    if (callback(object[o])) {   // <- if (object[o].stars === 2)
      return o;                //return the key ("noma")
    }
  }
};

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


/* How it works
// x => x.stars === 2) // => "noma"

const findKey = (object, callback) => {
  for (o in object){                    - o gives us the key of the nested object
    console.log(object[o]);             - object[o] gives the nested object
    if(callback(object[o])){            - passes object[o] to the callback -> callback replaces x with object[o] -> object[o].stars === 2)
      return o;                         - if the callback === true, return the key ("noma")
    }
  }
}

*/