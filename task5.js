function lazyMap(array, mappingFunction) {
    return array.map(mappingFunction);
}

function fibonacciGenerator(limit) {
    let sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// TESTING //

const array = [1, 2, 3, 4, 5];
const lazyMapped = lazyMap(array, x => x + 2);

console.log("*********************************");
console.log("lazyMap")
lazyMapped.forEach(value => console.log(value));
console.log("*********************************");

console.log("fibonacciGenerator")
const fibonacci = fibonacciGenerator(10); // Limit to the 10th digit
fibonacci.forEach(value => console.log(value));
console.log("*********************************");
