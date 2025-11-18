function daysUntilWeekend(dateString) {
  // Өдрийн дугаарыг авна (Ням = 0, Даваа = 1, ..., Баасан = 5, Бямба = 6)
  const dayNumber = new Date(dateString).getDay(); 

  // 0 (Ням) эсвэл 6 (Бямба) бол амралтын өдөр
  if (dayNumber === 0 || dayNumber === 6) {
    return "It's the weekend!";
  }

  // Амралтын өдөр (Бямба буюу 6) хүртэл хэдэн хоног үлдсэнийг тооцох
  // (6 - 1) = 5 хоног (Даваа бол)
  // (6 - 5) = 1 хоног (Баасан бол)
  const leftDay = 6 - dayNumber;

  // Үр дүнг буцаах
  return leftDay > 1 
    ? `${leftDay} days until the weekend.` 
    : `${leftDay} day until the weekend.`;
}

console.log(daysUntilWeekend("2025-11-29")); // Бямба гараг
console.log(daysUntilWeekend("2025-11-25")); // Мягмар гараг
/*
const getWeekDay = dateString => new Date(dateString).toLocaleString('en-US', { weekday: 'long' });

function daysUntilWeekend(dateString) {
  if (
    getWeekDay(dateString) === "Saturday" || 
    getWeekDay(dateString) === "Sunday"
  ) {
    return "It's the weekend!";
  }
  let dayNumber = 0;
  if (getWeekDay(dateString) === "Monday") {
    dayNumber = 1;
  }
  if (getWeekDay(dateString) === "Tuesday") {
    dayNumber = 2;
  }
  if (getWeekDay(dateString) === "Wednesday") {
    dayNumber = 3;
  }
  if (getWeekDay(dateString) === "Thursday") {
    dayNumber = 4;
  }
  if (getWeekDay(dateString) === "Friday") {
    dayNumber = 5;
  }
  const leftDay = 6-dayNumber;
  return leftDay > 1 ? `${leftDay} days until the weekend.` : `${leftDay} day until the weekend.`
}

console.log(daysUntilWeekend("2025-11-29"))
*/