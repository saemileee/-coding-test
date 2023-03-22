const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((n) => Number(n)));

//1 2 3 4 5 -> 1 2
//2 1 3 4 5 -> 3 4
//2 1 4 3 5 -> 1 4
//3 4 1 2 5 -> 2 2
//3 4 1 2 5
let baskets = new Array(input[0][0]).fill(0).map((_, i) => i + 1);

for (let x = 1; x <= input[0][1]; x++) {
  const i = input[x][0]; 
  const j = input[x][1]; 
  const reverseArr = baskets.slice(i - 1, j).reverse();
  baskets.splice(i - 1, j - i + 1, ...reverseArr);
}

console.log(baskets.join(' '));
