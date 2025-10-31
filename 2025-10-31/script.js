function spookify(boo) {
    // 1. Эхлээд бүх зураас (-) болон доогуур зураас (_)-ыг тилдэ (~) тэмдэгтээр орлуулна.
    let altBoo = boo.replaceAll(/[-_]/g, "~");

    let result = "";
    let letterCount = 0; // Зөвхөн үсгэн тэмдэгтийг тоолох тоолуур

    for (let i = 0; i < altBoo.length; i++) {
        let char = altBoo[i];
        
        // Тухайн тэмдэгт нь үсэг мөн эсэхийг шалгана.
        // Regex: /[a-zA-Z]/ - Бүх том болон жижиг үсэг
        if (char.match(/[a-zA-Z]/)) {
            // Үсэг мөн бол:
            
            if (letterCount % 2 === 0) {
                // Тоолуур тэгш бол (0, 2, 4...) -> Том үсэг болгоно.
                result += char.toUpperCase();
            } else {
                // Тоолуур сондгой бол (1, 3, 5...) -> Жижиг үсгээр үлдээнэ.
                result += char.toLowerCase();
            }
            // Зөвхөн үсэг байвал тоолуурыг нэгээр нэмнэ.
            letterCount++;
            
        } else {
            // Үсэг биш (зөвхөн тилдэ, $\sim$ тэмдэгт) бол тоололтод оруулахгүйгээр 
            // хэвээр үлдээнэ.
            result += char;
        }
    }

    return result;
}

console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"));