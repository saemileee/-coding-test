const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = 0;
for (let i = 1; i <= input; i++) {
  answer += i;
}
console.log(answer);
