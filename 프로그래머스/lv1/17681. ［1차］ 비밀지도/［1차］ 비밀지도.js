function solution(n, arr1, arr2) {
    const answerMap = new Array(n).fill(0).map(col=>new Array(n).fill(0));
    const arr1Map = arr1.map((n)=>n.toString(2).split(''));
    const arr2Map = arr2.map((n)=>n.toString(2).split(''));
    for(let i = n-1; i>=0; i--){
        for(let j = n-1; j>=0; j--){ 
            answerMap[i][j]=+arr1Map[i].pop()|+arr2Map[i].pop()?"#":" ";
        }
        answerMap[i] = answerMap[i].join('');
    }
    
    return answerMap;
}