const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...arr] = input;

function solution(input){
    const sortedInput = Array.from(new Set(input)).sort().sort((a,b)=>a.length-b.length);
    for(const v of sortedInput){
        console.log(v);
    }
}

solution(arr);