const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = input.length;
for (let i = 1; i < t; i += 3) {
  const p = input[i];
  const arr = JSON.parse(input[i + 2]);
  const arrL = arr.length;
  const pL = p.length;

  let reverseCnt = 0;
  const pointers = [0, arrL];

  for (let j = 0; j < pL; j++) {
    const method = p[j];
    switch (method) {
      case "R": {
        reverseCnt += 1;
        break;
      }
      case "D": {
        if (!arrL) {
          console.log("error");
          j += pL;
          continue;
        }
        if (reverseCnt % 2) {
          pointers[1] -= 1;
        } else {
          pointers[0] += 1;
        }
        if (pointers[0] > pointers[1]) {
          console.log("error");
          j += pL;
          continue;
        }
        break;
      }
    }

    if (j === p.length - 1) {
      const newArr = arr.slice(pointers[0], pointers[1]);
      if (reverseCnt % 2) {
        newArr.reverse();
      }

      console.log(JSON.stringify(newArr).trim());
    }
  }
}
