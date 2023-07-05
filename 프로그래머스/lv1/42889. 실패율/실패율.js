function solution(N, stages) {
    
    const failureRates = [];
    for (let i = 1;i<=N;i++){
        const failure = stages.filter(s=>s===i).length; //0
        const challengers = stages.filter(s=>s>=i).length; //0
        const failureRate = failure/challengers||0;
        failureRates.push(failureRate);
    }
    
    const answer = [...failureRates].sort((a,b)=>b-a).map((n)=>{
        const idx = failureRates.indexOf(n);
        failureRates[idx]=null;
        return idx+1;
    });
    
    return answer;
}