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
		expect(actual).toBeUndefined();
	});	
	
	it("converts 2 miles to feet", function() {
		var actual = new MilesFunction().milesConvert(2);
		expect(actual).toBe(10560);
	});

	it("converts 0 miles to feet", function() {
		var actual = new MilesFunction().milesConvert(0);
		expect(actual).toBe(0);
	});

	it("converts 12 miles to feet", function() {
		var actual = new MilesFunction().milesConvert(7);
		expect(actual).toBe(36960);
	});

	it("converts negative 2 miles to feet", function() {
		var actual = new MilesFunction().milesConvert(-2);
		expect(actual).toBe(-10560);
	});
	
	it("uses toThrow and calls a method without new", function() {        
        expect(function() { MilesFunction().milesConvert(2); }).toThrow(new TypeError("Cannot call method 'milesConvert' of undefined"));
    }); 
    

});

