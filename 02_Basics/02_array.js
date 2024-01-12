const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// arr1.push(arr2); // [ 1, 2, 3, [ 4, 5, 6 ] ]
// console.log(arr1);

const arr3 = arr1.concat(arr2); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3);

/*
Push: change the exesting array
Concat: returns the new array
*/

// spread operator
const arr4 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr4);

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const newArr = nestedArray.flat(); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const newArr1 = nestedArray.flat(Infinity); // [(1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5)];
console.log(newArr1);

console.log(Array.isArray("Abhishek")); // false
console.log(Array.from("Abhishek")); // ["A", "b", "h", "i", "s", "h", "e", "k"];


