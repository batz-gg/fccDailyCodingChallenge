const fs = require('fs');

/**
 * SRT файлаас цаг хугацааны мэдээлэл, дугаарлалт, хоосон мөрийг арилгаж,
 * үлдсэн текстийн мөрүүдийг нэгтгэнэ (Word file шиг нэг урт текст).
 * @param {string} srtContent - SRT файлын агуулга (string хэлбэрээр).
 * @returns {string} - Цэвэрлэсэн, нэгтгэсэн текст.
 */
function cleanAndConcatenateSrt(srtContent) {
    // 1. Бүх мөрөөр хуваах
    const lines = srtContent.split(/\r?\n/);

    // 2. Цаг хугацааны мэдээлэл, дугаарлалт, хоосон мөрийг хасах, зөвхөн текстийг сонгох
    const textLines = lines.filter(line => {
        const trimmedLine = line.trim();

        // 1. Хоосон мөрийг хасна
        if (trimmedLine.length === 0) {
            return false;
        }

        // 2. Дугаарлалтын мөрийг хасна (зөвхөн тооноос бүрдсэн мөр)
        if (/^\d+$/.test(trimmedLine)) {
            return false;
        }

        // 3. Цаг хугацааны мөрийг хасна (00:00:00,000 --> 00:00:00,000)
        if (/^\d{2}:\d{2}:\d{2},\d{3}\s*-->\s*\d{2}:\d{2}:\d{2},\d{3}/.test(trimmedLine)) {
            return false;
        }

        // 4. Текст доторх HTML/тайлбар тэмдэглэгээг арилгах (Жишээ нь: <i>, </i>, <c.color>, г.м.)
        // Энэ нь Word-д илүү цэвэр текст оруулах зорилгоор нэмэлт боловсруулалт юм.
        line = line.replace(/<[^>]*>/g, '').trim();
        if (line.length === 0) {
            return false;
        }

        // Үлдсэн нь хадмал үгний текст
        return true;
    });

    // 3. Бүх текстийн мөрүүдийг ' ' (зай)-гаар нэгтгээд, давхардсан зайг арилгах
    const concatenatedText = textLines.join(' ')
                                     .replace(/\s+/g, ' ')
                                     .trim();

    return concatenatedText;
}

// ----------------------------------------------------
// Файл унших, бичих хэсэг
// ----------------------------------------------------
const inputFilePath = 'test.srt'; 
const outputFilePath = 'output_for_word.txt'; // Энийг Word-руу copy/paste хийнэ

try {
    // 1. Файлыг унших
    const srtContent = fs.readFileSync(inputFilePath, 'utf8');

    // 2. Боловсруулах
    const cleanedText = cleanAndConcatenateSrt(srtContent);

    // 3. Үр дүнг шинэ файл руу хадгалах
    fs.writeFileSync(outputFilePath, cleanedText, 'utf8');

    console.log(`--- Цэвэрлэгээ амжилттай боллоо ---`);
    console.log(`Үр дүнг ${outputFilePath} файл руу хадгалав.`);
    console.log(`Та энэ файлыг нээгээд, Word-руу хуулж болно.`);

} catch (err) {
    console.error(`Алдаа гарлаа: ${err.message}`);
    console.error(`Та ${inputFilePath} нэртэй SRT файлыг кодын хажууд байрлуулсан эсэхээ шалгана уу.`);
}