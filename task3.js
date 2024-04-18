function createCounter() {
let count = 0;
return function() {
    return ++count;
};
}

function repeatFunction(func, num) {
if (num < 0) {
    return function() {
    let interval = setInterval(func, 0);
    return function stop() {
        clearInterval(interval);
    };
    }();
} else {
    return function() {
    for (let i = 0; i < num; i++) {
        func();
    }
    };
}
}

// TESTING //

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());

const repeatTwice = repeatFunction(() => console.log("Hello"), 2);
repeatTwice();

const stopRepeating = repeatFunction(() => console.log("World"), -1);
setTimeout(stopRepeating, 1000); // Stop after 1 second for practicality
