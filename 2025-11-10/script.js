function getExtension(filename) {
  const arr = filename.split(".");
  const len = arr.length;
  
  // 1. Хэрэв цэг байхгүй бол (Жишээ: "README")
  // Эсвэл
  // 2. Хэрэв цэгээр төгссөн бол (Жишээ: "final.draft.")
  if (len <= 1 || arr[len - 1] === "") { 
    return "none";
  } 
  
  // Бусад бүх тохиолдолд (жишээ: "file.txt")
  return arr[len - 1]; 
}

console.log(getExtension("README"));        // Output: "none" (len=1)
console.log(getExtension("final.draft."));  // Output: "none" (len=3, arr[2]="")
console.log(getExtension("data.csv"));      // Output: "csv"