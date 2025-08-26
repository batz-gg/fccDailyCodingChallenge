function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i+1];
    // console.log(sum);
    if (sum === target) {
      return [i, i+1];
    } 
    // else if (sum == "undefined") {
    //   return 
    // }
  }
  return "Target not found";
}

//drivers
const test1 = [[2, 7, 11, 15], 9];
const test2 = [[3, 2, 4, 5], 6];
const test3 = [[1, 3, 5, 6, 7, 8], 15];
const test4 = [[1, 3, 5, 7], 14];

console.log(findTarget(...test1));
console.log(findTarget(...test2));
console.log(findTarget(...test3));
console.log(findTarget(...test4));