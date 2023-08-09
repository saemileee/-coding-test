
function solution(brown, yellow) {
    const answer = [];
    const area = brown + yellow;
    for(let i = 1; i<=yellow; i++){
        if(yellow%i===0){
            const d1 = i+2;
            const d2 = yellow/i+2;
            if(area%d1===0&&area%d2===0){
                answer.push(d1,d2);
            }            
        }
    }
    answer.length>2?answer.splice(0,2):null;
    
    return answer;
}