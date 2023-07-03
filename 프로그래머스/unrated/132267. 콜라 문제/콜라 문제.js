function solution(a, b, n) {
    var answer = 0;
    while(n>=a){
        const newCokeCount = Math.floor(n/a)*b;
        answer += newCokeCount;
        const restEmptyCoke = n%a;
        n = restEmptyCoke+newCokeCount;
    }
    
    return answer;
}