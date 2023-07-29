function solution(survey, choices) {
    // 7가지 선택지
    // survey = ['비동의 점수 캐릭터''동의 점수 캐릭터']
    // index가 뜻, 요소가 점수
    // 점수가 동일한 경우 R, C, J, A 보여주기
    const score = [0, 3, 2, 1, 0, 1, 2, 3];
    const personality = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    for(let i = 0; i < choices.length; i++){
        const [disagree, agree] = survey[i].split('');
        const choice = choices[i]
        if(choice <= 3){
            personality[disagree] += score[choice];
        }else if (choice >= 4){
            personality[agree] += score[choice];
        }
    }
    
    var answer = '';
    
    const map = Object.entries(personality);
    
    map.forEach((type, i) => {
        const matchType = map[i+1];
        if(i%2===0){
            type[1] >= matchType[1] ? answer += type[0] : answer += matchType[0];
        }
    })
    
    return answer;
}