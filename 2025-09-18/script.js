function costToFill(tankSize, fuelLevel, pricePerGallon) {

  return "$" + ((tankSize - fuelLevel) * pricePerGallon).toFixed(2);
}

console.log(costToFill(15, 10, 3.50))