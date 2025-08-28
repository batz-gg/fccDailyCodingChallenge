function spaceJam(s) {
  // Эхлээд бүх зайг устгаад, шинэ хувьсагчид хадгална.
  const noSpaceStr = s.replaceAll(" ", "");

  let result = [];
  // Устгасан тэмдэгт мөрийн тэмдэгт бүрийг давтана.
  for (let i = 0; i < noSpaceStr.length; i++) {
    let char = noSpaceStr[i];

    // Үсэг мөн эсэхийг шалгаад, том үсэг болгоно.
    if (char.match(/[a-zA-Z]/)) {
      char = char.toUpperCase();
    }

    result.push(char);

    // Сүүлийн тэмдэгт биш бол хоёр зайг массивдаа нэмнэ.
    if (i < noSpaceStr.length - 1) {
      result.push("  ");
    }
  }

  // Эцэст нь массивыг тэмдэгт мөр болгон нэгтгэнэ.
  return result.join("");
}

console.log(spaceJam("Hello World?!")); 