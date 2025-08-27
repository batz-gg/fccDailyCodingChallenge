function evaluate(numbers, operators) {
  // Эхний тоог анхны үр дүн болгон оноож байна
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    // Модуло оператор ашиглан операторыг давтуулж байна
    const operator = operators[(i - 1) % operators.length];
    const nextNumber = numbers[i];

    if (operator === '+') {
      result += nextNumber;
    } else if (operator === '-') {
      result -= nextNumber;
    } else if (operator === '*') {
      result *= nextNumber;
    } else if (operator === '/') {
      result /= nextNumber;
    } else if (operator === '%') {
      result %= nextNumber;
    }
  }
  return result;
}

const test0 = [[1, 2, 3, 4, 5], ['+', '*']];
const test1 = [[5, 6, 7, 8, 9], ['+', '-']];
const test2 = [[17, 61, 40, 24, 38, 14], ['+', '%']];
const test3 = [[20, 2, 4, 24, 12, 3], ['*', '/']];
const test4 = [[11, 4, 10, 17, 2], ['*', '*', '%']];
const test5 = [[33, 11, 29, 13], ['/', '-']];

evaluate(...test4)

