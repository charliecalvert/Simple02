var milesObject = {	
	feetInOneMile: 5280,
	
	milesToFeet: function(miles) {
		return miles * this.feetInOneMile;
	}
};

console.log('-----------------');
console.log('- Miles Object -');
console.log('-----------------');
console.log(milesObject.feetInOneMile);
console.log(milesObject.milesToFeet(2));
console.log('-----------------');

