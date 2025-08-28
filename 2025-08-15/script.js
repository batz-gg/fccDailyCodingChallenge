// Энэ функц нь өгөгдсөн string-ийн үг бүрийн эхний ба сүүлийн үсгийг өөрчлөхгүйгээр,
// дунд үсгүүдийг нь цагаан толгойн дарааллаар эрэмбэлж буцаана.
function jbelmu(text) {
    // Үгийг зайгаар салгаж массив болгоно
    return text.split(' ').map(word => {
        // 3-аас бага үсэгтэй үгийг өөрчлөхгүй буцаана
        if (word.length <= 2) return word;
        // Эхний ба сүүлийн үсгийг хадгална
        const first = word[0];
        const last = word[word.length - 1];
        // Дунд үсгүүдийг цагаан толгойн дарааллаар эрэмбэлнэ
        const middle = word.slice(1, -1).split('').sort().join('');
        // Эцэст нь нийлүүлж буцаана
        return first + middle + last;
    }).join(' ');
}

// console.log(jbelmu("hello world"));