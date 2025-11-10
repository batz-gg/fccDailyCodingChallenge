function findWord(matrix, word) {
  const R = matrix.length; // Мөрийн тоо
  const C = matrix[0].length; // Баганын тоо
  const wordLen = word.length;
  // 4 чиглэлийн өөрчлөлт: [мөр_өөрчлөлт, багана_өөрчлөлт]
  const directions = [
    [0, 1],   // Баруун (left to right)
    [0, -1],  // Зүүн (right to left)
    [1, 0],   // Доош (top to bottom)
    [-1, 0]   // Дээш (bottom to top)
  ];
  // Матрицын бүх эхлэх цэгүүдийг шалгах
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      // Эхний үсэг таарч байвал
      if (matrix[r][c] === word[0]) {
        const start = [r, c];
        // 4 чиглэл бүрт үгийг шалгах
        for (const [dr, dc] of directions) {
          let found = true;
          let end = [r, c];
          // Үгийн үлдсэн үсгүүдийг тухайн чиглэлд шалгах (k=1-ээс эхэлнэ)
          for (let k = 1; k < wordLen; k++) {
            const nextR = r + k * dr;
            const nextC = c + k * dc;
            // Хил хязгаарыг шалгах
            if (nextR < 0 || nextR >= R || nextC < 0 || nextC >= C) {
              found = false;
              break;
            }
            // Дараагийн үсэг таарч байгаа эсэхийг шалгах
            if (matrix[nextR][nextC] !== word[k]) {
              found = false;
              break;
            } 
            // Сүүлийн үсэг мөн бол
            if (k === wordLen - 1) {
              end = [nextR, nextC];
            }
          }
          // Хэрэв үгийг бүрэн олсон бол үр дүнг буцаах
          if (found) {
            return [start, end];
          }
        }
      }
    }
  }
}

console.log(findWord([
    ["a", "c", "t"], 
    ["t", "a", "t"], 
    ["c", "t", "c"]], "cat")) // Output: [[0, 1], [2, 1]]