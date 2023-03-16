const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = input.split("\n");
const iter = arr.shift();
let answer = "";
for (let i = 0; i < iter; i++) {
  const [a, b] = arr[i].split(" ");
  answer += parseInt(a) + parseInt(b);
  i < iter - 1 ? (answer += "\n") : null;
}

console.log(answer);