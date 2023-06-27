function solution(progresses, speeds) {
    const remainers = progresses.map((val)=>100-val);
    const remainingDays = remainers.map((val,idx)=>Math.ceil(val/speeds[idx]));
    let refDays = remainingDays[0]
    let developCounts = 1;
    const answer = [];
    
    for (let i = 1; i<=remainingDays.length; i++){
        if(refDays >= remainingDays[i]){
            developCounts += 1;
        }else{
            refDays = remainingDays[i];
            answer.push(developCounts);
            developCounts = 1;
        }
    }
    
    return answer;
}