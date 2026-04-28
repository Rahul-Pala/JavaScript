console.log("Hello")

function makeCounter() {
let currentCount = 0;
return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter();
let counter2 = makeCounter()
counter1(); // 1
counter1(); // 2
counter1()
counter2()
counter1()

function makeCounterB(startFrom) {
    let currentCount = startFrom;

    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    }
}

let counter3 = makeCounterB(5)
counter3()

function makeCounterC(startFrom, incrementBy) {
let currentCount = startFrom;
return function() {
currentCount += incrementBy;
console.log(currentCount)
return currentCount;
};
}
let counter4 = makeCounterC(10, 5);
counter4(); // 15
counter4(); // 20

function logCalls(fn) {
    let count = 0;

    return function() {
        count++;
        console.log("Function called " + count + " times");

        return fn();
    };
}

function sayHello() {
    console.log("Hello!");
}

let decoratedHello = logCalls(sayHello);
decoratedHello()
decoratedHello()

function slowFunction() {
    for (let i = 0; i < 1e6; i++) {
        // simulate heavy work
    }
    console.log("Done!");
}

function getNumber() {
    return 5;
}
console.log(getNumber())

function doubleResult(fn) {
    return function() {
        let result = fn()
        return result * 2
    }
}

let newFunction = doubleResult(getNumber)
console.log(newFunction())

//function decorator(fn) {
   // return function(...args) {
    //    let result = fn(...args);
       // return result;
  //  }
// }

//function decorator(fn) {
   // return function(...args) {
   //     // do something BEFORE
    //    let result = fn(...args);
        // do something AFTER
   //     return result;
   // }
// }

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
//setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
//setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
//setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
//delayMsg('#4: Not delayed at all')
//setTimeout(delayMsg,1000, '#5: Delayed by 10 seconds')
const arrowDelayMsg = (msg) => { 
    console.log(`This message will be printed after a delay: ${msg}`)
};
let fifthTimerRef = setTimeout(delayMsg, 1100, '#5: Longest delay')
clearTimeout(fifthTimerRef)

function printMe() {
console.log('printing debounced message')
}

function debounce(func) {
    let timeout;
console.log('doing')
return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
    func(...args);
}, 1000);
    console.log('doing too')

}
}
//printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
//setTimeout( printMe, 100);
//setTimeout( printMe, 200);
//setTimeout( printMe, 1400);

function printMee(msg) {
    console.log("Printed:", msg);
}

let debouncedPrintt = debounce(printMee);

//debouncedPrintt("First");
//debouncedPrintt("Second");
//debouncedPrintt("Third");

//setInterval(() => {
   // console.log("Hello");
//}, 1000);

function sayHello() {
    console.log("Hello Rahul Pala")
}

//sayHello()

//setInterval(sayHello, 3000)

//setInterval(() => { sayHello() }, 1000)

function printFibonacciTimeouts() {
    let first = 1;
    let second = 1;

    console.log(first);
    console.log(second);

    function printNext() {
        let next = first + second;
        console.log(next);

        first = second;
        second = next;

        // call itself again after 1 second
        setTimeout(printNext, 1000);
    }

    // start the loop
    setTimeout(printNext, 1000);
}

//printFibonacciTimeouts();

let car = {
make: "Porsche",
model: '911',
year: 1964,
description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
setTimeout(car.description, 200);
setTimeout(function() {
    car.description();
}, 200);
setTimeout(() => {
    car.description();
}, 200);

let newCar = {...car, year: 2024};

newCar.description();

let p1 = {
    name: "Rahul",
    sayHello: function() {
        console.log("Hello " + this.name);
    }
};

let p2 = {
    name: "John",
    sayHello: function() {
        console.log("Hello " + this.name);
    }
};
p2.sayHello()