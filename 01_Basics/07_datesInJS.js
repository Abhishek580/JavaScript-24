// date is an object in java

let myDate = new Date();

console.log(myDate); // 2024-01-12T09:34:26.698Z
console.log(myDate.toString()); // Fri Jan 12 2024 15:06:37 GMT+0530 (India Standard Time)
console.log(myDate.toJSON()); //2024-01-12T09:36:37.961Z
console.log(myDate.toDateString()); //Fri Jan 12 2024
console.log(myDate.toTimeString()); //15:06:37 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2024-01-12T09:36:37.961Z
console.log(myDate.toUTCString()); //Fri, 12 Jan 2024 09:36:37 GMT
console.log(myDate.toLocaleDateString()); //12/1/2024
console.log(myDate.toLocaleTimeString()); //3:06:37 pm
console.log(typeof myDate); // date

// const myCreatedDate = new Date(2024, 0, 22);
// const myCreatedDate = new Date(2024, 0, 22, 5, 3);
const myCreatedDate = new Date('2024-01-22');
console.log(myCreatedDate); // 2024-01-22T18:30:00.000Z
console.log(myCreatedDate.toString()); // 

const myTimeStamp = Date.now()
console.log(myTimeStamp); // 1705052900598

const date = myDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(date);