const findKey = (object, callback) => {
//takes an object and callback function

  for (const o in object) {     //iterate through the object
    if (callback(object[o])) {  //pass object[o] to the callback function
      return o;                 //if callback returns true, return the key (o)
    }
  }
};

module.exports = findKey;

/*
note:
  - o gives us the key of the nested object
   - object[o] gives the nested object
   
*/