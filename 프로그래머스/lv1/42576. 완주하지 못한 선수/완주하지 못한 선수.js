function solution(participant, completion) {
    let i = 0;
    participant.sort();
    completion.sort();

    while(i<participant.length){
        if(participant[i]!==completion[i]){
            return participant[i];
        }
        i += 1;
    }
}