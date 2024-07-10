function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let filteredArray = [];

   
   for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].startsWith('a') || arrayOfStrings[i].startsWith('A')) {
         filteredArray.push(arrayOfStrings[i]);
      }
   }

   return filteredArray;
}

module.exports = filter;
