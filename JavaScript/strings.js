let str1 = "Haicheng";
let str2 = 'Wang';
let str3 = `6580244`;   // backticks → template literal (can do interpolation and multi-line)

// Template literals in JS are similar to:
// Python:  f"{str1} {str2}"
// Java:    str1 + " " + str2

// --- Substitution / interpolation examples (JS) ---
console.log(`Full name: ${str1} ${str2}`);      // insert variables directly
console.log(`1 + 2 = ${1 + 2}`);                // expressions also work inside ${...}

// --- String length & indexing ---
console.log(`str2 length is: ${str2.length}`);  // "Wang" -> 4
console.log(`First character of str2: ${str2[0]}`);  // "W"

// Strings in JS are IMMUTABLE: this assignment does nothing
str2[0] = 'H';
console.log(`After trying to change str2[0]: ${str2}`);  // still "Wang"