// maps

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.map((item) => item + 10);

const newNums = nums
  .map((item) => item * 10)
  .map((num) => num + 1)
  .filter((item) => item >= 40);

console.log(newNums);


const initial = 0
