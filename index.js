let alpha;

function createGrid(size) {
  const gridContainer = document.querySelector('.grid-container');
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  for (let i = 0; i < size; i++) {
    gridContainer.appendChild(createGridRow(size));
  }
  alpha = 0;
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
  
  // OPTION 1
  // if (alpha < 1) alpha += .1;
  // e.target.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;

  // OPTION 2
  e.target.style.backgroundColor = getRandomColor();

  // OPTION 3
  // e.target.classList.add('active');
}

function resetGrid(e) {
  const newSize = Number(prompt('What size should the grid be? (Enter number of squares per side. Max 100)'));
  if (newSize >= 1 && newSize <= 100) {
    const gridContainer = document.querySelector('.grid-container');
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(newSize);
  } else {
    alert('Not a valid size');
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function init() {
  createGrid(16);
  document.querySelector('.grid-container').addEventListener('mouseover', colorSquare);
  document.querySelector('#reset-grid').addEventListener('click', resetGrid)
}

init();
// redraw grid always using the same overall space (pixels)