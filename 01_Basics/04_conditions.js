console.log(2 > 1); //true
console.log("5" > "6"); // false

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null < 0); //false
console.log(null <= 0); // true
console.log(null >= 0); // true

/*
Note: equality check == and comparisons > < >= <= work differently.

comparisons convert null to a number, trating it as 0
that's why ( null >= 0 ) is true and null > 0 is false.

so 0 > 0 false bcoz 0 is not greater then 0
*/

/*   strict check   */
console.log("2" == 2); // true
console.log("2" === 2); // false
