function solution(citations) {
    let answer;
    citations.sort((a,b)=>b-a)
    console.log(citations)
    for(let h = 1; h<=citations[0]; h++){
        if(h>citations[h-1]){
            answer = h-1;
            break;
        }
    }
    return answer?answer:citations[0]===0?0:citations.length;
}