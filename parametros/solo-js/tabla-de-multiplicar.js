let nombre = 'Michael';
let nacimiento = 2002;
console.log('\n')

// Tarea: crear la funcion multiplcar y mandarla llamar
// Para ejecutar: node solo-js/tabla-de-multiplicar.js

function saludar(nombre, anio) {
  let edad = 2022 - anio;
  console.log(
    'Hola ' + nombre + ' naciste en el ' +  anio + ' y tienes ' + edad + ' anios'
  );
  console.log(edad + ' x 1 = ' + edad * 1)
  console.log(edad + ' x 2 =' + edad * 2)
  console.log(edad + ' x 3 = ' + edad * 3)
  console.log(edad + ' x 4 = ' + edad * 4)
  console.log(edad + ' x 5 = ' + edad * 5)
  // multiplicar(edad, 1)
  // multiplicar(.....)
  // multiplicar(.....)
  // multiplicar(.....)
  // multiplicar(.....)
}


// aqui saludo a michael
saludar(nombre, nacimiento)

saludar('Jorge', 1995)
saludar('Carlos', 2015)
saludar('David', 1993)
saludar('Victor', 1980)

