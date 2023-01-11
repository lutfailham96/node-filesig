const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test BMP Validation', () => {
  it('should return false when input buffer is invalid BMP', () => {
    fs.readFile('./tmp/sample-0.svg', (error, invalidBmpBuffer) => {
      if (error) throw error;
      const valid = filesig.isBmp(invalidBmpBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid BMP', () => {
    fs.readFile('./tmp/sample-0.bmp', (error, validBmpBuffer) => {
      if (error) throw error;
      const valid = filesig.isBmp(validBmpBuffer);
      assert.equal(valid, true);
    });
  });
});
