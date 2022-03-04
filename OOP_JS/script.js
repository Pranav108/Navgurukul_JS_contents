//Created By Pranav✨
'use strict';

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    // Don't do this
    // this.calcAge1 = function () {
    //     console.log(2027 - this.birthYear);
    // }
}

// 1. new {} is created
// 2. function is called , this = {}
// 3. {} is linked to prototype
// 4. {} is returned from function

const jonas = new Person('jonas', 1990);
const sinch = new Person('sinchan', 1992);
Person.prototype.calcAge2 = function () {
    console.log(2037 - this.birthYear);
}
Person.prototype.species = 'homo sepiens';


// jonas.calcAge();
// console.log(jonas instanceof Person);
// console.log(Person.prototype === jonas.__proto__);
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person)); // prototype -> isPrototypeOfCreatedObject
// console.dir(Person.prototype.constructor); 
// console.log(Person == Person.prototype.constructor);
// console.log(jonas.hasOwnProperty('calcAge1'));
// console.log(jonas.hasOwnProperty('calcAge2'));
// console.log(jonas.species);

const arr = [10, 20, 20, 30, 30, 32, 32, 34, 10]; //new Array() === []
// console.log(Array.prototype === arr.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}
// console.log(arr);
// console.log(arr.unique());

/*
//Coding Challenge

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀

*/