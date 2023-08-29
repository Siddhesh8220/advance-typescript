// If your file doesn't contain at least 1 import or export statement,
// it is considered a global legacy script which is a common cause of the error.
// https://bobbyhadz.com/blog/typescript-duplicate-identifier
export {};

/* Implements keyword */

type Animal = {
  name: string;
  eat: () => string;
  sleep(): void;
};

interface IAnimal {
  name: string;
  eat: () => string;
  sleep(): void;
}

class Dog implements IAnimal {
  // or implements type Animal
  name: string = "Pochi";
  eat = (): string => "hii";
  sleep(): void {}
}

/* Definite type assertions*/

type Point = {
  x: number;
};

let p!: Point; // using type asserting directly here to tell typescript it will be already defined

function initialize() {
  p = {
    x: 2,
  };
}

console.log(p); // No error as typeassertion is already declared

/* User defined type guards */

type Square = {
    z: number
}

type Rectangle = {
    x: number
    y: number
}

type Shape = Square | Rectangle

function isSquare(s: Shape): s is Square { // User defined type guard: Similar to kind property
    return "z" in s; // If the condition is true return type is Square
}

function isRectangle(s: Shape): s is Square { // User defined type guard: Similar to kind property
    return "x" in s;
}

const area = (s: Shape) => {
    if(isSquare(s)){ 
        console.log(s.z*s.z)
    }
    else if(isRectangle(s)){
        console.log(s.x *s.y)
    }

}

/* Assertion function */

type Person = {
  name: string,
  address: string,
  dob?: Date
}

function loadPerson(): Person | null {
  return null
}

const person = loadPerson()

// assert function is used to ensure thar given condition is true if its not true it asserts error
function assert(condition: unknown, message: string): asserts condition { 
  if(!condition) throw new Error(message)
}

function assertDate(value: unknown): asserts value is Date{
  if(value instanceof Date) return
  else throw new Error("Value is not of date")
}

assert(person != null , "Yo condition is true I assert")
// If we dont write asserts condition as return type we get an error staing person possibly null
// So by including assets we are telling tpescript that it must must be true
console.log(person.name) // Error person is possibly null

assertDate(person.dob)
// dob is optional field so we will need assert as well
console.log(person.dob.toISOString())