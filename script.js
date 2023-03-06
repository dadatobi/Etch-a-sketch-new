'use stict';

const container = document.querySelector('.container');
const gridNum = document.querySelector('.size');
const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

let draw = false;

function makeGrid(grid) {
  if (grid > 100 || grid < 6) {
    alert(`choose a value between 100 and 6, both inclusive`);
    makeGrid(30);
  } else {
    for (let i = 0; i < grid; i++) {
      let makeRow = document.createElement('div');
      makeRow.classList.add('row');
      container.appendChild(makeRow);
      for (let i = 0; i < grid; i++) {
        let makeColumn = document.createElement('div');
        makeColumn.classList.add('col');
        // makeColumn.textContent = 'a';
        // console.log('a');

        makeColumn.addEventListener('mouseover', () => {
          if (!draw) return;
          makeColumn.style.backgroundColor = color.value;
        });

        makeRow.appendChild(makeColumn);
        makeColumn.addEventListener('mousedown', () => {
          makeColumn.style.backgroundColor = color.value;
        });
      }
    }
  }
}

makeGrid(gridNum.value);
btn.addEventListener('click', function () {
  container.innerHTML = '';
  size = gridNum.value;
  makeGrid(size);
  // gridBox.style.style.backgroundColor;
});

window.addEventListener('mousedown', () => {
  draw = true;
});

window.addEventListener('mouseup', () => {
  draw = false;
});
