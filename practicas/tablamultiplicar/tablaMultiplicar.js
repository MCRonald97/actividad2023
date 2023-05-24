


const solicitar_numero= parseInt(prompt("Ingrese el número que desea multiplicar:"));

function imprimir_tabla_multiplicar(solicitar_numero) {
     for (let i = 0; i <= 10; i++) {
        let resultado = solicitar_numero * i;
   
        console.log(`${solicitar_numero} x ${i} = ${resultado}`);
        
     }
}

imprimir_tabla_multiplicar(solicitar_numero);

//TOME ENCUENTA QUE LA TABLA LA MANDA A LA CONSOLA NO ES POR ALERTA
//GRACIAS
