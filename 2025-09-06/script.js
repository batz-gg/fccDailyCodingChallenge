function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
    matrix[i].reverse();
  }
  return matrix;
}

console.log(rotate([[1, 2], [3, 4]]))