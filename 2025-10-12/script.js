/**
 * Үгийн утгыг тооцох функц.
 * a=1, z=26, A=2, Z=52.
 * @param {string} word - Тооцоолох үг.
 * @returns {number} - Үгийн нийт утга.
 */
function calculateWordValue(word) {
    let value = 0;
    for (const char of word) {
        if (/[A-Z]/.test(char)) {
            value += (char.charCodeAt(0) - 64) * 2; // 'A'.charCodeAt(0) = 65
        } else if (/[a-z]/.test(char)) {
            value += char.charCodeAt(0) - 96; // 'a'.charCodeAt(0) = 97
        }
    }
    return value;
}
/**
 * Үгсийн тулааны ялагчийг тодорхойлох функц.
 * @param {string} teamSentence - Танай багийн өгүүлбэр (үгс зайгаар тусгаарлагдсан).
 * @param {string} opponentSentence - Өрсөлдөгч багийн өгүүлбэр.
 * @returns {string} - "We win", "We lose" эсвэл "Draw".
 */
function battle(teamSentence, opponentSentence) {
    const teamWords = teamSentence.split(' ');
    const opponentWords = opponentSentence.split(' ');

    let result = 0;
    for (let i = 0; i < teamWords.length; i++) {
        const diff = calculateWordValue(teamWords[i]) - calculateWordValue(opponentWords[i]);
        if (diff > 0) result++;
        else if (diff < 0) result--;
    }

    return result > 0 ? "We win" : result < 0 ? "We lose" : "Draw";
}