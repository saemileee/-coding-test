function solution(s) {
    var answer = '';
    const arr = s.split(' ').map((s)=>s*1);
    answer += Math.min(...arr);
    answer += " ";
    answer += Math.max(...arr);
    return answer;
}