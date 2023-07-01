function solution(s, n) {
    const arr = s.split('');
    const answer = arr.map((s)=>{
        if(s!==" "){
//lowerCases = 97-122 UpperCases =65 - 90
            const newCharCode = (s.charCodeAt()+n)
            if(s===s.toLowerCase()&&newCharCode>122){
                return String.fromCharCode(newCharCode-26)
            }else if(s!==s.toLowerCase()&&newCharCode>90){
                return String.fromCharCode(newCharCode-26)
            }else{
                return String.fromCharCode(newCharCode)
            }       
        }else{
            return " "
        }
    }).join('')
    return answer;
}