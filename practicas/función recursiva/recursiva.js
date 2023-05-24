function calcular_factorial(numero) {
    // Caso base: si el número es 0 o 1, el factorial es 1
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    // Caso recursivo: calcular el factorial utilizando recursividad
    return numero * calcular_factorial(numero - 1);
  }
  
  // Solicitar al usuario ingresar un número
  var numero = parseInt(prompt("Ingrese un número entero:"));
  
  // Calcular el factorial llamando a la función recursiva
  var factorial = calcular_factorial(numero);
  
  // Mostrar el resultado del factorial
  alert("El factorial de " + numero + " es: " + factorial);