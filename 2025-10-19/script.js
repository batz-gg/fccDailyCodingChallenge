function extractAttributes(element) {
  // 1. Зөвхөн нээх таг доторх аттрибутуудыг олно.
  // Нээх тагийн загвар: <tag_name [attributes]>
  const openingTagMatch = element.match(/<[^>]+>/);

  if (!openingTagMatch) {
    return []; // Хэрэв таг олохгүй бол хоосон array буцаана.
  }

  const openingTag = openingTagMatch[0];

  // 2. Аттрибутуудыг олох загвар (g flag-тай)
  // (\w+): Аттрибутын нэр (Capture Group 1)
  // \s*=\s*: Тэнцүү тэмдэгт
  // "([^"]*)": Давхар хаалт доторх утга (Capture Group 2)
  const attributeRegex = /(\w+)\s*=\s*"([^"]*)"/g;

  // 3. Бүх аттрибут, утгыг олно.
  const allMatches = [...openingTag.matchAll(attributeRegex)];
  console.log(allMatches)
  // 4. Үр дүнг хүссэн формат руу хөрвүүлнэ.
  if (allMatches.length === 0) {
    // Хэрэв таг дотор аттрибут байхгүй бол (Жишээ: <p>...</p>)
    return [];
  }

  const extractedAttributes = allMatches.map(match => {
    const attributeName = match[1];
    const attributeValue = match[2];
    // Хүссэн формат: "attribute, value"
    return `${attributeName}, ${attributeValue}`;
  });

  return extractedAttributes;
}

// Тестүүд:
console.log(`1. <span class="red"></span> -> ${extractAttributes('<span class="red"></span>')}`);
console.log(`2. <meta charset="UTF-8" /> -> ${extractAttributes('<meta charset="UTF-8" />')}`);
console.log(`3. <p>Lorem ipsum dolor sit amet</p> -> ${extractAttributes("<p>Lorem ipsum dolor sit amet</p>")}`);
console.log(`4. <input name="email" type="email" required="true" /> -> ${extractAttributes('<input name="email" type="email" required="true" />')}`);
console.log(`5. <button id="submit" class="btn btn-primary">Submit</button> -> ${extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>')}`);