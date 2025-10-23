/*
function stripTags(html) {
  return html.replace(/<[^>]*>/g, '');
}

// Tests
console.log(stripTags('<a href="#">Click here</a>')); // "Click here"
console.log(stripTags('<p class="center">Hello <b>World</b>!</p>')); // "Hello World!"
console.log(stripTags('<img src="cat.jpg" alt="Cat">')); // ""
console.log(stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>')); // "sectionsection"
*/
/**
 * HTML тагуудыг арилгаж, текстийг мөр буулттайгаар задлана.
 *
 * @param {string} html – Цэвэрлэх HTML текст.
 * @returns {string} – Цэвэрлэсэн, мөр буулттай текст.
 */
const fs = require('fs');

// getBlockTextWithNewlines функцийг энд хуулж оруулна (Node.js-д зориулсан хувилбарыг ашиглана)
function getBlockTextWithNewlines(html) {
    if (typeof html !== 'string') return '';
    
    let step1 = html.replace(/<\/(p|div|h[1-6]|li|tr|address|blockquote|hr|pre)\s*>/gi, '\n$&');
    let step2 = step1.replace(/<br\s*\/?>/gi, '\n');
    let plainText = step2.replace(/<[^>]*>/g, '');
    plainText = plainText.replace(/(\r\n|\r|\n){3,}/g, '\n\n').trim();
    
    return plainText;
}

const filename = 'clean_text.txt';

// fs.readFile доторх callback функц нь бүх үйл ажиллагааг багтаах ёстой.
fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Унших алдаа:", err);
    return;
  }
  
  // Файлын агуулга (data) бэлэн болсон!
  const htmlContent = data; 
  
  // Цэвэрлэх
  const cleanText = getBlockTextWithNewlines(htmlContent);
  
  // Бичих
  fs.writeFile(filename, cleanText, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error("Бичих алдаа:", writeErr);
      return;
    }
    console.log(`Текстийг амжилттай ${filename} нэртэй файл болгон хадгаллаа.`);
  });
});

// Энэ мөр нь дээрх бүх үйлдэл дуусахаас өмнө хэвлэгдэж магадгүй.
// console.log(`Текстийг амжилттай ${filename} нэртэй файл болгон хадгаллаа.`); // Үүнийг callback дотор оруулсан.