
function saludar(n,edad,pais) {
  let caja = document.getElementById('caja-saludo')
  caja.innerHTML = 'Hola, ' + n + ' tienes ' + edad + ' años de edad ' + ' y eres de ' + pais
  caja.style.textAlign = 'center'
  if (pais === "mexico") {
    caja.style.backgroundColor = 'green'
    
  } 
  else {
    caja.style.backgroundColor = 'purple'
  } 
  
}
// saludar('Daniel');
// saludar('Carlos');
// saludar('Sergio')