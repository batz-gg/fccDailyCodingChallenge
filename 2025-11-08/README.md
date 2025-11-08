# Тэмдэгтийн хязгаар

Энэ сорилтод танд мөр өгсөн бөгөөд энэ нь нийгмийн сүлжээний нийтлэлд тохирох эсэхийг тодорхойлох шаардлагатай. Өгөгдсөн дүрмийн дагуу дараах мөрүүдийг буцаана уу.

* 40 тэмдэгтийн хязгаарт багтсан бол "богино бичлэг".
* 40-өөс дээш тэмдэгттэй, 80 тэмдэгтийн хязгаарт багтах бол "урт бичлэг".
* Аль нэг хязгаарт багтахгүй хэт урт байвал "хүчингүй нийтлэл".

## Tests

* **Passed:**1. `canPost("Hello world")` should return `"short post"`.
* **Passed:**2. `canPost("This is a longer message but still under eighty characters.")` should return `"long post"`.
* **Passed:**3. `canPost("This message is too long to fit into either of the character limits for a social media post.")` should return `"invalid post"`.
