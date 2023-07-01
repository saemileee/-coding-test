function solution(t, p) {
    var answer = 0;
    const tArr = t.split('');
    for(let i = 0;i<tArr.length;i++){
        const compareString = [...tArr].splice(i,p.length).join('');
        const compareNumber = parseInt(compareString);
        if(compareString.length===p.length&&compareNumber<=parseInt(p)){
            answer += 1;
        }
    };
    return answer;
}