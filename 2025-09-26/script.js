function speeding(speeds, limit) {
  let countSpeeding = 0;
  let upperAverage = 0;
  let upperSpeeds = []
  for (let i=0; i<speeds.length; i++) {
    if (speeds[i] > limit) {
      countSpeeding++;
      upperSpeeds.push(speeds[i]-limit)
    }
  }
  if (countSpeeding === 0) {
    return [0, 0];
  }

  console.log(upperSpeeds);
  const sum = upperSpeeds.reduce((acc, curVal) => acc + curVal, 0);
  upperAverage = sum / upperSpeeds.length
  return [countSpeeding, upperAverage];
}

console.log(speeding([58, 50, 60, 55], 55))

/*
function speedingOptimizedFunc(speeds, limit) {
  // 1. Хурд хэтрүүлсэн хэмжээг агуулсан массивыг үүсгэх
  const overages = speeds
    // Хурд хэтрүүлсэн хэмжээг тооцож, сөрөг тоонуудыг орхино
    .map(speed => speed - limit) 
    // Зөвхөн хэтрүүлсэн (0-ээс их) тоонуудыг шүүх
    .filter(overage => overage > 0); 

  const countSpeeding = overages.length;
  
  if (countSpeeding === 0) {
    return [0, 0];
  }

  // 2. Дундаж хэтрүүлэлтийг тооцох
  // overages массивын нийлбэрийг олно
  const sumOfOverages = overages.reduce((sum, overage) => sum + overage, 0);
  const averageOverage = sumOfOverages / countSpeeding;

  return [countSpeeding, averageOverage];
}
*/