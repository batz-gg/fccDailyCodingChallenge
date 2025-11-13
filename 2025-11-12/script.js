function generateSignature(name, title, company) {
  let altName = "";
  const allUpperLetters = Array.from({ length: 26 }, (v, i) => 
    String.fromCharCode(i + 65) // 65 (A) + i
  );
  const aToI = allUpperLetters.slice(0, 9); 
  const jToR = allUpperLetters.slice(9, 18);
  const sToZ = allUpperLetters.slice(18);
  const firstUpperLetter = name.substring(0, 1).toUpperCase();
  if (aToI.includes(firstUpperLetter)) {
    altName = `>>${name}`;
  };
  if (jToR.includes(firstUpperLetter)) {
    altName = `--${name}`;
  };
  if (sToZ.includes(firstUpperLetter)) {
    altName = `::${name}`;
  };
  return `${altName}, ${title} at ${company}`;
}

console.log(generateSignature("windstorm", "Cloud Architect", "Atmospheronics"))

/*
function generateSignature1(name, title, company) {
  let altName = name; // Эхлээд altName-ийг name-ээр оноож, өөрчлөлтгүй үед ч зөв утгатай байлгах
  
  // Эхний үсгийг томруулаад, ASCII кодыг нь авна (жишээ: 'W' -> 87)
  const firstUpperCharCode = name.charCodeAt(0);
  
  // A-ийн ASCII код: 65 (A), I-ийн код: 73 (I), J-ийн код: 74, R-ийн код: 82, S-ийн код: 83, Z-ийн код: 90
  
  if (firstUpperCharCode >= 65 && firstUpperCharCode <= 73) { // A (65) - I (73)
    altName = `>>${name}`;
  } else if (firstUpperCharCode >= 74 && firstUpperCharCode <= 82) { // J (74) - R (82)
    altName = `--${name}`;
  } else if (firstUpperCharCode >= 83 && firstUpperCharCode <= 90) { // S (83) - Z (90)
    altName = `::${name}`;
  }
  
  return `${altName}, ${title} at ${company}`;
}

console.log(generateSignature1("windstorm", "Cloud Architect", "Atmospheronics"));

function generateSignature2(name, title, company) {
  let altName = name;
  const charCode = name.toUpperCase().charCodeAt(0); // Эхний үсгийн том код

  // Код нь A (65), J (74), S (83)-ийн утгуудтай харьцуулагдана.
  const codeA = 'A'.charCodeAt(0); // 65
  const codeJ = 'J'.charCodeAt(0); // 74
  const codeS = 'S'.charCodeAt(0); // 83
  
  if (charCode < codeJ) { // A-I
    altName = `>>${name}`;
  } else if (charCode < codeS) { // J-R
    altName = `--${name}`;
  } else { // S-Z
    altName = `::${name}`;
  }

  return `${altName}, ${title} at ${company}`;
}
*/