const findKeyByValue = (object, string) => {
//takes in an object and a string to search for

  for (const k in object) {       //interate over object keys
    if (object[k] === string) {   //if k.value === string, return k (the key)
      return k;
    }
  }
  return undefined;               //if the key is not found, return undefined

};

module.exports = findKeyByValue;
