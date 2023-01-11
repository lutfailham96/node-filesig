const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test MP4 Validation', () => {
  it('should return false when input buffer is empty', () => {
    const emptySampleBuffer = Buffer.from([]);
    const valid = filesig.isMp4(emptySampleBuffer);
    assert.equal(valid, false);
  });
  it('should return false when input buffer is invalid MP4', () => {
    fs.readFile('./tmp/sample-0.mpg', (error, invalidMp4Buffer) => {
      if (error) throw error;
      const valid = filesig.isMp4(invalidMp4Buffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid MP4', () => {
    fs.readFile('./tmp/sample-0.mp4', (error, validMp4Buffer) => {
      if (error) throw error;
      const valid = filesig.isMp4(validMp4Buffer);
      assert.equal(valid, true);
    });
  });
});
