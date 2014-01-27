
/* jshint strict: false */


var milesFunction = function() {
	
	var feetPerMile = 5280;
	
	this.milesConvert = function(miles) {
		return miles * feetPerMile;
	};
};

var result = new milesFunction().milesConvert(3);
console.log(result);
