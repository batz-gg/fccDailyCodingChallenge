function complementaryDNA(strand) {
  const newStrnd = [...strand];
  for (let i=0; i<=newStrnd.length-1; i++) {
    console.log(newStrnd[i]);
    if (newStrnd[i] == "A") {
      newStrnd[i] = "T";
    } else if (newStrnd[i] == "T") {
      newStrnd[i] = "A";
    } else if (newStrnd[i] == "C") {
      newStrnd[i] = "G";
    } else if (newStrnd[i] == "G") {
      newStrnd[i] = "C";
    } else {}
  }
  return newStrnd.join("");
}

console.log(complementaryDNA("ACGT"));

/*
function complementaryDNA(strand) {
  // ДНХ-ийн хослолыг харуулсан дүрслэл
  const complementMap = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

  // 'split', 'map', 'join' функцүүдийг ашиглан нэг мөрөнд бичих
  return strand
    .split('') // Мөрийг тэмдэгтүүдийн массив болгох
    .map(base => complementMap[base]) // Дүрслэлээс хослолыг олох
    .join(''); // Массивыг эргүүлэн мөр болгох
}

function complementaryDNA(strand) {
  // ДНХ-ийн сууриудын дүрслэлийг ашиглан replace хийх
  return strand.replace(/./g, match => {
    switch (match) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'C': return 'G';
      case 'G': return 'C';
      default: return match; // Зөвхөн хэрэгцээтэй үед л ашиглах
    }
  });
}
*/