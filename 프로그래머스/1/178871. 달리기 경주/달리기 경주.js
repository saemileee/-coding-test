function solution(players, callings) {
    var answer = [];
    const playersMap = new Map();
    for(let i = 0; i<players.length; i++){
        playersMap.set(players[i],i);
    }
    
    for(const calling of callings){
        const callingRank = playersMap.get(calling);
        const targetRank = callingRank-1;
        const targetPlayer = players[targetRank];
        playersMap.set(calling, targetRank);
        playersMap.set(targetPlayer, callingRank);
        
        [players[callingRank],players[targetRank]]=[players[targetRank],players[callingRank]];

    }

    return players;
}