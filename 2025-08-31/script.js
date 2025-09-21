function generateHex(color) {
  let hexCode = "";
  const randomValue1 = Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase();
  const randomValue2 = Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase();
  switch (color) {
    case "red":
      hexCode = "FF" + randomValue1 + randomValue2;
      break;
    case "green":
      hexCode = randomValue1 + "FF" + randomValue2;
      break;
    case "blue":
      hexCode = randomValue1 + randomValue2 + "FF";
      break;
    default:
      return "Invalid color";
      break;
  }
  return hexCode;
}

console.log(generateHex("green"));