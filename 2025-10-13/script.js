/**
 * "HHMM" 24 цагийн форматын цагийг "H:MM AM" эсвэл "H:MM PM" 12 цагийн формат руу хөрвүүлнэ.
 * * @param {string} time24 - "HHMM" хэлбэрийн 4 оронтой цаг (0000-2359).
 * @returns {string} - "H:MM AM" эсвэл "H:MM PM" хэлбэрийн 12 цагийн формат.
 */
const to12 = (time24) => {
    // Цаг (HH) ба минут (MM)-ийг салгах
    const hour24Str = time24.substring(0, 2);
    const minuteStr = time24.substring(2, 4);
    
    // 24 цагийн цагийг тоон утгаар авах
    let hour24 = parseInt(hour24Str, 10);
    
    let hour12;
    let period; // AM эсвэл PM

    // 00:00 - 11:59 (Үдээс өмнө - AM)
    if (hour24 >= 0 && hour24 < 12) {
        period = "AM";
        // 00:00 - 00:59 цаг нь 12-р цаг (12:XX AM)
        if (hour24 === 0) {
            hour12 = 12;
        } 
        // 01:00 - 11:59 цаг нь өөрчлөлтгүй (1:XX AM - 11:XX AM)
        else {
            hour12 = hour24;
        }
    } 
    // 12:00 - 23:59 (Үдээс хойш - PM)
    else {
        period = "PM";
        // 12:00 - 12:59 цаг нь 12-р цаг (12:XX PM)
        if (hour24 === 12) {
            hour12 = 12;
        } 
        // 13:00 - 23:59 цаг нь 1-11-р цаг (1:XX PM - 11:XX PM)
        else {
            hour12 = hour24 - 12;
        }
    }
    
    // Эцсийн 12 цагийн форматыг буцаах ("H:MM AM/PM")
    return `${hour12}:${minuteStr} ${period}`;
};

// Тестүүд
/*
console.log(`"1124" -> ${to12("1124")}`); // Оролт: 1124, Гаралт: 11:24 AM
console.log(`"0900" -> ${to12("0900")}`); // Оролт: 0900, Гаралт: 9:00 AM
console.log(`"1455" -> ${to12("1455")}`); // Оролт: 1455, Гаралт: 2:55 PM
console.log(`"2346" -> ${to12("2346")}`); // Оролт: 2346, Гаралт: 11:46 PM
console.log(`"0030" -> ${to12("0030")}`); // Оролт: 0030, Гаралт: 12:30 AM

const to12 = (time24) => {
    let hour = parseInt(time24.slice(0, 2), 10);
    const minute = time24.slice(2);
    const period = hour < 12 ? "AM" : "PM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${period}`;
};
*/