"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SomeClass {
    constructor(age) {
        this.age = age;
    }
    getAgeFunc() {
        return this.age;
    }
    getAgeArrowFunc() {
        return this.age;
    }
}
const someInstance = new SomeClass(10);
console.log(someInstance.getAgeFunc()); // Success
console.log(someInstance.getAgeArrowFunc()); // Success
const funct1 = someInstance.getAgeFunc;
const funct2 = someInstance.getAgeArrowFunc;
console.log(funct2()); // No error
console.log(funct1()); // Error due to this behave differently in noraml func compaed to arraow func: lexical scoping
/*
Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".
This makes arrow functions to be a great choice in some scenarios but a very bad one in others
*/
//# sourceMappingURL=intermediate.js.map