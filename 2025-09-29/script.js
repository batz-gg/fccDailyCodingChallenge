function getLongestWord(sentence) {
  return sentence.replace(/\./g, "").split(" ").reduce((longest, current) => {
        if (current.length > longest.length) {
            return current;
        } else {
            return longest;
        }
    }, "");
}

console.log(getLongestWord("coding is fun"))