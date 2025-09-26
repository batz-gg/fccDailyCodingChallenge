IPv4 Баталгаажуулагч
Тэмдэгт мөр өгөгджээ. Энэ нь хүчинтэй IPv4 хаяг мөн эсэхийг тодорхойлно. 
Хүчинтэй IPv4 хаяг нь цэгээр тусгаарлагдсан дөрвөн бүхэл тооноос бүрдэнэ.
Тоо бүр нь удаах нөхцлийг хангах ёстой:
 - 0 ба 255 оруулан түүний хооронд байна.
 - Өмнөө тэггүй (жнь: 0 бол зөвшөөрнө, 01 бол үгүй.)
 - Зөвхөн тоон тэмдэгтүүдийг зөвшөөрнө.

Tests
Passed:1. isValidIPv4("192.168.1.1") should return true.
Passed:2. isValidIPv4("0.0.0.0") should return true.
Passed:3. isValidIPv4("255.01.50.111") should return false.
Passed:4. isValidIPv4("255.00.50.111") should return false.
Passed:5. isValidIPv4("256.101.50.115") should return false.
Passed:6. isValidIPv4("192.168.101.") should return false.
Passed:7. isValidIPv4("192168145213") should return false.