function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let acum = ""
  for(var i= texto.length - 1; i >= 0; i--){
    acum = acum + texto[i]
  }
  return acum;
}

module.exports = invertirTexto;
