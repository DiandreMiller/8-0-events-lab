// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!


//This is for the current color selected
let currentColorDiv = document.getElementById('current-color');

//This is all the colors in the palette
let colors = document.querySelectorAll('.color');

//This loops through all the colors
colors.forEach(color => {
  color.addEventListener('click', handleClick => {
     currentColorDiv.style.background = handleClick.target.style.background 
  } ) 
})

//This is a variable for all the cell
let cells = document.querySelectorAll('.cell')

//This loops through all the cells and changes them to the current color
cells.forEach(cell => {
  cell.addEventListener('click', handleClick => {
    cell.style.background = currentColorDiv.style.background
  })
})

//This is a variable for the reset button
let resetButton = document.querySelector('.reset');

//This is a variable for the background color
let backgroundColor = document.querySelector('body.style.background-color');

//This callback function resets the default palette to the default which is the color of the background
resetButton.addEventListener('click', handleClick => {
  cells.forEach(cell => {
    cell.style.background = backgroundColor
  })
});

//This is a variable for the fill button
let fill = document.querySelector('.fill');

//This will fill the entire palette of whatever is clicked on
fill.addEventListener('click', handleClick => {
  cells.forEach(cell => {
    cell.style.background = currentColorDiv.style.background
  })
})

//This is a variable for the erase button
let erase = document.querySelector('.erase');

//This is the functionality for the erase button
erase.addEventListener('click', handleClick => {
  cells.forEach(cell => {
    currentColorDiv.style.background = backgroundColor
  })
})

//This is a variable to shape the box
let colorMode = document.querySelector('.color-mode');

//This will allow you to shade the box by hovering your mouse over it
colorMode.addEventListener('click', handleClick => {
  cells.forEach(cell => {
    cell.addEventListener('mouseover', handleClick => {
      cell.style.background = currentColorDiv.style.background
    })
  })
})

// A variable for users getting to choose their color
let chooseColor = document.querySelector('.color');

console.log(chooseColor)
chooseColor.forEach(color => {
  color.addEventListener('click', handleClick => {
     currentColorDiv.style.background = chooseColor.target.type
  } ) 
})



//This code is not working
//I am trying to reset the color mode to normal click when I double click


// colorMode.addEventListener('dblclick', handleClick => {
//   cells.forEach(cell => {
//     cell.addEventListener('click', handleClick => {
//       cell.style.background = currentColorDiv.style.background
//     })
//   })
// })







