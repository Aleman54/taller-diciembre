function HacerOperacion() {
  let primerNumero = Number(document.getElementById("numero1").value) 
  let segundoNumero =Number(document.getElementById ("numero2").value)
  let listaOperaciones =document.getElementById ("lista")
  let tipoOperacion = listaOperaciones.options[listaOperaciones.selectedIndex].value
  let resultado= 7
  ////////////////////////////////////
  let calificacion=7
  if (calificacion ===10 || calificacion === 9) {
    console.log("Excelente")
  } 
  else  if (calificacion >=6 && calificacion <=8) {
   console.log("aprobado")
  } 
  else  if (calificacion >10 || calificacion <0) {
     console.log("Calificacion Invalida")
  }
  else {
    console.log ("reprobado")
  } 
} 
function calculaCalificacion (){
  ///////////////////////////////
    let calificacion = -14;
    if (calificacion === 10 || calificacion === 9) {
      console.log("Excelente");
    } else if (calificacion >= 6 && calificacion <= 8) {
      console.log("aprobado");
    } else if (calificacion > 10 || calificacion < 0) {
      console.log("Calificacion Invalida");
    } else {
      console.log("reprobado");
    }

}
/////////////////////////////
function 
