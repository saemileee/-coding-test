function solution(new_id) {
    let answer = '';
    
    // Step1
    answer = new_id.toLowerCase();

    // Step2
    const step2Regex = /[^\da-z-_.]/g;
    answer = answer.replaceAll(step2Regex,'');
    
    // Step3
    const step3Regex = /[.]{2,}/g;
    answer = answer.replace(step3Regex,'.');
    
    // Step4
    answer = answer.replace(/^[.*]/,'')
    answer = answer.replace(/[.*]$/,'')
    
    // Step5
    !answer.length?answer+="a":null;
    
    // Step6
    answer.length>=16?answer = answer.substr(0, 15):null;
    answer = answer.replace(/[.*]$/,'');
    
    // Step7
    answer.length<=2?answer += answer[answer.length-1].repeat(3-answer.length):null;
    
    return answer;
}