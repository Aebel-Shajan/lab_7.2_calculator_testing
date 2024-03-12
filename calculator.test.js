const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 203e5;
    actual = sum(200e5, 3e5);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -19;
    actual = sum(-11, -8);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 8;
    actual = sum(8, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = -1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 197e5;
    actual = subtract(200e5, 3e5);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -3;
    actual = subtract(-11, -8);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 8;
    actual = subtract(8, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 600e10;
    actual = multiply(200e5, 3e5);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 88;
    actual = multiply(-11, -8);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(8, 0);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
