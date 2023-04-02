const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

const T = input.shift();

for (let i = 0; i < T; i++) {
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  let change = input[i];
  quarter = parseInt(change / 25);
  change = change % 25;
  dime = parseInt(change / 10);
  change = change % 10;
  nickel = parseInt(change / 5);
  change = change % 5;
  penny = parseInt(change / 1);
  console.log(`${quarter} ${dime} ${nickel} ${penny}`);
}
