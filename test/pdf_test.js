const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test PDF Validation', () => {
  it('should return false when input buffer is invalid PDF', () => {
    fs.readFile('./tmp/sample-0.rtf', (error, invalidPdfBuffer) => {
      if (error) throw error;
      const valid = filesig.isPdf(invalidPdfBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid PDF', () => {
    fs.readFile('./tmp/sample-0.pdf', (error, validPdfBuffer) => {
      if (error) throw error;
      const valid = filesig.isPdf(validPdfBuffer);
      assert.equal(valid, true);
    });
  });
});
