const {operate} = require('./operations');

describe('Addition', () => {
  test('Simple addition', () => {
    expect(operate('+', 2, 4)).toBe(6);
  });
  test('With a negative', () => {
    expect(operate('+', -2, 4)).toBe(2);
  });
  test('With a negative result', () => {
    expect(operate('+', -2, -4)).toBe(-6);
  });
  test('With floating points', () => {
    expect(operate('+', 1.234, 0.123)).toBe(1.357);
  });
});

describe('Subtraction', () => {
  test('Simple subtraction', () => {
    expect(operate('-', 4, 1)).toBe(3);
  });
  test('With a negative', () => {
    expect(operate('-', 4, -2)).toBe(6);
  });
  test('With a negative result', () => {
    expect(operate('-', -2, 4)).toBe(-6);
  });
  test('With floating points', () => {
    expect(operate('-', 1.234, 0.123)).toBe(1.111);
  });
});

describe('Multiplication', () => {
  test('Positive multiplication', () => {
    expect(operate('*', 4, 2)).toBe(8);
  });
  test('With a negative', () => {
    expect(operate('*', -4, 3)).toBe(-12);
  });
  test('Double negative', () => {
    expect(operate('*', -5, -6)).toBe(30);
  });
  test('With floating points', () => {
    expect(operate('*', 2.32, 3)).toBe(6.96);
  });
});

describe('Division', () => {
  test('Simple division', () => {
    expect(operate('/', 12, 3)).toBe(4);
  });
  test('With a negative', () => {
    expect(operate('/', -10, 2)).toBe(-5);
  });
  test('Double negative', () => {
    expect(operate('/', -10, -2)).toBe(5);
  });
  test('With floating points', () => {
    expect(operate('/', 6.96, 3)).toBe(2.32);
  });
  test('Divide zero', () => {
    expect(operate('/', 0, 6)).toBe(0);
  });
  test('Divide by zero', () => {
    expect(operate('/', 6, 0)).toBe('ERROR_DIVIDE_BY_ZERO');
  });
});