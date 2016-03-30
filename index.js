/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  convert: function(curl){
	var url, data;
	var getParams = function(curl){ 
		return curl.split(" ").map(function(e, i, arr){
			if(i != 0) 
				if(this != null && arr[i-1] == "-"+this)
					return e;
		}, 'd').filter(function(item){ return !(typeof item === 'undefined'); });
	}
	var getUrl = function(curl){
		return curl.split(" ").splice(-1);
	}	
	data = getParams(curl).join("&");
	url  = getUrl(curl);	
	return url+"?"+data;
  }
};
