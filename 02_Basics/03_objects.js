// singleton - object made by constructor
// Object.create

// object literals
const mySymbol = Symbol("key1")
const jsUser = {
  name: "Abhishek",
  age: 25,
  location: "Tata",
  email: "abc@gmail.com",
  lastLoggedIn: ["monday", "tuesday"],
  "full name": "Abhishek Sharma",
  [mySymbol]: "myKey1"
};

// how to access js ?

console.log(jsUser.name); // Abhishek

console.log(jsUser["email"]); // abc@gmail.com
console.log(jsUser["full name"]); // Abhishek sharma

console.log(jsUser[mySymbol]);

// Object.freeze(jsUser) // just to freeze my object

jsUser.name = 'abc'
console.log(jsUser);
