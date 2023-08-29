import { truncate } from "fs";
export {}

// Lexical this

class SomeClass {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }
  getAgeFunc() {
    return this.age;
  }
  getAgeArrowFunc = () => {
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

const readOnlyExmple: { a: string; readonly b: string } = {
  a: "Hello",
  b: "Hii",
};

readOnlyExmple.a = "Hello Modified";
readOnlyExmple.b = "Hii modifed"; // Readonly error

class Animal {
  public name: string = "buddy";
  public readonly age: number = 19;
}

const dog = new Animal();
dog.name = "pochi";
dog.age = 10; // Readonly error

/* Union Types */

function unionExmple(value: unknown): void {
  if (typeof value === "string") console.log("This is a string");
  else if (typeof value === "number") console.log("Tihs is a number");
  else throw new Error("Invalid input");
}
unionExmple(false); // No compiler time error

// the above function will throw an runtime exception as we are using unknown
// we can use union type like string | number to show compile time error

function unionGoodExmple(value: string | number): void {
  if (typeof value === "string") console.log("This is a string");
  else if (typeof value === "number") console.log("Tihs is a number");
}

unionGoodExmple(false); // Compile time error

/* Literal types */

type DirectionLiteral = "North" | "South" | 9; // Only this values will be allowed

let direction: DirectionLiteral;

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

type Pet = Dog | Cat;

// In animalsound function we cannot use typeof to determine instance of class
// so we have to use custom type called pet with instanceof operator provided by typescript
function animalSoud(animal: Pet) {
  if (animal instanceof Dog) {
    animal.bark();
  }
  if (animal instanceof Cat) {
    animal.meow();
  }
}

// In case of objects we cannot use instance of operator
// So we can use in operator to check if particular key exists in the object to differentiate

type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Rectangle | Square;

function area(shape: Shape) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    return shape.width * shape.height;
  }
}

// Bu this is still not good approach so instead we can use discriminated union

type SquareShape = {
  kind: "square";
  size: number;
};

type RectangleShape = {
  kind: "rectangle";
  width: number;
  height: number;
};

type InputShape = RectangleShape | SquareShape;

function areaOfShape(shape: InputShape) {
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

function decorate(value: string | null | undefined) {
  if (value == null) {
    // handling both null and undefined values in single if
    return null;
  }
  return `--${value.trim()}--`;
}

console.log(decorate("Hello")); // --Hello--
console.log(decorate(undefined)); // undefined
console.log(decorate(null)); // null

/* Intersection Types:  Combines two type to create new type */

type Person = {
  name: string;
};

type Email = {
  email: string;
  name: string;
};

type ContactDetails = Person & Email;

function contact(details: ContactDetails) {
  console.log(details.name);
  console.log(details.email);
}

/* Optional modifier */

type vehicle = {
  name: string;
  type: string;
  licenceNo?: string; // Optional value string | undefined
};

class Flower {
  name?: string; // optional value
  color: string; // not optional
}

/* Interfaces are similar to types but they have different syntax */

interface IPoint2D {
  x: number;
  y: number;
}

type TPoint2D = {
  x: number;
  y: number;
};

interface IPoint3D extends IPoint2D {
  z: number;
}

type TPoint3D = TPoint2D & {
  z: number;
};

// Why intefaces?
// 1. Syntax is familiar for new developers
// 2. Interfce declaration merging

interface X {
  x: number;
}

interface X {
  y: number;
}
// Two interfaces are merged so object expects both x and y
const t: X = {
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

let exmNever: never = 123; // We cant assign anything other than never type

// we can use this behavouir to our advantage
// e.g.

type Car = {
  kind: "car";
};

type Motorcycle = {
  kind: "motorcycle";
};

type Vehicle = Car | Motorcycle;

const vehicleInfo = (v: Vehicle) => {
  const _ensureAllCasesHandled: never = v; // Error as all cases are not handled

  if (v.kind === "car") {
    return console.log("car");
  } else if (v.kind === "motorcycle") {
    return console.log("motorcycle");
  }
  const _ensureAllCasesHandledAfterHandling: never = v; // no error as we handled both car and motorcycle cases
  return _ensureAllCasesHandledAfterHandling;
  //We can use this variable to ensure all fields are handled during development
};

/* Not null assertion operator */

type g = {
  x: number;
  y: number;
};

let obj: g;

const initailize = () => {
  obj = {
    x: 2,
    y: 3,
  };
};

initailize()
console.log(obj.x, obj.y);
// Here typescipt dont know if obj is initilized or not hence it is throwing an error
// we can easily fix this issuse is not null assertion operator
console.log(obj!.x, obj!.y)
