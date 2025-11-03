function countWords(sentence) {
  let cnt = 0
  const trimmed = sentence.trim();
  if (trimmed.length === 0) {
    return 0;
  }
  for (let i=0; i<trimmed.length; i++) {
    if (trimmed[i] === " ") {
      cnt++;
    }
  }
  // return trimmed.split(/\s+/).length;
  return cnt+1;
}

console.log(countWords("Hello world"));

const countChars = sentence => sentence.length;

console.log(countChars("   Hello world   "));

module.exports = { countWords, countChars };