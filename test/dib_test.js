const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test DIB Validation', () => {
  it('should return false when input buffer is empty', () => {
    const emptySampleBuffer = Buffer.from([]);
    const valid = filesig.isDib(emptySampleBuffer);
    assert.equal(valid, false);
  });
  it('should return false when input buffer is invalid DIB', () => {
    fs.readFile('./tmp/sample-0.jpg', (error, invalidDibBuffer) => {
      if (error) throw error;
      const valid = filesig.isDib(invalidDibBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid DIB', () => {
    fs.readFile('./tmp/sample-0.dib', (error, validDibBuffer) => {
      if (error) throw error;
      const valid = filesig.isDib(validDibBuffer);
      assert.equal(valid, true);
    });
  });
});
