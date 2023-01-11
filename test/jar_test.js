const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test JAR Validation', () => {
  it('should return false when input buffer is invalid JAR', () => {
    fs.readFile('./tmp/sample-0.rar', (error, invalidJarBuffer) => {
      if (error) throw error;
      const valid = filesig.isJar(invalidJarBuffer);
      assert.equal(valid, false);
    });
  });

  it('should return true when input buffer is valid JAR', () => {
    fs.readFile('./tmp/sample-0.jar', (error, validJarBuffer) => {
      if (error) throw error;
      const valid = filesig.isJar(validJarBuffer);
      assert.equal(valid, true);
    });
  });
});
