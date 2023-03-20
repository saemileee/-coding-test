const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const firstN = input.split("\n").shift().split(" ")[0];

const n = input.split("\n").shift().split(" ")[1];

const arr = input.split("\n")[1].split(" ");

let answer = "";

for (let i = 0; i < Number(firstN); i++) {
  if (Number(arr[i]) < Number(n)) {
    answer += `${arr[i]}`;
    if (i < Number(firstN) - 1) {
      answer += " ";
    }
  }
}

console.log(answer);
