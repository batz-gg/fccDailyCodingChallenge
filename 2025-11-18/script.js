function oneHundred(chars) {
  let str = "";
  for (let i=0; i <= 100; i++) {
    str += chars;
  }
  return str.slice(0, 100);
}

console.log(oneHundred("One hundred "));

function oneHundredOptimized(chars) {
  // chars-ийн уртыг тооцоод, 100-д хүрэхийн тулд хэдэн удаа давтахыг тоолно.
  const len = chars.length;
  // Жишээ нь: "a"-г 100 удаа давтах хэрэгтэй бол. Math.ceil(100 / 1) = 100
  // Жишээ нь: "abc"-г 100-аас хэтрэхгүй болгохын тулд. Math.ceil(100 / 3) = 34
  const repeatCount = Math.ceil(100 / len);
  
  // Давтах функцийг ашиглаад, эцэст нь 100-аар тайрна.
  return chars.repeat(repeatCount).slice(0, 100);
}

// Таны жишээ: "One hundred " (12 тэмдэгт)
// 100 / 12 = 8.33 => 9 удаа давтана.
// 9 удаа давтаад (108 тэмдэгт), 100-аар тайрна.
console.log(oneHundredOptimized("One hundred "));