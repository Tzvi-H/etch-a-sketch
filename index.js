function createGrid(rows, columns) {
  const gridContainer = document.querySelector('.grid-container');
  for (let i = 0; i < rows; i++) {
    gridContainer.appendChild(createGridRow(columns));
  }
}

function createGridRow(columns) {
  const row = document.createElement('div');
  row.classList.add('grid-row');

  for (let i = 0; i < columns; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    row.appendChild(square);
  }

  return row;
}

function addEventListenersToGrid() {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.addEventListener('mouseover', colorSquare);
}

function colorSquare(e) {
  if (!e.target.classList.contains('grid-square')) return;

  e.target.classList.add('active');
}

createGrid(16, 16);
addEventListenersToGrid()

// add reset button
// add prompt for grid size
// redraw grid always using the same overall space (pixels)