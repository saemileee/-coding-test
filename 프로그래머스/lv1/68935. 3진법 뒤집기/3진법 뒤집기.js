function solution(n) {
    let answer = 0;
    let remainers = [];
    while(n>0){
        remainers.push(n%3);
        n = Math.floor(n/3);        
    }
    
    for(let i = 0;i<remainers.length;i++){
        answer += Math.pow(3, remainers.length-1-i)*remainers[i];
    }
    return answer;
}