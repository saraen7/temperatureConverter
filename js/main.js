//Convert celsius to fahrenheit for reference:
//(c * 1.8) + 32 = f

// When the user clicks the button, run the Convert function
document.getElementById('submit').onclick = convert;

function convert() {

  // Get the value stored in #celsius
  var celsius = document.getElementById('celsius').value;
  celsius = parseFloat(celsius);

  // Get the value stored in #fahrenheit - not needed for one-way conversion
  //var fahrenheit = document.getElementById('fahrenheit').value;
  //fahrenheit = parseFloat(fahrenheit);

  // TODO: if celsius is answered, calculate fahrenheit temperature
//  if(celsius.toBoolean()){ - if coming to fix this later, Boolean doesn't work since celsius is not a function
    var fahrenheit = ((celsius * 1.8) + 32);
  //}

  // TODO: if fahrenheit is answered, calculate celsius temperature - not needed for one-way conversion
//  if(fahrenheit.toBoolean()){ - Boolean will need to changed for a different expression since fahrenheit is not a function
//    var celsius = ((fahrenheit - 32) * .5556);
//  }

  // Print `fahrenheit` string on the page
  document.getElementById('fahrenheit').value = fahrenheit;

  // Print `celsius` string on the page - not needed for one-way conversion
  //document.getElementById('celsius').value = celsius;

}
