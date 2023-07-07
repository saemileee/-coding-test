function solution(babbling) {
    const ableToBabble = ["aya", "ye", "woo", "ma"];
    const notAbleToBabble = ["ayaaya","yeye","woowoo","mama"]
    // 같은 발음 연속 x
    // 가능한 발음 붙여서 발음 o
    const regex = /ye|aya|woo|ma/g
    const regexMultiple = /yeye|ayaaya|woowoo|mama/g
    for (let i = 0;i<babbling.length; i++){
        if(babbling[i].match(regexMultiple)){
            babbling[i] = "x";
        }else{
            babbling[i] = babbling[i].replaceAll(regex,"")
        }
    }
    return babbling.reduce((acc,s)=>s===""?acc+1:acc,0);
}