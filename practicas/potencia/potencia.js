function calcular_potencia(base, exponente) {
    // Caso base: si el exponente es 0, el resultado es 1
    if (exponente === 0) {
      return 1;
    }
    
    // Caso recursivo: calcula la potencia utilizando recursividad
    return base * calcular_potencia(base, exponente - 1);
  }
  
  // Ejemplo de uso
  var base = parseInt(prompt("Ingrese la base:"));
  var exponente = parseInt(prompt("Ingrese el exponente:"));
  
  var resultado = calcular_potencia(base, exponente);
  alert("El resultado es: " + resultado);