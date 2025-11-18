function gcd(x, y) {
  const min = Math.min(x, y);
  // const max = Math.max(x, y);
  const half = Math.floor(min / 2);
  for (let i = half; i > 0; i--) {
    // console.log(i)
    if (x%i == 0 && y%i == 0){
      return i;
    }
  }
}

console.log(gcd(20, 15))