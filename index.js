const ROWS = 16;
const COLUMNS = 16;

function createGrid() {
  const gridContainer = document.querySelector('.grid-container');
  for (let i = 0; i < ROWS; i++) {
    gridContainer.appendChild(createGridRow());
  }
}

function createGridRow() {
  const row = document.createElement('div');
  row.classList.add('grid-row');

  for (let i = 0; i < COLUMNS; i++) {
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

createGrid();
addEventListenersToGrid()

// add event listener for mouseenter to grid container
// if target is not a square, then return
// add color to the target