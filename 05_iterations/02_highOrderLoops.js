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

coding.forEach((item, index, list) => {
  console.log(item, index, list);
});

/*
outpot:

js 0 [ 'js', 'ruby', 'java' ]
ruby 1 [ 'js', 'ruby', 'java' ]
java 2 [ 'js', 'ruby', 'java' ]

*/