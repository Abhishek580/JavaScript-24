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

/*
javascript execution context

{}-> Global EC

1. global execution context
2. function execution context
3. eval execution context (in mongose) 
-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+


phase in EC

1. Global Execution -> this
2. Memory creation phase
    
3. Execution phase

*/