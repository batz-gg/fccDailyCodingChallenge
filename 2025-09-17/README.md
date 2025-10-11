Слаг генератор 
Мөр өгөгдсөн бол дараах хязгаарлалтуудыг ашиглан мөрийн URL-д ээлтэй хувилбарыг буцаана уу: 
Бүх үсэг жижиг үсгээр байх ёстой. 
Үсэг, тоо, хоосон зай биш бүх тэмдэгтийг хасах хэрэгтэй. 
Бүх хоосон зайг URL кодлогдсон орон зайн код %20-оор солих ёстой. 
Дараалсан хоосон зайг нэг % 20-оор солих хэрэгтэй. 
Буцаасан мөр нь эхний болон хойно байх ёсгүй %20.


Tests
Passed:1. generateSlug("helloWorld") should return "helloworld".
Passed:2. generateSlug("hello world!") should return "hello%20world".
Passed:3. generateSlug(" hello-world ") should return "helloworld".
Passed:4. generateSlug("hello  world") should return "hello%20world".
Passed:5. generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".