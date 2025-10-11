const adjustThermostat = (temp, target) => 
  temp < target ? "heat" : 
  temp > target ? "cool" : 
  "hold";

console.log(adjustThermostat(68, 72));