function solution(n, lost, reserve) {
    const newLost = lost.filter(n=>!reserve.includes(n)).sort((a,b)=>a-b);
    const newReserve = reserve.filter(n=>!lost.includes(n)).sort((a,b)=>a-b);
    let answer = n - newLost.length;
    newLost.forEach((n)=>{
        if(newReserve.includes((n-1))){
            answer += 1;
            newReserve.splice(newReserve.indexOf(n-1),1);
        }else if(newReserve.includes((n+1))){
            answer += 1;
            newReserve.splice(newReserve.indexOf(n+1),1);
        }
    })
    
    return answer;
}