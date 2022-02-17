const countOnly = (allItems, itemsToCount) => {
  let results = {};

  for (const item of allItems) {  //loop through allItems
    
    if (!itemsToCount[item]) {  // check if item exists in itemsToCount
      continue;                 //if not, skip to the next item 
    }
    
    if (results[item]) {  //check if the item exists in results
      results[item] += 1; //if yes, increment value by 1
    } else {              //if no, create the item and set the value to one
      results[item] = 1;
    }
  }

  return results;
};

module.exports = countOnly;
