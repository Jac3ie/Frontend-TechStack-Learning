// In js we use let to define a variable:
let name = 'Haicheng Wang';

// manipulate the variables value:
let count = 0;
count++;
console.log(count);

// const usage
const PI = 3.14;
// PI = 3; // have TypeError this line 
console.log(PI);

// In modern JS, `var` is mostly legacy. Prefer `let` / `const`.
// `var` is function-scoped (NOT block-scoped) and can be redeclared.

var cond = 0;          // global / outer variable

if (true) {
    // This does NOT create a new inner variable.
    // It redeclares and reassigns the SAME `cond` in this scope.
    var cond = 1;
    console.log(cond); // 1
}

// Since `var` is not block-scoped, the value was overwritten.
console.log(cond);     // 1