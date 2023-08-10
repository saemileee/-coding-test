function solution(prices) {
    var answer = new Array(prices.length).fill(0);
    const stack = [[prices[0],0]];
    for(let i = 1; i<prices.length; i++){
        const currentPrice = prices[i];
        
        while(true){
            const stackInfo = stack.pop();
            if(stackInfo&&currentPrice<stackInfo[0]){
                answer[stackInfo[1]] = i - stackInfo[1]
            }else{
                stack.push(stackInfo)
                break;
            }
        }
        
        stack.push([currentPrice, i]);
    }
    return answer.map((n,i)=>n===0?prices.length-1-i:n);
}