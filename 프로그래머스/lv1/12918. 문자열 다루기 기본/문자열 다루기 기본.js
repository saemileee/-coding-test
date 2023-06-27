function solution(s) {
    const pureNumberStr = s.replace(/[^0-9]/g, 'a');
    return !isNaN(pureNumberStr)?s.length===4||s.length===6:false;
}