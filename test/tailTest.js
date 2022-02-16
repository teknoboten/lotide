const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it("returns ['moira', 'alexis', 'johnny'] for ['david', 'moira', 'alexis', 'johnny']", () => {
    assert.deepEqual(tail(['david', 'moira', 'alexis', 'johnny']), ['moira', 'alexis', 'johnny']);
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("does not modify the original array", () => {
    const inputArray = ["david", "moira", "alexis", "johnny"];
    tail(inputArray);
    assert.deepEqual(inputArray, ["david", "moira", "alexis", "johnny"]);
  });
});