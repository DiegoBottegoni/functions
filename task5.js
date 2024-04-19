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

  function fibonacciGenerator() {
    let a = 0;
    let b = 1;
  
    return {
      next: () => {
        const nextFibonacci = a + b;
        a = b;
        b = nextFibonacci;
        return { value: nextFibonacci, done: false };
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
const fibonacci = fibonacciGenerator();
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log("*********************************");
