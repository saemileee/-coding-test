function solution(k, tangerine) {
    const tangerineCnts = {};
    for(const tangerineSize of tangerine){
        if(tangerineCnts[tangerineSize]){
            tangerineCnts[tangerineSize] ++;
            continue;
        }
        tangerineCnts[tangerineSize] = 1;
    }
    
    const sortedTangerineCnts = Object.values(tangerineCnts).sort((a,b)=>b-a);
    let buckets = 0;
    let selectedTangerineCnts = 0;
    
    for(const tangerineCnt of sortedTangerineCnts){
        if(selectedTangerineCnts >= k) break;
        selectedTangerineCnts += tangerineCnt;
        buckets ++;
    }
    
    
    return buckets;
}