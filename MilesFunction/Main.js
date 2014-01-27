/**
 * @author Charlie Calvert
 */

var MyFunc = function() {
	
	var name = 'sam';
	
	this.sayName = function() {
		console.log(name);
	};
};

var myFunc = new MyFunc();
myFunc.sayName();

