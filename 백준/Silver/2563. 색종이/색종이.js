const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map((n) => Number(n)));

const N = input.shift();
let board = [];

for (let i = 0; i <= 100; i++) {
  let row = [];
  for (let j = 0; j <= 100; j++) {
    row.push(false);
  }
  board.push(row);
}

for (let arr of input) {
  for (let i = arr[0]; i < arr[0] + 10; i++) {
    for (let j = arr[1]; j < arr[1] + 10; j++) {
      board[i][j] = true;
    }
  }
}

let answer = 0;

for (let row of board) {
  for (let cell of row) {
    cell === true ? answer++ : null;
  }
}

console.log(answer);
