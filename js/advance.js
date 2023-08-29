"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor() {
        // or implements type Animal
        this.name = "Pochi";
        this.eat = () => "hii";
    }
    sleep() { }
}
let p; // using type asserting directly here to tell typescript it will be already defined
function initialize() {
    p = {
        x: 2,
    };
}
console.log(p); // No error as typeassertion is already declared
function isSquare(s) {
    return "z" in s; // If the condition is true return type is Square
}
function isRectangle(s) {
    return "x" in s;
}
const area = (s) => {
    if (isSquare(s)) {
        console.log(s.z * s.z);
    }
    else if (isRectangle(s)) {
        console.log(s.x * s.y);
    }
};
function loadPerson() {
    return null;
}
const person = loadPerson();
// assert function is used to ensure thar given condition is true if its not true it asserts error
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
function assertDate(value) {
    if (value instanceof Date)
        return;
    else
        throw new Error("Value is not of date");
}
assert(person != null, "Yo condition is true I assert");
// If we dont write asserts condition as return type we get an error staing person possibly null
// So by including assets we are telling tpescript that it must must be true
console.log(person.name); // Error person is possibly null
assertDate(person.dob);
// dob is optional field so we will need assert as well
console.log(person.dob.toISOString());
//# sourceMappingURL=advance.js.map