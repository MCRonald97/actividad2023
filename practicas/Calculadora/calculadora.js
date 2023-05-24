function mostrar_menu() {

    let solicitar_opciones = prompt("¿Qué tipo de ejercicio quieres realizar? Sumar, Restar,Multiplicar,Dividir");



    solicitar_opciones = solicitar_opciones.toLowerCase();

    switch (solicitar_opciones) {
        case "sumar":
            perform_sumar();
            break;

            // caso "restar"
        case "restar":
            perform_restar();
            break;

            // caso "multiplicar"
        case "multiplicar":
            perform_multiplicar();
            break;

            // caso "dividir"
        case "dividir":
            perform_division();
            break;

            // caso "NO VALIDO"
        default:
            alert("no se ingreso ejercicio valido");
            break;
    }
}


// funcion para el caso "sumar"

function perform_sumar() {
    let dato1 = prompt("Ingresa el primer número");
    let dato2 = prompt("Ingresa el segundo número");

    const resultado_suma = parseFloat(dato1) + parseFloat(dato2);
    alert("El resultado de la suma es: " + resultado_suma);
}

// funcion para el caso "restar"
function perform_restar() {
    let dato1 = prompt("Ingresa el primer número");
    let dato2 = prompt("Ingresa el segundo número");

    const resultado_resta = parseFloat(dato1) - parseFloat(dato2);
    alert("El resultado de la resta es: " + resultado_resta);
}

// funcion para el caso "multiplicar"

function perform_multiplicar() {
    let dato1 = prompt("Ingresa el primer número");
    let dato2 = prompt("Ingresa el segundo número");

    const resultado_multiplicacion = parseFloat(dato1) * parseFloat(dato2);
    alert("El resultado de la multiplicacion es: " + resultado_multiplicacion);
}

// funcion para el caso "dividir"

function perform_division() {
    let dato1 = prompt("Ingresa el primer número");
    let dato2 = prompt("Ingresa el segundo número");

    const resultado_division = parseFloat(dato1) / parseFloat(dato2);
    alert("El resultado de la division es: " + resultado_division);
}

mostrar_menu();


