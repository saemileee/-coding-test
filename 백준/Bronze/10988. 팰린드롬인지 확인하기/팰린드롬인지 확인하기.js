const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const reversedStr = input.split("").reverse().join("");

console.log(input === reversedStr ? 1 : 0);
