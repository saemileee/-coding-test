function solution(number, limit, power) {
    var answer = 1;
    for (let i = 2;i<=number; i++){
        let divisorCount = 2;
        for(let j = 2; j*j <= i; j++){
            if(i%j === 0){
                divisorCount++;
                if(j !== i/j){
                    divisorCount++;
                }
            }
            if(divisorCount>limit){
                divisorCount = power;
                break;
            }
            
        }
        answer+=divisorCount;
    }
    return answer;
}