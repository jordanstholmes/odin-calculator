const {operate} = require('./operations');
/*
need to know:
- num1: null | number | 'ERROR_DIVIDE_BY_ZERO'
- operator: null | '+' | '-' | '*' | '/'
- num 2: null | number

*/

const defaultState = {
  num1: null,
  operator: null,
  num2: null,
}

const state = {
  ...defaultState,
  setNum1(num) {
    state.num1 = num;
  },
  setNum2(num) {
    state.num2 = num;
  },
  setOperator(operator) {
    state.operator = operator;
  },
  getNum1() {
    return state.num1;
  },
  getNum2() {
    return state.num2;
  },
  getOperator() {
    return state.operator;
  },
  evaluate() {
    const res = operate(state.operator, state.num1, state.num2);
    Object.assign(state, defaultState);
    state.setNum1(res);
  },
  reset() {
    Object.assign(state, defaultState);
  }
};

module.exports = state;

