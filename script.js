const container = document.querySelector(".container");

for (let i = 0; i < 16; ++i) {
  const row = document.createElement('div');
  row.className = "row";

  for (let j = 0; j < 16; ++j) {
    const rowElement = document.createElement('div');
    // rowElement.style.width = "40px";
    // rowElement.style.height = "40px";
    // rowElement.style.border = "1px solid black";
    rowElement.className = "box";

    row.appendChild(rowElement);
  }

  container.appendChild(row);
}

document.body.addEventListener ('mouseover', (e) => {
  let box = e.target.closest('.box');
  if(!box) { return; }
  box.style.backgroundColor = "lightblue";
});