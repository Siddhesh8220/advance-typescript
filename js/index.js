"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let c = "hello";
let num = 23;
let bool = true;
let sym = Symbol("star");
let bigInt = 43n;
// Instance types
let regexp = new RegExp("ab+c");
let arr = ["hii", "Hello"];
let set = new Set([1, 2, 3]);
// Custom classes
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let q = new Queue();
// Arrays and Tuples
let array = [1, 2, 3];
array = [1];
array = [1, 2, 3, 4];
array = ["hii"]; //Error: String not allowed 
let tuple = [0, 1, 2]; // fix number array
tuple = [1, 2]; // Error
tuple = [1, 2, 3];
tuple = ["Hii", "Hello", "World"]; // Error
// Object types and type alias
let t = {
    a: 10,
    b: ["test"],
    c: new Set([1, 2]),
    d: () => { },
};
let t65;
// functions
// storing function as type
let addNumbers;
addNumbers = (a, b) => {
    return a + b;
};
// declaring functions
const log = (...args) => {
    console.log(args);
};
// Structural typing
let point2D = {
    a: 10,
    b: 20,
};
let point3D = {
    a: 10,
    b: 20,
    c: 30,
};
point3D = point2D; // Error
point2D = point3D; // No Error as it contains all the fields
// Classes
class Animal {
    constructor() {
        this.name = "Hello"; // ts speciic private delration
        this.age = 10;
    }
}
class Cat extends Animal {
    constructor() {
        super();
        console.log(this.age); // no error
        console.log(this.name); // error
    }
}
// based on js version sepcific in tsconfig code will get converted to corresponding version compatible js code
// Generics
class Queue2 {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
const queue = new Queue2();
queue.push(123);
queue.push("Hii"); // Error
console.log(queue.pop());
console.log(queue.pop());
// Any and unknown
let exmpleAny;
let exmpleUnkown;
exmpleAny.allow.anything.you.can.imagine(); // Which is not good
let str = exmpleAny; // Not good can assign number to string unsafe
// unknown is safer
exmpleUnkown.allow.nothing.you.can.imagine(); // Error
// unknown is safer: as we have type check first before assignment
exmpleUnkown.trim(); // Error
if (typeof exmpleUnkown === "string") {
    exmpleUnkown.trim();
}
let cs = "string"; // any type by default
console.log(cs);
// Universal Utilities
// string input will cause error so use unknown instead of any
function logFunc(value) {
    console.log(value.toFix(2));
}
logFunc(2);
logFunc("Hii");
/*npx serve build can server react production build locally*/
// Type Assertions: Tell typescipt you know the exact type so dont check
function load() {
    return "Hii";
}
let hello = load();
console.log(hello.trim()); // Error
console.log(hello.trim()); // No Error
// Type casting
let number = "1337";
/* + before number converts string number to number called type coersion which works in typescript*/
console.log(+number === 1337);
console.log(+number);
// enviornment variables
console.log(process.env.USER);
// declare const process: any // deacring process variable so no error
// or
// npm i @types/node : this install types required for node variables
//for external package libraries will require type declarations
// npm i @types/express
//clearner way to write nested setTimeouts
const delay = (ms) => new Promise(res => {
    setTimeout(res, ms);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield delay(1000);
        console.log("1s");
        yield delay(1000);
        console.log("2s");
    });
}
//# sourceMappingURL=index.js.map