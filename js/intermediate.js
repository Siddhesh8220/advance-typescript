"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Lexical this
class SomeClass {
    constructor(age) {
        this.getAgeArrowFunc = () => {
            return this.age;
        };
        this.age = age;
    }
    getAgeFunc() {
        return this.age;
    }
}
const someInstance = new SomeClass(10);
console.log(someInstance.getAgeFunc()); // Success
console.log(someInstance.getAgeArrowFunc()); // Success
const funct1 = someInstance.getAgeFunc;
const funct2 = someInstance.getAgeArrowFunc;
console.log(funct2()); // No error
console.log(funct1()); // runtime error due to this behave differently in noraml func compaed to arraow func: lexical scoping
/*
Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping".
This makes arrow functions to be a great choice in some scenarios but a very bad one in others
*/
/* readonly modifier: ts gives compile time readonly keyword to allow only read operations on the object fields */
const readOnlyExmple = {
    a: "Hello",
    b: "Hii",
};
readOnlyExmple.a = "Hello Modified";
readOnlyExmple.b = "Hii modifed"; // Readonly error
class Animal {
    constructor() {
        this.name = "buddy";
        this.age = 19;
    }
}
const dog = new Animal();
dog.name = "pochi";
dog.age = 10; // Readonly error
/* Union Types */
function unionExmple(value) {
    if (typeof value === "string")
        console.log("This is a string");
    else if (typeof value === "number")
        console.log("Tihs is a number");
    else
        throw new Error("Invalid input");
}
unionExmple(false); // No compiler time error
// the above function will throw an runtime exception as we are using unknown
// we can use union type like string | number to show compile time error
function unionGoodExmple(value) {
    if (typeof value === "string")
        console.log("This is a string");
    else if (typeof value === "number")
        console.log("Tihs is a number");
}
unionGoodExmple(false); // Compile time error
let direction;
direction = "North";
direction = "north"; // Error as value does not match with allow valued in literal types
direction = "South";
direction = 9;
/* Type narrowing */
class Dog {
    bark() {
        console.log("barked");
    }
}
class Cat {
    meow() {
        console.log("meowed");
    }
}
// In animalsound function we cannot use typeof to determine instance of class
// so we have to use custom type called pet with instanceof operator provided by typescript
function animalSoud(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    if (animal instanceof Cat) {
        animal.meow();
    }
}
function area(shape) {
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    if ("width" in shape) {
        return shape.width * shape.height;
    }
}
function areaOfShape(shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}
// Now this is much better approcach as we have common fields to check on the condition
// typescript strict : true will chekc for undefined return (filtering array of strings but nothing found) , initialization issues, type issues
// so recommended to be true
/* Handling null and undefined*/
console.log(null == null); //true
console.log(undefined == undefined); // true
console.log(undefined == null); // Mind blowingly true
console.log(0 == null); // false
console.log("" == null); //false
console.log(false == null); //false
// By obsering above pattern we can conclude that we can use null == undefined check to handle both undefined and null  values
// Example
function decorate(value) {
    if (value == null) {
        // handling both null and undefined values in single if
        return null;
    }
    return `--${value.trim()}--`;
}
console.log(decorate("Hello")); // --Hello--
console.log(decorate(undefined)); // undefined
console.log(decorate(null)); // null
function contact(details) {
    console.log(details.name);
    console.log(details.email);
}
class Flower {
}
// Two interfaces are merged so object expects both x and y
const t = {
    x: 3,
    y: 2,
};
// Types are superior to interfaces
/* Never type: When function never return it has never type only works with arrow functions */
function neverReturn() {
    throw new Error("I will never rerturn");
}
const neverR1 = () => {
    throw new Error("I will never rerturn");
};
const neverR = () => {
    while (true) {
        console.log("I will never return");
    }
};
let exmNever = 123; // We cant assign anything other than never type
const vehicleInfo = (v) => {
    const _ensureAllCasesHandled = v; // Error as all cases are not handled
    if (v.kind === "car") {
        return console.log("car");
    }
    else if (v.kind === "motorcycle") {
        return console.log("motorcycle");
    }
    const _ensureAllCasesHandledAfterHandling = v; // no error as we handled both car and motorcycle cases
    return _ensureAllCasesHandledAfterHandling;
    //We can use this variable to ensure all fields are handled during development
};
let obj;
const initailize = () => {
    obj = {
        x: 2,
        y: 3,
    };
};
initailize();
console.log(obj.x, obj.y);
// Here typescipt dont know if obj is initilized or not hence it is throwing an error
// we can easily fix this issuse is not null assertion operator
console.log(obj.x, obj.y);
//# sourceMappingURL=intermediate.js.map