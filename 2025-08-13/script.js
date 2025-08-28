/**
 * Фибоначчигийн дарааллыг үүсгэх функц
 * @param {number[]} startArray - Эхний хоёр тоо агуулсан массив
 * @param {number} length - Дарааллын нийт урт
 * @returns {number[]} - Фибоначчигийн дараалал
 */
function fibonacciSequence(startArray, length) {
    // Хэрвээ урт нь 0 бол хоосон массив буцаана
    if (length === 0) return [];

    // Хэрвээ урт нь 1 бол эхний тоог буцаана
    if (length === 1) return [startArray[0]];

    // Хэрвээ урт нь 2 бол эхний хоёр тоог буцаана
    if (length === 2) return [startArray[0], startArray[1]];

    // Дарааллыг эхний хоёр тоогоор эхлүүлнэ
    const sequence = [startArray[0], startArray[1]];

    // Дарааллыг хүссэн урт хүртэл үргэлжлүүлнэ
    for (let i = 2; i < length; i++) {
        // Өмнөх хоёр тооны нийлбэрийг дараалалд нэмнэ
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

// Жишээ тестүүд
// console.log(fibonacciSequence([0, 1], 20));
// console.log(fibonacciSequence([21, 32], 1));
// console.log(fibonacciSequence([0, 1], 0));
// console.log(fibonacciSequence([10, 20], 2));
// console.log(fibonacciSequence([123456789, 987654321], 5));