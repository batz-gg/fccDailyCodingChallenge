function adjustThermostat(currentF, targetC) {
  const celsiusToFahrenheit = (targetC * 1.8) + 32;
  if (currentF < celsiusToFahrenheit) {
    let heatF = celsiusToFahrenheit - currentF;
    return `Heat: ${heatF.toFixed(1)} degrees Fahrenheit`;
  } else if (currentF > celsiusToFahrenheit) {
    let coolF = currentF - celsiusToFahrenheit;
    // console.log(coolF);
    return `Cool: ${coolF.toFixed(1)} degrees Fahrenheit`;
  } else {
    return "Hold";
  }
}

console.log(adjustThermostat(70, 25))
console.log(adjustThermostat(72, 18))