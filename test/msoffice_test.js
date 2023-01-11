const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test MS Office Validation', () => {
  it('should return false when input buffer is invalid MS Office', () => {
    fs.readFile('./tmp/sample-0.pdf', (error, invalidMsOfficeBuffer) => {
      if (error) throw error;
      const valid = filesig.isMsOffice(invalidMsOfficeBuffer);
      assert.equal(valid, false);
    });
  });
  it('should return true when input buffer is valid MS Office', () => {
    fs.readFile('./tmp/sample-0.docx', (error, validMsOfficeBuffer) => {
      if (error) throw error;
      const valid = filesig.isMsOffice(validMsOfficeBuffer);
      assert.equal(valid, true);
    });
  });
});
