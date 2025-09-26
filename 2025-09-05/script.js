const isValidIPv4 = (ipv4) => {
  let isValid = false;
  const intArr = ipv4.split(".");
      // console.log(intArr);
  if (intArr.length !== 4){
    isValid = false;
  } else {
    for (let i in intArr) {
      const part = intArr[i];
      const num = parseInt(part, 10);
      if (
        part.length === 0 || 
        !/^\d+$/.test(part) || 
        (part.length > 1 && part[0] === '0') || 
        (num > 255 || num < 0)
      ) {
        isValid = false;
        break;
      } else {
        isValid = true;
      }  
    }
  }
  return isValid;
}

console.log(isValidIPv4("256.101.50.11a"))

 // Хэсгийн тоо 4 биш бол ХУДАЛ
    // 1. Хоосон утга ($"$"$) байгаа эсэхийг шалгана.
    // 2. Зөвхөн тоон тэмдэгтүүдээс бүрдсэн эсэхийг шалгана. (Жнь: "1a" -г барина)
    // 3. '0'-ээс бусад тохиолдолд тэгээр эхэлсэн эсэхийг шалгана. (Жнь: "01", "00" -г барина)
    // part.length > 1 ба part 0-ээр эхэлсэн байвал хүчингүй.
    // 4. Утгын хязгаарыг шалгана (0-255).