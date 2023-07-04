function solution(answers) {
    const scores = {A:0,B:0,C:0};
    
    const A = [1, 2, 3, 4, 5]; 
    const B = [2, 1, 2, 3, 2, 4, 2, 5]; 
    const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; 
    
    for(let i = 0;i<answers.length;i++){
        const answer = answers[i];
        
        function getScore(student, key){
            if(i>=student.length){
                answer === student[i%student.length]?scores[key] += 1: null;
            }else{
                answer === student[i]?scores[key] += 1: null;
            }
        }
        
        getScore(A, 'A');
        getScore(B, 'B');
        getScore(C, 'C');
    }
    
    const scoreArr = Object.values(scores);
    const topScore = Math.max(...scoreArr);
    
    return scoreArr.reduce((arr,score,idx)=>topScore===score?[...arr,idx+1]:[...arr],[]);
}