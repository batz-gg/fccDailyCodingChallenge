function tooMuchScreenTime(hours) {
  if (hours.some(a => a >= 10)) {
    return true;
  }
  const total = hours.reduce((a, b) => a + b, 0);
  const mean = total / hours.length;
  if (mean >= 6) {
    return true;
  }
  for (let i = 0; i <= hours.length - 3; i++) {
    const sum = hours[i] + hours[i + 1] + hours[i + 2];
    const average = sum / 3;
    if (average >= 8) {
      return true;
    }
  }
  return false;
}

console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]))