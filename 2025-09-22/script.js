function digitsOrLetters(str) {
  let strArr = [...str];
  let letterCount = 0;
  let digitCount = 0;
  const letterPattern = /[a-zA-Z]/;
  const digitPattern = /[0-9]/;
  const otherCharPattern = /[^a-zA-Z0-9]/g;
  for (let i = 0; i < strArr.length; i++) {
    if (letterPattern.test(str[i])) {
      letterCount+=1;
    } else if (digitPattern.test(str[i])) {
      digitCount+=1;
    } else {
      console.log(otherCharPattern.test(str))
    }
  }
  if (letterCount === digitCount) {
    return "tie";
  }
  if (letterCount > digitCount) {
    return "letters";
  }
  return "digits";
}

console.log(digitsOrLetters("a1b2c3d"))

/*
function digitsOrLetters(str) {
  // Зөвхөн үсгүүдийг (том, жижиг) олох глобал регуляр илэрхийлэл
  const letterPattern = /[a-zA-Z]/g;
  
  // Зөвхөн тоонуудыг (0-9) олох глобал регуляр илэрхийлэл
  const digitPattern = /[0-9]/g;

  // 1. Үсгийн тоог олох
  // match() нь таарсан бүх тэмдэгтүүдийн массивыг буцаана.
  // Хэрэв юу ч таарахгүй бол null буцаана, тиймээс || [] ашиглан null-ийг хоосон массиваар сольж байна.
  const letters = str.match(letterPattern) || [];
  const letterCount = letters.length;

  // 2. Тооны тоог олох
  const digits = str.match(digitPattern) || [];
  const digitCount = digits.length;
  
  // 3. Үр дүнг харьцуулах
  if (letterCount === digitCount) {
    return "tie";
  }
  if (letterCount > digitCount) {
    return "letter";
  }
  // letterCount < digitCount үед
  return "digit";
}

console.log(digitsOrLetters("aMc123")); 
console.log(digitsOrLetters("Hello! World 123"));
*/