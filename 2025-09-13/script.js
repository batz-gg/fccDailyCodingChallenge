function findMissingNumbers(arr) {
  const arrSet = new Set(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let missN = [];
  for (let i = min; i <= max; i++) {
    if (!arrSet.has(i)) {
      missN.push(i);
    }
  }
  return missN;
}

console.log(findMissingNumbers([1, 3, 3, 5]));