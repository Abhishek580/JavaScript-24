const user = {
  username: "Abhishek",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); // {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

// arrow function
const fun = (a, b) => {
  return a + b;
}; // need to write return keyword

const fun1 = (a, b) => a + b; // no need to write return keyword
