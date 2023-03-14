const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const a = parseInt(input.split(" ")[0]);
const b = parseInt(input.split(" ")[1]);
console.log(a - b);
