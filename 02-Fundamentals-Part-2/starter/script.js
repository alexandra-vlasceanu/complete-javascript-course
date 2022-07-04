"use strict";
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// FUNCTIONS //
function logger() {
  console.log("My name is Alexandra");
}
// calling, running, invoking function //
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and juice with ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// FUNCTION DECLARATIONS VS. EXPRESSIONS //

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
let calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

calcAge2 = function (birthYear) {
  return 3;
};

let calcAge3 = calcAge2;

const age3 = calcAge2(1991);
console.log(age1, age2);


// ARROW FUNCTION //

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// We want to calculate how many years a person has left until retirement //

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));



// FUNCTIONS CALLING OTHER FUNCTIONS //

// We have a fruit processor that receives a number of apples and oranges and based on that
// produced and returned the juice to us

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and juice with ${oranges} oranges.`;
//   return juice;
// }

// Now we consider that the fruit processor can only make juice with smaller fruit pieces.
// And now the fruit processor needs another machine that first cuts the fruits that we give it into multiple
// smaller pieces

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and juice with ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));



// REVIEWING FUNCTIONS //

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} is already retired.🥳`);
    return -1;
  }

  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));



// CODIND CHALLENGE # 1 //

const calcAverage = (score1, score2, score3) => {
  const averageScore = (score1 + score2 + score3) / 3;
  console.log(averageScore);
  return averageScore;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No one wins 😁");
  }
};

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1);

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);



// INTRODUCTION TO ARRAYS //

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2004, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = "Bob", "Alice" - NOT

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise //

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2017];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);



// BASIC ARRAYS OPERATIONS //

// Add elements //
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); //Push method - add elem at the beginnin and return the length
console.log(friends);
console.log(newLength);

friends.unshift("John"); //Unshift method - add elem at the end and return the length
console.log(friends);

// // Remove elements //
friends.pop(); // Pop method - remove the last element and return the removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Shift method - remove the first element
console.log(friends);

console.log(friends.indexOf("Steven")); // Indexof method - locate the element
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

CODDING CHALLENGE #2 //

const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
};

console.log(calctip(100));

const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];

console.log(bills);
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

// Exemple //

const calctip0 = function (bill) {
  let tip
  tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
  return tip
};

const calctip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
};

const calctip2 = function (bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = (bill / 100) * 15;
  } else {
    tip = (bill / 100) * 20;
  }
  return tip;
};

const calctip3 = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return (bill / 100) * 15;
  } else {
    return (bill / 100) * 20;
  }
};

const calctip4 = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return (bill / 100) * 15;
  }

  return (bill / 100) * 20;
};

// INTRODUCTION TO OBJECTS ///

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// DOT VS. BRACKET NOTATION //
console.log(jonas.lastName);
console.log(jonas["lastName"]);
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong answer! Please choose between firstName, lastName, age, job and friends "
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// Challenge //
// Jonas has 3 friends, and his best friennd is called Michael//
console.log(
  `${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`
);

*/

// OBJECT METHODS //
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// console.log(jonas.calcAge());
// // console.log(jonas["calcAge"](1991));

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // Jonas is a 46 years old teacher, and he has a driver's license
// console.log(jonas.getSummary());

// // Challenge #3 //

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     console.log("Salut " + this.firstName);
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   //BMI

//   calcBMI: function () {
//     console.log("Salut " + this.firstName);
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.firstName} ${mark.lastName} BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName} (${john.BMI}`
//   );
// } else {
//   console.log(
//     `${john.firstName} ${john.lastName} BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName} (${mark.BMI}`
//   );
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// ITERATION: THE FOR LOOP //

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// LOOPING ARRAYS, BREAKING AND CONTINUING //
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);
// console.log(jonas[4]);
// console.log(jonas[5) - does not exist

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // Continue and Break
// console.log("--- Only Strings ---");

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--- Break with number ---");

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// LOOPING BACKWARDS AND LOOPS IN LOOPS //

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// // loops in loops

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---Starting exercise ${exercise} ---`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// THE WHILE LOOP ///

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// Challenge #4 //

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calctip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
// for (let i = 0; i < tips.length; i++) {
//   totals.push(bills[i] + tips[i]);
// }
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
