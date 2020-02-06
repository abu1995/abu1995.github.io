
function lengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;
  }
  
  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }
  
  function poundConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKg").innerHTML = valNum/2.02;
  }
  