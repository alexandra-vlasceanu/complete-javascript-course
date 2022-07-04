"use strict";
// FUNCTIONS //
// function describeCountry(country, population, capitalCity) {
//   const countryPopCap = `${country} has ${population} million people and its
//   capital city is ${capitalCity}`;
//   return countryPopCap;
// }

// const describeSwitzerland = describeCountry("Switzerland", 8, "Bern");
// console.log(describeSwitzerland);

// const describeRomania = describeCountry("Romania", 19, "Bucharest");
// console.log(describeRomania);

// const describeGermany = describeCountry("Germany", 80, "Berlin");
// console.log(describeGermany);

// FUNCTION DECLARATIONS VS. EXPRESSIONS

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const percSwitzerland1 = percentageOfWorld1(8);
// const percGermany1 = percentageOfWorld1(80);
// const percRomania1 = percentageOfWorld1(19);
// console.log(percSwitzerland1, percGermany1, percRomania1);

// const percSwitzerland2 = percentageOfWorld2(8);

// Arrow function //

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const percSwitzerland3 = percentageOfWorld3(8);
// const percGermany3 = percentageOfWorld3(80);
// const percRomania3 = percentageOfWorld3(19);
// console.log(percSwitzerland3, percGermany3, percRomania3);

// FUNCTIONS CALLING OTHER FUNCTIONS //

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// function describePopulation(country, population) {
//   const countryPercentage = percentageOfWorld1(population);

//   return `${country} has ${population} million people,
//   which is about ${countryPercentage} % of the world`;
// }

// console.log(describePopulation("Switzerland", 8));
// console.log(describePopulation("Germany", 80));
// console.log(describePopulation("Romania", 19));

// Arrays - Introduction //

/*
const population = [8, 20, 19, 80];
console.log(population.length === 4);

const percentage1 = percentageOfWorld1(population[0]);
const percentage2 = percentageOfWorld1(population[1]);
const percentage3 = percentageOfWorld1(population[2]);
const percentage4 = percentageOfWorld1(population[3]);
console.log(percentage1, percentage2, percentage3, percentage4);

const percentages = [
  percentageOfWorld1(population[0]),
  percentage2,
  percentage3,
  percentage4,
];
console.log(percentages);
*/

// Basic Array Operations (Methods) //

// const neighbours = ["Germany", "Italy", "France", "Austria"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }

// console.log(neighbours.indexOf("Italy"));
// const indexOfItaly = neighbours.indexOf("Italy");
// neighbours[indexOfItaly] = "Republic of Italy";
// console.log(neighbours);

// INTRODUCTION TO OBJECTS

// const myCountry = {
//   country: "Switzerland",
//   capital: "Bern",
//   language: "german",
//   population: 8,
//   neighbours: ["Germany", "Italy", "France", "Lichtenstein", "Austria"],
// };
// console.log(myCountry);
// console.log(
//   `${myCountry.country} has ${myCountry.population} million  ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry["population"]);

// const myCountry = {
//   country: "Switzerland",
//   capital: "Bern",
//   language: "german",
//   population: 8,
//   neighbours: ["Germany", "Italy", "France", "Lichtenstein", "Austria"],
//   //isIsland: null,

//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million  ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//     );
//   },
//   checkIsIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     //this.isIsland = this.neighbours.length === 0;
//     return this.isIsland;
//   },
// };

// myCountry.describe();
// console.log(myCountry.checkIsIsland());
// myCountry.isIsland;
// myCountry.country;

// ITERATION: THE FOR LOOP //

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

// lOOPING ARRAYS, CONTINUE AND BREAK //

// const population = [8, 20, 19, 80];
// console.log(population.length === 4);

// const percentage1 = percentageOfWorld1(population[0]);
// const percentage2 = percentageOfWorld1(population[1]);
// const percentage3 = percentageOfWorld1(population[2]);
// const percentage4 = percentageOfWorld1(population[3]);
// console.log(percentage1, percentage2, percentage3, percentage4);

// const percentages = [
//   percentageOfWorld1(population[0]),
//   percentage2,
//   percentage3,
//   percentage4,
// ];
// console.log(percentages);

// const population = [8, 20, 19, 80];
// const percentage2 = [];

// for (let i = 0; i < population.length; i++) {
//   percentage2.push(population[1] / 7900) * 100;
// }
// console.log(percentage2);

// const populations = [8, 20, 19, 80];
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }
// console.log(percentages2);

// LOOPING BACKWARDS AND LOOPS IN LOOPS //

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   //console.log(listOfNeighbours[i]);
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log("i=" + i + " " + "j=" + j);
//     console.log(`Neighbbour: ${listOfNeighbours[i][j]}`);
//   }
// }
