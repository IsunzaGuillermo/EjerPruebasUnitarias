/* Prueba 3 */

const parImpar = require('./ejerPrueUnit2');

test("Revisar si numero es par o impar", () => {
    expect(parImpar.parONo(362)).toBe(true);
})

