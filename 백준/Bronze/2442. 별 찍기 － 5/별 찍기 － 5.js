const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = "";
let stars = "*";

for (let i = 1; i <= input; i++) {
  const space = " ";
  const wholeSpaces = space.repeat(input - [i]);
  if (i > 1) {
    stars += "**";
  }
  answer += wholeSpaces + stars + "\n";
}

console.log(answer);
