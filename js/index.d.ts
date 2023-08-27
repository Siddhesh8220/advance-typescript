declare let c: string;
declare let num: number;
declare let bool: boolean;
declare let sym: symbol;
declare let bigInt: bigint;
declare let regexp: RegExp;
declare let arr: Array<string>;
declare let set: Set<number>;
declare class Queue<T> {
    private data;
    push(item: T): void;
    pop(): T | undefined;
}
declare let q: Queue<number>;
declare let array: number[];
declare let tuple: [number, number, number];
declare let t: {
    a: number;
    b: string[];
    c: Set<number>;
    d: (param: string) => void;
};
type objTypeCustom = {
    a: number;
    b: string[];
    c: Set<number>;
    d: (param: string) => void;
};
declare let t65: objTypeCustom;
declare let addNumbers: (a: number, b: number) => number;
declare const log: (...args: string[]) => void;
declare let point2D: {
    a: number;
    b: number;
};
declare let point3D: {
    a: number;
    b: number;
    c: number;
};
declare class Animal {
    private name;
    constructor();
}
declare class Cat extends Animal {
    constructor();
}
declare class Queue2<T> {
    data: T[];
    push(item: T): void;
    pop(): T | undefined;
}
declare const queue: Queue2<number>;
declare let exmpleAny: any;
declare let exmpleUnkown: unknown;
declare let str: string;
declare let cs: string;
declare function logFunc(value: any): void;
declare function load(): unknown;
declare let hello: unknown;
declare let number: string;
declare const delay: (ms: number) => Promise<unknown>;
declare function main(): Promise<void>;
//# sourceMappingURL=index.d.ts.map