/**
 * @author Charlie Calvert
 */

var MyFunc = function() {
	
	var that = this;
	var privateName = 'Private Name';
	this.publicData = 'Public Data';
	
	this.sayName = function() {
		console.log(privateName);
	};
	
	function privateFunction() {
	   console.log(that.publicData);
	}
	
	privateFunction();
};

console.log("------------------");
console.log(" My Func");
console.log("------------------");
var myFunc = new MyFunc();
myFunc.sayName();

