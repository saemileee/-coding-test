const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = input.split("\n");
const nArr = arr.map((n) => Number(n));
const maxNum = Math.max(...arr);
let answer = maxNum + "\n" + (nArr.indexOf(maxNum) + 1);

console.log(answer);
