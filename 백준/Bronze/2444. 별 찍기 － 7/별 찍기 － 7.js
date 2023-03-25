const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let star = "*";
let space = " ".repeat(Number(input) - 1);
let answer = space + "*" + "\n";
for (let i = 1; i < Number(input) * 2; i++) {
  if (i <= input - 1) {
    star += "**";
    space = space.substring(1);
  } else {
    star = star.substring(2);
    space += " ";
  }
  answer += space + star + "\n";
}

console.log(answer);
