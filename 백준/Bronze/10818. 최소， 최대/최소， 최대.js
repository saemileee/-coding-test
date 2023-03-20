const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [n, arr] = input.split("\n");
const nArr = arr.split(" ").map((n) => Number(n));

let answer = Math.min(...nArr) + " " + Math.max(...nArr);

console.log(answer);