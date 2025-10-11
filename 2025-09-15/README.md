Термостат тохируулагч 

Өрөөний одоогийн температур болон зорилтот температурыг харгалзан эдгээр хязгаарлалт дээр үндэслэн өрөөний температурыг хэрхэн тохируулахыг харуулсан мөрийг буцаана уу: 

Хэрэв одоогийн температур зорилтот хэмжээнээс доогуур байвал "дулаан" -ыг буцаана. 
Хэрэв одоогийн температур зорилтот хэмжээнээс дээш байвал "сэрүүн" гэж буцаана. 
Хэрэв одоогийн температур зорилтот түвшинд тэнцүү байвал "барь"-ыг буцаана уу.

Tests
Passed:1. adjustThermostat(68, 72) should return "heat".
Passed:2. adjustThermostat(75, 72) should return "cool".
Passed:3. adjustThermostat(72, 72) should return "hold".
Passed:4. adjustThermostat(-20.5, -10.1) should return "heat".
Passed:5. adjustThermostat(100, 99.9) should return "cool".
Passed:6. adjustThermostat(0.0, 0.0) should return "hold".