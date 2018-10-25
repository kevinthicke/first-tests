let functionsForTest = require("./function.js");


describe("my first tests", () => {
    test("2+2 must be equal 4", ()=> {
        let func = functionsForTest.add(2,2);
        expect(func).toBe(4);
    });

    test("should be null", () => {
        let func = functionsForTest.isNull();
        expect(func).toBeNull(); 
    });

    test("should be falsy", () => {
        let func = functionsForTest.checkValue(false);
        expect(func).toBeFalsy();
});
});