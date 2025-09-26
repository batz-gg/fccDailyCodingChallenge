function parseRomanNumeral(numeral) {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let total = 0;
  let previousValue = 0;
  for (let i = numeral.length - 1; i >= 0; i--) {
    const currentValue = romanMap.get(numeral[i]);
    if (currentValue < previousValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    previousValue = currentValue;
  }
  return total;
}
console.log(parseRomanNumeral("XCIX"))
/* little joke
function parseRomanNumeral(numeral) {
  switch (numeral) {
    case "III":
      return 3;
    case "IV":
      return 4;
    case "XXVI":
      return 26;
    case "XCIX":
      return 99;
    case "CDLX":
      return 460;
    case "DIV":
      return 504;
    case "MMXXV":
      return 2025;
  }
  return numeral;
}

and then all passed.
no algo
no ai
no search
no pain
no gain
*/