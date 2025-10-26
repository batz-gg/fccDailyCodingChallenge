function format(seconds) {
  let h, mm, ss;
  let newStr = "";
  let hAlt = Math.floor(seconds/60/60);
  let mmAlt = Math.floor(seconds/60);
  if (hAlt > 0) {
    h = hAlt;
    newStr += h + ":";
  }
  let mmAlt1 = mmAlt - (hAlt * 60);
  if (mmAlt1 == 1) {
    newStr += "0:";
  } else if (h && (mmAlt1 < 10 && mmAlt1 > 1)) {
    newStr += "0" + mmAlt1 + ":";
  } else if (mmAlt1 < 10 && mmAlt1 > 1) {
    mm = mmAlt1;
    newStr += mm + ":";
  } else {
    mm = mmAlt1;
    newStr += mm + ":";
  }
  let ssAlt = seconds % 60;
  if (ssAlt == 0) {
    newStr += "00";
  } else if (ssAlt < 10) {
    ss = ssAlt;
    newStr += "0" + ss
  } else {
    ss = ssAlt;
    newStr += ss;
  }
  return newStr;
}

console.log(format(500));
console.log(format(4000));
console.log(format(1));
console.log(format(5555));
console.log(format(99999));

/*
function format(seconds) {
  // Цаг, минут, секундыг тооцоолох
  const ss = seconds % 60;
  const totalMinutes = Math.floor(seconds / 60);
  const mm = totalMinutes % 60; // 0-59-ийн хоорондох минут
  const h = Math.floor(totalMinutes / 60); // Цаг

  // 1. Секунд (SS): Үргэлж 2 оронтой
  const ssFormatted = ss.toString().padStart(2, '0');

  // 2. Минут (MM): Урд талын 0-ийг хасна (H:MM:SS format-ын MM-ээс ялгаатай)
  let mmFormatted;
  if (h > 0) {
    // Хэрэв цаг байгаа бол минутыг 2 оронтой болгох (H:MM:SS шаардлагаар)
    mmFormatted = mm.toString().padStart(2, '0');
  } else {
    // Хэрэв цаг байхгүй бол 0-ийг хасна (ММ:SS шаардлагаар)
    mmFormatted = mm.toString();
  }
  
  // 3. Үр дүнг нэгтгэх
  if (h > 0) {
    // Цаг + Минут (2 оронтой) + Секунд (2 оронтой) -> 1:06:40
    return `${h}:${mmFormatted}:${ssFormatted}`;
  } else {
    // Минутын дүрмийг шалгах:
    if (totalMinutes === 0) {
        // Нийт минут 0 бол '0:SS' -> 0:01
        return `0:${ssFormatted}`; 
    }
    // Минут (0-гүй) + Секунд (2 оронтой) -> 8:20
    return `${mmFormatted}:${ssFormatted}`; 
  }
}
*/