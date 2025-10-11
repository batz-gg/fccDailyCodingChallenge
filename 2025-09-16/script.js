function capitalize(paragraph) {
  if (!paragraph) {
    return "";
  }

  // 1. Параграфыг томсгосон массивт хувиргах.
  // Эхлээд эхний үсгийг томсгох нь зөв.
  let newPar = paragraph.split('');
  if (newPar.length > 0) {
    newPar[0] = newPar[0].toUpperCase();
  }

  const terminators = [".", "?", "!"];

  // 2. Өгүүлбэр төгсгөх тэмдгээр гүйж, дараагийн үсгийг олох
  for (let i = 0; i < newPar.length; i++) {
    const char = newPar[i];

    if (terminators.includes(char)) {
      // Өгүүлбэр төгсгөл (., ?, !) олдов.
      
      // Дараагийн тэмдэгтээс эхлэн (i+1) гүйж, хамгийн анхны үсгийг олно.
      let nextCharIndex = i + 1;
      
      // Массивын хязгаарыг шалгах нь чухал
      while (nextCharIndex < newPar.length) {
        let nextChar = newPar[nextCharIndex];
        
        // Хэрэв тэмдэгт бол (үсэг мөн эсэхийг шалгах)
        if (nextChar && nextChar.trim() !== '') {
          // Энэ бол дараагийн өгүүлбэрийн эхний үсэг.
          // Илүү нарийн шалгалт: үсэг мөн эсэх
          if (nextChar.match(/[a-zA-Zа-яА-ЯөӨүҮ]/)) {
             newPar[nextCharIndex] = nextChar.toUpperCase();
             break; // Томруулсан тул дараагийн өгүүлбэрийн төгсгөлийг хайж эхэлнэ.
          }
        }
        nextCharIndex++; // Дараагийн тэмдэгт рүү шилжих
      }
    }
  }

  // 3. Массивыг эргүүлэн текст болгох
  return newPar.join('');
}

console.log(capitalize("this is a simple sentence. another one! and one more?"))
// Үр дүн: "This is a simple sentence. Another one! And one more?"

/*
function capitalize(paragraph) {
  if (!paragraph) {
    return "";
  }
  
  // 1. Эхний үсгийг томсгох (энэ нь үргэлж өгүүлбэрийн эхлэл).
  // Хэрэв параграф хоосон биш бол
  const firstChar = paragraph.charAt(0).toUpperCase();
  const restOfString = paragraph.slice(1);
  let result = firstChar + restOfString;
  
  // 2. Тогтмол илэрхийлэл ашиглах:
  // ([.?!]) - Өгүүлбэр төгсгөх тэмдэгтүүдийг барих. (Capture Group 1)
  // (\s*) - Түүний дараах хоосон зайнуудыг барих. (Capture Group 2)
  // ([a-zA-Zа-яА-ЯөӨүҮ]) - Түүний дараах анхны үсгийг барих. (Capture Group 3)
  // g - Бүх тохиолдлыг олох (Global).
  
  const regex = /([.?!])(\s*)([a-zA-Zа-яА-ЯөӨүҮ])/g;

  result = result.replace(regex, (match, terminator, spaces, letter) => {
    // Үр дүн: Өгүүлбэр төгсгөх тэмдэг + зай + томсгосон үсэг
    return terminator + spaces + letter.toUpperCase();
  });

  return result;
}

// Жишээ 1:
console.log(capitalize("this is a simple sentence. another one! and one more?"))
// Үр дүн: "This is a simple sentence. Another one! And one more?"

// Жишээ 2 (Зайгүй үед):
console.log(capitalize("this is a test.here is another sentence."))
// Үр дүн: "This is a test.Here is another sentence."
*/