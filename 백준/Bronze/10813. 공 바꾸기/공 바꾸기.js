const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [[N, M], ...arr] = input.map((input) =>
  input.length === 1 ? Number(input) : input.split(" ").map((n) => Number(n))
);

const baskets = new Array(N).fill(0).map((n, i) => i + 1);

for (let ind = 0; ind < M; ind++) {
  const i = arr[ind][0];
  const j = arr[ind][1];

  const basketI = baskets[i - 1];
  const basketJ = baskets[j - 1];

  baskets[i - 1] = basketJ;
  baskets[j - 1] = basketI;
}

console.log(baskets.join(" "));