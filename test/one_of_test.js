const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test One Of Validation', () => {
  it('should return true when input buffer is valid', () => {
    fs.readFile('./tmp/sample-0.png', (error, validPngBuffer) => {
      if (error) throw error;
      const valid = filesig.oneOf(
        validPngBuffer,
        filesig.is3gp,
        filesig.isApk,
        filesig.isPng,
        filesig.isGif,
      );
      assert.equal(valid, true);
    });
  });

  it('should return false when input buffer is valid, but one of the proper functions supplied is not available', () => {
    fs.readFile('./tmp/sample-0.png', (error, validPngBuffer) => {
      if (error) throw error;
      const valid = filesig.oneOf(
        validPngBuffer,
        filesig.is3gp,
        filesig.isApk,
        filesig.isZip,
        filesig.isGif,
      );
      assert.equal(valid, false);
    });
  });

  it('should return false when input buffer is valid, but one of the proper functions supplied is not available', () => {
    fs.readFile('./tmp/sample-0.png', (error, validPngBuffer) => {
      if (error) throw error;
      const valid = filesig.oneOf(
        validPngBuffer,
        filesig.is3gp,
        filesig.isApk,
        filesig.isZip,
        filesig.isGif,
      );
      assert.equal(valid, false);
    });
  });

  it('should throw error when some functions are invalid', () => {
    fs.readFile('./tmp/sample-0.jpg', (error, invalidPngBuffer) => {
      if (error) throw error;
      const valid = () => {
        filesig.oneOf(
          invalidPngBuffer,
          filesig.is3gp,
          filesig.isApk,
          filesig.isPng,
          filesig.isRandomFunction,
          filesig.isGif,
        );
      };
      assert.throws(valid, Error);
    });
  });

  it('should return false when input buffer is invalid', () => {
    fs.readFile('./tmp/sample-0.jpg', (error, invalidPngBuffer) => {
      if (error) throw error;
      const valid = filesig.oneOf(
        invalidPngBuffer,
        filesig.is3gp,
        filesig.isApk,
        filesig.isPng,
        filesig.isGif,
      );
      assert.equal(valid, false);
    });
  });
});
