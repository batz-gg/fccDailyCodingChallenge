function lcm(a, b) {
  if (a % b === 0) {
    return a;
  };
  if (b % a == 0) {
    return b;
  };
  for (let i = 1; i < 631; i++) {
    if ((b * i) % a == 0) {
      return b * i;
    };
    if ((a * i) % b == 0) {
      return a * i;
    };
  };
};

console.log(lcm(4, 6));

/*

$$\text{lcm}(a, b) = \frac{|a \cdot b|}{\text{gcd}(a, b)}$$

function gcd(a, b) {
  // Евклидийн алгоритм
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  // Тодорхойлолтоор, lcm(a, b) = (|a * b|) / gcd(a, b)
  // Үр ашгийн үүднээс, бид эхлээд хувааж, дараа нь үржүүлж болно:
  // (a / gcd(a, b)) * b
  return Math.abs(a * b) / gcd(a, b);
}

console.log(lcm(4, 6)); // 24 / 2 = 12
*/