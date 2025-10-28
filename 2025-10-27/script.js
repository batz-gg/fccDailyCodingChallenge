function sequence(n) {
  let intSeq = "";
  for (let i = 1; i <= n; i++) {
    intSeq += i;
  }
  return intSeq;
}

console.log(sequence(5))

function sequenceImproved(n) {
  return Array.from({ length: n }, (_, i) => i + 1).join('');
  // Эсвэл: return [...Array(n).keys()].map(i => i + 1).join('');
}

function sequenceRecursive(n) {
  if (n === 0) {
    return "";
  }
  return sequenceRecursive(n - 1) + n;
}

const start = performance.now();
sequenceRecursive(100000);
const end = performance.now();
console.log(`Duration: \n${end - start} ms`);