// 08 - Crea data. Import / Export
import heroes, { owners } from "../data/heroes";

// console.log(heroes);

// const getHeroesById = (id) => {
//     return heroes.find((heroe)=> heroe.id == id)
// }
// ==
export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroesById(3));

export const getHeroesByOwner = (owner) =>
heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));

// console.log(owners);