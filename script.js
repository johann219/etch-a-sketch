const container = document.querySelector(".container");

let input = 16;

for (let i = 0; i < input; ++i) {
  const row = document.createElement('div');
  row.className = "row";

  for (let j = 0; j < input; ++j) {
    const rowElement = document.createElement('div');
    rowElement.className = "box";
    if (j === input - 1) {rowElement.classList.add("last-column");}
    if (i === input - 1) {rowElement.classList.add("last-row");}
    row.appendChild(rowElement);
  }

  container.appendChild(row);
}

document.body.addEventListener ('mouseover', (e) => {
  let box = e.target.closest('.box');
  if(!box) { return; }
  box.style.backgroundColor = "lightblue";
});