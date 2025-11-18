function isMatch(fingerprintA, fingerprintB) {
  const checkLower = (text) => /^[a-z]+$/.test(text);
  const lenA = fingerprintA.length;
  const lenB = fingerprintB.length;
  const tenPercent = Math.floor(lenA * 0.1);
  let gapCount = 0;
  if (checkLower(fingerprintA) && checkLower(fingerprintB)) {
    if (lenA == lenB) {
      for (let i=0; i < lenA; i++) {
        if (fingerprintA[i] !== fingerprintB[i]) {
          gapCount++;
        }
      }
      if (gapCount <= tenPercent) {
        return true;
      }
    }
  }
  return false;
}

console.log(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"));