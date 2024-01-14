// maps

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.map((item) => item + 10);

// const newNums = nums
//   .map((item) => item * 10)
//   .map((num) => num + 1)
//   .filter((item) => item >= 40);

// console.log(newNums);

const initial = 0;

// reduce

const num = [1, 2, 3, 4];

// const total = num.reduce(function(acc, curVal ){
//   console.log('acc: ', acc, ' ', 'current value: ', curVal);
//   return acc+curVal
// }, 0)

const total = num.reduce((acc, curVal) => acc + curVal, 0);

console.log(total);

const shoppingCart = [
  {
      itemName: "js course",
      price: 2999
  },
  {
      itemName: "py course",
      price: 999
  },
  {
      itemName: "mobile dev course",
      price: 5999
  },
  {
      itemName: "data science course",
      price: 12999
  },
]

const amount = shoppingCart.reduce((acc, item)=>(acc+item.price ),0)

console.log(amount);