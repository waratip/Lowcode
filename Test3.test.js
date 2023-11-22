const findOdd = require("./Test3");
const assert = require('assert');

describe('findOdd', () => {
    it('should return the number with odd occurrences', () => {
      assert.strictEqual(findOdd([7]), 7);
      assert.strictEqual(findOdd([0]), 0);
      assert.strictEqual(findOdd([1, 1, 2]), 2);
      assert.strictEqual(findOdd([0, 1, 0, 1, 0]), 0);
      assert.strictEqual(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
    });
  });