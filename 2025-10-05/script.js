function hasExoplanet(readings) {
  if (readings === "") return false;

  const numArr = readings.split("").map((char) => {
    const upperChar = char.toUpperCase();
    if (upperChar >= '0' && upperChar <= '9') {
      return parseInt(upperChar);
    } else if (upperChar >= 'A' && upperChar <= 'Z') {
      const charCode = upperChar.charCodeAt(0);
      const codeA = 'A'.charCodeAt(0);
      return charCode - codeA + 10;
    }
    return 0;
  });

  if (numArr.length === 0) return false;

  const sum = numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / numArr.length;
  
  const threshold = average * 0.8;

return numArr.some(reading => reading <= threshold);
}

console.log(hasExoplanet("66554a4554"));