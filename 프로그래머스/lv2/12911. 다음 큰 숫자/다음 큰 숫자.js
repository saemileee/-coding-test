function solution(n) {
    const binaryN = n.toString(2);
    const binaryN1Counts = binaryN.match(/1/g).length;
    
    function getNextN(m){
        const binaryM = m.toString(2);
        const binaryM1Counts = binaryM.match(/1/g).length;
        
        if(binaryN1Counts!==binaryM1Counts){
            return getNextN(m+1);
        }else if(binaryN1Counts===binaryM1Counts){
            return m;
        }
    }
    return getNextN(n+1);
}