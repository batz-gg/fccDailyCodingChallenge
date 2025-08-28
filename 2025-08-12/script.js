function isValidNumber(n, base) {
  // Тоог жижиг үсэг болгож, тэмдэгт мөр болгон хувиргана.
  const numberStr = n.toString().toLowerCase();

  // 2-оос 36 хүртэлх суурийн хувьд тэмдэгтүүдийг хадгалах тэмдэгт мөр үүсгэнэ.
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz";

  // Өгөгдсөн сууринд тохирох зөвшөөрөгдөх тэмдэгтүүдийн жагсаалтыг хасна.
  const validDigits = digits.slice(0, base);

  // Өгөгдсөн тооны тэмдэгт бүрийг шалгана.
  for (const char of numberStr) {
    // Хэрэв тухайн тэмдэгт зөвшөөрөгдөх тэмдэгтүүдийн жагсаалтад байхгүй бол false буцаана.
    if (!validDigits.includes(char)) {
      return false;
    }
  }

  // Бүх тэмдэгт зөв бол true буцаана.
  return true;
}