// primitive typses in javascript/typescript
export {}

let c: string = "hello";
let num: number = 23;
let bool: boolean = true;

let sym: symbol = Symbol("star");
let bigInt: bigint = 43n;

// Instance types
let regexp: RegExp = new RegExp("ab+c");

let arr: Array<string> = ["hii", "Hello"];

let set: Set<number> = new Set([1, 2, 3]);

// Custom classes

class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let q: Queue<number> = new Queue();

// Arrays and Tuples

let array: number[] = [1, 2, 3];

array = [1];
array = [1, 2, 3, 4];
array = ["hii"]; //Error: String not allowed 

let tuple: [number, number, number] = [0, 1, 2]; // fix number array
tuple = [1, 2]; // Error
tuple = [1, 2, 3];
tuple = ["Hii", "Hello", "World"]; // Error

// Object types and type alias
let t: {
  a: number;
  b: string[];
  c: Set<number>;
  d: (param: string) => void;
} = {
  a: 10,
  b: ["test"],
  c: new Set([1, 2]),
  d: () => {},
};

// or

type objTypeCustom = {
  a: number;
  b: string[];
  c: Set<number>;
  d: (param: string) => void;
};

let t65: objTypeCustom;

// functions
// storing function as type
let addNumbers: (a: number, b: number) => number;

addNumbers = (a: number, b: number): number => {
  return a + b;
};
// declaring functions
const log = (...args: string[]): void => {
  console.log(args);
};

// Structural typing
let point2D: { a: number; b: number } = {
  a: 10,
  b: 20,
};

let point3D: { a: number; b: number; c: number } = {
  a: 10,
  b: 20,
  c: 30,
};

point3D = point2D; // Error
point2D = point3D; // No Error as it contains all the fields

// Classes

class Animal {
  private name: String = "Hello"; // ts speciic private delration
  age: number = 10
  constructor() {}
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
class Queue2<T> {
  data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    return this.data.pop();
  }
}

const queue = new Queue2<number>();
queue.push(123);
queue.push("Hii"); // Error

console.log(queue.pop());
console.log(queue.pop());

// Any and unknown
let exmpleAny: any;
let exmpleUnkown: unknown;

exmpleAny.allow.anything.you.can.imagine(); // Which is not good
let str: string = exmpleAny; // Not good can assign number to string unsafe

// unknown is safer
exmpleUnkown.allow.nothing.you.can.imagine() // Error

// unknown is safer: as we have type check first before assignment
exmpleUnkown.trim() // Error
if(typeof exmpleUnkown === "string") {
  exmpleUnkown.trim()
}

let cs = "string";  // any type by default
console.log(cs)

// Universal Utilities
// string input will cause error so use unknown instead of any
function logFunc(value: any): void {
  console.log(value.toFix(2))
}

logFunc(2)
logFunc("Hii")


/*npx serve build can server react production build locally*/

// Type Assertions: Tell typescipt you know the exact type so dont check
function load() : unknown {
  return "Hii"
}

let hello = load()
console.log(hello.trim()) // Error
console.log((hello as string).trim()) // No Error

// Type casting

let number = "1337"
/* + before number converts string number to number called type coersion which works in typescript*/
console.log(+number === 1337)
console.log(+number)


// enviornment variables
console.log(process.env.USER)

// declare const process: any // deacring process variable so no error
// or
// npm i @types/node : this install types required for node variables
//for external package libraries will require type declarations
// npm i @types/express


//clearner way to write nested setTimeouts

const delay = (ms:  number) => new Promise(res => {
  setTimeout(res, ms)
})
async function main(){
  await delay(1000)
  console.log("1s")
  await delay(1000)
  console.log("2s")
}





