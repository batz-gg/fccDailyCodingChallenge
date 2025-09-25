const repeatVowels = (str) => {
  let vowelRepeated = "";
  const vowels = /[aeiou]/i;
  let vowelCount = 0;
  for (let i in str) {
    const char = str[i];
    if (vowels.test(char)) {
      vowelCount++;
      vowelRepeated += char + char.repeat(vowelCount-1).toLowerCase();
    } else {
      vowelRepeated += char;
    }
  }
  return vowelRepeated;
}

console.log(repeatVowels("RpdaEIlOU"))