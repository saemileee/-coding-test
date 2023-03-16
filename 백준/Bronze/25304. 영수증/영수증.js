const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = input.split("\n");
const total = parseInt(arr[0]);
const count = parseInt(arr[1]);

let answer = "";
let total2 = 0;

for (let i = 2; i < arr.length; i++) {
  const [a, b] = arr[i].split(" ");
  total2 += parseInt(a) * parseInt(b);
}

if (arr.length - 2 === count && total2 === total) {
  answer = "Yes";
} else {
  answer = "No";
}

console.log(answer);
