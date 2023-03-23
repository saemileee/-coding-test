const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let alphabet = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < input.length; i++) {
  alphabet = alphabet.replace(input[i], `${i} `);
}

console.log(alphabet.replace(/[a-z]/g, "-1 "));
