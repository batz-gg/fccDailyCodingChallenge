HTML шошго тайлагч 
HTML кодын мөр өгөгдсөн бол хаягуудыг устгаад энгийн текстийн агуулгыг буцаана. 
Оролтын мөр нь зөвхөн хүчинтэй HTML агуулна. 
HTML шошгуудыг үүрлэсэн байж болно. 
Шошго болон бусад шинж чанаруудыг устгана уу. 
Жишээлбэл, '<a href="#">Энд дарна уу</a>' нь "Энд дарна уу" гэж буцах ёстой.

Tests
Passed:1. stripTags('<a href="#">Click here</a>') should return "Click here".
Passed:2. stripTags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
Passed:3. stripTags('<img src="cat.jpg" alt="Cat">') should return an empty string ("").
Passed:4. stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') should return sectionsection.