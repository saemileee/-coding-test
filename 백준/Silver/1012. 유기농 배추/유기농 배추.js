const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const testCaseCounts = parseInt(input.shift());

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let answer = "";

for (let i = 0; i < testCaseCounts; i++) {
  let answerCount = 0;
  const [m, n, k] = input
    .shift()
    .split(" ")
    .map((s) => parseInt(s));

  const location = input
    .splice(0, k)
    .map((arr) => arr.split(" ").map((s) => parseInt(s)));

  const map = new Array(n).fill(0).map(() => new Array(m).fill(0));

  location.forEach((arr) => {
    const [x, y] = arr;
    map[y][x] = 1;
  });

  function DFS(y, x) {
    location.pop();
    map[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      const [newY, newX] = [y + dy[i], x + dx[i]];
      if (newY >= 0 && newY < n && newX >= 0 && newX < m) {
        if (map[newY][newX] === 1) {
          DFS(newY, newX);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) {
        DFS(i, j);
        answerCount++;
      }
    }
  }

  answer = answer !== "" ? answer + "\n" + answerCount : answerCount;
}

console.log(answer);
