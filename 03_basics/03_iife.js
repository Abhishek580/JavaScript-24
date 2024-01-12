// Immediately Invoked Function Expressions (IIFE)

// just to avoid global scope polution

// (() => {})()

//named iife
(function chai() {
  console.log("connected");
})();

//unnamed iffies
(() => {
  console.log(`db connected to `);
})();

((name)=>{
    console.log(`db connected to ${name}`);
})('abhi')

