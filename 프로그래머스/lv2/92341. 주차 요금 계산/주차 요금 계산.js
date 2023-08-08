function solution(fees, records) {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees.map((s,i)=>parseInt(s));
    const recordsMap = {};

    for (let i = 0; i<records.length; i++){
        const [time, carN, status] = records[i].split(' ');
        const newTime = time.split(':').reduce((prev,curr,i)=>i?prev+(curr*1):curr*1*60+prev,0);
        if(status ==="IN"){
            recordsMap[carN] = {...recordsMap[carN],inTime:newTime, state:"IN"}
        }else{
            const cumulativeTime = (recordsMap[carN].cumulativeTime||0) + (newTime - recordsMap[carN].inTime);
            recordsMap[carN] = {...recordsMap[carN], cumulativeTime, state:"OUT"}
        }
    }
    
    const newRecordsMap = Object.entries(recordsMap);
    newRecordsMap.sort((a,b)=>a[0]-b[0]);
    const result = newRecordsMap.map((info)=>{
        let {inTime, state, cumulativeTime} = info[1];
        cumulativeTime = cumulativeTime || 0
        state==="IN" ? cumulativeTime += ((23*60+59) - inTime):null;
        const overTime = cumulativeTime-defaultTime;
        const amountFee = overTime>0?defaultFee + (Math.ceil(overTime/unitTime)*unitFee): defaultFee;
        return amountFee;
        
    })
    
    return result;
}