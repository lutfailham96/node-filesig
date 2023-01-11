const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test AVIF Validation', () => {
  it('should return false when input buffer is invalid AVIF', () => {
    fs.readFile('./tmp/sample-0.bmp', (error, invalidAvifBuffer) => {
      if (error) throw error;
      const valid = filesig.isAvif(invalidAvifBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid AVIF', () => {
    fs.readFile('./tmp/sample-0.avif', (error, validAvifBuffer) => {
      if (error) throw error;
      const valid = filesig.isAvif(validAvifBuffer);
      assert.equal(valid, true);
    });
  });
});
