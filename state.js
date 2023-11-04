// const operate = require('./operations');
const OPERATORS = new Set(['+', '-', '*', '/']);
/*
need to know:
- num1: null | number | 'ERROR_DIVIDE_BY_ZERO'
- operator: null | '+' | '-' | '*' | '/'
- num 2: null | number
*/

const defaultState = {
  userInput: '',
  num1: null,
  operator: null,
  num2: null,
}

const state = {
  ...defaultState,
  addUserInput(char) {
    if (char === 'Clear') {
      return state.reset();
    }

    if (isDigit(char)) {
      state.userInput += char;
    } else if (char === '-' && state.userInput === '') {
      state.userInput += '-';
    } else if (isOperator(char)) {
      if (state.num1 === null) {
        state.num1 = parseFloat(state.userInput);
      }
      state.operator = char;
      state.userInput = '';
    } else if (char === '=') {
      state.num2 = parseFloat(state.userInput);
      state.evaluate();
    } else if (char === '.' && !state.userInput.includes('.')) {
      state.userInput += state.userInput === '' ? '0.' : '.';
    }
  },
  getState() {
    return {
      userInput: state.userInput,
      num1: state.num1,
      num2: state.num2,
      operator: state.operator,
    };
  },
  setState(values) {
    Object.assign(state, values);
  },
  evaluate() {
    const res = operate(state.operator, state.num1, state.num2);
    state.reset();
    state.num1 = res;
  },
  reset() {
    Object.assign(state, defaultState);
  }
};

function isDigit(char) {
  return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
}

function isOperator(char) {
  return OPERATORS.has(char);
}

/******** Uncomment module.exports for testing ********/
/*
Also uncomment the require(./operations) at top of the file for testing
*/
window.state = state;
// module.exports = state;

