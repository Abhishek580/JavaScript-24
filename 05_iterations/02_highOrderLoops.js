const greetings = "Hello world!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map();
console.log(map);

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
console.log(map);

for ([key, value] of map) {
  //   console.log(key, ": ", value);
}

// for each

const coding = ["js", "ruby", "java"];
coding.forEach((item) => console.log(item));

// coding.forEach( function (val){
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, list) => {
//   console.log(item, index, list);
// });

/*
output:

js 0 [ 'js', 'ruby', 'java' ]
ruby 1 [ 'js', 'ruby', 'java' ]
java 2 [ 'js', 'ruby', 'java' ]

*/

// forEach don't return any value, it is only used for operations

// Filters
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.filter((item) => item > 5); 
console.log(newNums); // [ 6, 7, 8, 9, 10 ]





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

