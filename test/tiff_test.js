const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test TIFF Validation', () => {
  it('should return false when input buffer is invalid TIFF', () => {
    fs.readFile('./tmp/sample-0.png', (error, invalidTiffBuffer) => {
      if (error) throw error;
      const valid = filesig.isTiff(invalidTiffBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid TIFF', () => {
    fs.readFile('./tmp/sample-0.tiff', (error, validTiffBuffer) => {
      if (error) throw error;
      const valid = filesig.isTiff(validTiffBuffer);
      assert.equal(valid, true);
    });
  });
});
