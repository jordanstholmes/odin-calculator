const state = require('./state');

describe('State', () => {
  test('Default state', () => {
    expect(state.getNum1()).toBe(null);
    expect(state.getNum2()).toBe(null);
    expect(state.getOperator()).toBe(null);
  });
  test('Reset', () => {
    state.setNum1(2);
    state.setNum2(4);
    state.setOperator('+');
    expect(state.getNum1()).toBe(2);
    expect(state.getNum2()).toBe(4);
    expect(state.getOperator()).toBe('+');
    state.reset();
    expect(state.getNum1()).toBe(null);
    expect(state.getNum2()).toBe(null);
    expect(state.getOperator()).toBe(null);
  });
  test('Evaluate', () => {
    state.setNum1(2);
    state.setNum2(4);
    state.setOperator('+');
    state.evaluate();
    expect(state.getNum1()).toBe(6);
    expect(state.getNum2()).toBe(null);
    expect(state.getOperator()).toBe(null);
  });
});