// Simple function with parameters and return value
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

console.log(addNumbers(5, 10));


// --- Scope demo: global vs local (function) scope ---

let globalVar = "I'm a global variable";

function printBothVar() {
    let localVar = "I'm a local variable";  // function-scoped (only inside this function)
    
    console.log(globalVar);
    console.log(localVar);
}

printBothVar();

console.log(globalVar);

console.log(localVar);   // ❌ ReferenceError: localVar is not defined (outside its scope)