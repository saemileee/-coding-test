const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((n) => Number(n));
input.shift();

let baskets = [];
//바구니 N개 만큼 세팅
for (let i = 1; i <= N; i++) {
  baskets.push(0);
}

for (let ind = 0; ind < M; ind++) {
  const [i, j, k] = input[ind].split(" ").map((n) => Number(n));
  baskets.fill(k, i - 1, j);
}

console.log(baskets.join(" "));
