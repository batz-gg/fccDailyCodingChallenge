function rgbToHex(rgb) {
  const rgbToArray = rgb.slice(4, -1).replaceAll(" ", "").split(",").map(a => parseInt(a));
  let newHex = '#';
  for (let i = 0; i < rgbToArray.length; i++) {
    const integer = Math.floor(rgbToArray[i] / 16);
    const fraction = rgbToArray[i] % 16;
    switch (integer) {
      case 10:
        newHex += 'a';
        break;
      case 11:
        newHex += 'b';
        break;
      case 12:
        newHex += 'c';
        break;
      case 13:
        newHex += 'd';
        break;
      case 14:
        newHex += 'e';
        break;
      case 15:
        newHex += 'f';
        break;
      default:
        newHex += integer;
        break;
    }
    switch (fraction) {
      case 10:
        newHex += 'a';
        break;
      case 11:
        newHex += 'b';
        break;
      case 12:
        newHex += 'c';
        break;
      case 13:
        newHex += 'd';
        break;
      case 14:
        newHex += 'e';
        break;
      case 15:
        newHex += 'f';
        break;
      default:
        newHex += fraction;
        break;
    }
  }  
  return newHex;
}

console.log(rgbToHex("rgb(220, 20, 60)"))
// console.log(rgbToHex("rgb(220)"))

/*GEMINI*/
// function rgbToHex(rgb) {
//   const rgbToArray = rgb.slice(4, -1).replaceAll(" ", "").split(",").map(a => parseInt(a));
//   let newHex = '#';
//   const toHexValue = (n) => {
//     if (n < 10) {
//       return n;
//     }
//     // 10-аас дээш тоонуудыг үсэг рүү хөрвүүлэх
//     const hexChars = ['a', 'b', 'c', 'd', 'e', 'f'];
//     return hexChars[n - 10];
//   };

//   for (let i = 0; i < rgbToArray.length; i++) {
//     const integer = Math.floor(rgbToArray[i] / 16);
//     const remainder = rgbToArray[i] % 16;
//     newHex += toHexValue(integer);
//     newHex += toHexValue(remainder);
//   }  
//   return newHex;
// }

/*COPILOT*/
// function toHexChar(n) {
//   return n < 10 ? n : String.fromCharCode(87 + n); // 10->'a', 11->'b', ...
// }

// function rgbToHex(rgb) {
//   const rgbToArray = rgb.slice(4, -1).replaceAll(" ", "").split(",").map(a => parseInt(a));
//   let newHex = '#';
//   for (let i = 0; i < rgbToArray.length; i++) {
//     const integer = Math.floor(rgbToArray[i] / 16);
//     const fraction = rgbToArray[i] % 16;
//     newHex += toHexChar(integer);
//     newHex += toHexChar(fraction);
//   }
//   return newHex;
// }
