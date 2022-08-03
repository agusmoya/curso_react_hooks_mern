// TEMPLATE STRINGS
const nombre = "Agustin";
const apellido = "Moya";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(saludoNombre) {
  return "Hola " + saludoNombre;
}

console.log(`Texto: ${getSaludo(nombreCompleto)}`);

