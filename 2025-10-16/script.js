/**
 * Өгөгдсөн мөрийн имэйл хаяг хүчинтэй эсэхийг шалгана.
 *
 * Шаардлагууд:
 * - Яг нэг '@' тэмдэгттэй байх.
 * - Local Part (өмнө): Үсэг (a-z, A-Z), тоо (0-9), цэг (.), доогуур зураас (_), зураас (-) агуулна.
 * - Local Part: Цэгээр эхлэх эсвэл төгсөхгүй байх.
 * - Domain Part (дараа): Дор хаяж нэг цэг агуулна.
 * - Domain Part: Цэг, дараа нь дор хаяж хоёр үсэгээр төгсөнө.
 * - Local болон Domain хэсэгт хоёр цэг дараалахгүй.
 *
 * @param {string} email - Шалгах имэйл хаяг.
 * @returns {boolean} - Хүчинтэй бол true, үгүй бол false.
 */
function validate(email) {
    // 1. '@' тэмдэгтийг шалгах
    const atCount = (email.match(/@/g) || []).length;
    if (atCount !== 1) {
        return false;
    }

    const parts = email.split('@');
    const localPart = parts[0];
    const domainPart = parts[1];

    // 2. Local болон Domain хэсэгт хоёр цэг дараалахыг шалгах
    if (localPart.includes('..') || domainPart.includes('..')) {
        return false;
    }

    // 3. Орон нутгийн хэсгийг (localPart) шалгах
    
    // Цэгээр эхлэх эсвэл төгсөхийг шалгах
    if (localPart.startsWith('.') || localPart.endsWith('.')) {
        return false;
    }
    
    // Зөвшөөрөгдсөн тэмдэгтүүдийг шалгах: [a-zA-Z0-9._-]
    // Хэрэв зөвшөөрөгдсөн тэмдэгтээс өөр тэмдэгт байвал
    if (!/^[a-zA-Z0-9._-]+$/.test(localPart)) {
        // Энэ нь өгөгдсөн 6-р тестийн '!' тэмдэгтийг зөвшөөрөхгүйн тулд
        // localPart-д тавьсан хязгаарлалтыг чангатгаж байна.
        return false;
    }

    // 4. Домэйн хэсгийг (domainPart) шалгах

    // Дор хаяж нэг цэг агуулсан эсэхийг шалгах
    if (!domainPart.includes('.')) {
        return false;
    }

    // Төгсгөлийг шалгах: Цэг, дараа нь дор хаяж хоёр үсэгээр төгсөх (жишээ нь: .com, .cd)
    // RegExp: .[a-zA-Z]{2,}$ гэдэг нь цэг, дараа нь дор хаяж 2 үсэг, мөрний төгсгөл гэсэн утгатай.
    if (!/\.[a-zA-Z]{2,}$/.test(domainPart)) {
        return false;
    }
    
    // Бүх шалгалтыг давсан бол
    return true;
}

console.log(`1. a@b.cd: ${validate("a@b.cd")}`); // true
console.log(`2. hell.-w.rld@example.com: ${validate("hell.-w.rld@example.com")}`); // true
console.log(`3. .b@sh.rc: ${validate(".b@sh.rc")}`); // false
console.log(`4. example@test.c0: ${validate("example@test.c0")}`); // false
console.log(`5. freecodecamp.org: ${validate("freecodecamp.org")}`); // false
console.log(`6. develop.ment_user@c0D!NG.R.CKS: ${validate("develop.ment_user@c0D!NG.R.CKS")}`); // true (Шалтгаан: ! тэмдэгт нь Local Part-д биш, Domain Part-д байгаа бөгөөд Local Part-ийн хязгаарлалт Domain Part-д хамаарахгүй тул True)
console.log(`7. hello.@wo.rld: ${validate("hello.@wo.rld")}`); // false
console.log(`8. hello@world..com: ${validate("hello@world..com")}`); // false
console.log(`9. git@commit@push.io: ${validate("git@commit@push.io")}`); // false

// Нэмэлт шалгалт (6-р тест дээрх домэйны тэмдэгтийн тухай тодруулга)
// Хэрэв домэйнд ! зөвшөөрөгдөөгүй бол энэ нь False болно, гэхдээ өгөгдсөн шаардлага зөвхөн Local Part-д хязгаарлалт тавьсан тул True. 
// Хэрэв ! тэмдэгт Local Part-д байсан бол False байх байсан:
console.log(`10. deve!lop@example.com: ${validate("deve!lop@example.com")}`); // false