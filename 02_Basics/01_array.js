// array is an object in JS

const arr = [0, 1, 2, 3, 4, 5];

// Shallow copy - shallow copy of an object is a copy whose properties share the same reference as those of the source object from which the copy was made.

// Deep copy - deep copy of an object is a copy whose properties do not share the same reference as those of the source object from which the copy was made.

arr.unshift(9); // add to the begning
arr.shift(); // remove from begning

console.log(arr);

console.log(arr.includes(6)); // false
console.log(arr.indexOf(6)); // -1

// join converts the arry to a comma seprated string
const arr1 = arr.join();
console.log(arr1); // 0,1,2,3,4,5

// slice, splice




//slice
console.log("array A: ", arr);
const newArr = arr.slice(1, 3); // [1, 2]
console.log(newArr);

//splice
console.log("array B: ", arr);
const newArr2 = arr.splice(1, 3); // [1, 2, 3]
console.log(newArr2);

console.log("array B after splice: ", arr);

/*
Notes:-

Slice: * it returns the portion of the array excluding the last number.
       * it does not impact the orignal array


Splice: * it returnts the portion of the array including the last number.
        * it impacts the orignal array, and remove the portion from the array.


*/
