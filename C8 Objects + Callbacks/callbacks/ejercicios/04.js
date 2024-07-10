function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
    // Calcular la suma de todos los números en arrayOfNumbers
    let suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);

    // Llamar al callback cb y pasarle la suma como argumento
    cb(suma);
}

module.exports = sumarArray;
