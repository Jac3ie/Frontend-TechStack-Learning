function divide(numerator, denominator){
    if (denominator === 0) {
        throw new Error('Error: The denominator cannot be 0!');
    }

    return numerator / denominator;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch(e){
    console.error(e.message);
} finally {
    console.log('Finally block will always being executed!');
}