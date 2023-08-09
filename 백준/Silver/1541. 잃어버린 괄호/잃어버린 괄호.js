let input = require("fs").readFileSync("/dev/stdin").toString();
const regex = /[+-]|\d+/g;
const split = input.match(regex);
let isMinusExist = false;
let answer = 0;
for (let i = 0; i < split.length; i++) {
  const current = split[i];
  const number = parseInt(current);
  if (!isMinusExist && number) {
    answer += number;
  } else if (isMinusExist && number) {
    answer -= number;
  } else if (current === "-") {
    isMinusExist = true;
  }
}
console.log(answer);
