function solution(dartResult) {
    const scores = [];
    const bonusMap = {S:1,D:2,T:3};
    const regex = /\d([\d]?)+[SDT]{1}([*#]?)/g;
    const scoreRegex = /\d{1,2}|[SDT]{1}|[*#]/g;
    const dartResultArr = dartResult.match(regex).map((result)=>result.match(scoreRegex));
    for (let i=0;i<dartResultArr.length;i++){
        dartResultArr[i][0] *= 1; 
        const [score, bonus, option] = dartResultArr[i];
        let amount = Math.pow(score,bonusMap[bonus])
        if (option==="*"){
            if(i===0){
                amount *= 2; 
            }else{
                amount *= 2;
                scores[i-1] *= 2;
            }
        }else if (option==="#"){
            amount *= -1;
        }
        scores.push(amount);
    }

    
    return scores.reduce((acc,n)=>acc+n,0);
}