const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test MP3 Validation', () => {
  it('should return false when input buffer is invalid MP3', () => {
    fs.readFile('./tmp/sample-0.ogg', (error, invalidMp3Buffer) => {
      if (error) throw error;
      const valid = filesig.isMp3(invalidMp3Buffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid MP3', () => {
    fs.readFile('./tmp/sample-0.mp3', (error, validMp3Buffer) => {
      if (error) throw error;
      const valid = filesig.isMp3(validMp3Buffer);
      assert.equal(valid, true);
    });
  });
});
