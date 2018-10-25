let functionForTest = require("./function.js");

test("2+2 must be equal 4", ()=> {
    let result = functionForTest(2,2);
    expect(result).toBe(4);
});