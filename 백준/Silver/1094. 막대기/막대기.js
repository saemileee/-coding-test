const input = Number(require("fs").readFileSync("/dev/stdin").toString());

function solution(x) {
  const leftBars = [64];
  let leftBarsSum = 64;

  while (leftBarsSum > x) {
    const shortestBar = leftBars.pop();
    const half = shortestBar / 2;
    const newSum = leftBarsSum - half;
    leftBars.push(half);

    if (newSum < x) {
      leftBars.push(half);
    } else {
      leftBarsSum = newSum;
    }
  }

  return leftBars.length;
}

console.log(solution(input));
