let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const people = input[1].split(" ").map((s) => parseInt(s));
people.sort((a, b) => a - b);
let total = 0;
const pplTime = [];
for (let i = 0; i < people.length; i++) {
  total = total + people[i];
  pplTime.push(total);
}
console.log(pplTime.reduce((prev, curr) => prev + curr, 0));
