function generateSlug(str) {
  let lower = str.toLowerCase().trim();
  const notLettersNumbers = /[^a-z0-9\s]/g;
  const space = /\s+/g;
  if (notLettersNumbers.test(lower)){
    lower = lower.replace(notLettersNumbers, "");
  }
  if (space.test(lower)){
    lower = lower.replace(space, "%20")
  }
  return lower
}

console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D asd "))

/*
function generateSlugOptimized(str) {
  // Эхлээд жижигрүүлж, хоёр талын зайг арилгана.
  return str.toLowerCase()
    .trim()
    // Үсэг, тоо, зай биш бүх тэмдэгтийг устгана.
    .replace(/[^a-z0-9\s]/g, "")
    // Нэгээс дээш болон ганц зайг "%20" тэмдэгтээр орлуулна.
    .replace(/\s+/g, "%20");
}

console.log(generateSlugOptimized("  ?H^3-1*1]0! W[0%R#1]D asd "));
// Үр дүн: h310%20w0r1d%20asd
*/