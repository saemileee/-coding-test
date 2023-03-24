const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const dials = {
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};

let answer = 0;
for (input of inputs) {
  for (n in dials) {
    dials[n].includes(input) ? (answer += parseInt(n) + 1) : null;
  }
}

console.log(answer);
