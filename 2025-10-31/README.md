# SpOoKy\~CaSe

Хувьсагчийн нэрийг илэрхийлсэн стринг өгөгдсөн бол дараах хязгаарлалтуудыг ашиглан үүнийг "аймшигтай тохиолдол" болгон хөрвүүлнэ. Бүх доогуур зураас (\_), зураасыг (-) налуу (\~) зураасаар солино. Мөрний эхний үсгийг томоор бичиж, түүнээс хойшхи бусад үсэг бүрийг тоолохдоо тэмдэгтийг үл тоомсорло. Жишээ нь hello\_world гэж өгвөл HeLlO\~wOrLd гэж буцаана.

## Tests

* Passed:1. `spookify("hello_world")` should return `"HeLlO~wOrLd"`.
* **Passed:**2. `spookify("Spooky_Case")` should return `"SpOoKy~CaSe"`.
* **Passed:**3. `spookify("TRICK-or-TREAT")` should return `"TrIcK~oR~tReAt"`.
* **Passed:**4. `spookify("c_a-n_d-y_-b-o_w_l")` should return `"C~a~N~d~Y~~b~O~w~L"`.
* **Passed:**5. `spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts")` should return `"ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"`.
