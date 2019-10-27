//currying - reducing the arity of a function
//a high arity function
function ar3multiply(a,b,c){
    return a*b*c;
}
console.log(ar3multiply(2,3,4));

//a lower arity curried function
function multiply(a){
    return (b) => {
        return (c) =>{
            return a*b*c;
        }
    }
}
//fat arrow functions inherhit the parents scope, so they all parent to multiply
console.log(`now with currying: ${multiply(2)(3)(4)}`);

//broken down
console.log(multiply);
let mult1 = multiply(2);
console.log(mult1);
let mult2 = mult1(3);
console.log(mult2);
let mult3 = mult2(4);
console.log(mult3);

//why curry.... the discounter, extend function in a similar way to class
function discounter(disc){
    return (price) => {
        return disc*price;
    }
}

const bestCustomer = discounter(0.5);
const schnorer = discounter(0.9);

console.log(`my best customer buys a tv: ${bestCustomer(100)}`);
console.log(`my worst customer buys a tv: ${schnorer(100)}`);

//avoiding shared state
const x = {
    val: 2
};

const x1 = x => Object.assign({}, x, { val: x.val + 1});

const x2 = x => Object.assign({}, x, { val: x.val * 2});
console.log(x1(x));
console.log(x2(x));
console.log(x1(x2(x)).val); // 5

//lets try freezing an object
let bozo = {
    isClown: true,
    numRedNoses: 1
}
Object.freeze(bozo);
console.log(bozo);
bozo.numRedNoses = 2;
bozo.isClown = false;
console.log(bozo.numRedNoses);
console.log(bozo);

//imperative - show exactly what to do
const doubleMapImp = numbers => {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
    return doubled;
};

  console.log(doubleMapImp([2, 3, 4])); // [4, 6, 8]

//declarative - describe the process with the actions abstracted away(eg. under the hood)
const doubleMap = numbers => numbers.map(n => n * 2);

console.log(doubleMap([2, 3, 4])); // [4, 6, 8]

//closure example using a counter
//the var in this instance is the reason why the function was necessary
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.value(); // returns 0
counter1.increment(); // adds 1
counter1.increment(); // adds 1
counter1.value(); // returns 2
counter1.decrement(); //subtracts 1
console.log(`counter1: ${counter1.value()}`); // returns 1
console.log(`counter2: ${counter2.value()}`); // returns 0



//first of all currying
/*
    fn is the funtion
*/
/*
const curry = fn => (...args) => fn.bind(null, ...args);


const map = curry((fn, arr) => arr.map(fn));
const join = curry((str, arr) => arr.join(str));
const toLowerCase = str => str.toLowerCase();
const split = curry((splitOn, str) => str.split(splitOn));

let output = split(" ", "Bork of Dork".toLowerCase());
//console.log(join(" ", output())());
console.log(join(" ", split(" ", "Bork of Dork".toLowerCase())())());



const curry2 = fn => (...args) => {
    console.log(fn);
    console.log(...args);
    return fn.bind(null, ...args)
};
const split2 = curry2((splitOn, str) => str.split(splitOn));
const join2 = curry2((str, arr) => arr.join(str));


let testing = split2("-", "I-likes-me-a-sammich");
console.log(testing());

*/

