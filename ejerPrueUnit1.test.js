/* Segunda Prueba */

const returnGreet = require('./ejerPrueUnit1');

test("Return a greet", () =>{
    expect(returnGreet.greet(`Hello, Ryan how are you doing today?`)).toBe(`Hello, Ryan how are you doing today?`);
});
