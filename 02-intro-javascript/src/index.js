// 08 - Crea data. Import / Export
import { heroes } from "./data/heroes";

console.log(heroes);

// const getHeroesById = (id) => {
//     return heroes.find((heroe)=> heroe.id == id)
// }
// ==
const getHeroesById = (id) => heroes.find((heroe) => heroe.id == id);

console.log(getHeroesById(3));

const getHeroesByOwner = (owner) =>
heroes.filter((heroe) => heroe.owner == owner);

console.log(getHeroesByOwner('DC'));

// SEGUIR SECCIÓN 21