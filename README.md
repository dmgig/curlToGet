curlToGet
=========

A small library providing a utility methods to `convert` curl command line syntax into urls with get parameters

## Installation

  npm install curltoget --save

## Usage

  var curltoget = require('curltoget')
      convert = curltoget.convert;

  var curl = 'curl -GL -d dog=Fido -d cat=Kitty -d horse=Banjo',
      url = convert(curl);

  console.log('curl', curl, 'url', url);

## Tests

  npm test

## Release History

* 0.1.0 Initial release

## Acknowledgements

  thanks to https://quickleft.com/blog/creating-and-publishing-a-node-js-module/