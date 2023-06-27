function solution(price, money, count) {
    let answer = money;
    for(i=0;i<=count;i++){
        answer -= (price * i);
    }

    return answer < 0 ? -answer : 0 ;
}