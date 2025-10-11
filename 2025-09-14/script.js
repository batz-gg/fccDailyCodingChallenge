function getWords(paragraph) {
  let stringed = paragraph.toLowerCase().replace(/[.,!]/g, ''); 
  let words = stringed.split(" ");
  const counts = {};
  for (const item of words) {
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }
  const entries = Object.entries(counts);
  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
  const topThree = sortedEntries.slice(0, 3);
  const topThreeKeys = topThree.map(item => item[0]);
  return topThreeKeys;
}

// console.log(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"))
// console.log(getWords("I like coding. I like testing. I love debugging!"))
console.log(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"))

/*
function getTopWordsOptimized(paragraph, topN = 3) {
  // 1. Цэвэрлэх, Жижиг үсгээр болгох
  const cleanedString = paragraph.toLowerCase().replace(/[^a-zа-яё0-9\s]/g, ' '); 
  // Энэ нь цэг, таслал, бусад тэмдэгтүүдээс гадна
  // хаалт, зураас гэх мэт үгийн дунд хуваалт үүсгэдэг бүх тэмдэгтүүдийг 
  // (тогтмол илэрхийлэлд ороогүй бүх зүйлийг) зайд (space) сольж байна.
  
  // 2. Үгэнд хуваах ба Хоосон мөрүүдийг хасах
  const words = cleanedString.split(/\s+/).filter(word => word.length > 0);
  // /\s+/ нь нэг болон түүнээс дээш зайн тэмдэгтээр салгана, ингэснээр
  // давхар зай болон мөр цэвэрлэснээс үүссэн хоосон мөрүүд автоматаар үүсэхгүй.

  // 3. Давталтыг Тоолох (Reduce ашиглан)
  const counts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {}); // Эхлэлийн утга нь хоосон обьект {}

  // 4. Эрэмбэлэх ба Top N-ийг авах
  const topKeys = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]) // Буурах дарааллаар эрэмбэлэх
    .slice(0, topN)              // Эхний N (3) элементийг авах
    .map(item => item[0]);       // Түлхүүрүүдийг буцаах
    
  return topKeys;
}

// const example = "Байна уу? Бидний код үнэхээр сайн байна! Сайн сайн уу?";
// console.log(getTopWordsOptimized(example)); // ['сайн', 'уу', 'байна']
*/