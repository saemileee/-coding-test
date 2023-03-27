const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toLowerCase()
  .split("");

const charMap = input.reduce((map, char) => {
  !map[char] ? (map[char] = 1) : (map[char] += 1);
  return map;
}, {});

const maxValue = Math.max(...Object.values(charMap));

const filterdArr = Object.entries(charMap).filter((arr) => arr[1] === maxValue);

let answer = "";

filterdArr.length === 1
  ? (answer = filterdArr[0][0].toUpperCase())
  : (answer = "?");

console.log(answer);
