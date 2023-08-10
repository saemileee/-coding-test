function solution(numbers, target) {
    let answer = 0;
    const numbersLeng = numbers.length
    function DFS(i,sum){
        if(i===numbersLeng){
            if(sum === target){
                answer ++;               
            }
        }else{
            DFS(i+1,sum+numbers[i]);
            DFS(i+1,sum-numbers[i]);
        }
    }
    DFS(0,0);
    return answer;
}