//Consigna del desafio complementario: Crea un algoritmo utilizando un ciclo

let numero = parseInt(prompt('Ingrese un numero'))

for(let i=0; i <= numero; i++){
    let anterior = numero-i;

    // El continue lo que va a hacer el es saltear el valor que obtenga anterior si es igual a numero
    if (anterior == numero){
        continue
    }

    //Si ingrese 10, que muestre por consola: 9,8,7,6,5,4,3,2,1,0
   
    console.log(`Los anteriores a ${numero} son: ${anterior} `)
}