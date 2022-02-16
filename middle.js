const middle = (arr) => {
  const l = arr.length;
  const result = [];
  
  if (l < 3) {
    return result;
  }

  if (l % 2 !== 0) {
    result.push(Math.floor(l / 2) + 1);
    return result;
  }

  if (l % 2 === 0) {
    //find middle
    const m = (l / 2) - 1;
    result.push(arr[m], arr[m + 1]);
    return result;
  }

};

module.exports = middle;