function factorialIterative(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function combinations(cards) {
  // C(52, cards) томьёо
  return factorialIterative(52) / (factorialIterative(cards) * factorialIterative(52 - cards));
} // Функцийн төгсгөлд цэг таслал (;) байх шаардлагагүй.

// Үр дүн: combinations(52) нь 1-ийг буцаана.
console.log(combinations(52));