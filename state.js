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
    if (state.num1 === null) {
      state.num1 = num;
    } else {
      state.num1 = Number(state.num1.toString() + num.toString())
    }
  },
  setNum2(num) {
    if (state.num2 === null) {
      state.num2 = num;
    } else {
      state.num2 = Number(state.num2.toString() + num.toString())
    }
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

