function solution(phone_book) {
    // 접두어인 경우가 있으면 false
    // 접두어=n 리스트를 만들고 접두어 리스트를 해시형태로 저장함 dict[n]
    var answer = true;
    const map = [];
    
    for(let i = 0; i<phone_book.length ; i++){
        const phoneNumber = phone_book[i];
        for(let j = 1; j<phoneNumber.length; j++){
            map[phoneNumber.substring(0,j)] = true;
        }
    }
    
    for(let i = 0; i<phone_book.length ; i++){
        const phoneNumber = phone_book[i];
        if(map[phoneNumber]){
            answer = false;
            break;
        }
    }
    
    return answer;
}