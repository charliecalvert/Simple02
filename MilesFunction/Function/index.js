
/* jshint strict: false */


var MilesFunction = function() {
	
	var feetPerMile = 5280;
	
	this.milesConvert = function(miles) {
		return miles * feetPerMile;
	};
};

var result = new MilesFunction().milesConvert(3);
console.log(result);
