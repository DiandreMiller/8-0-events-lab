// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let currentColorDiv = document.getElementById('current-color');
let colors = document.querySelectorAll('.color');

colors.forEach(color => {
  color.addEventListener('click', handleClick => {
     currentColorDiv.style.background = handleClick.target.style.background 
  } ) 


})

let cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
  cell.addEventListener('click', handleClick => {
    cell.style.background = currentColorDiv.style.background
  })
})

let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', handleClick => {
  cells.forEach(cell => {
    cell.style.background = 'grey'
  })
});

let fill = document.querySelector('.fill');

fill.addEventListener('click', handleClick => {
  cells.forEach(cell => {
    cell.style.background = currentColorDiv.style.background
  })
})
