HTML атрибут олборлогч 
Хүчинтэй HTML элементийн мөр өгөгдсөн бол дараах шалгуурыг ашиглан элементийн шинж чанаруудыг буцаана уу: 
Танд зөвхөн нэг элемент өгөх болно. 
Шинж чанарууд нь attribute="value" гэсэн форматтай байна. 
["attribute1, value1", "attribute2, value2"] гэсэн форматаар таслалаар тусгаарлагдсан шинж чанар, утга тус бүртэй мөрийн массивыг буцаана. 
Шинж чанаруудыг өгөгдсөн дарааллаар нь буцаана. 
Хэрэв шинж чанар олдохгүй бол хоосон массивыг буцаана уу.

Tests
Passed:1. extractAttributes('<span class="red"></span>') should return ["class, red"].
Passed:2. extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"].
Passed:3. extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return [].
Passed:4. extractAttributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"].
Passed:5. extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"].