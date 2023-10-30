function onInputClick(char) {
  state.addUserInput(char);
  console.log(state)
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

renderNumberButtons();
renderOperationButtons();