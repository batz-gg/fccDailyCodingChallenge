P@ssw0rd Str3ngth! 
Нууц үгийн мөр өгөгдсөн бол нууц үгийн хүч чадал дээр үндэслэн "сул", "дунд", "хүчтэй" гэж буцаана. 
Нууц үгийг дараах дүрмийн дагуу үнэлнэ. 
Энэ нь дор хаяж 8 тэмдэгтийн урттай. 
Энэ нь том, жижиг үсэг хоёуланг нь агуулдаг. 
Энэ нь дор хаяж нэг тоог агуулдаг. 
Энэ нь энэ багцаас дор хаяж нэг тусгай тэмдэгт агуулдаг: !, @, #, $, %, ^, &, эсвэл *. 
Нууц үг нь хоёроос цөөн дүрмэнд нийцэж байвал "сул" гэж буцаана уу. 
Нууц үг нь дүрмийн 2 эсвэл 3-т нийцэж байвал "дунд" гэж буцаана уу. 
Нууц үг нь бүх 4 дүрмийг хангасан бол "хүчтэй" гэж буцаана.

Tests
Passed:1. checkStrength("123456") should return "weak".
Passed:2. checkStrength("pass!!!") should return "weak".
Passed:3. checkStrength("Qwerty") should return "weak".
Passed:4. checkStrength("PASSWORD") should return "weak".
Passed:5. checkStrength("PASSWORD!") should return "medium".
Passed:6. checkStrength("PassWord%^!") should return "medium".
Passed:7. checkStrength("qwerty12345") should return "medium".
Passed:8. checkStrength("PASSWORD!") should return "medium".
Passed:9. checkStrength("PASSWORD!") should return "medium".
Passed:10. checkStrength("S3cur3P@ssw0rd") should return "strong".
Passed:11. checkStrength("C0d3&Fun!") should return "strong".