function wiseSpeak(sentence) {
    // 1. Төгсгөлийн цэг, асуултын тэмдэг зэргийг хадгалах
    let endingPunctuation = sentence.slice(-1);
    
    // 2. Цэг таслалыг хасаад, үгүүдийг ялгах
    let cleanedSentence = sentence.slice(0, -1); 
    let words = cleanedSentence.split(" ");
    
    // Дүрэмд заасан туслах үйл үгс
    const targetVerbs = ["have", "must", "are", "will", "can"];
    
    let targetVerbIndex = -1; 

    // 3. Эхний таарсан туслах үйл үгийг олох
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (targetVerbs.includes(word)) {
            targetVerbIndex = i;
            break; 
        }
    }

    // 4. Хэрэв туслах үйл үг олдвол өгүүлбэрийг хувиргах
    if (targetVerbIndex !== -1) {
        // 'afterVerb': Туслах үйл үгийн дараах үгс (Жишээ: "speak wisely")
        let afterVerb = words.slice(targetVerbIndex + 1); 
        
        // 'beforeAndVerb': Туслах үйл үг болон түүнээс өмнөх үгс (Жишээ: "You must")
        let beforeAndVerb = words.slice(0, targetVerbIndex + 1); 
        
        // 5. Үгсийг нэгтгэх
        // Дараалал: afterVerb + ", " + beforeAndVerb (жижиг үсгээр) + endingPunctuation
        
        // 5.1. Өмнөх хэсгийг жижиг үсгээр, таслалтайгаар нэгтгэх
        let beforePart = ", " + beforeAndVerb.join(" ").toLowerCase();
        
        // 5.2. Дараах хэсгийг нэгтгэх
        let afterPart = afterVerb.join(" "); 
        
        // 5.3. Эцсийн өгүүлбэр
        let newSentence = afterPart + beforePart + endingPunctuation;

        // 6. Эхний үсгийг том болгох
        if (newSentence.length > 0) {
            return newSentence.charAt(0).toUpperCase() + newSentence.slice(1);
        }
        return newSentence;

    } else {
        // Хэрэв туслах үйл үг олохгүй бол өөрчлөлтгүйгээр буцаана.
        return sentence;
    }
}