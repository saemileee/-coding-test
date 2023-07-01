function solution(s) {
    let answer = s;
    const numberMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i = 0;i<10;i++){
        answer = answer.replaceAll(numberMap[i],i);
    }
    return +answer;
}