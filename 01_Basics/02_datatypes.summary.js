/* 
Primitive datatypes

Note: * All primitiive are call by value
      * When we copy a data from a primitive datatype them we don't get the refrence of memory of orignal data, we get a copy of the data. 
      * And if we make any changes to the variable then we update the copy and not the orignal value.

1. Number
2. String
3. Boolean
4. null
5. undefined
6. Symbol  (it is used to make a unique value)
7. BigInt

*/

const id = Symbol("123"); // we get a unique id
const newId = Symbol("123");

console.log(id);
console.log(newId);
console.log(id === newId); // false

/*
Reference (Non Primitive)

Note: * Therse are those values whose reference can be allocated directoly in the memory.

1. Array
2. Objects
3. Functions

*/

const arr = ["abhishek", "kumar", "sharma"];
const obj = {
  name: "abhishek",
  age: 26,
};
const fun = function () {
  console.log("Hello World !");
};

console.log(typeof null); // object
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof fun); // function

/***************  Memory ******************/

/*
There are 2 types of memory:

1. Stack (Primitive)
2. Heap (Non Primitive)


*/

let name = 'abhishek'
let name2 = name1
name2 = 'noName'

console.log(name1); // abhishek
console.log(name2); // noName

// the value of name1 did not changed because we got a copy of name1 from the stack and not the actal referance of the value.


let userOne = {
  name: "Abhishek",
  upi: "abhi78@abc",
};

let userTwo = userOne;
userTwo.name = "noName";

console.log("userOne", userOne); // { name: 'noName', upi: 'abhi78@abc' }
console.log("userTwo", userTwo); // { name: 'noName', upi: 'abhi78@abc' }

// Note: we got refeeance from the origanl value from the heap.