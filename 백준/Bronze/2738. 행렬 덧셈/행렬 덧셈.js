const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((n) => Number(n)));

const [N, M] = input[0];

for (let i = 1; i <= N; i++) {
  let elSumStr = "";
  for (let j = 0; j < M; j++) {
    const elSum = input[i][j] + input[i + N][j];
    elSumStr += elSum + " ";
  }
  console.log(elSumStr);
}