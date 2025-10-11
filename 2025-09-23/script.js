function isMirror(str1, str2) {
    const cleanString = (str) => {
        return str.replace(/[^a-zA-Z]/g, '');
    };
    const cleanedStr1 = cleanString(str1);
    const cleanedStr2 = cleanString(str2);

    const reversedCleanedStr1 = [...cleanedStr1].reverse().join(''); 

    return reversedCleanedStr1 === cleanedStr2;
}

console.log(isMirror("Hello World", "dlroW olleH"))