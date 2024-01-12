// 



// rest operator

function cal(...num){
    return num
}


function cal1(val1, val2, ...num){
    return num
}
console.log(cal(20,30,40,50));// [ 20, 30, 40, 50 ]
console.log(cal1(20,30,40,50));// [ 40, 50 ]



console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // error: Cannot access 'addTwo' before initialization 
const addTwo = function(num){
    return num + 2
}

// types of declearing functions
// 1
function fun(){
    // some code
}

//2. hold in a variable
const fun = function (){
    // some code
}

