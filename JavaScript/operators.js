// ===== Arithmetic Operators =====
let x = 100;
let y = 9;

let sum = x + y;
console.log(`x + y = ${sum}`);          // 100 + 9 = 109

let diff = x - y;
console.log(`x - y = ${diff}`);         // 100 - 9 = 91

let product = x * y;
console.log(`x * y = ${product}`);      // 100 * 9 = 900

let quotient = x / y;
console.log(`x / y = ${quotient}`);     // 100 / 9 = 11.111...

let remainder = x % y;
console.log(`x % y = ${remainder}`);    // remainder of 100 / 9

let power = x ** y;
console.log(`x ** y = ${power}`);       // 100 to the power of 9


// ===== Comparison Operators =====
let a = 10;
let b = 7;

console.log(`a == b  -> ${a == b}`);    // loose equality (compares value only)
console.log(`a != b  -> ${a != b}`);    // loose inequality

console.log(`a === b -> ${a === b}`);   // strict equality (compares value AND type)
console.log(`a !== b -> ${a !== b}`);   // strict inequality

console.log(`a > b   -> ${a > b}`);
console.log(`a >= b  -> ${a >= b}`);

console.log(`a < b   -> ${a < b}`);
console.log(`a <= b  -> ${a <= b}`);

// Number vs String
let n1 = 5;       // number
let s1 = "5";     // string

console.log(n1 == s1);   // true  (values considered equal after type conversion)
console.log(n1 === s1);  // false (number !== string)


// Boolean vs Number
let bool = true;   // boolean
let num = 1;       // number

console.log(bool == num);   // true  (true is converted to 1)
console.log(bool === num);  // false (boolean !== number)


// Empty String vs Zero
let emptyStr = "";  // string
let zero = 0;       // number

console.log(emptyStr == zero);   // true  ("" converts to 0)
console.log(emptyStr === zero);  // false (string !== number)


// Null vs Undefined
let n = null;
let u = undefined;

console.log(n == u);   // true  (loose equality treats them as equal)
console.log(n === u);  // false (null !== undefined)