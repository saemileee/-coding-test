function solution(s) {
    var answer = 0;
    let sameCounts = 0;
    let diffCounts = 0;
    let x = s[0];
    for(let i = 0; i<s.length; i++){
        if(x===s[i]){
            sameCounts ++;
        }else{
            diffCounts ++;
        }
        
        if(sameCounts===diffCounts){
            answer ++;
            sameCounts = 0;
            diffCounts = 0;
            x = s[i+1];
        }
    }
    if(sameCounts){
        answer ++;
    }
    return answer;
}