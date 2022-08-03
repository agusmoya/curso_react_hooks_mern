// ARREGLOS JS: símboolo []
// Sólo crearlos así cuando quiero pasarle posiciones por defecto
// const arreglo = new Array(10);
// arreglo[99]=12
const arreglo = [1, 2, 3, 4];

// arreglo.push(0);
// para instertar algo en el arreglo se recomienda utilizar op. spread y no el push()
// ya que en el segundo caso estamos modif el obj ppal. Ejemplo:
// let arreglo2 = arreglo
// arreglo2.push(25)
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map(function (nro) {
  // TODA func en js si no tiene un return, devuekve undefined
  return nro * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);