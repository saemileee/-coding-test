let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let change = 1000 - parseInt(input);
let answer = 0;
while (true) {
  if (change >= 500) {
    answer += Math.floor(change / 500);
    change = change % 500;
  } else if (change >= 100) {
    answer += Math.floor(change / 100);
    change = change % 100;
  } else if (change >= 50) {
    answer += Math.floor(change / 50);
    change = change % 50;
  } else if (change >= 10) {
    answer += Math.floor(change / 10);
    change = change % 10;
  } else if (change >= 5) {
    answer += Math.floor(change / 5);
    change = change % 5;
  } else if (change >= 1) {
    answer += Math.floor(change / 1);
    change = change % 1;
  } else if (change === 0) {
    break;
  }
}

console.log(answer);