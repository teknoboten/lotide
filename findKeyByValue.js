const findKeyByValue = (object, string) => {
  let isFound = false;
  //loop through object keys
  for (const k in object) {
    // console.log(k); //<- returns the key
    // console.log(object[k]); //<- returns the value
    if (k === string) {
      isFound = true;
      return object[k];
    }
  }
  //if key === string, return it
  //if no keys match, return an error
  if (!isFound) {
    return undefined;
  }
};

module.exports = findKeyByValue;
