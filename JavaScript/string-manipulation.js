let str1 = 'Hello';
let str2 = 'World';

// All string methods below RETURN NEW STRINGS.
// They do NOT modify the original strings (strings are immutable in JS).

// --- String concatenation ---
let result1 = str1 + ' ' + str2;              // classic concatenation
let result2 = str1.concat(' ', str2);         // concat() does the same

console.log('Using +      :', result1);       // "Hello World"
console.log('Using concat :', result2);       // "Hello World"


// --- Substring methods ---
let str = 'Hello, World!';

// slice(start, end)
// - takes characters from start to end (end not included)
// - supports negative indices (from the end)
let sliced = str.slice(7, -1);                // from index 7 to 11/-1 → "World"

// substring(start, end)
// - also takes from start to end (end not included)
// - DOES NOT support negative indices
// - if start > end, it swaps them internally
let subStr = str.substring(7, 12);            // also "World"

console.log('slice    :', sliced);
console.log('substring:', subStr);