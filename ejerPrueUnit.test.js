/* Primera prueba */

const makeNegative = require('./ejerPrueUnit');

test("Make number negative", () =>{
    expect(makeNegative.makeNegative(50)).toBe(-50);
});

test("Negative number", () =>{
    expect(makeNegative.makeNegative(-75)).toBe(-75);
});

test("Number is cero", () =>{
    expect(makeNegative.makeNegative(0)).toBe(0);
});

