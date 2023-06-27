function solution(n, m) {
    let GCD = 0;
    for(i=1;i<=(n>m?m:n);i++){
        !(n%i)&&!(m%i)?GCD=i:null;
    }
    
    let LCM = n*m/GCD;
    return [GCD,LCM];
}