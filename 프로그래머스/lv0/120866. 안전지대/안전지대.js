function solution(board) {
    for(let i = 0; i<board.length;i++){
        for (let j = 0; j<board[i].length; j++){
            if(board[i][j]===1){
                if(j>0){
                    board[i][j-1]===0?board[i][j-1]=2:null;
                }
                if(i>0){
                    board[i-1][j]===0?board[i-1][j]=2:null;
                }
                if(i>0&&j>0){
                    board[i-1][j-1]===0?board[i-1][j-1]=2:null;
                }
                if(i>0&&j<board[i].length-1){
                    board[i-1][j+1]===0?board[i-1][j+1]=2:null;
                }
                if(i<board.length-1&&j>0){
                    board[i+1][j-1]===0?board[i+1][j-1]=2:null;
                }
                if(i<board.length-1){
                    board[i+1][j]===0?board[i+1][j]=2:null;
                }
                if(j<board[i].length-1){
                    board[i][j+1]===0?board[i][j+1]=2:null;
                }
                if(i<board.length-1&&j<board[i].length-1){
                    board[i+1][j+1]===0?board[i+1][j+1]=2:null;
                }
            }
        }
    }
    return board.flat().filter((n)=>n===0).length;
}