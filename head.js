const head = (arr) => {
//returns first element of an array

  if (!arr){
    return undefined;
  } 
  return arr[0];
};


module.exports = head;