function ciclofor(limite){
  for (let i = 1; i <= limite; i = i + 1 ) {
    console.log(i);
    // if ( i === limite) {
    // }
    // else {
    //   console.log("-");
    // }
    if (i !== limite) {
      console.log("-")
    }
  }
  console.log("ciclo terminado");
  
}
ciclofor(10)
ciclofor(500)

/**
 * Ejemplo
 * if (tarea === 'si') {
 *    console.log("no puedes salir")
 * } else {
 *    console.log("puedes salir")
 * }
 * 
 * if (tarea !== 'si') {
 *   console.log("puedes salir")
 * } else {
 *  console.log("no puedes salir")
 * }
 * 
 * 
 */