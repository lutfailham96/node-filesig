const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test MPG Validation', () => {
  it('should return false when input buffer is empty', () => {
    const emptySampleBuffer = Buffer.from([]);
    const valid = filesig.isMpg(emptySampleBuffer);
    assert.equal(valid, false);
  });
  it('should return false when input buffer is invalid MPG', () => {
    fs.readFile('./tmp/sample-0.3gp', (error, invalidMpgBuffer) => {
      if (error) throw error;
      const valid = filesig.isMpg(invalidMpgBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid MPG', () => {
    fs.readFile('./tmp/sample-0.mpg', (error, validMpgBuffer) => {
      if (error) throw error;
      const valid = filesig.isMpg(validMpgBuffer);
      assert.equal(valid, true);
    });
  });
});
