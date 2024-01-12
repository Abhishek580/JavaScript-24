// singleton - object made by constructor

const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(users));
/*
output for console.log(Object.entries(users))

[
  [ '0', { id: 1, email: 'h@gmail.com' } ],
  [ '1', { id: 1, email: 'h@gmail.com' } ],
  [ '2', { id: 1, email: 'h@gmail.com' } ]
]

*/

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// destructuring...


// course.courseInstructor     X
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

