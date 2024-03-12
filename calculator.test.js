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
  test('can divide two small positive numbers', () => {
    expected = 2/3;
    actual = divide(2, 3);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 200/3;
    actual = divide(200e5, 3e5);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 11/8;
    actual = divide(-11, -8);
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    expected = NaN;
    actual = divide(8, 0);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('can modulus a small positive number', () => {
    expected = 2;
    actual = modulus(2);
    expect(actual).toBe(expected);
  });

  test('can modulus a large positive numbers', () => { 
    expected = 200e5;
    actual = modulus(200e5);
    expect(actual).toBe(expected);
  });

  test('can modulus a negative number', () => {
    expected = 11;
    actual = modulus(-11);
    expect(actual).toBe(expected);
  });

  test('can modulus zero', () => {
    expected = 0;
    actual = modulus(0);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test('can check if a small positive number is even', () => {
    expected = true;
    actual = even(2);
    expect(actual).toBe(expected);
  });

  test('can check if a large positive numbers is even', () => { 
    expected = true;
    actual = even(200e5);
    expect(actual).toBe(expected);
  });

  test('can check if a negative number is even', () => {
    expected = false;
    actual = even(-11);
    expect(actual).toBe(expected);
  });

  test('can check if zero is even', () => {
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {

});
