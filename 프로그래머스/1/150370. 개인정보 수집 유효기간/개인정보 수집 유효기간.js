function solution(today, terms, privacies) {
    const answer = [];
    const termsMap = {};

    terms.forEach((term)=>{
        const [t, p] = term.split(' ');
        termsMap[t] = parseInt(p);
    })
    
    const formattedToday = Date.parse(today)
    
    for(let i = 0; i< privacies.length; i++){
        const [date, term] = privacies[i].split(' ');
        const formattedDate = new Date(date);
        const dueDate = formattedDate.setMonth(formattedDate.getMonth() + termsMap[term]);
        
        if(formattedToday >= dueDate){
            answer.push(i+1);
        }
    }
    
    return answer;
}