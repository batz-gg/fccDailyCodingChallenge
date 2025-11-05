function buildMatrix(rows, cols) {
  let matrix = [];
  for (let i=0; i<=rows-1; i++) {
    matrix.push(new Array(cols));
    for (let j=0; j<=cols-1; j++) {
      // matrix[i][j] = 0
      matrix[i].fill(0, 0, cols);
    }
  }
  return matrix;
}

console.log(buildMatrix(2, 3))