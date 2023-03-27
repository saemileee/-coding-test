const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, ...arrays] = input;

let answer = "";

for (let arr of arrays) {
  const [studentN, ...scores] = arr.split(" ").map((n) => Number(n));
  const avg = scores.reduce((acc, n) => acc + n, 0) / studentN;
  const overAvgCnt = scores.filter((score) => score > avg).length;
  const overAvgStudentsPercentage = (overAvgCnt / studentN) * 100;

  answer += `${overAvgStudentsPercentage.toFixed(3)}%\n`;
}
console.log(answer);
