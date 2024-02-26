const container = document.querySelector('.container');

for (let i = 1; i <= 16; i++) {
  let rowDiv = document.createElement('div');
  rowDiv.setAttribute('class', 'row');
  rowDiv.setAttribute('id', `row-${i}`);
  container.appendChild(rowDiv);
  for (let j = 1; j <= 16; j++) {
    let squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'square');
    squareDiv.setAttribute('id', `${i}-${j}`);
    squareDiv.addEventListener('mouseover', function (e) {
      squareDiv.style.backgroundColor = 'blue';
    });
    rowDiv.appendChild(squareDiv);
  }
}