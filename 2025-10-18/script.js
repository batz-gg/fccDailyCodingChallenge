function sockPairs(pairs, cycles) {
  let totalSocks = pairs * 2;
  //replaced Math.floor() with bitwise OR "|"
  totalSocks -= (cycles / 2) | 0;
  totalSocks += (cycles / 3) | 0;
  totalSocks -= (cycles / 5) | 0;
  totalSocks += ((cycles / 10) | 0) * 2;  
  return totalSocks < 0 ? 0 : (totalSocks/2) | 0;
}

console.log(sockPairs(1, 8));
/*
function sockPairs_V2(initialPairs, cycles) {
    // [Мөчлөгийн тоо, Оймсны тоонд үзүүлэх өөрчлөлт]
    const rules = [
        [2, -1], // 2 угаалга тутамд 1 оймс хасагдана
        [3, +1], // 3 угаалга тутамд 1 оймс нэмэгдэнэ
        [5, -1], // 5 угаалга тутамд 1 оймс хасагдана
        [10, +2] // 10 угаалга тутамд 1 хос (2 оймс) нэмэгдэнэ
    ];

    let totalSocks = initialPairs * 2;

    // Дүрэм тус бүрээр нийт өөрчлөлтийг тооцно
    for (const [interval, change] of rules) {
        const numOccurrences = Math.floor(cycles / interval);
        totalSocks += numOccurrences * change;
    }
    if (totalSocks < 0) {
        return 0;
    }
    return Math.floor(totalSocks / 2);
}
*/