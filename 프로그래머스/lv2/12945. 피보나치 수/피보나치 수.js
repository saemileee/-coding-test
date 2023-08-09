function solution(n, a=0, b=1) {
    let i = 2;
    while(i<n){
        const ogA = a;
        a = b % 1234567;
        b = (ogA+b) % 1234567;
        i++;
    }
    
    
    return (a+b)%1234567;
}