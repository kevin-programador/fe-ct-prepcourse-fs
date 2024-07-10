function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayDuplicado = [];

  // Recorremos el array original
  for (var i = 0; i < array.length; i++) {
    // Multiplicamos cada elemento por 2 y lo agregamos al nuevo array
    arrayDuplicado.push(array[i] * 2);
  }

  // Devolvemos el array con los elementos duplicados
  return arrayDuplicado;
}

module.exports = duplicarElementos;
