// function toBinary(decimal) {
//   if (decimal === 0) return "0";
//   let binStr = "";
//   let quotient = decimal;
//   while (quotient>0) {
//     const remainder = quotient % 2;
//     quotient = Math.floor(quotient / 2);
//     binStr = remainder + binStr;
//   }
//   return binStr;
// }
const toBinary = decimal => decimal.toString(2);
console.log(toBinary(12))