function calculateScore(text) {
  const scores = {};
  for (let i = 0; i < 26; i++) {
    scores[String.fromCharCode(97 + i)] = i + 1;
    scores[String.fromCharCode(65 + i)] = i + 27;
  };
  return [...text].reduce((sum, char) => {
    return sum + (scores[char] || 0); 
  }, 0);
}

function verify(message, key, signature) {
  const sumMessage = calculateScore(message);
  const sumSecretKey = calculateScore(key);
  const total = sumMessage + sumSecretKey;
  return total == signature;
}

console.log(verify("foo", "bar", 57));

/*
// Шууд оноог тооцоолох функц
function verifySignature(message, key, signature) {
  // Тэмдэгтийн оноог олох туслах функц
  const getCharScore = (char) => {
    const code = char.charCodeAt(0);
    // 'a' = 97. Оноо 1-26
    if (code >= 97 && code <= 122) { // a-z
      return code - 96; 
    }
    // 'A' = 65. Оноо 27-52. (65-64) + 26 = 27
    if (code >= 65 && code <= 90) { // A-Z
      return (code - 64) + 26;
    }
    return 0; // Бусад тэмдэгт
  };
  
  // Нийлбэрийг тооцоолох туслах функц
  const calculateTotal = (text) => {
    return [...text].reduce((sum, char) => sum + getCharScore(char), 0);
  };
  
  const total = calculateTotal(message) + calculateTotal(key);
  
  return total === signature;
}
*/