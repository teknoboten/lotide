const without = (originalArray, itemsToRemove) => {
//make a new array from originalArray without itemsToRemove

  return originalArray.filter((e) => !itemsToRemove.includes(e));
  //iterate over every element in original array
  //add element to return array if itemsToRemove does not include element

};

module.exports = without;
