Дэлгэцийн цаг 
Бүхэл тоо нь тухайн өдөр таны утсанд зарцуулсан цагийг илэрхийлдэг долоо хоногийн цагийг илэрхийлэх долоон бүхэл тооны оролтын массивыг өгвөл эдгээр хязгаарлалт дээр үндэслэн дэлгэцийн хэт их цаг хугацаа байгаа эсэхийг тодорхойлно уу: 
Хэрэв нэг өдөр 10 ба түүнээс дээш цаг байвал хэтэрхий их байна. 
Хэрэв дараалсан гурван өдрийн дундаж нь 8 цагаас их буюу тэнцүү байвал энэ нь хэтэрхий их байна. 
Хэрэв долоо хоногийн дундаж нь 6 цагаас их буюу тэнцүү байвал энэ нь хэтэрхий их байна.

Tests
Passed:1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.
Passed:2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.
Passed:3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.
Passed:4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.
Passed:5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.
Passed:6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.
Passed:7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.