function solution(n, words) {
    //[가장 먼저 탈락하는 사람의 번호, 몇번째 차례에 탈락하는지]
    let answer = [];
    const prevWords = [];
    let counts = 0;
    const length = words.length
    while(counts<length){
        const word = words.shift();
        const prevWord = counts?prevWords[prevWords.length-1]:null;
        const prevLastC = counts?prevWord.charAt(prevWord.length-1):null;
        const isStartedRightC = counts?word.charAt(0)===prevLastC:null;
        const isNewWords = counts?!prevWords.includes(word):null;
        const isMoreTwoC = word.length>1;
        counts++
        
        if(isStartedRightC&&isNewWords&&isMoreTwoC){
            prevWords.push(word);
        }else if(counts===1&&isMoreTwoC){
            prevWords.push(word);
        }else{
            answer = [counts%n||n,Math.ceil(counts/n)];
            break;
        }
        counts===length?answer=[0,0]:null;
    }

    return answer;
}