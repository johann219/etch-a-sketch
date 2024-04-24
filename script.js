const GRID_SIZE = 640;
const RANDOM_COLOR_MIN = 0;
const RANDOM_COLOR_MAX = 255;

const gridCellTemplateElement = document.querySelector('#grid__cell').content.querySelector('div');
const gridContainerElement = document.querySelector('.grid__container');
const gridResizeInputElement = document.querySelector('.grid__control');
const gridResizeForm = document.querySelector('.grid__form');

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
  const red = getRandomInteger(RANDOM_COLOR_MIN, RANDOM_COLOR_MAX);
  const green = getRandomInteger(RANDOM_COLOR_MIN, RANDOM_COLOR_MAX);
  const blue = getRandomInteger(RANDOM_COLOR_MIN, RANDOM_COLOR_MAX);

  return `rgb(${red}, ${green}, ${blue})`;
};

const colorElementRandom = (element, color) => {
  element.style.backgroundColor = color;
};

const calculateCellSide = (cellAmount) => GRID_SIZE / cellAmount;

const createGrid = (cellAmount) => {
  gridContainerElement.innerHTML = '';

  for(let i = 0; i < cellAmount; i++) {
    const gridRowElement = document.createElement('div');
    gridRowElement.classList.add('grid__row');

    for(let j = 0; j < cellAmount; j++) {
      const gridCellElement = gridCellTemplateElement.cloneNode(true);
      const cellSide = calculateCellSide(cellAmount);

      gridCellElement.style.width = `${cellSide}px`;
      gridCellElement.style.height = `${cellSide}px`;

      if (j === 0) {
        gridCellElement.classList.add('grid__column--leftmost');
      }
      if (i === 0) {
        gridCellElement.classList.add('grid__row--topmost');
      }
      gridRowElement.append(gridCellElement);
    }

    gridContainerElement.append(gridRowElement);
  }
};

createGrid(16);

const onMouseOverRandom = (evt) => {
  if (evt.target.closest('.grid__cell')) {
    colorElementRandom(evt.target, getRandomColor());
  }
};

gridContainerElement.addEventListener('mouseover', onMouseOverRandom);

gridResizeForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  createGrid(gridResizeInputElement.value);
  gridResizeForm.reset();
});
