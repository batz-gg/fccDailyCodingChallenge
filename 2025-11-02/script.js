function infected(days) {
  let infectedComputers = 1;
  for (let i=1; i<=days; i++) {
    infectedComputers *= 2;
    if (i%3 == 0) {
      infectedComputers -= Math.ceil(infectedComputers * 0.2);
    }
  }
  return infectedComputers;
}

console.log(infected(3));