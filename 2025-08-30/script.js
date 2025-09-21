function findDuplicates(arr) {
  const uniqueElements = new Set();
  const duplicates = new Set();

  for (const value of arr) {
    if (uniqueElements.has(value)) {
      duplicates.add(value);
    } else {
      uniqueElements.add(value);
    }
  }

  return [...duplicates].sort((a, b) => a-b);
}

console.log(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])); 