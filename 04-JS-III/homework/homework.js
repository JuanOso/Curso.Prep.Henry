// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array [array.length - 1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  var nuevoArray = [];
   for(var i = 0; i < array.length; i++) {
     nuevoArray[i] = array[i] + 1;
   }

   return nuevoArray;

 }


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift (elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true
    }
  }
  return false
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  var sumar = 0;
  for (let i = 0; i < numeros.length; i++) {
  sumar = sumar + numeros[i]
}
return sumar
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  var sumar = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
  sumar = sumar + resultadosTest[i]
}
return sumar / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  return Math.max(...numeros)
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo

  if (arguments.length < 1 ){
    return 0
  }
   let multiplicacion = 1
    for (var i=0; i < arguments.length; i++) {
      multiplicacion = multiplicacion * arguments[i]
    }
    return multiplicacion
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
var  mayor19 = []
for (var i=0; i < arreglo.length; i++) {
  if (arreglo[i] > 19 ) {
    mayor19.push(arreglo[i])
    console.log(arreglo[i])
  }
}
return mayor19.length
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana'
  }
  else if (numeroDeDia > 1 && numeroDeDia < 7 ) {
    return 'Es dia Laboral'
  }

}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  var newstring = n.toString()
    if (newstring.charAt(0) == 9 ) {
      return true
    }
    return false

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  var duplicados =[arreglo[0]];
 console.log(duplicados)
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i+1] === arreglo[i]) {
      duplicados.push(arreglo[i])
    }

  }
 if (duplicados.length === arreglo.length) {
      return true
    }

 return false

}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  var months = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'Enero'  || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      months.push (array[i])
    }
  }
    if (months.length < 3 ) {
        return 'No se encontraron los meses pedidos'
    }
    else if (months.length === 3 ) {
      return months
    }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  var numbers = [];
  for (var i = 0; array.length > i; i++) {
    if (array[i] > 100) {
      numbers.push(array[i])
    }
  }
  return numbers;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  var numbers = [numero+2];
  for (i = 0; i < 9; i++) {
    numbers.push(numbers[i]+2)
    if (numbers[i] === i){
        break;

      }
  }
 if (numbers.length < 10 ) {
   return 'Se interrumpió la ejecución'
 }
else return numbers
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
