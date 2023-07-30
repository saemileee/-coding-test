function solution(wallpaper) {
    // 왼 쪽 위 (세로,가로) 
    // 빈칸 - ".", 파일 -"#"
    // 최소한의 이동거리를 갖는 드래그로 delete
    // "점  S(lux, luy)에서 점 E(rdx, rdy)로 드래그한다"
    // 드래그한 거리 - |rdx - lux| + |rdy - luy|
    
    var answer = [];
    let S = [0, wallpaper[0].length];
    let E = [0, 0];

    for(let i = 0; i<wallpaper.length; i++){
        const emptyRow = ".".repeat(wallpaper[i].length)
        if(wallpaper[i] === emptyRow && E[0]===0){
            S[0] = i+1;
        }else if (wallpaper[i] !== emptyRow){
            E[0] = i+1;
        }
        
        for (let j = 0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                j < S[1] ? S[1] = j : null;
                break;
            }
            
        }
        for (let j = 0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                j+1 > E[1] ? E[1] = j+1 : null;
            }
            
        }
        
    }
    
    
    return [...S,...E];
}