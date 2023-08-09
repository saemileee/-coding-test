function solution(s){
    let answer = 0;
    const arr = [];
    const sArr = s.split('')
    for(let i = 0; i<s.length ; i++){
        const currentS = sArr.pop();
        if(arr[arr.length-1]===currentS){
            arr.pop();
        }else{
            arr.push(currentS);
        }
    }

    return arr.length?0:1;
}