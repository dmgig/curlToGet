curlToGet
=========

An extremely basic library providing a utility method to `convert` curl command line syntax into a url with get parameters. Ignores all flags except for -d and --data.

## Installation

  npm install curltoget --save

## Usage

  var curltoget = require('curltoget')
      convert = curltoget.convert;

  var curl = 'curl -GL -d dog=Fido -d cat=Kitty -d horse=Banjo http://petznamez.net',
      url = convert(curl);

  console.log('curl', curl, 'url', url);
  http://petznamez.net?dog=Fido&cat=Kitty&horse=Banjo

## Tests

  npm test

## Release History

* 0.1.1 Initial release

## Acknowledgements

  thanks to https://quickleft.com/blog/creating-and-publishing-a-node-js-module/