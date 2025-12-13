// Number: for both integers and floating-point values
let num = 713;
console.log(typeof num);          // "number"

// BigInt: for very large integers (add `n` at the end)
// NOTE: BigInt cannot be mixed directly with normal numbers in math ops.
let bigInt = 97687687565998876887989987656687687687678787687687687687687687687687687687n;
console.log(typeof bigInt);       // "bigint"

// String: sequence of characters, can use '', "" or ``
let name = 'Haicheng Wang';
console.log(typeof name);         // "string"

// Boolean: true / false
let isTrue = true;
console.log(typeof isTrue);       // "boolean"

// null: intentional “empty” value
// Historical quirk: typeof null === "object"
let nullType = null;
console.log(typeof nullType);     // "object"  (this is a well-known bug in JS)

// undefined: variable declared but not assigned yet
let age;
console.log(typeof age);          // "undefined"

// Object: collection of key–value pairs
let person = {
    name: 'Haicheng',
    age: 30
};
console.log(typeof person);       // "object"

// Symbol: unique identifier, often used as object property keys
let id = Symbol('id');
console.log(typeof id);           // "symbol"