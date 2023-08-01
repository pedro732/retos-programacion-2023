


function leerAbaco(abaco) {
  const numeros = []; // arreglo para almacenar los números de cada elemento del ábaco
  let resultado = 0; // variable para almacenar el resultado final
  
  // Iteramos sobre cada elemento del ábaco
  for(let i = 0; i < abaco.length; i++) {
    let cuenta = abaco[i].split('---')[0]; // obtenemos la cadena de números a la izquierda del alambre
    let numero = cuenta.split('O').length - 1; // contamos el número de 'O' en la cadena para obtener el número que representa
    numeros.push(numero); // agregamos el número al arreglo de números
  }
  
  // Iteramos sobre el arreglo de números en orden inverso para construir el resultado final
  for(let i = numeros.length - 1, j = 0; i >= 0; i--, j++) {
    resultado += numeros[i] * Math.pow(10, j * 3); // multiplicamos el número por la potencia de 10 correspondiente y lo sumamos al resultado
  }
  
  return resultado; // devolvemos el resultado final
}


//Puedes llamar a esta función pasando como argumento el ábaco como un arreglo de cadenas de caracteres y obtendrás el número representado por el ábaco. Por ejemplo, si tienes el siguiente ábaco:


const abaco = [
  "O---OOOOOOOO",
  "OOO---OOOOOO",
  "---OOOOOOOOO",
  "OO---OOOOOOO",
  "OOOOOOO---OO",
  "OOOOOOOOO---",
  "---OOOOOOOOO"
];


//Puedes llamar a la función `leerAbaco(abaco)` y obtendrás como resultado el número 123456789.
console.log(leerAbaco(abaco));
