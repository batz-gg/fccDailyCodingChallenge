/**
 * Далайн ёроолын газрын зураг (map) болон шумбалтын байршлыг (coordinates) авч,
 * баялгийн төлөвийг ("Empty", "Found", эсвэл "Recovered") буцаана.
 * * @param {string[][]} map Газрын зураг (2D массив).
 * @param {number[]} coords Шумбалтын байршил [мөр, багана].
 * @returns {string} Баялгийн төлөв.
 */
function dive(ocean, coords) {
  const [row, col] = coords;
  const cell = ocean[row][col];

  if (cell === "-") {
    return "Empty";
  }

  if (cell === "O") {
    ocean[row][col] = "X"; // Mark this part of the treasure as found
  }

  // Check if any part of the treasure is still unfound
  for (let r = 0; r < ocean.length; r++) {
    for (let c = 0; c < ocean[r].length; c++) {
      if (ocean[r][c] === "O") {
        return "Found";
      }
    }
  }

  return "Recovered";
}


console.log(dive(
  [
    [ "-", "X"], 
    [ "-", "X"], 
    [ "-", "O"]
  ], [2, 1]
));