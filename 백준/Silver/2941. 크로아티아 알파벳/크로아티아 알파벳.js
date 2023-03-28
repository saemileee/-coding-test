const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croatiaChar = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let changedStr = input;

for (let char of croatiaChar) {
  changedStr = changedStr.replaceAll(char, 1);
}

console.log(changedStr.length);
