function solution(k, m, score) {
    const remainer = score.length%m;
    score.sort((a,b)=>a-b);
    score.splice(0, remainer);
    const answer = score.reduce((acc,curr,idx)=>!(idx%m)?(curr*m)+acc:acc,0)
    return answer;
}