const countOnly = (allItems, itemsToCount) => {
  let results = {};

  for (const item of allItems) {
    // check if item exists in itemsToCount
    if (!itemsToCount[item]) {
      continue;
    }

    //check if the item exists in results
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  //if yes, increment the value by one
  //if no, create it and set the value to one
  return results;
};

module.exports = countOnly;
