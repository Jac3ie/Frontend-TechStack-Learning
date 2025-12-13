// for loop: best when you know exactly how many times to loop
for (let i = 0; i <= 10; i++) {
    console.log(i);  // 0 → 10
}

// while loop: runs while the condition is true (condition checked BEFORE each run)
let j = 10;
while (j >= 1) {
    console.log(j);  // 10 → 1
    j--;
}

// do-while loop: runs the body ONCE first, then checks the condition
let k = 1;
do {
    console.log(k);  // 1 → 10
    k++;
} while (k <= 10);


// for...in loop: iterates over KEYS / PROPERTY NAMES (usually for objects)
/**
 * 	•	Python: very similar to a dict
	•	Java: kind of like a Map<String, Object>, but with special syntax and extra features
 */
let person = { // person is a plain JavaScript object.
    name: 'Haicheng',
    age: 21,
    country: 'Thailand'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    // name: Haicheng
    // age: 21
    // country: Thailand
}