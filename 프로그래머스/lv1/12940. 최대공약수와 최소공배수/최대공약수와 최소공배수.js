function solution(n, m) {
    let GCD = 0;
    let _n = n
    let _m = m
    while(_m !== 0){
        const remainder = _n % _m;
        _n = _m ;
        _m = remainder;
        GCD = _n;
    }
    
    let LCM = n*m/GCD;
    return [GCD,LCM];
}