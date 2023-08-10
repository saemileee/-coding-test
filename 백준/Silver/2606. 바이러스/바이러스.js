let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const map = new Array(input[0] * 1 + 1).fill([]);
const virusComputer = new Array(input[0] * 1 + 1).fill(0);
const computerMatches = input
  .slice(2, input.length)
  .map((arr) => arr.split(" ").map((s) => s * 1));

for (let i = 0; i < computerMatches.length; i++) {
  const match = computerMatches[i];
  const aComputer = match[0];
  const bComputer = match[1];

  map[aComputer]
    ? (map[aComputer] = [...map[aComputer], bComputer])
    : (map[aComputer] = [bComputer]);
  map[bComputer]
    ? (map[bComputer] = [...map[bComputer], aComputer])
    : (map[bComputer] = [aComputer]);
}

function DFS(computer) {
  while (map[computer].length > 0) {
    const com = map[computer].pop();
    virusComputer[com] = 1;
    if (map[com].length > 0) {
      DFS(com);
    }
  }
}
DFS(1);
let answer = 0;
virusComputer.forEach((n, i) => (i > 1 && n === 1 ? answer++ : null));
console.log(answer);
