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