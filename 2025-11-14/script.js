function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) {
      return [];
  }
  const effectiveShift = n % len;
  const leftShiftAmount = (effectiveShift + len) % len;
  return arr.slice(leftShiftAmount).concat(arr.slice(0, leftShiftAmount));
}

console.log(shiftArray([1, 2, 3], 1))

// Алхам 1: Үр дүнтэй шилжүүлгийн тоог олох
// n % len нь сөрөг тоо байж болох тул (n % len + len) % len гэж ашиглана.
// Алхам 2: Зөвхөн зүүн тийш шилжүүлэх хэмжээг тооцоолох.
// Энэ нь массиваас "хэдэн элементийг эхнээс нь тасдаж, сүүлд нь залгах" тоо юм.
// Шинэ массив үүсгэх:
// 1. Зүүн тийш шилжүүлсний дараа шинээр эхлэх хэсэг: arr.slice(leftShiftAmount)
// 2. Эхэнд байгаад сүүлд шилжсэн хэсэг: arr.slice(0, leftShiftAmount)