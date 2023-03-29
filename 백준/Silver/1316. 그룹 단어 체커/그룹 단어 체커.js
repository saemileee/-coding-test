const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(""));

const [n, ...wordsArr] = input;
let answer = 0;

for (let charArr of wordsArr) {
  //연속되는 문자 중복 제거
  let newStr = "";
  charArr.reduce((prev, char) => {
    if (prev === char) {
      return char;
    } else {
      newStr += char;
      return char;
    }
  }, "");

  //중복 문자 맵핑해서 값만 추출해 배열만들기
  const objValues = Object.values(
    newStr.split("").reduce((map, char) => {
      map[char] ? map[char]++ : (map[char] = 1);
      return map;
    }, {})
  );

  //값이 1이 아닌 것이 있으면 0
  objValues.filter((n) => n === 1).length === objValues.length
    ? answer++
    : null;
}

console.log(answer);