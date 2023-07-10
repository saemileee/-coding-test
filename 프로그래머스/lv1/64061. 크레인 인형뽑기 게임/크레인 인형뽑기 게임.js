function solution(board, moves) {
    //레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수
    var answer = 0;
    const basket = [];
    
    for(let i = 0;i < moves.length;i ++){
        const location = moves[i]-1;
        for (let j = 0;j<board.length;j++){
            if(board[j][location]){
                if(board[j][location]===basket[basket.length-1]){
                    basket.pop();
                    answer += 2;
                }else{
                    basket.push(board[j][location]);
                }
                board[j][location] = 0;
                break;
            }
        }
    }
    return answer;
}