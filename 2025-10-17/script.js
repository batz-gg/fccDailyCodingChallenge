function mask(card) {
  const first = [...card.substring(14, -1)];
  const last = [...card.substring(14)];
  console.log("last", last);
  let masked = [];
  const pattern = /[0-9]/;
  for (let i=0; i<=first.length-1; i++) {
    // console.log(pattern.test(first[i]));
    if (pattern.test(first[i])) {
      masked.push("*");
    } else {
      masked.push(first[i]);
    }
  }
  masked = masked.concat(last);
  return masked.join("");
}

console.log(mask("4012-8888-8888-1881"))

// const maskOptimized = (card) => {
//   return card.slice(0, -4).replace(/[0-9]/g, '*') + card.slice(-4);
// };