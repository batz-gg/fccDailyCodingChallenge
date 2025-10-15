/**
 * Одын Голдилоксийн Бүсийг (Goldilocks Zone) тооцоолно.
 * @param {number} mass - Одын масс.
 * @returns {number[]} - Бүс эхлэх болон дуусах зайг (AU) хоёр оронгоор бөөрөнгийдөж буцаана.
 */
function goldilocksZone(mass) {
    // 1. Одын гэрэлтэлтийг (Luminosity) тооцох: Масс^3.5
    // Math.pow(a, b) нь a-г b зэрэгт дэвшүүлнэ.
    const luminosity = Math.pow(mass, 3.5);

    // Гэрэлтэлтээс язгуур авах: Math.sqrt(x)
    const sqrtLuminosity = Math.sqrt(luminosity);
    
    // 2. Бүс эхлэх зайг тооцох: 0.95 * sqrt(Luminosity)
    // toFixed(2) нь тоог 2 оронгоор бөөрөнгийдөж, string болгодог. 
    // Нэмэх (+) тэмдэг нь string-ийг буцаагаад number болгоно.
    const start = +(0.95 * sqrtLuminosity).toFixed(2);

    // 3. Бүс дуусах зайг тооцох: 1.37 * sqrt(Luminosity)
    const end = +(1.37 * sqrtLuminosity).toFixed(2);

    // 4. Үр дүнг массив хэлбэрээр буцаах.
    return [start, end];
}

// Жишээ:
// console.log(goldilocksZone(1));     // [0.95, 1.37]
// console.log(goldilocksZone(0.5));   // [0.28, 0.41]
// console.log(goldilocksZone(6));     // [21.85, 31.51]