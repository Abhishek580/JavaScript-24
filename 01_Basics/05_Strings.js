const name = "Abhishek";

const count = 50;

console.log(name + count + " value"); // Abhishek50 value

/*   String interpolation    */

console.log(`${name}${count} value`); // Abhishek50 value

// another way of declearing a string
const user1 = new String("Abhishek");

console.log(user1[0]); // A

console.log(user1.__proto__); // {}

console.log(user1.length); // 8
console.log(user1.toUpperCase()); // ABHISHEK
console.log(user1.toLocaleUpperCase()); // ABHISHEK
console.log(user1.charAt(5)); // h
console.log(user1.indexOf("k")); // 7

const subStr1 = user1.substring(0, 4);
console.log(subStr1); // Abhi

const str1 = user1.slice(0, 4); // Abhi
const str2 = user1.slice(-8, 6); // Abhish

console.log(str1);
console.log("str2: ", str2); 

const user2 = "     ajibAadmi   "
console.log(user2.trim());

const user3 = 'abhi-shek-sha-rma'
const splitStr = user.split('-')
console.log(splitStr);





/*
charAt(index): Returns the character at the specified index in a string.

charCodeAt(index): Returns the Unicode value of the character at the specified index in a string.

concat(...strings): Combines two or more strings.

includes(searchString, position): Checks if a string contains another string. Returns true or false.

endsWith(searchString, endPosition): Checks if a string ends with another string. Returns true or false.

indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string.

lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string.

localeCompare(compareString, locales, options): Compares two strings according to the given locale and returns a number indicating their relative order.

match(regexp): Searches a string for a match against a regular expression and returns the matches.

repeat(count): Returns a new string repeated a certain number of times.

replace(searchValue, replaceValue): Searches for a specified value or regular expression and replaces it with another value.

search(regexp): Searches a string for a specified value or regular expression and returns the position of the match.

slice(start, end): Extracts a section of a string and returns it as a new string.

split(separator, limit): Splits a string into an array of substrings based on a specified separator.

startsWith(searchString, position): Checks if a string starts with another string. Returns true or false.

substring(start, end): Returns the part of a string between the start and end indexes.

toLocaleLowerCase(locales): Converts a string to lowercase according to the given locale.

toLocaleUpperCase(locales): Converts a string to uppercase according to the given locale.

toLowerCase(): Converts a string to lowercase.

toUpperCase(): Converts a string to uppercase.

trim(): Removes whitespace from both ends of a string.

valueOf(): Returns the primitive value of a string.
*/
