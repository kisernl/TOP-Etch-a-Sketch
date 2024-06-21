document.addEventListener("DOMContentLoaded", function () {
  function createGrid(size) {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = ""; // Clear any existing cells

    // Calculate the size of each cell
    const cellSize = 100 / size;

    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const cell = document.createElement("div");
        cell.className = "grid-cell";
        // Set the width and height of each cell
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        gridContainer.appendChild(cell);
      }
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // let color = "black";

    document.querySelectorAll(".grid-cell").forEach(function (cell) {
      cell.addEventListener("mouseover", function () {
        cell.style.background = getRandomColor();
        // cell.style.background = color;
      });
    });
  }

  createGrid(16);

  const gridSizeButton = document.getElementById("grid-size-button");

  gridSizeButton.addEventListener("click", function () {
    const userInput = prompt(
      "Please enter your desired number of squares per side:"
    );

    const numberInput = Number(userInput);
    console.log(numberInput);

    if (Number.isInteger(numberInput) && numberInput <= 100) {
      // alert("Valid input: " + numberInput);
      createGrid(numberInput);
      // alert("Grid updating to " + numberInput + "x" + numberInput);
    } else {
      // If not valid, show an error message
      alert("Error: Input must be an integer of 100 or less.");
    }
  });

  const clearGridButton = document.getElementById("clear-grid-button");

  clearGridButton.addEventListener("click", function () {
    location.reload();
  });
});
