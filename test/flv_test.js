const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test FLV Validation', () => {
  it('should return false when input buffer is invalid FLV', () => {
    fs.readFile('./tmp/sample-0.mp4', (error, invalidFlvBuffer) => {
      if (error) throw error;
      const valid = filesig.isFlv(invalidFlvBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid FLV', () => {
    fs.readFile('./tmp/sample-0.flv', (error, validFlvBuffer) => {
      if (error) throw error;
      const valid = filesig.isFlv(validFlvBuffer);
      assert.equal(valid, true);
    });
  });
});
