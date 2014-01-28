/**
 * @author Charlie Calvert
 */

describe("Miles Function Project Test Index", function() {	'use strict';
	
	it ("can create milesFunction", function() {
		var milesFunction = new MilesFunction();
		expect(milesFunction).toBeTruthy();
	});
	
	it("cannot access private feetPerMile", function() {
		var actual = new MilesFunction().feetPerMile;		
		expect(actual).toBe(undefined);
	}); 
	
	it("calls method without new", function() {
		var actual = new MilesFunction().milesConvert(2);
		expect(actual).toBe(10560);
	}); 
	
	it("converts 2 miles into feet", function() {
		var actual = new MilesFunction().milesConvert(2);
		expect(actual).toBe(10560);
	});

	it("converts 0 miles into feet", function() {
		var actual = new MilesFunction().milesConvert(0);
		expect(actual).toBe(0);
	});

	it("converts 7 miles into feet", function() {
		var actual = new MilesFunction().milesConvert(7);
		expect(actual).toBe(36960);
	});

	it("converts -3 miles into feet", function() {
		var actual = new MilesFunction().milesConvert(-3);
		expect(actual).toBe(-15840);
	});

});

