RGB хүртэл Hex 

CSS rgb(r, g, b) өнгөт мөр өгөгдсөн бол түүний 16-тын эквивалентыг буцаана уу. 

Өгөгдсөн оролтын зарим гаралтын жишээ энд байна: 

Оролтын гаралт 

"rgb(255, 255, 255)" "#ffffff" 
"rgb(1, 2, 3)" "#010203" 
Аливаа үсгийг жижиг үсгээр бичнэ үү. 
# ард нь зургаан тэмдэгт буцаана. 
Ямар ч богино утгыг бүү ашигла.

Tests
Passed:1. rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
Passed:2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
Passed:3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
Passed:4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".