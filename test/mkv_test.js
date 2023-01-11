const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test MKV Validation', () => {
  it('should return false when input buffer is invalid MKV', () => {
    fs.readFile('./tmp/sample-0.mp4', (error, invalidMkvBuffer) => {
      if (error) throw error;
      const valid = filesig.isMkv(invalidMkvBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid MKV', () => {
    fs.readFile('./tmp/sample-0.mkv', (error, validMkvBuffer) => {
      if (error) throw error;
      const valid = filesig.isMkv(validMkvBuffer);
      assert.equal(valid, true);
    });
  });
});
