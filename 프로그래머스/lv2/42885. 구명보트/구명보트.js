function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b);
    const ogLen = people.length;
    let i = 0;
    while(i<ogLen){
        const minWeight = people[0];
        const maxWeight = people.length>1?people.pop():0;
        
        if(people.length===0){
            break;
        }
        if(minWeight+maxWeight>limit){
            answer ++;
        }else{
            people.shift();
            answer ++;
        }
        i++;
    }
    
    return answer;
}