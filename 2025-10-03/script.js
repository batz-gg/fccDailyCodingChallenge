function checkStrength(password) {
  const score = 
    (password.length >= 8) + 
    (/[a-z]/.test(password) && /[A-Z]/.test(password)) + 
    (/[0-9]/.test(password)) + 
    (/[!@#$%^&*]/.test(password));
  return score === 4 ? "strong" 
       : score >= 2 ? "medium" // 2 эсвэл 3 бол
       : "weak"; 
}

console.log(checkStrength("aB1"))