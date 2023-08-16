function solution(begin, target, words) {
    var answer = 0;
    const queue = [[begin, 0]];
    const records = [];
    
    while (queue.length>0){
        const [queueWord, counts] = queue.shift();
        if(queueWord === target){
            return counts
        }
        
        for(const word of words){
            if(isChangable(queueWord,word)&&!records.includes(word)){
                records.push(word);
                queue.push([word, counts+1])
            }
        }
    }
    
    return 0;
}

function isChangable(word1, word2){
    let diffCount = 0;
    for(let i = 0; i < word1.length; i++){
        word1[i]!==word2[i]?diffCount++:null;
    }
    return diffCount===1?true:false;
}