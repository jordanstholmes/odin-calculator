function operate(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return subtract(num1, num2);
  }
  if (operator === '*') {
    return multiply(num1, num2);
  }
  if (operator === '/') {
    return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'ERROR_DIVIDE_BY_ZERO';
  }
  return num1 / num2;
}

module.exports = {operate};