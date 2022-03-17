function createGrid(size) {
  const gridContainer = document.querySelector('.grid-container');
  for (let i = 0; i < size; i++) {
    gridContainer.appendChild(createGridRow(size));
  }
}

function createGridRow(size) {
  const row = document.createElement('div');
  row.classList.add('grid-row');

  for (let i = 0; i < size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    row.appendChild(square);
  }

  return row;
}

function colorSquare(e) {
  if (!e.target.classList.contains('grid-square')) return;

  e.target.classList.add('active');
}

function resetGrid(e) {
  const gridContainer = document.querySelector('.grid-container');
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  
  const newSize = Number(prompt('What size should the grid be? (Enter the nubmer of squares per side)'));
  if (newSize > 0) {
    createGrid(newSize);
  } else {
    alert('Not a valid size');
  }
}

function init() {
  createGrid(16);
  document.querySelector('.grid-container').addEventListener('mouseover', colorSquare);
  document.querySelector('#reset-grid').addEventListener('click', resetGrid)
}

init();
// add reset button that resets the colors
// clicking on reset should prompt for grid size
// redraw grid always using the same overall space (pixels)