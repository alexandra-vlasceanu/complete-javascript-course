'use strict';
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with the same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'New Output!';

      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

/*
// HOISTING AND TDZ //

// Hoisting with variables //
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting with functions //

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;


// Example //
console.log(numProducts);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products are deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// THE THIS KEY WORD //

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();


// REGULAR FUNCTIONS VS ARROW FUNCTIONS //
// var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1 //
    // const self = this;
    // const istMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1980 && self.year <= 1996);
    //   // console.log(this.year >= 1980 && this.year <= 1996);
    // };

    // Solution 2 //
    const istMillenial = () => {
      console.log(this);
      console.log(this.year >= 1980 && this.year <= 1996);
    };
    istMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

// Arguments keyword //
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);



// PRIMITIVES VS OBJECTS //

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/
// Primitive types //
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types //
const jessica = {
  fistName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects //
const jessica2 = {
  fistName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
