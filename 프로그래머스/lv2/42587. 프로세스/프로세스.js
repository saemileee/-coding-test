function solution(priorities, location) {
    let exeProcess;
    let counts = 0;
    const queueMap = priorities.map((n,i)=>[n,i]);
    while(queueMap.length>0){
        exeProcess = queueMap.shift();
        const restPriorHigher = queueMap.filter((process)=>process[0]>exeProcess[0]?true:false)
        if(restPriorHigher.length){
            queueMap.push(exeProcess);
            exeProcess=null;
        }else{
            counts++
            if(exeProcess[1]===location){
                break;
            }
        }
    }

    return counts;
}