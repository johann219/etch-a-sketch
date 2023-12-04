const container = document.querySelector(".container");

const FIELD_WIDTH = 960;

function drawGrid (side = 16) {
  let boxSide = 960/side;

  for (let i = 0; i < side; ++i) {
    const row = document.createElement('div');
    row.className = "row";

    for (let j = 0; j < side; ++j) {
      const rowElement = document.createElement('div');
      rowElement.className = "box";
      rowElement.style.width = boxSide + "px";
      rowElement.style.height = boxSide + "px";
      if (j === side - 1) {rowElement.classList.add("last-column");}
      if (i === side - 1) {rowElement.classList.add("last-row");}
      row.appendChild(rowElement);
    }

    container.appendChild(row);
  }
}
document.body.addEventListener ('mouseover', (e) => {
  let box = e.target.closest('.box');
  if(!box) { return; }
  box.style.backgroundColor = "lightblue";
});


const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
  let input = prompt("What number of squares per side do you want?", "16");
  container.replaceChildren();
  drawGrid(input);
});

drawGrid();