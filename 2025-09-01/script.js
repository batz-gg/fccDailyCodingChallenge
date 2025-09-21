function tribonacciSequence(startSequence, length) {
  if (startSequence.length < 3 || length === 0) return [];
  let result = startSequence.slice(0, length);
  console.log("result", result);
  for (let i = 3; i < length; i++) {
    let next = result[i-1] + result[i-2] + result[i-3];
  console.log("next", next);
    result.push(next);
  }
  return result;
}

console.log(tribonacciSequence([0, 0, 1], 20));