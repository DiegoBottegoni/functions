function calculateFactorial(n, accumulator = 1) {
if (n === 0) {
    return accumulator;
}
return calculateFactorial(n - 1, n * accumulator);
}

function power(base, exponent) {
if (exponent === 0) {
    return 1;
}
return base * power(base, exponent - 1);
}

// TESTING //

console.log(calculateFactorial(0)); // 0!= 1
console.log(calculateFactorial(5)); // 5! = 5*4*3*2*1 = 120
console.log(calculateFactorial(10)); // 10! = 10*9*8*7*6*5*4*3*2*1 = 3628800

console.log(power(2, 0)); // x^0 = 1
console.log(power(2, 3)); // 2^3 = 2*2*2 = 8
console.log(power(5, 2)); // 5^2 = 5*5 = 25
