const container = document.querySelector(".container");

for (let i = 0; i < 16; ++i) {
  const row = document.createElement('div');
  row.style.display = "flex";
  row.style.gap = "4px";

  for (let j = 0; j < 16; ++j) {
    const rowElement = document.createElement('div');
    rowElement.style.width = "40px";
    rowElement.style.height = "40px";
    rowElement.style.border = "1px solid black";

    row.appendChild(rowElement);
  }

  container.appendChild(row);
}