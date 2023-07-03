function solution(s) {
    const answer = s.split('').map((char,i)=>{
        const resultIdx = i-s.indexOf(char);
        if(resultIdx>0){
            s = s.replace(char,' ');
            return resultIdx;
        }else{
            return -1;
        }
    })
    return answer;
}