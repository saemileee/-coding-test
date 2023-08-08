function isPrimeCheck(n){
    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true
}

function solution(n, k) {
    var answer = 0;
    // 0P0 ex) 020
    // P0 ex) 2110
    // 0P ex) 0112
    // P ex) 11
    
    const changed = n.toString(k);
    const primes = changed.split(/0{1,}/g).reduce((prev,curr)=>isPrimeCheck(curr)&&curr>1?[...prev, curr]:prev,[])
    
    console.log(primes)
    return primes.length;
}