const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test GIF Validation', () => {
  it('should return false when input buffer is invalid GIF', () => {
    fs.readFile('./tmp/sample-0.png', (error, invalidGifBuffer) => {
      if (error) throw error;
      const valid = filesig.isGif(invalidGifBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid GIF', () => {
    fs.readFile('./tmp/sample-0.gif', (error, validGifBuffer) => {
      if (error) throw error;
      const valid = filesig.isGif(validGifBuffer);
      assert.equal(valid, true);
    });
  });
});
