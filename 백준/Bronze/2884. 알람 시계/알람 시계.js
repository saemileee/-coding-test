const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const H = Number(input.split(" ")[0]);
const M = Number(input.split(" ")[1]);
let answer = "";

if (M < 45) {
  H === 0
    ? (answer = `23 ${60 - (45 - M)}`)
    : (answer = `${H - 1} ${60 - (45 - M)}`);
} else {
  answer = `${H} ${M - 45}`;
}

console.log(answer);
