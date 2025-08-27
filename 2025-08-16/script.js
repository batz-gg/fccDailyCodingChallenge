function areAnagrams(str1, str2) {
  let areAna;
  let _str1 = str1.replace(" ", "").toLowerCase();
  let _str2 = str2.replace(" ", "").toLowerCase();
  let boolArr = [];
  for (let i=0; i < _str1.length; i++){
    boolArr.push(_str2.includes(_str1[i]));
    // console.log(boolArr)
    areAna = boolArr.includes(false) ? false : true;
    // console.log(areAna)
  }
  return areAna;
}

const test1 = ["listen", "silent"];
const test2 = ["School master", "The classroom"];
const test3 = ["A gentleman", "Elegant man"];
const test4 = ["Hello", "World"];
const test5 = ["apple", "banana"];
const test6 = ["cat", "dog"];

console.log(areAnagrams(...test4));