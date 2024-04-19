function lazyMap(array, mappingFunction) {
    let index = 0;
        return {
          next: function() {
        if (index < array.length) {
          return { value: mappingFunction(array[index++]), done: false };
        } else {
          return { done: true };
        }
      }
    };
  }

  function fibonacciGenerator(limit) {
    let sequence = [0, 1];
    
    const getNextFibonacci = () => {
      const nextFibonacci = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextFibonacci);
      return nextFibonacci;
    };
  
    return {
      next: () => {
        if (sequence.length < limit) {
          return { value: getNextFibonacci(), done: false };
        } else {
          return { done: true };
        }
      }
    };
  }

// TESTING //

const array = [1, 2, 3, 4, 5];
const lazyMapped = lazyMap(array, x => x + 2);

console.log("*********************************");
console.log("lazyMap")
console.log(lazyMapped.next().value);
console.log(lazyMapped.next().value);
console.log(lazyMapped.next().value);
console.log("*********************************");

console.log("fibonacciGenerator")
const fibonacci = fibonacciGenerator(10);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log("*********************************");
