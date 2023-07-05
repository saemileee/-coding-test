function solution(lottos, win_nums) {
    const lottoRanks = {6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6};
    const identicals = lottos.filter(n=>n!==0);
    const nonIdenticalsLength = 6-identicals.length;
    
    const correctNums = win_nums.filter(n=>identicals.includes(n));
    const answer = [lottoRanks[correctNums.length + nonIdenticalsLength], lottoRanks[correctNums.length]];
    
    return answer;
}