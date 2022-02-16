const takeUntil = (array, callback) => {
  const result = [];
  for (const e of array) {
    if (!callback(e)) {
      result.push(e);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;