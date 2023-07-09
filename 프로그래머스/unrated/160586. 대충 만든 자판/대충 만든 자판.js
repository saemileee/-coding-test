function solution(keymap, targets) {
    const answer = [];
    const charMap = {};
    
    for (let i = 0;i<keymap.length;i++){
        for(let j = 0;j<keymap[i].length;j++){
            if(charMap[keymap[i][j]]>j+1||!charMap[keymap[i][j]]){
                charMap[keymap[i][j]] = j+1;
            }
        }
    }
    
    for (let i = 0; i<targets.length; i++){
        let count = 0;
        for(let j = 0; j<targets[i].length; j++){
            if(charMap[targets[i][j]]){
                count += charMap[targets[i][j]];
            }else{
                count = -1;
                break;
            }
        }
        answer.push(count);
    }
    return answer;
}