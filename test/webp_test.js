const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test WEBP Validation', () => {
  it('should return false when input buffer is invalid WEBP', () => {
    fs.readFile('./tmp/sample-0.tiff', (error, invalidWebpBuffer) => {
      if (error) throw error;
      const valid = filesig.isWebp(invalidWebpBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid WEBP', () => {
    fs.readFile('./tmp/sample-0.webp', (error, validWebpBuffer) => {
      if (error) throw error;
      const valid = filesig.isWebp(validWebpBuffer);
      assert.equal(valid, true);
    });
  });
});
