function isSpam(number) {
// улсын код, бүсийн код, нутгийн дугаарыг салгаж авах
  // let numArr = number.split(/[^a-zA-Z0-9]/).filter(space => space !== "");
  let numArr = number.split(" ");
  const a = numArr[0].substring(1, 4) || "";
  const bbb = numArr[1].substring(1, 4) || "";
  const localNumber = numArr[2].split("-");
  const ccc = localNumber[0] || "";
  const dddd = localNumber[1] || "";
  const newArr = [a, bbb, ccc, dddd];
  const sum1st3 = String([...ccc].reduce((a, b) => Number(a) + Number(b)));
  const isAppears = dddd.includes(sum1st3);
  console.log(newArr);
  const pattern = /(\d)\1{3,}/;
  const strNum = newArr.join("");
  if (
    isNaN(Number(a)) || 
    isNaN(Number(bbb)) || 
    isNaN(Number(ccc)) ||
    isNaN(Number(dddd)) || 
    bbb.length !== 3 || 
    ccc.length !== 3 || 
    dddd.length !== 4
  ) {
    return false;
  } else {
    if (
      (a.length > 2 || a[0] !== "0") ||
      (Number(bbb) > 900 || Number(bbb) < 200) ||
      isAppears || 
      pattern.test(strNum)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isSpam("+091 (400) 234-0192"))