const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * 5/9;
  return +celcius.toFixed(1)
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = celcius*9/5 + 32;
  return +fahrenheit.toFixed(1)

};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
