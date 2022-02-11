

/**
 * Esta es la funcion de ejemplo
 */
function obtenerCapital(inicialesBandera) {
  if (inicialesBandera === 'ARG') {
    console.log("La capital de Argentina es Buenos Aires")
  } 
  else if (inicialesBandera === 'GER') {
    console.log('La capital de Alemania es Berlin')
  }
  else if (inicialesBandera === 'FRA') {
    console.log('La capital de Francia es paris')
  }

}

/**
 * Tarea:
 * Deberás poner 3 filas de 3 banderas (nueve en total) 
 * Entre cada fila debera haber un espacio de 300px.
 * Cada que des click en una bandera,
 * se debera llamar a la funcion "obtenerCapitalMejorada()"
 * para obtener su capital.
 * 
 */
  function obtenerCapitalMejorada(inicialesBandera) {
  switch (inicialesBandera) {
    case "COL": 
      console.log('La capital de Colombia es Medellin')
      break;
    case "BRA":
      console.log('La capital de Brasil es Brasilia')
      break;
    case "CHI":
      console.log('La capital de Chile es Santiago de Chile')
      break;
    case "JAP":
      console.log('La capital de Japon es Tokio')
      break;
    case "MEX":
      console.log('La capital de Mexico es la CDMX')
      break;
    case "CHINA":
      console.log('La capital de China es Pekin')
      break;
    default: 
      console.log('Capital no encontrada')
  }

}
  /** 
   * PON AQUI TU CODIGO usando switch-case 
   * (toma como ejemplo la funcion que hicimos arriba)
   */
  
  // switch(aqui va algo) {}
