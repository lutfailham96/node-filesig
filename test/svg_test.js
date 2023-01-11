const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test SVG Validation', () => {
  it('should return false when input buffer is invalid SVG', () => {
    fs.readFile('./tmp/sample-0.jpg', (error, invalidSvgBuffer) => {
      if (error) throw error;
      const valid = filesig.isSvg(invalidSvgBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid SVG', () => {
    fs.readFile('./tmp/sample-0.svg', (error, validSvgBuffer) => {
      if (error) throw error;
      const valid = filesig.isSvg(validSvgBuffer);
      assert.equal(valid, true);
    });
  });
});
