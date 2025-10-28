function navigate(commands) {
  let pageHistory = ["Home"];
  let currentPage = "";
  for (let i=0; i<commands.length; i++) {
    // console.log(commands[i])
    if (`${commands[i]}`.includes("Visit ")) {
      const visit = commands[i].replace("Visit ", "");
      pageHistory.push(visit);
      // console.log("hi", pageHistory[pageHistory.indexOf(visit[1])])
      currentPage = pageHistory[pageHistory.indexOf(visit)];
    } else if (commands[i] == "Back") {
      currentPage = pageHistory[pageHistory.indexOf(currentPage)-1] || "Home";
    } else if (commands[i] == "Forward") {
      currentPage = pageHistory[pageHistory.indexOf(currentPage)+1] || pageHistory[pageHistory.indexOf(currentPage)];
    }
  }
  console.log(pageHistory)
  return currentPage;
}

console.log(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]))

function navigateImproved(commands) {
  let pageHistory = ["Home"];
  let currentIndex = 0; // 💡 Одоогийн хуудасны индекс (байрлал)

  for (const command of commands) {
    // 1. Visit: Шинэ хуудас нэмэх
    if (command.startsWith("Visit ")) {
      // Одоогийн байрлалаас урагш байсан бүх түүхийг устгана (Браузерийн зарчим)
      pageHistory = pageHistory.slice(0, currentIndex + 1); 

      const newPage = command.replace("Visit ", "");
      pageHistory.push(newPage);
      currentIndex = pageHistory.length - 1; // Индексийг хамгийн сүүлийнх рүү шилжүүлнэ

    // 2. Back: Ухрах
    } else if (command === "Back") {
      // Индексийг бууруулах, 0-ээс багагүй байх ёстой
      if (currentIndex > 0) {
        currentIndex--;
      }
      
    // 3. Forward: Урагшлах
    } else if (command === "Forward") {
      // Индексийг нэмэгдүүлэх, жагсаалтын төгсгөлөөс хэтрэхгүй байх ёстой
      if (currentIndex < pageHistory.length - 1) {
        currentIndex++;
      }
    }
  }
  
  // 💡 Эхний "Home"-ийг хэрэглэхгүй бол 0-р индексийг авах ёстой.
  // console.log("Final History:", pageHistory);
  // console.log("Final Index:", currentIndex);
  return pageHistory[currentIndex];
}

console.log(navigateImproved(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]));
// Гаралт: Contact Us (Учир нь "Visit Contact Us" хийхэд "Forward"-ийн түүх устсан)

const start = performance.now();
console.log(navigate([
  "Visit Page1", "Visit Page2", "Visit Page3", "Back", "Back", "Forward", "Visit Page4", "Back", "Back", "Back", "Forward", "Forward", "Forward"
]));
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);