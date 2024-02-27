function randomRGB() {
  return Math.floor(Math.random() * 255);
}

const container = document.querySelector('.container');

function removeGrid() {
  let rows = document.querySelectorAll('.row');
  for (let i = 0; i < rows.length; i++) {
    container.removeChild(rows[i]);
  }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  removeGrid();
  let gridSize = +prompt('Enter a number between 10 & 100');
  while (gridSize < 10 || gridSize > 100 || isNaN(gridSize)) {
    gridSize = +prompt('Enter a number between 10 & 100');
  }
  for (let i = 1; i <= gridSize; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');
    rowDiv.setAttribute('id', `row-${i}`);
    container.appendChild(rowDiv);
    for (let j = 1; j <= gridSize; j++) {
      let squareDiv = document.createElement('div');
      squareDiv.setAttribute('class', 'square');
      squareDiv.setAttribute('id', `${i}-${j}`);
      squareDiv.addEventListener('mouseover', function (e) {
        let redVal = randomRGB();
        let greenVal = randomRGB();
        let blueVal = randomRGB();
        squareDiv.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
      });
      rowDiv.appendChild(squareDiv);
    }
  }
  container.style.border = 'solid';
});