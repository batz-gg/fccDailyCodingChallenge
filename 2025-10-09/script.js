/**
 * Өгөгдсөн огноогоор сарны фазыг тодорхойлно.
 * @param {string} dateString - "YYYY-MM-DD" форматаар өгөгдсөн огноо.
 * @returns {string} - Сарны фаз ("New", "Waxing", "Full", "Waning").
 */
function moonPhase(dateString) {
    // Лавлах огноо: 2000-01-06 (Мөчлөгийн 1-р өдөр)
    const REFERENCE_DATE = new Date("2000-01-06"); 
    
    // Өгөгдсөн огноо
    const targetDate = new Date(dateString);

    // Хоёр огнооны хоорондох зөрүүг миллисекундээр олох
    // Даалгаврын дагуу targetDate нь REFERENCE_DATE-ээс өмнө байхгүй.
    const timeDifferenceMs = targetDate.getTime() - REFERENCE_DATE.getTime();
    
    // Миллисекундыг нийт өдөр болгон хувиргах
    // (1000 мс/с * 60 с/мин * 60 мин/цаг * 24 цаг/өдөр)
    const daysDifference = timeDifferenceMs / (1000 * 60 * 60 * 24);

    // Өдрийн тоог 28-д хувааж, үлдэгдлийг олох.
    // Энэ үлдэгдэл нь мөчлөгт 0-ээс 27 хооронд байна.
    const cycleDayZeroIndexed = daysDifference % 28;

    // Мөчлөгийн өдрийн дугаарыг 1-ээс 28-аар илэрхийлэх.
    // Хэрэв үлдэгдэл 0 бол (28-р өдөр гэсэн үг) 28 болгоно.
    // Бусад тохиолдолд 1-ийг нэмнэ.
    const dayInCycle = (cycleDayZeroIndexed === 0) ? 28 : cycleDayZeroIndexed + 1;

    // Фазыг тодорхойлох
    if (dayInCycle >= 1 && dayInCycle <= 7) {
        return "New"; // Шинэ Сар
    } else if (dayInCycle >= 8 && dayInCycle <= 14) {
        return "Waxing"; // Тэнийж буй Сар
    } else if (dayInCycle >= 15 && dayInCycle <= 21) {
        return "Full"; // Бүтэн Сар
    } else { // 22-оос 28 дахь өдөр
        return "Waning"; // Буурч буй Сар
    }
}