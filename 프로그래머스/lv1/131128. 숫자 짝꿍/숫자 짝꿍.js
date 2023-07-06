function solution(X, Y) {
    let answer = "";
    const xCounts = [0,0,0,0,0,0,0,0,0,0];
    const yCounts = [0,0,0,0,0,0,0,0,0,0];
    const xArr = [...X];
    const yArr = [...Y];
    for(let i = 0; i<xArr.length;i++){
        xCounts[xArr[i]*1]+=1;
    }
    for(let i = 0; i<yArr.length;i++){
        yCounts[yArr[i]*1]+=1;
    }
    
    const matches = xCounts.map((n,i)=>n>=yCounts[i]?yCounts[i]:n)
    matches.forEach((n,idx)=>{
        answer = (idx+"").repeat(n)+answer
    })
    
    if (answer.split('').filter((s)=>s==="0").length===answer.length&&answer.length>0){
        answer = "0";
    };
    
    return answer?answer:"-1";
}