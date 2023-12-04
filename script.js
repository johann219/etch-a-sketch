const container = document.querySelector('.container');

const FIELD_WIDTH = 960;

let flagMode = 'Normal';

function randomizeNumberRGB () {
  return Math.floor(Math.random() * 266);
}

function randomizeColor () {
  let r = randomizeNumberRGB();
  let g = randomizeNumberRGB();
  let b = randomizeNumberRGB();

  return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid (side = 16) {
  let boxSide = 960/side;

  for (let i = 0; i < side; ++i) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let j = 0; j < side; ++j) {
      const rowElement = document.createElement('div');
      rowElement.className = 'box';
      rowElement.style.width = boxSide + 'px';
      rowElement.style.height = boxSide + 'px';
      if (j === side - 1) {rowElement.classList.add('last-column');}
      if (i === side - 1) {rowElement.classList.add('last-row');}
      row.appendChild(rowElement);
    }

    container.appendChild(row);
  }
}

const btnNormal = document.querySelector('#btn-normal');
const btnRandom = document.querySelector('#btn-random');
const btnDarken = document.querySelector('#btn-darken');
const currentMode = document.querySelector('.current-mode');

btnNormal.addEventListener('click', () => {
  if (flagMode !== 'Normal') {
    flagMode = 'Normal';
    currentMode.textContent = 'CURRENT MODE: NORMAL';
    alert('Mode successfully changed to Normal');
  } else {
    alert('Mode is already normal');
  }
});

btnRandom.addEventListener('click', () => {
  if (flagMode !== 'Random') {
    flagMode = 'Random';
    currentMode.textContent = 'CURRENT MODE: RANDOM';
    alert('Mode successfully changed to Random');
  } else {
    alert('Mode is already normal');
  }
});

btnDarken.addEventListener('click', () => {
  if (flagMode !== 'Darken') {
    flagMode = 'Darken';
    currentMode.textContent = 'CURRENT MODE: DARKEN';
    alert('Mode successfully changed to Darken');
  } else {
    alert('Mode is already normal');
  }
});

document.body.addEventListener ('mouseover', (e) => {
  let box = e.target.closest('.box');
  if(!box) { return; }
  box.style.backgroundColor = 'lightblue';
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let input = prompt('What number of squares per side do you want?', '16');
  container.replaceChildren();
  drawGrid(input);
});

drawGrid();