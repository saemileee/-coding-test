function solution(s) {
    var answer = [];
    const map = {};
    const input = JSON.parse(s.replaceAll('{','[').replaceAll('}',']'));
    input.sort((a,b)=>b.length - a.length);
    console.log(input)
    while(input.length>0){
        const arr = input.pop();
        const t = arr.filter(x=>!answer.includes(x));
        answer.push(...t);
    }
        
    
    console.log(input);
    return answer;
}