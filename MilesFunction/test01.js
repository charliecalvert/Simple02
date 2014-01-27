/**
 * @author Chris
 */

describe("Mile Function Project", function() {
	'use strict';
	it("expects true to be true", function() {
		expect(true).toBe(true);
	});

	it("converts 3 miles into feet", function() {
		expect(milesConvert.milesConvert(3)).toBe(15840);
	});

	it("converts 0 miles into feet", function() {
		expect(milesConvert.milesConvert(0)).toBe(0);
	});

	it("converts 10 miles into feet", function() {
		expect(milesConvert.milesConvert(10)).toBe(52800);
	});

	it("converts -3 miles into feet", function() {
		expect(milesConvert.milesConvert(-3)).toBe(-15840);
	});

});

