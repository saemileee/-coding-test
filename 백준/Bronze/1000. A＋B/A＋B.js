const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const A = parseInt(input.split(" ")[0]);
const B = parseInt(input.split(" ")[1]);

console.log(A + B);
