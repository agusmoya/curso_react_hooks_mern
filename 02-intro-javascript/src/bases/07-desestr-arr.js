// 07 - Desestructuracion de arrays
const personajes = ["Goku", "Vegueta", "Trunks"];

// console.log(personajes[0]);

// si presionamos F2 con el cursor sobre variable, cambia su nombre y las referencias a sií mismo
// const [goku] = personajes;
const [, vegueta] = personajes;

// console.log(vegueta);

const getArreglo = () => ["ABC", 123];

const [letras, numeros] = getArreglo();

// console.log(letras, numeros);

const usoEsstate = (valor) => { //useEstate
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
// const arr = usoEsstate("Goku"); //useEstate
// arr[1]()

// Tarea: paralelismo al useState()
// 1. El primer valor del arr se llmará nombre
// 2. El segundo setNombre
const [nombre, setNombre] = usoEsstate('Goku')

console.log(nombre);
setNombre()
