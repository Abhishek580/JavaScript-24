// const score = 40;
// console.log(score); // 40

// const bal = new Number(150);
// console.log(bal);// [Number: 150]

// console.log(bal.toString().length); // 3
// console.log(bal.toFixed(2)); // 150.00

// const num = 123.8966
// console.log(num.toPrecision(3));

// const hundred = 1000000

// console.log(hundred.toLocaleString('en-IN')); // 10,00,000

/********************  Maths  ********************/

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min([5, 4, 3, 2, 1])); // NaN
console.log(Math.min(5, 4, 3, 2, 1)); // 1

console.log(Math.random()); // the value shoued be 0 - 1
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * 10 + 1));

console.log(Math.floor(Math.random() * (max - min + 1))+ min);
