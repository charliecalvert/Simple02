/**
 * @author Charlie Calvert
 */

describe("Miles Function Project", function() {
	'use strict';
	
	it ("can create milesFunction", function() {
		expect(new milesFunction()).toBeTruthy();
	});
	
	it("converts 3 miles into feet", function() {
		expect(new milesFunction().milesConvert(3)).toBe(15840);
	});

	it("converts 0 miles into feet", function() {
		expect(new milesFunction().milesConvert(0)).toBe(0);
	});

	it("converts 10 miles into feet", function() {
		expect(new milesFunction().milesConvert(10)).toBe(52800);
	});

	it("converts -3 miles into feet", function() {
		expect(new milesFunction().milesConvert(-3)).toBe(-15840);
	});

});

