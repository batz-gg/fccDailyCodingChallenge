function isBalanced(s) {
  s = s.toLowerCase();
  if (s.length % 2 == 1) {
    s = s.replace(s[Math.round(s.length / 2)-1], "")
  } 
  const halfLength = s.length / 2;
  const firstHalf = s.slice(0, halfLength);
  const secondHalf = s.slice(halfLength);
  const vowels = ["a", "e", "i", "o", "u"];
  const firstHalfWithVowels = [];
  const secondHalfWithVowels = [];
  for (let i = 0; i < firstHalf.length; i++) {
    if (vowels.includes(firstHalf[i])) {
      firstHalfWithVowels.push(firstHalf[i])
    }
    if (vowels.includes(secondHalf[i])) {
      secondHalfWithVowels.push(secondHalf[i])
    }
  }
  return firstHalfWithVowels.length == secondHalfWithVowels.length;
}

const test1 = "racecar";
const test2 = "Lorem Ipsum";
const test3 = "Kitty Ipsum";
const test4 = "string";
const test5 = " ";
const test6 = "abcdefghijklmnopqrstuvwxyz";
const test7 = "123A#b!E&#x26;*456-o.U";

console.log(isBalanced(test7))
