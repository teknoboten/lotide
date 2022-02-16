const findKey = (object, callback) => {
  for (const o in object) {
    if (callback(object[o])) {
      return o;
    }
  }
};

module.exports = findKey;

/* How it works
// x => x.stars === 2) // => "noma"

const findKey = (object, callback) => {
  for (o in object){                    - o gives us the key of the nested object
    console.log(object[o]);             - object[o] gives the nested object
    if(callback(object[o])){            - passes object[o] to the callback -> callback replaces x with object[o] -> object[o].stars === 2)
      return o;                         - if the callback === true, return the key ("noma")

*/