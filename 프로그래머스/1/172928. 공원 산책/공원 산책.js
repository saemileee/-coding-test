function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    const ops = {N:[-1,0], S:[1,0], W:[0,-1], E:[0,1]};
    let currentL = [];
    park.forEach((row,idx)=>{
        if(row.includes("S")){
            currentL.push(idx);
            const col = row.indexOf("S");
            return currentL.push(col);
        }
    });
    
    for(const route of routes){
        const [op, n] = route.split(' ');
        const targetRow = currentL[0] + (ops[op][0] * n);
        const targetCol = currentL[1] + (ops[op][1] * n);
        
        if(0<=targetRow && targetRow<H
           && 0<=targetCol && targetCol<W){
            
            for(let i = 0; i<=Number(n); i++){
                const candidateRow = currentL[0] + (ops[op][0] * i);
                const candidateCol = currentL[1] + (ops[op][1] * i);
                const target = park[candidateRow][candidateCol];
                
                if(target==="X"){
                    break;
                }
  
                if(target!=="X"&&i===Number(n)){
                    currentL = [candidateRow, candidateCol];
                }
            }
            
        }
        
    }
    
    return currentL;
}