
const resultado = document.getElementById("Resultados");

const precio = parseFloat(prompt("¿Cuál es el precio del producto?"));
const porcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

function calcular_descuento(precio, porcentaje) {
  const descuento = (precio * porcentaje) / 100;
  const precioConDescuento = precio - descuento;
  return precioConDescuento;
}

const precioConDescuento = calcular_descuento(precio, porcentaje);



resultado.textContent= `El costo total será de: ${precioConDescuento} Quetzales`;




