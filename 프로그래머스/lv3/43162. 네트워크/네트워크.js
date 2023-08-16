function solution(n, computers) {
    var answer = 0;
    function DFS (i){
        for(let j = 0; j<n; j++){
            if(computers[i][j]===1){
                computers[i][j] = 0;
                computers[j][j] = 0;
                if(computers[j][i]===1){
                    DFS(j);
                }
            }
        }
    }
    
    for(let i = 0; i<n; i++){
        if(computers[i].includes(1)){
            DFS(i);    
            answer ++;
        }
    }
    return answer;
}