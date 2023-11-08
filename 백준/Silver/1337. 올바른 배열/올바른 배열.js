const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...numbers] = input.map((v) => parseInt(v));

numbers.sort((a, b) => a - b);
let start = 0;
let end = 0;
let needsToAddCnt = 0;
let minL = 4;
while (end < n - 1) {
  const endN = numbers[end];
  const nextN = numbers[end + 1];
  const currentGap = nextN - endN;
  needsToAddCnt += currentGap ? currentGap - 1 : currentGap;

  if (needsToAddCnt < 4) {
    minL = Math.min(4 - (end - start + 1), minL);
  }

  while (nextN - numbers[start] >= 4) {
    minL = Math.min(needsToAddCnt, minL);
    const startGap = numbers[start + 1] - numbers[start];
    needsToAddCnt -= startGap ? startGap - 1 : startGap;
    start++;
  }
  end++;
}

console.log(minL);
