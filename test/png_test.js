const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test PNG Validation', () => {
  it('should return false when input buffer is invalid PNG', () => {
    fs.readFile('./tmp/sample-0.ico', (error, invalidPngBuffer) => {
      if (error) throw error;
      const valid = filesig.isPng(invalidPngBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid PNG', () => {
    fs.readFile('./tmp/sample-0.png', (error, validPngBuffer) => {
      if (error) throw error;
      const valid = filesig.isPng(validPngBuffer);
      assert.equal(valid, true);
    });
  });
});
