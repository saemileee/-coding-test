function solution(n, times) {
    let minTime = 1;
    let maxTime = Math.max(...times) * n;
    while(minTime<=maxTime){
        const midTime = Math.floor((minTime+maxTime)/2);
        const handleables = times.reduce((acc,time)=>acc+Math.floor(midTime/time),0);
        
        if(handleables < n){
            minTime = midTime + 1;
        }else{
            maxTime = midTime - 1;
        }
    }
    return minTime;
}