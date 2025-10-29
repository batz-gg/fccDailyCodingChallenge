# Ц-шуудан эрэмбэлэгч

1971 оны 10-р сарын 29-нд бидний одоог хүртэл ашигладаг username@domain форматыг нэвтрүүлсэн анхны имэйл илгээгдсэн. Одоо олон тэрбум имэйл хаягууд байдаг. Энэ сорилтод танд имэйл хаягуудын жагсаалтыг өгсөн бөгөөд тэдгээрийг эхлээд домэйн нэрээр (@-ийн дараа), хэрэглэгчийн нэрээр (@-ийн өмнөх хэсэг) цагаан толгойн дарааллаар эрэмбэлэх шаардлагатай. Эрэмбэлэх нь том жижиг үсгээр ялгах ёстой. Хэрэв нэгээс олон имэйл ижил домэйнтэй бол тэдгээрийг хэрэглэгчийн нэрээр нь ангилна уу. Эрэмбэлэгдсэн хаягуудын массивыг буцаана уу. Буцаагдсан хаягууд нь анхны тохиолдолоо хадгалах ёстой. Жишээлбэл, ["jill@mail.com", "john@example.com", "jane@example.com"] өгөгдсөн бол ["jane@example.com", "john@example.com", "jill@mail.com"] буцаана.

## Tests

* **Passed:**1. `sort(["jill@mail.com", "john@example.com", "jane@example.com"])` should return `["jane@example.com", "john@example.com", "jill@mail.com"]`.
* **Passed:**2. `sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"])` should return `["bob@mail.com", "carol@mail.com", "alice@zoo.com"]`.
* **Passed:**3. `sort(["user@z.com", "user@y.com", "user@x.com"])` should return `["user@x.com", "user@y.com", "user@z.com"]`.
* **Passed:**4. `sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"])` should return `["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"]`.
* **Passed:**5. `sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"])` should return `["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"]`.
