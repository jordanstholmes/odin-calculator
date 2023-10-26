function onNumberClick(number) {
  console.log(e);
}

function renderNumberButtons() {
  const container = document.querySelector('.number-btns')
  for (let i = 0; i < 10; i++) {
    const btn = document.createElement('button');
    btn.onclick = () => onNumberClick(i);
    btn.textContent = i.toString();
    container.appendChild(btn);
  }
}

renderNumberButtons();