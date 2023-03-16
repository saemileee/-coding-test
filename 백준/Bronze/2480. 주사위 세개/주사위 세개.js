const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const Dice1 = Number(input.split(" ")[0]);
const Dice2 = Number(input.split(" ")[1]);
const Dice3 = Number(input.split(" ")[2]);
let answer = 0;

if (Dice1 === Dice2 && Dice1 === Dice3 && Dice2 === Dice3) {
  answer = 10000 + Dice1 * 1000;
} else if (Dice1 === Dice2) {
  answer = 1000 + Dice1 * 100;
} else if (Dice1 === Dice3) {
  answer = 1000 + Dice1 * 100;
} else if (Dice2 === Dice3) {
  answer = 1000 + Dice2 * 100;
} else {
  answer = Math.max(Dice1, Dice2, Dice3) * 100;
}

console.log(answer);
