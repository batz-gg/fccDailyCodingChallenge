function formatNumber(number) {
  const substr1 = number.substring(1, 4);
  const substr2 = number.substring(4, 7);
  const substr3 = number.substring(7);
  return `+${number[0]} (${substr1}) ${substr2}-${substr3}`;
}

console.log(formatNumber("05552340182"))