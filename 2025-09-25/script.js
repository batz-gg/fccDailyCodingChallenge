const secondLargest = arr => [...new Set(arr)].sort((a, b) => b - a)[1];

console.log(secondLargest([2, 3, 4, 6, 6]));