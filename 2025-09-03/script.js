function isPangram(sentence, letters) {
  // 1. Үсэгнээс бусад тэмдэгтийг хасч, жижиг үсэг болгох
  const lowerLetter = sentence.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // 2. Өгүүлбэрт ашиглагдсан давтагдаaгүй үсгүүдийн багц үүсгэх
  const sentenceLetters = new Set(lowerLetter);
  
  // 3. Өгөгдсөн үсгүүдийн багц үүсгэх
  const requiredLetters = new Set(letters.toLowerCase());

  // 4. Хоёр багц ижил эсэхийг шалгах
  if (sentenceLetters.size !== requiredLetters.size) {
    return false;
  }

  for (const letter of sentenceLetters) {
    if (!requiredLetters.has(letter)) {
      return false;
    }
  }

  return true;
}

console.log(isPangram("hello", "helo")); 
console.log(isPangram("hello world", "helowrd")); 
console.log(isPangram("Hello World!", "helowrd"));
console.log(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"));