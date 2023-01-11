### Nodejs File Signature Validator

small library to validate Files by reading each magic number from a file

[![filesig Node CI](https://github.com/lutfailham96/node-filesig/actions/workflows/ci.yml/badge.svg)](https://github.com/lutfailham96/node-filesig/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/lutfailham96/node-filesig/branch/master/graph/badge.svg?token=C5GJEHHHA1)](https://codecov.io/gh/lutfailham96/node-filesig)
[![Maintainability](https://api.codeclimate.com/v1/badges/5d5e798f45c785ef2301/maintainability)](https://codeclimate.com/github/lutfailham96/node-filesig/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/lutfailham96/node-filesig/badge.svg)](https://snyk.io/test/github/lutfailham96/node-filesig)

#### Requirements
- Node version 12.x or higher

#### Install

```shell
$ npm install filesig
```

#### Usage
Simple
```javascript
const filesig = require('filesig');
const fs = require('fs');

fs.readFile('/home/john/document.pdf', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(filesig.isPdf(data));
    }
});

```

One of
```javascript
const filesig = require('filesig');
const fs = require('fs');

fs.readFile('/home/john/Capture.PNG', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let valid = filesig.oneOf(data, filesig.is3gp, filesig.isJpeg, filesig.isPng);
        console.log(valid);
    }
});
```
