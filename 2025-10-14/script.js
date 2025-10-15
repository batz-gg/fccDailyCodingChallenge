function count(str, pattern) {
  let cnt = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str.substr(i, pattern.length) === pattern) cnt++;
  }
  return cnt;
}

// Tests
console.log(count('abcdefg', 'def')); // 1
console.log(count('hello', 'world')); // 0
console.log(count('mississippi', 'iss')); // 2
console.log(count('she sells seashells by the seashore', 'sh')); // 3
console.log(count('101010101010101010101', '101')); // 10