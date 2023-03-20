const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const firstN = input.split("\n").shift();
const arr = input.split("\n")[1].split(" ");
const n = input.split("\n")[2];
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  Number(arr[i]) === Number(n) ? answer++ : null;
}

console.log(answer);
