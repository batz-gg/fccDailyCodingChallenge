function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const uniqueInArr1 = arr1.filter(item => !set2.has(item));
  const uniqueInArr2 = arr2.filter(item => !set1.has(item));
  return uniqueInArr1.concat(uniqueInArr2).sort();
}

console.log(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]))

console.log(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]))