function onInputClick(char) {
  state.addUserInput(char);
  renderDisplay();
}

function renderNumberButtons() {
  const container = document.querySelector('.number-btns')
  for (let i = 0; i < 10; i++) {
    const btn = document.createElement('button');
    btn.onclick = () => onInputClick(i.toString());
    btn.textContent = i.toString();
    container.appendChild(btn);
  }
}

function renderOperationButtons() {
  const container = document.querySelector('.operation-btns');
  ['+', '-', '*', '/', '=', 'Clear'].forEach((input) => {
    const btn = document.createElement('button');
    btn.onclick = () => onInputClick(input);
    btn.textContent = input;
    container.appendChild(btn);
  });
}

function renderDisplay() {
  const container = document.querySelector('.equation-display');

  let num1 = '';
  if (state.num1 !== null) {
    num1 = state.num1;
  } else {
    num1 = state.userInput;
  }

  let num2 = '';
  if (state.operator) {
    num2 = state.userInput;
  }

  let operator = '';
  if (state.operator) {
    operator = state.operator;
  }
  container.textContent = `${num1} ${operator} ${num2}`;
}

renderNumberButtons();
renderOperationButtons();