const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test JPEG Validation', () => {
  it('should return false when input buffer is invalid JPEG', () => {
    fs.readFile('./tmp/sample-0.webp', (error, invalidJpegBuffer) => {
      if (error) throw error;
      const valid = filesig.isJpeg(invalidJpegBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid JPEG', () => {
    fs.readFile('./tmp/sample-0.jpg', (error, validJpegBuffer) => {
      if (error) throw error;
      const valid = filesig.isJpeg(validJpegBuffer);
      assert.equal(valid, true);
    });
  });
});
