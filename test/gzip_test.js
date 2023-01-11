const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test GZIP Validation', () => {
  it('should return false when input buffer is invalid GZIP', () => {
    fs.readFile('./tmp/sample-0.zip', (error, invalidGzipBuffer) => {
      if (error) throw error;
      const valid = filesig.isGzip(invalidGzipBuffer);
      assert.equal(valid, false);
    });
  });

  it('should return true when input buffer is valid GZIP', () => {
    fs.readFile('./tmp/sample-0.tgz', (error, validGzipBuffer) => {
      if (error) throw error;
      const valid = filesig.isGzip(validGzipBuffer);
      assert.equal(valid, true);
    });
  });
});
