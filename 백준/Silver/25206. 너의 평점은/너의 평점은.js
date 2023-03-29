const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" "));

let creditMulGPASum = 0;
let creditSum = 0;

for (let i = 0; i < input.length; i++) {
  let creditMulGPA = 0;
  let credit = Number(input[i][1]);
  let GPA = 0;
  if (input[i][2] === "A+") {
    GPA = 4.5;
  } else if (input[i][2] === "A0") {
    GPA = 4.0;
  } else if (input[i][2] === "B+") {
    GPA = 3.5;
  } else if (input[i][2] === "B0") {
    GPA = 3.0;
  } else if (input[i][2] === "C+") {
    GPA = 2.5;
  } else if (input[i][2] === "C0") {
    GPA = 2.0;
  } else if (input[i][2] === "D+") {
    GPA = 1.5;
  } else if (input[i][2] === "D0") {
    GPA = 1.0;
  } else if (input[i][2] === "F") {
    GPA = 0.0;
  } else if (input[i][2] === "P") {
    credit = 0;
    GPA = 0.0;
  }

  creditMulGPA = credit * GPA;
  creditMulGPASum += creditMulGPA;
  creditSum += credit;
}

console.log((creditMulGPASum / creditSum).toFixed(6));