/**
 * @author Charlie Calvert
 */

describe("Miles Object Project", function() {'use strict';

    it("can access data called feetInMiles", function() {
        expect(milesObject.feetInOneMile).toBe(5280);
    });
    
    it("can access milesToFeet, passing in 0", function() {
        expect(milesObject.milesToFeet(0)).toBe(0);
    });
    
    it("can access milesToFeet, passing in 1", function() {
        expect(milesObject.milesToFeet(1)).toBe(5280);
    });
    
    it("can access milesToFeet, passing in 2", function() {
        expect(milesObject.milesToFeet(2)).toBe(10560);
    });
});

