function solution(s){
    const newArr = [];
    var answer = true;
    for(let i = 0; i<s.length; i++){
        const currentS = s[i]
        if(currentS===")"){
            if(newArr[newArr.length-1]==="("){
                newArr.pop();
            }else{
                newArr.push(currentS)
            }
        }else{
            newArr.push(currentS);
        }
    }
    newArr.length?answer=false:answer=true;

    return answer;
}