function solution(files) {
    // HEAD는 사전 순 문자열 구분 X
    // number 숫자순 0 무시
    // 둘 다 동일한 경우 입력에 주어진 순서
    let answer = [];
    const regex = /(\D+)(\d+)(.*)/;
    const newArr = files.sort((a,b)=>{
        const [, aHEAD, aNUMBER, aTAIL] = a.match(regex).map((s,i)=>{
            if(i===1){
                return s.toLowerCase();
            }else if(i===2){
                return parseInt(s);
            }else if(i===3){
                return s.toLowerCase();
            }
        });
        const [, bHEAD, bNUMBER, bTAIL] = b.match(regex).map((s,i)=>{
            if(i===1){
                return s.toLowerCase();
            }else if(i===2){
                return parseInt(s);
            }else if(i===3){
                return s.toLowerCase();
            }
        });
        if(aHEAD===bHEAD){
            if(aNUMBER===bNUMBER){
                return aTAIL-bTAIL;
            }else{
                return aNUMBER - bNUMBER;
            }
        }else{
            return aHEAD.localeCompare(bHEAD);
        }
    })
    return newArr;
}