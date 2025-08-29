function getLaptopCost(laptops, budget) {
  // Давхардсан үнийг арилгаад, буурах эрэмбээр эрэмбэлнэ.
  const uniqueSortedPrices = [...new Set(laptops)].sort((a, b) => b - a);

  // 1. Хоёр дахь хамгийн өндөр үнэ төсөвт багтаж буй эсэхийг шалгах
  if (uniqueSortedPrices.length >= 2 && uniqueSortedPrices[1] <= budget) {
    return uniqueSortedPrices[1];
  }

  // 2. Төсөвт багтах хамгийн өндөр үнийг хайх
  for (const price of uniqueSortedPrices) {
    if (price <= budget) {
      return price; // Төсөвт багтсан эхний (хамгийн өндөр) үнийг буцаана
    }
  }

  // 3. Төсөвт таарах үнэ олдоогүй бол 0 буцаах
  return 0;
}
const test1 = [[1500, 2000, 1800, 1400], 1900]
const test2 = [[1500, 2000, 2000, 1800, 1400], 1900]
const test3 = [[2099, 1599, 1899, 1499], 2200]
const test4 = [[2099, 1599, 1899, 1499], 1000]
const test5 = [[1200, 1500, 1600, 1800, 1400, 2000], 1450]

console.log(getLaptopCost(...test3))