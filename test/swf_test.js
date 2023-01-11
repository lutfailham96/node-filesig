const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test SWF Validation', () => {
  it('should return false when input buffer is empty', () => {
    const emptySampleBuffer = Buffer.from([]);
    const valid = filesig.isSwf(emptySampleBuffer);
    assert.equal(valid, false);
  });
  it('should return false when input buffer is invalid SWF', () => {
    fs.readFile('./tmp/sample-0.3gp', (error, invalidSwfBuffer) => {
      if (error) throw error;
      const valid = filesig.isSwf(invalidSwfBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid SWF', () => {
    fs.readFile('./tmp/sample-0.swf', (error, validSwfBuffer) => {
      if (error) throw error;
      const valid = filesig.isSwf(validSwfBuffer);
      assert.equal(valid, true);
    });
  });
});
