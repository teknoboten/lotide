const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'pink' for ['pink', 'green', 'turquoise']", () => {
    assert.strictEqual(head(['pink', 'green', 'turquoise']), 'pink');
  });
  it("returns undefined for undefined", () => {
    assert.strictEqual(head([]), undefined);
  });
});

