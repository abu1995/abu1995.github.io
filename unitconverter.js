
function lengthConverter(value) {
    document.getElementById("outputMeters").innerHTML = value / 0.0022046;
  }
  
  function temperatureConverter(value) {
    valNum = parseFloat(value);
    document.getElementById("outputCelsius").innerHTML = (value-32) / 1.8;
  }
  
  function poundConverter(value) {
    valNum = parseFloat(value);
    document.getElementById("outputKg").innerHTML = value/2.02;
  }
  