// FUNCIONES EN JS
// No se recomienda definirlas asíya que podemos
// pisarla facilmente. Ej: saludar = 30
// function saludar(nombre) {
//   return `Hola, ${nombre}`
// }

const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => `Hola, ${nombre}`

console.log(saludar('Goku'));
console.log(saludar2('Vegueta'));

// notese los paréntesis para retornar más de una línea
const getUser = () => ({
  uid: 'ABC123',
  user_name: 'Lalo Lambda',
})

console.log(getUser());

// Tarea:
// 1. Transfomrar a una funcion flecha
// 2. Tiene que retornar un obj implicito
// function getUsuarioActivo(nombre) {
//   return {
//     uid: 'UYT852',
//     username: nombre
//   }
// }

const usuarioActivo = (nombre) => ({
  uid: 'UYT852',
  username: nombre
})
console.log(usuarioActivo());