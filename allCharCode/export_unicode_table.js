// sudo npm install -g unicode-name
const fs = require('fs');
const unicodeNameModule = require('unicode-name');
const unicodeName = unicodeNameModule.unicodeName;

function getCategory(code) {
  if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
    return 'Control';
  } else if (code >= 0x30 && code <= 0x39) {
    return 'Digit';
  } else if (
    (code >= 0x41 && code <= 0x5A) ||
    (code >= 0x61 && code <= 0x7A)
  ) {
    return 'Latin Letter';
  } else if ((code >= 0x20 && code <= 0x2F) || (code >= 0x3A && code <= 0x40) || (code >= 0x5B && code <= 0x60) || (code >= 0x7B && code <= 0x7E)) {
    return 'Punctuation';
  } else if (code >= 0x0370 && code <= 0x03FF) {
    return 'Greek';
  } else if (code >= 0x0400 && code <= 0x04FF) {
    return 'Cyrillic';
  } else if (code >= 0x0600 && code <= 0x06FF) {
    return 'Arabic';
  } else if (code >= 0x0900 && code <= 0x097F) {
    return 'Devanagari';
  } else if (code >= 0x2000 && code <= 0x206F) {
    return 'General Punctuation';
  } else {
    return 'Other';
  }
}

let output = 'Index\tCode\tCharacter\tCategory\tDescription\n';

let index = 1;
for (let i = 0; i <= 0xFFFF; i++) {
  const char = String.fromCharCode(i);
  if (!char.trim()) continue; // skip non-printable roughly

  const code = 'U+' + i.toString(16).toUpperCase().padStart(4, '0');
  const category = getCategory(i);

  let description;
  try {
    description = unicodeName(char) || '<no name>';
  } catch {
    description = '<no name>';
  }

  output += `${index}\t${code}\t${char}\t${category}\t${description}\n`;
  index++;
}

fs.writeFile('unicode_table.txt', output, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File "unicode_table.txt" has been saved.');
  }
});

