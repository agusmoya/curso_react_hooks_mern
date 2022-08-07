// import heroes from "./data/heroes";
import { getHeroesById } from "./bases/08-import-export-heroes";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log('2 segundos despues');
//     const heroe = getHeroesById(2);
//     // console.log(heroe);
//     // resolve(heroe);
//     reject('No se pudo encontrar el héroe')
//   }, 2000);
// });

// promise.then((heroe) => {
//   console.log('HEROE: ', heroe);
// })
// .catch((err) => {
//     console.warn(err);
// })

const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      if (heroe) {
        resolve(heroe);
      }
      reject("No se pudo encontrar el héroe");
      //   reject("No se pudo encontrar el héroe");
    }, 2000);
  });
};

getHeroesByIdAsync(50)
// == .then(console.log)
  .then((heroe) => {
    console.log("HEROE: ", heroe);
  })
// == .catch(console.warn)
  .catch((err) => {
    console.warn(err);
  })
  .finally(() => {
    console.log("En el finally");
  });
