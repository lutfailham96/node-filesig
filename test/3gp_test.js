const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test 3GP Validation', () => {
  it('should return false when input buffer is empty', () => {
    const emptySampleBuffer = Buffer.from([]);
    const valid = filesig.is3gp(emptySampleBuffer);
    assert.equal(valid, false);
  });
  it('should return false when input buffer is invalid 3GP', () => {
    fs.readFile('./tmp/sample-0.mkv', (error, invalid3gpBuffer) => {
      if (error) throw error;
      const valid = filesig.is3gp(invalid3gpBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid 3GP', () => {
    fs.readFile('./tmp/sample-0.3gp', (error, valid3gpBuffer) => {
      if (error) throw error;
      const valid = filesig.is3gp(valid3gpBuffer);
      assert.equal(valid, true);
    });
  });
});
