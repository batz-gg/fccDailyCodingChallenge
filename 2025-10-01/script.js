// function toDecimal(binary) {
//   const newBin = [...binary].map(a => Number(a));
//   let sum = 0;
//   let powerIndex = 0;
//   for (let i = newBin.length-1; i >= 0; i--) {
//     sum += newBin[i] * 2**powerIndex;
//     powerIndex++;
//   }
//   return sum;
// }
const toDecimal = binary => parseInt(binary, 2);
console.log(toDecimal("1010"));