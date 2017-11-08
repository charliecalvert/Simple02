/**
 * @author Charlie Calvert
 */

describe("Object Method Project", function() {'use strict';

    it("can access data called a", function() {
        expect(objectMethod.a).toBe(1);
    });
    
    it("can access data called b", function() {
        expect(objectMethod.a).toBe(1);
    });

    it("can call a method", function() {
        expect(objectMethod.getThree()).toBe(3);
    });

    function tryToCallNew() {
        try {
            var a = new objectMethod();
        } catch(e) {
            throw new Error('foobar');
        }
    }
    
    it("cannot be used with new", function() {        
        expect(function() { tryToCallNew(); }).toThrow(new Error('foobar'));
    });
    
    it("cannot be used with new", function() {        
        expect(function() { new objectMethod(); }).toThrow(new TypeError('object is not a function'));
    });

});

