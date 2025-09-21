function burnCandles(candles, leftoversNeeded) {
  let total_burned_candles = candles;
  let burned_stubs = candles;
  while (burned_stubs >= leftoversNeeded) {
    let new_candles = Math.floor(burned_stubs / leftoversNeeded);
    total_burned_candles += new_candles;
    burned_stubs = (burned_stubs % leftoversNeeded) + new_candles;
  }
  console.log(total_burned_candles);
  return total_burned_candles;
}

burnCandles(2345, 3);