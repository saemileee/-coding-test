const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const H = Number(input.split("\n")[0].split(" ")[0]);
const M = Number(input.split("\n")[0].split(" ")[1]);
const setTime = Number(input.split("\n")[1]);
let endH = 0;
let endM = 0;

if (M + setTime >= 60) {
  endH = H + parseInt((M + setTime) / 60);
  endM = (M + setTime) % 60;
} else {
  endH = H;
  endM = M + setTime;
}

if (endH >= 24) {
  endH -= 24;
}

console.log(`${endH} ${endM}`);