function calcular_promedio() {
    var suma = 0;
  
    // Solicitar al usuario ingresar 10 números
    for (var i = 0; i < 10; i++) {
      var numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
      suma += numero;
    }
  
    // Calcular el promedio
    var promedio = suma / 10;
  
    return promedio;
  }
  
  // Llamar a la función y mostrar el resultado
  var resultado = calcular_promedio();
  alert("El promedio de los números ingresados es: " + resultado);