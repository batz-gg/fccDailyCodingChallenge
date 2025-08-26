function factorial(n) {
  let _factorial = 1;
  if (n === 0) {
    console.log(_factorial)
    return 1
  } else {
    for (let i = 0; i < n; i++) {
      // console.log(i)
      _factorial = _factorial * (i+1)
    }
  }
  console.log(_factorial)
  return _factorial;
}

factorial(0);
factorial(5);
factorial(20);