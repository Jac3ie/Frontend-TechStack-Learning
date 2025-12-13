// Create an array of fruits (index starts from 0)
let fruits = ['apple', 'pear', 'banana'];

// Access by index
console.log('First fruit:', fruits[0]);   // "apple"

// Add an item to the end of the array
fruits.push('grape');
console.log('After push:', fruits);       // ['apple', 'pear', 'banana', 'grape']

// Remove the last item from the array
let removed = fruits.pop();
console.log('Removed:', removed);         // 'grape'
console.log('After pop:', fruits);        // ['apple', 'pear', 'banana']