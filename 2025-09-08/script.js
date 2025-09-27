function buildAcronym(str) {
  const wordArr = str.split(" ");
  const skipUnless = ["a", "for", "an", "and", "by", "of"];
  let acronym = "";
  for (let i in wordArr) {
    for (let j in skipUnless) {
      if (wordArr[i] == skipUnless[j]) {
        wordArr.splice(i, 1);
      }
    }
  }
  for (let k in wordArr) {
    acronym += wordArr[k].substring(0, 1);
  }
  return acronym.toUpperCase();
}

console.log(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"))