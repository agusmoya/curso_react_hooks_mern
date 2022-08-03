const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: '6546465',
    lat: '41.3233',
    lng: '988.366',
  }
}

// console.log({persona: persona});
// si obj pasado y new obj en parametro se llaman igual, entonces ==
// console.log({persona});
console.log(persona);
// NO HACER! estamos apuntando a la ref al espacio de memoria del primer objeto
// const persona2 = persona
// ESTO SI: spread operator
const persona2 = {...persona}
