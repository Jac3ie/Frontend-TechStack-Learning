// Simple if/else example
let age = 18;

if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are not yet an adult.');
}

// switch example
let day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;              // stop here if day === 1

    case 2:
        console.log('Tuesday');
        break;              // stop here if day === 2

    default:
        console.log('Invalid day');
        // Technically we DON'T need break here because it's already the last case,
        // but adding 'break;' is harmless and sometimes done for consistency.
        break;
}