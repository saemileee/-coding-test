const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const A = Number(input.split(" ")[0]);
const B = Number(input.split(" ")[1]);
let answer = "";
if (A > B) {
  answer = ">";
} else if (A < B) {
  answer = "<";
} else if (A == B) {
  answer = "==";
}
console.log(answer);