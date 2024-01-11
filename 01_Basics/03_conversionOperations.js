// let score = 50;
// let scoreInString = "50";
// let scoreInNumber = Number(scoreInString);
// let scoreMix = "50abc";
// let scoreMixIUpdate = Number(scoreMix);
// let temp = null;
// let tempUpdate = Number(temp);

// console.log(typeof score); // number
// console.log(typeof scoreInString); // String
// console.log(typeof scoreInNumber); // number
// console.log(typeof scoreMixIUpdate); // number
// console.log(scoreMixIUpdate); // but the actual value of scoreMixIUpdate = NaN

// console.log(tempUpdate); // tempUpdate = 0
// console.log("___________________");

// console.log(typeof 50); // number
// console.log(typeof "50"); // string
// console.log(typeof Number("50")); // number
// console.log(typeof "123ABC"); // number
// console.log(typeof Number("50abc")); // number
// console.log(Number("50abc")); // NanN
// console.log(typeof Number(null)); // NanN
// console.log(Number(null)); // 0
// console.log(typeof undefined); // NaN
// console.log(undefined); // undefined
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(typeof Number("abhishek")); // number
// console.log( Number("abhishek")); // NaN

// console.log(typeof 50); // number
// console.log(typeof "50"); // string
// console.log(typeof Number("50")); // number : value = 50
// console.log(typeof "123ABC"); // number
// console.log(typeof Number("50abc")); // number
// console.log(Number("50abc")); // NanN
// console.log(typeof Number(null)); // NanN
// console.log(Number(null)); // 0
// console.log("typeof undefined:", typeof Number(undefined)); // number
// console.log(Number(undefined)); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(typeof Number("abhishek")); // number
// console.log(Number("abhishek")); // NaN

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean('abc')); // true
// console.log(Boolean('')); // false

// console.log(typeof String(33)); // string

/************************* Operations ***************************/

/* basic math operations */

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*3); // 6
// console.log(2**3); // 8
// console.log(2-2); // 0
// console.log(2/3); // 0.66
// console.log(2%3); // 2

const str1 = "Abhishek";
const str2 = " sharma";
const str3 = str1 + str2;

// simple concat
console.log(str3); // Abhishek Sharma

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12

/*
The abstract operation ToPrimitive takes an input argument and an optional argument PreferredType. The abstract operation ToPrimitive converts its input argument to a non-Object type. If an object is capable of converting to more than one primitive type, it may use the optional hint PreferredType to favour that type
*/

// agar string 1st me hai to sabhi string honge
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "3"); //33

console.log(+true); //1
console.log(+""); //0




