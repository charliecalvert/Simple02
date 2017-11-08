
/* jshint strict: false */


var MilesFunction = function() {
	
	var feetPerMile = 5280;
	
	this.milesConvert = function(miles) {
		return miles * feetPerMile;
	};
};

console.log("------------------");
console.log(" Miles Function");
console.log("------------------");
var result = new MilesFunction().milesConvert(3);
console.log('Converting 3 miles to feet yields: ' + result);
// console.log(new MilesFunction().feetPerMile);