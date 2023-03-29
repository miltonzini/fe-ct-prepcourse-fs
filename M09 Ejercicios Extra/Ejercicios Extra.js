/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var claves = Object.keys(objeto); 
   var arreglodeArreglos = [];
   for (let i = 0; i < claves.length; i++) {
       var array = [claves[i], objeto[claves[i]]];
       arreglodeArreglos.push(array);
   }
   return arreglodeArreglos;
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var array = string.split('');
   var objeto = {};
   var caracteresSinRepetir = [];
   for (let i = 0; i < array.length; i++) {
      if (!caracteresSinRepetir.includes(array[i])) caracteresSinRepetir.push(array[i]);
   }
   var caracteresOrdenados = caracteresSinRepetir.sort();
   for (let i = 0; i < caracteresOrdenados.length; i++) {
      var suma = 0;
      for (let j = 0; j < array.length; j++) {
         if (array[j] === caracteresOrdenados[i]) suma++;
      };
      objeto[caracteresOrdenados[i]] = suma;
   };
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código
   var array = string.split('');
   var mayusculas = array.filter(letra => (letra.toUpperCase() === letra));
   var minusculas = array.filter(letra => (letra.toUpperCase() !== letra));
   
   var nuevoArray = mayusculas.join('') + minusculas.join('');
   return nuevoArray;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayPalabras = frase.split(' ');
   var nuevoArray = [];
   for (let i = 0; i < arrayPalabras.length; i++) {
      var palabra = arrayPalabras[i].split('');
      var arrayCaracteresInvertidos = [];
      for (let j = palabra.length - 1; j >= 0; j--) {
         arrayCaracteresInvertidos.push(palabra[j]);
      }
      var palabraInvertida = arrayCaracteresInvertidos.join('');
      nuevoArray.push(palabraInvertida);
   }
   var stringFinal = nuevoArray.join(' ');
   return stringFinal;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var arrayNumero = numero.toString().split('');
   var arrayInverso = [];

   for (var i = arrayNumero.length - 1; i >= 0; i--) {
      arrayInverso.push(arrayNumero[i]);
   }
   var numeroInvertido = arrayInverso.join('');
   var resultado;
   
   if (numero == numeroInvertido) {
      resultado = "Es capicua";
   } else {
      resultado = "No es capicua";
   }
   console.log(resultado);
   return resultado;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
