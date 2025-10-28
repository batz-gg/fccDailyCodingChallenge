# Навигатор

1994 оны 10-р сарын 28-нд Netscape Navigator гарч, сая сая хүмүүст анхны вэбийг судлахад тусалсан. Netscape Navigator дээр гүйцэтгэсэн хөтчийн олон тооны командуудыг өгвөл дараах дүрмийг ашиглан бүх тушаалыг гүйцэтгэсний дараа одоогийн байгаа хуудсаа буцаана уу: Та үргэлж "Нүүр хуудас" хуудаснаас эхэлдэг бөгөөд энэ нь тушаалын массивт орохгүй. 

Хүчин төгөлдөр тушаалууд нь: 

* "Visit Page": "Page" нь таны зочилж буй хуудасны нэр юм. Жишээлбэл, "Visit About" нь таныг "Тухай" хуудас руу аваачна. Та шинэ хуудсанд зочлохдоо өөрт байгаа бүх түүхийг хаяхаа мартуузай.
* "Буцах": Таны түүхийн өмнөх хуудас руу аваачна, эсвэл байхгүй бол одоогийн хуудсанд үлдэнэ.
* "Урагшаа": Түүхэнд таныг ирсэн хуудас руу хөтлөх эсвэл байхгүй бол одоогийн хуудсанд үлдэх болно. Жишээлбэл, ["Бидний тухай зочлох", "Буцах", "Урагшаа"] өгөгдсөн бол "Бидний тухай" гэж буцаана.

## Tests

* Passed:1. `navigate(["Visit About Us", "Back", "Forward"])` should return `"About Us"`.
* **Passed:**2. `navigate(["Forward"])` should return `"Home"`.
* **Passed:**3. `navigate(["Back"])` should return `"Home"`.
* **Passed:**4. `navigate(["Visit About Us", "Visit Gallery"])` should return `"Gallery"`.
* **Passed:**5. `navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])` should return `"Home"`.
* **Passed:**6. `navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"])` should return `"Contact"`.
* **Passed:**7. `navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"])` should return `"Visit Us"`.
