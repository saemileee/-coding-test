function solution(n) {
    const s = new Set();
    for(let i = 1; i<=n ; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    
    for(let i=3; i<Math.sqrt(n); i++){
        if(s.has(i)){
            for(let j = i*2; j<=n; j+=i){
                s.delete(j);
            }
        }
    }
    return s.size;
}