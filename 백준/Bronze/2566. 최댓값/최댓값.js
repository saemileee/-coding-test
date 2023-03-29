const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((n) => Number(n)));

const maxN = Math.max(
  ...input[0],
  ...input[1],
  ...input[2],
  ...input[3],
  ...input[4],
  ...input[5],
  ...input[6],
  ...input[7],
  ...input[8]
);

let cell = "";

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] === maxN) {
      cell = `${i + 1} ${j + 1}`;
    }
  }
  if (cell.length > 0) break;
}

console.log(maxN + "\n" + cell);
