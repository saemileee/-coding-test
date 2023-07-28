function solution(ingredient) {
    
    let answer = 0;
    const stack = []
    
    let i = 0;
    while(i<ingredient.length){
        stack.push(ingredient[i]);
        if(stack[stack.length-1]===1&&stack[stack.length-2]===3&&stack[stack.length-3]===2&&stack[stack.length-4]===1){
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer ++;
        }
        i++;
    }
    
    return answer;
}