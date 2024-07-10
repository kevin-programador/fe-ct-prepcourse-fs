function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let mayuscula =[]

  for(let i = 0; i< array.length; i ++){
    mayuscula.push(array[i].toUpperCase())
  }
  return mayuscula;
}

module.exports = convertirStringAMayusculas;
