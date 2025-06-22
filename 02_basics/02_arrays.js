const marvel_heroes = ["ironman", "spiderman", "hulk"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes) // [ 'ironman', 'spiderman', 'hulk', [ 'superman', 'batman', 'flash' ] ]

console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes);

console.log(all_heroes); // [ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]

// better to use spread operators in js to handle this type of situation

const all_heroes_using_spread = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes_using_spread); //  [ 'ironman', 'spiderman', 'hulk', 'superman', 'batman', 'flash' ]

const newArray = [1,2,3, [4, 5], 6, [7, 6, [4, 5]]]
const faltArray = newArray.flat(Infinity)
console.log(faltArray);

console.log(Array.isArray("Anjani"));
console.log(Array.from("Anjani"));
console.log(Array.from({name: "Anjani"})); // will not be able to convert this and return []

let n1 = 100
let n2 = 101
let n3 = 102

console.log(Array.of(n1, n2, n3));



