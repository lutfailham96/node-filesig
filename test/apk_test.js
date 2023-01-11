const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test APK Validation', () => {
  it('should return false when input buffer is invalid APK', () => {
    fs.readFile('./tmp/sample-0.rar', (error, invalidApkBuffer) => {
      if (error) throw error;
      const valid = filesig.isApk(invalidApkBuffer);
      assert.equal(valid, false);
    });
  });

  it('should return true when input buffer is valid APK', () => {
    fs.readFile('./tmp/sample-0.apk', (error, validApkBuffer) => {
      if (error) throw error;
      const valid = filesig.isApk(validApkBuffer);
      assert.equal(valid, true);
    });
  });
});
