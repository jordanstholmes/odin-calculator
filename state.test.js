const state = require('./state');

describe('State', () => {
  test('Reset', () => {
    const emptyState = {
      userInput: '',
      num1: null,
      operator: null,
      num2: null,
    };
    expect(state.getState()).toEqual(emptyState);
    state.num1 = 2;
    state.num2 = 4;
    state.operator = '+';
    state.userInput = '23'
    const expected = {
      userInput: '23',
      num1: 2,
      operator: '+',
      num2: 4,
    };
    expect(state.getState()).toEqual(expected);
    state.reset();
    expect(state.getState()).toEqual(emptyState);
  });
  describe('userInput', () => {
    test('Should add digits to User Input', () => {
      state.reset();
      state.addUserInput('2');
      expect(state.userInput).toBe('2');
      state.addUserInput('3');
      expect(state.userInput).toBe('23');
    });
    test('Should not allow operators before inputing a number', () => {
      state.reset();
      state.addUserInput('+');
      state.addUserInput('*');
      state.addUserInput('/');
      // the minus sign is allowed for inputting negative numbers
      expect(state.userInput).toBe('');
    });
    test('Should set num1 on operator input', () => {
      ['+', '*', '-', '/'].forEach((operator) => {
        state.reset();
        state.addUserInput('2');
        state.addUserInput('3');
        state.addUserInput(operator);
        expect(state.num1).toBe(23);
        expect(state.operator).toBe(operator);
        expect(state.userInput).toBe('');
      });
    });
    test('Should allow negative numbers', () => {
      state.reset();
      state.addUserInput('-');
      state.addUserInput('2');
      state.addUserInput('3');
      state.addUserInput('+');
      expect(state.num1).toBe(-23);
    });
    test('Should evaluate equation on input "="', () => {
      state.reset();
      state.setState({num1: 23, operator: '+', num2: null, userInput: '20'});
      state.addUserInput('=');
      expect(state.getState()).toEqual({num1: 43, operator: null, num2: null, userInput: ''});
    });
    test('Should not allow "=" without 2 numbers and an operator', () => {
      state.reset();
      state.setState({num1: null, operator: null, num2: null});
      state.addUserInput('=');
      expect(state.userInput).toBe('');

      state.reset();
      state.setState({num1: 23, operator: null, num2: null});
      state.addUserInput('=');
      expect(state.userInput).toBe('');

      state.reset();
      state.setState({num1: 23, operator: '+', num2: null});
      state.addUserInput('=');
      expect(state.userInput).toBe('');
    });
    test('Should allow inputting decimal numbers', () => {
      state.reset();
      state.addUserInput('.');
      expect(state.userInput).toBe('0.'); // parseFloat('.') will throw an error
      state.addUserInput('1');
      expect(state.userInput).toBe('0.1');
      state.addUserInput('*');
      expect(state.num1).toBe(0.1);

      state.reset();
      state.addUserInput('2');
      state.addUserInput('.');
      state.addUserInput('3');
      expect(state.userInput).toBe('2.3');
      state.addUserInput('/');
      expect(state.num1).toBe(2.3);
    });
    test('Should not allow more than one period in a number', () => {
      state.reset();
      state.addUserInput('2');
      state.addUserInput('.');
      state.addUserInput('3');
      state.addUserInput('.');
      expect(state.userInput).toBe('2.3');
    });
  });
});