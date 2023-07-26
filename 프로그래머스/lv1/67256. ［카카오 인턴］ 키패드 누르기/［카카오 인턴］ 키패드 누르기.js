function solution(numbers, hand) {
    const keyMap = {1:[1,1],2:[2,1],3:[3,1],4:[1,2],5:[2,2],6:[3,2],7:[1,3],8:[2,3],9:[3,3],0:[2,4]};
    //2를 누르고 싶음 // 2 - row 2 col 1
    //왼손이 0에 있는 경우 거리 - 3  // 0 - row 2 col 4 - 0 3 
    //왼손이 4에 있는 경우 거리 - 2  // 4 - row 1 col 2 - 1 1 
    //왼손이 5에 있는 경우 거리 - 1  // 5 - row 2 col 2 - 0 1
    //왼손이 7에 있는 경우 거리 - 3  // 7 - row 1 col 3 - 1 2

    let answer = '';
    let currentL = [1,4];
    let currentR = [3,4];
    
    for(let i = 0; i<numbers.length; i++){
        const currentN = numbers[i];
        if(currentN===1||currentN===4||currentN===7){
            answer += 'L';
            currentL = keyMap[currentN];
        }else if (currentN===3||currentN===6||currentN===9){
            answer += 'R'
            currentR = keyMap[currentN];
        }else{
            const goalLocation = keyMap[currentN];
            const LDistance = (Math.abs(currentL[0]-goalLocation[0]))+(Math.abs(currentL[1]-goalLocation[1]));
            const RDistance = (Math.abs(currentR[0]-goalLocation[0]))+(Math.abs(currentR[1]-goalLocation[1]));
            if(LDistance<RDistance){
                answer += 'L';
                currentL = goalLocation;
            }else if(LDistance>RDistance){
                answer += 'R';
                currentR = goalLocation;
            }else{
                if(hand==='left'){
                    answer += "L"
                    currentL = goalLocation;
                }else{
                    answer += 'R'
                    currentR = goalLocation;
                }
                
            }
        }
    }
    return answer;
}