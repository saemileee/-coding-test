function solution(n) {
    let answer = 0;
    const arr = Array.from({length:n}, (v,i) => i!==1?i:0);
    for (let i = 2; i<=n; i++){
        if(arr[i]===0) continue;
        answer += 1;
        arr[i] = 0;
        
        for(let j = i*2; j <= n; j += i){
            if(arr[j] === 0) continue;
            arr[j] = 0;
        }
        
    }
    return answer;
}