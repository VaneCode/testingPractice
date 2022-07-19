const calculatorClass = require('./calculator');

describe('Test add method', () => {
    test('5 + 5 has to be 10', () => {
        expect(calculatorClass.add(5,5)).toBe(10);
    });
    test('10 + 0 has to be 10', () => {
        expect(restar(5,3)).toBeLessThanOrEqual(2);
    });
    test('Resultado mayor o igual que...', () => {
        expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
    });
    test('Resultado mayor que...', () => {
        expect(sumar(5,5)).toBeGreaterThan(9);
    });
});

describe('Test subtract method', () => {
    test('5 - 5 has to be 0', () => {
        expect(calculatorClass.subtract(5,5)).toBe(0);
    });
    test('10 - 0 has to be 10', () => {
        expect(calculatorClass.subtract(10,0)).toBe(2);
    });
    test('20 - 10 has to be greater than 5', () => {
        expect(calculatorClass.subtract(20,10)).toBeGreaterThan(5);
    });
});

describe('Test multiply method', () => {
    test('100 * 0 has to be 0', () => {
        expect(calculatorClass.multiply(100,0)).toBe(0);
    });
    test('4 * 2 has to be 8', () => {
        expect(calculatorClass.multiply(4,2)).toBe(8);
    });
    test('2 * 4 has to be 8', () => {
        expect(calculatorClass.multiply(4,2)).toBe(8);
    });
});

describe('Test divide method', () => {
    test('100 / 0 has to be "Error"', () => {
        expect(calculatorClass.divide(100,0)).toBe("Error");
    });
    test('0 / 4 has to be 0', () => {
        expect(calculatorClass.divide(0,4)).toBe(0);
    });
    test('4 / 2 has to be 2', () => {
        expect(calculatorClass.divide(4,2)).toBe(2);
    });
});