const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input[0];
const stack = [];
let answer = "";

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ");
  const method = arr[0];

  switch (method) {
    case "push":
      stack.push(parseInt(arr[1]));
      break;
    case "pop":
    case "size":
    case "empty":
    case "top":
      if (answer.length) {
        answer += "\n";
      }
      switch (method) {
        case "pop":
          stack.length ? (answer += stack.pop()) : (answer += -1);
          break;
        case "size":
          answer += stack.length;
          break;
        case "empty":
          stack.length === 0 ? (answer += 1) : (answer += 0);
          break;
        case "top":
          stack.length ? (answer += stack[stack.length - 1]) : (answer += -1);
          break;
      }
  }
}

console.log(answer);
