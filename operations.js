function operate(operator, num1, num2) {
  let res;
  if (operator === '+') {
    res = add(num1, num2);
  }
  if (operator === '-') {
    res = subtract(num1, num2);
  }
  if (operator === '*') {
    res = multiply(num1, num2);
  }
  if (operator === '/') {
    res = divide(num1, num2);
  }
  if (typeof res === 'string') return res;
  return rounded(res, 10);
}

// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
function rounded(num, decimalPlaces) {
  return Math.round((num + Number.EPSILON) * (10**decimalPlaces)) / (10**decimalPlaces);
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