/**
 * Өгөгдсөн тоо prime мөн эсэхийг шалгана.
 * @param {number} num - Шалгах тоо.
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    // 2 болон 3-д хуваагддаг эсэхийг шалгана.
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    // 5-аас эхлэн 6k ± 1 хэлбэрийн тоогоор шалгана. 
    // Энэ нь зөвхөн анхны тоогоор шалгахтай төстэй, гэхдээ илүү хурдан.
    for (let i = 5; i * i <= num; i = i + 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
console.log("isPrime: ", isPrime(18))
/**
 * N дэх анхны тоог олно.
 * @param {number} n - N дахь анхны тоо (жишээ нь, 6-д 13 гарна).
 * @returns {number} - N дэх анхны тоо.
 */
function nthPrime(n) {
    if (n <= 0) {
        throw new Error("N нь 1-ээс их байх ёстой.");
    }

    let count = 0; // Олсон анхны тооны тоо
    let num = 1;   // Шалгаж буй тоо
    let nthPrime = 0;

    // Бид N дахь анхны тоог олох хүртэл үргэлжлүүлнэ.
    while (count < n) {
        num++;
        if (isPrime(num)) {
            count++;
            nthPrime = num;
        }
    }

    return nthPrime;
}

console.log(nthPrime(5))

/**
 * Өгөгдсөн хязгаар (n) хүртэлх бүх анхны тоог олно.
 * @param {number} n - Дээд хязгаар.
 * @returns {number[]} - Анхны тоонуудын жагсаалт.
 */
function sieveOfEratosthenes(n) {
    if (n < 2) return [];

    // 1. Бүх тоог true гэж тэмдэглэнэ (анхны тоо гэж үзнэ).
    // isPrime[i] нь i тоо анхны тоо мөн эсэхийг илэрхийлнэ.
    const isPrime = new Array(n + 1).fill(true);
    // console.log(isPrime)
    isPrime[0] = false; // 0 анхны тоо биш
    isPrime[1] = false; // 1 анхны тоо биш

    // 2. 2-оос эхлэн үржвэрүүдийг "шигшинэ".
    for (let p = 2; p * p <= n; p++) {
        // Хэрэв p нь одоо хүртэл анхны тоо хэвээр байгаа бол:
        if (isPrime[p] === true) {
            // Түүний бүх үржвэрүүдийг анхны тоо биш гэж тэмдэглэнэ.
            // p * p-ээс эхэлнэ, учир нь түүнээс бага үржвэрүүд
            // аль хэдийн p-ээс бага анхны тоонуудаар шигшигдсэн байдаг.
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    // 3. Үлдсэн true-тэй тоонуудыг цуглуулна.
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i] === true) {
            primes.push(i);
        }
    }

    return primes;
}

// Жишээ: 50 хүртэлх бүх анхны тоо
const limit = 50;
const primeList = sieveOfEratosthenes(limit);

console.log(`${limit} хүртэлх анхны тоонууд:`);
console.log(primeList); 
// Үр дүн: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]