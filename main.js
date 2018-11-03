const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
let newP = "";
planets.forEach( eachPlanet => {
  newP += `<p>${eachPlanet}</p> `
})

const planetEl = document.getElementById("planets")
planetEl.innerHTML = newP;

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let newPlanets = planets.map( alltheplanets => {
    let capPlanet = alltheplanets.charAt(0).toUpperCase() + alltheplanets.slice(1);
    return capPlanet
})

console.log(newPlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let filterdPlanets = planets.filter((plan) => plan.includes("e"));
console.log(filterdPlanets);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]


let newsent = words.reduce((accumulator, value) => {
  return `${accumulator} ${value}`;
});
console.log(newsent);