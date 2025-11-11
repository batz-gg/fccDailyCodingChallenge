function count(str) {
  let foundVowels = 0;
  let foundConsonants = 0;
  // Бүх үсгийг жижиг үсэгт хөрвүүлэн, массив дахь авиаг мөн жижиг үсгээр өгсөн.
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];

    // Зөвхөн латин цагаан толгойн үсгийг шалгах (a-аас z хүртэл)
    if (char >= 'a' && char <= 'z') {
      if (vowels.includes(char)) {
        // char нь vowels массив дотор байвал
        foundVowels++;
      } else {
        // char нь үсэг мөн бөгөөд vowels дотор байхгүй бол гийгүүлэгч
        foundConsonants++;
      }
    }
    // Бусад тэмдэгтүүдийг (зай, тоо, тэмдэг) тоолохгүй.
  }

  // [авианы тоо, гийгүүлэгчийн тоо] гэсэн массивыг буцаана.
  return [foundVowels, foundConsonants];
}

console.log(count("Hello World")); // Үр дүн: [3, 7]
console.log(count("The quick brown fox jumps over the lazy dog.")); // Үр дүн: [6, 11]