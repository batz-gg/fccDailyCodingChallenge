function isPerfectSquare(n) {
  const root = Math.sqrt(n);
  return root % 1 === 0;
}

console.log(isPerfectSquare(99))