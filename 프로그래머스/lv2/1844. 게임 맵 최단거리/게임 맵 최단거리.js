function solution(maps) {
    const n = maps.length;
    const m = maps[0].length
    
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    const queue = [{x:0, y:0, distance:1}];
    maps[0][0] = 0;
    
    while(queue.length>0){
        const current = queue.shift();
        
        if(current.x === n -1 && current.y === m-1){
            return current.distance;
        }
        
        for(let i = 0; i< 4; i++){
            const nextX = current.x + dx[i];
            const nextY = current.y + dy[i];
            
            if(nextX >=0 && nextX < n && nextY >=0 && nextY <m && maps[nextX][nextY]===1){
                queue.push({x:nextX, y:nextY, distance: current.distance+1});
                maps[nextX][nextY] = 0;
            }
        }
    }
    return -1;
}