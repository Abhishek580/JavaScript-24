let myName = "Abhishek     "

// console.log(myName.length);


let anotherUser = 'Hitesh'
String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`true length of ${this.trim()} is ${this.trim().length}`);
}
console.log(myName.trueLength());
"example  ".trueLength()
// let myHeros = ['thor', 'spiderman']

// let heroPower = {
//     thor:'hammer',
//     spiderman:'sling',

//     getSpiderPower : function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// heroPower.Abhishek 