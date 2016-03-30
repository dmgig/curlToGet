var should = require('chai').should(),
    curltoget = require('../index'),
    convert   = curltoget.convert;

describe('#convert', function() {
	it('converts a curl call with -d flags into a url string', function() {
	    var curl = 'curl -GT -d paramA=123 -d paramB=Iggy+Stooge -d paramC=Test+Spaces+Here http://example.com';
        var get  = 'http://example.com?paramA=123&paramB=Iggy+Stooge&paramC=Test+Spaces+Here'; 
		convert(curl).should.equal(get);
	});
	it('converts a curl call with --data flags into a url string', function() {
	    var curl = 'curl -GT --data paramA=123 --data paramB=Iggy+Stooge --data paramC=Test+Spaces+Here http://example.com';
        var get  = 'http://example.com?paramA=123&paramB=Iggy+Stooge&paramC=Test+Spaces+Here'; 
		convert(curl).should.equal(get);
	});
	it('converts a curl call with mixed -d and --data flags into a url string', function() {
	    var curl = 'curl -GT --data paramA=123 -d paramB=Iggy+Stooge --data paramC=Test+Spaces+Here http://example.com';
        var get  = 'http://example.com?paramA=123&paramB=Iggy+Stooge&paramC=Test+Spaces+Here'; 
		convert(curl).should.equal(get);
	});	
});
